import {
  PDFArray,
  PDFDict,
  PDFDocument,
  PDFName,
  PDFNumber,
  PDFObject,
  PDFObjectCopier,
  PDFRawStream,
  PDFRef,
  PDFStream,
} from "pdf-lib";
import { clampToSafeCanvasSize, releaseCanvas } from "@/lib/canvas-limits";
import { removeUnreachableObjects } from "@/lib/pdf/gc";
import { closePdfDocument, loadPdfDocument, renderPageToCanvas } from "@/lib/pdf/render";
import { deflate, inflate } from "@/lib/zlib";

export type CompressionLevel = "low" | "medium" | "high";

export class EncryptedPdfError extends Error {
  constructor() {
    super("PDF is encrypted");
    this.name = "EncryptedPdfError";
  }
}

export function isEncryptedPdfError(error: unknown): boolean {
  return error instanceof Error && error.name === "EncryptedPdfError";
}

interface LevelSettings {
  quality: number;
  /** Long-edge pixel cap for embedded images (only ever downscales). */
  maxDimension: number;
  /** Drop app-private editing data (e.g. Illustrator's PieceInfo) and page thumbnails. */
  dropPrivateData: boolean;
  /** Drop print-production colour profiles (OutputIntents) viewers don't need. */
  dropOutputIntents: boolean;
}

const SETTINGS: Record<CompressionLevel, LevelSettings> = {
  low: { quality: 0.78, maxDimension: 2400, dropPrivateData: false, dropOutputIntents: false },
  medium: { quality: 0.66, maxDimension: 1800, dropPrivateData: true, dropOutputIntents: true },
  high: { quality: 0.5, maxDimension: 1300, dropPrivateData: true, dropOutputIntents: true },
};

/** Below this an image is an icon/decoration: re-encoding gains little and risks visible artifacts. */
const MIN_IMAGE_PIXELS = 96 * 96;

/** Filters pdf.js can decode that are worth re-encoding as JPEG (bilevel/JPX codecs are left alone). */
const DECODABLE_FILTERS = new Set(["/FlateDecode", "/DCTDecode", "/LZWDecode", "/RunLengthDecode", "/ASCII85Decode", "/ASCIIHexDecode"]);

const name = (n: string) => PDFName.of(n);

/**
 * Shrinks a PDF entirely client-side. Real-world PDFs are mostly bloated by a
 * few things, all handled here:
 * - oversized/over-quality embedded images (any colour space — CMYK, ICC,
 *   indexed… — decoded exactly as a viewer would) — downsampled and re-encoded;
 * - streams stored with no compression at all (fonts, ICC profiles, content);
 * - duplicate copies of the same image/font;
 * - unreachable objects left behind by incremental saves, app-private data.
 * Text and vector content are never rasterised, so text stays selectable.
 * If nothing could be gained the original bytes are returned untouched.
 */
export async function compressPdf(file: File, level: CompressionLevel = "medium"): Promise<Uint8Array> {
  const settings = SETTINGS[level];
  const original = new Uint8Array(await file.arrayBuffer());
  const pdfDoc = await PDFDocument.load(original, { ignoreEncryption: true, updateMetadata: false });
  // Encrypted stream bytes are ciphertext: re-encoding or deflating them
  // would silently corrupt the file, so refuse rather than guess.
  if (pdfDoc.isEncrypted) throw new EncryptedPdfError();

  if (settings.dropPrivateData) dropPrivateData(pdfDoc);
  if (settings.dropOutputIntents) pdfDoc.catalog.delete(name("OutputIntents"));

  await recompressImages(pdfDoc, settings);
  await deflateUncompressedStreams(pdfDoc);
  await deduplicateStreams(pdfDoc);
  removeUnreachableObjects(pdfDoc);

  pdfDoc.setProducer("TAMPDF");
  const output = await pdfDoc.save({
    useObjectStreams: true,
    addDefaultPage: false,
    updateFieldAppearances: false,
  });
  return output.byteLength < original.byteLength ? output : original;
}

// ---------------------------------------------------------------------------
// Images

interface ImageJob {
  ref: PDFRef;
  stream: PDFRawStream;
  width: number;
  height: number;
  target: { width: number; height: number };
  /** Channels when the samples can be decoded directly (plain Gray/RGB); null → decode through pdf.js. */
  fastChannels: 1 | 3 | null;
}

async function recompressImages(pdfDoc: PDFDocument, settings: LevelSettings): Promise<void> {
  const softMasks = collectSoftMaskRefs(pdfDoc);
  const viaPdfjs: ImageJob[] = [];

  for (const [ref, obj] of pdfDoc.context.enumerateIndirectObjects()) {
    if (!(obj instanceof PDFRawStream)) continue;
    if (obj.dict.get(name("Subtype"))?.toString() !== "/Image") continue;
    if (softMasks.has(ref.toString())) continue;
    const job = planImage(pdfDoc, ref, obj, settings);
    if (!job) continue;

    let source: HTMLCanvasElement | ImageBitmap | null = null;
    try {
      source = job.fastChannels ? await decodeDirectly(job, job.fastChannels) : null;
    } catch {
      source = null;
    }
    if (!source) {
      viaPdfjs.push(job);
      continue;
    }
    const canvas = resample(source, job.target);
    if ("close" in source) source.close();
    else releaseCanvas(source);
    await replaceWithJpeg(pdfDoc, job, canvas, settings.quality);
  }

  if (viaPdfjs.length > 0) {
    try {
      await renderThroughPdfjs(pdfDoc, viaPdfjs, (job, canvas) => replaceWithJpeg(pdfDoc, job, canvas, settings.quality));
    } catch {
      // pdf.js couldn't handle these images; they keep their original bytes.
    }
  }
}

function planImage(pdfDoc: PDFDocument, ref: PDFRef, stream: PDFRawStream, settings: LevelSettings): ImageJob | null {
  const dict = stream.dict;
  if (dict.get(name("ImageMask"))?.toString() === "true") return null;
  // A colour-key mask matches exact sample values, which lossy JPEG can't preserve.
  if (dict.get(name("Mask")) instanceof PDFArray) return null;

  const filters = filterNames(dict.get(name("Filter")));
  if (!filters || filters.length === 0 || !filters.every((f) => DECODABLE_FILTERS.has(f))) return null;

  const bpc = dict.get(name("BitsPerComponent"));
  if (!(bpc instanceof PDFNumber) || bpc.asNumber() !== 8) return null;
  const width = dict.get(name("Width"));
  const height = dict.get(name("Height"));
  if (!(width instanceof PDFNumber) || !(height instanceof PDFNumber)) return null;
  const w = width.asNumber();
  const h = height.asNumber();
  if (w * h < MIN_IMAGE_PIXELS) return null;

  // A premultiplied soft mask (/Matte) must keep the exact same dimensions as its image.
  const smask = pdfDoc.context.lookup(dict.get(name("SMask")));
  const mustKeepSize = smask instanceof PDFStream && Boolean(smask.dict.get(name("Matte")));
  const longEdge = Math.max(w, h);
  const downscale = !mustKeepSize && longEdge > settings.maxDimension ? settings.maxDimension / longEdge : 1;
  const target = clampToSafeCanvasSize(Math.max(1, Math.round(w * downscale)), Math.max(1, Math.round(h * downscale)));

  const channels = plainChannels(pdfDoc, dict.get(name("ColorSpace")));
  const singleFilter = filters.length === 1 ? filters[0] : null;
  const fast =
    channels !== null &&
    isDefaultDecode(dict.get(name("Decode"))) &&
    (singleFilter === "/DCTDecode" || singleFilter === "/FlateDecode");

  return { ref, stream, width: w, height: h, target, fastChannels: fast ? channels : null };
}

function filterNames(value: PDFObject | undefined): string[] | null {
  if (!value) return null;
  if (value instanceof PDFName) return [value.toString()];
  if (value instanceof PDFArray) {
    const names = value.asArray().map((v) => (v instanceof PDFName ? v.toString() : null));
    return names.every((n): n is string => n !== null) ? names : null;
  }
  return null;
}

/** Gray/RGB colour spaces whose samples a browser decoder (or a raw copy) maps 1:1 to screen colours. */
function plainChannels(pdfDoc: PDFDocument, value: PDFObject | undefined): 1 | 3 | null {
  const cs = value instanceof PDFRef ? pdfDoc.context.lookup(value) : value;
  if (cs instanceof PDFName) {
    if (cs.toString() === "/DeviceGray") return 1;
    if (cs.toString() === "/DeviceRGB") return 3;
    return null;
  }
  if (cs instanceof PDFArray && cs.size() === 2 && cs.get(0)?.toString() === "/ICCBased") {
    const profile = pdfDoc.context.lookup(cs.get(1));
    if (!(profile instanceof PDFStream)) return null;
    const n = profile.dict.get(name("N"));
    const channels = n instanceof PDFNumber ? n.asNumber() : 0;
    return channels === 1 || channels === 3 ? channels : null;
  }
  // CMYK (incl. Adobe-inverted JPEGs), Indexed, Separation, Lab…: decoded via pdf.js.
  return null;
}

function isDefaultDecode(decode: PDFObject | undefined): boolean {
  if (!decode) return true;
  if (!(decode instanceof PDFArray)) return false;
  return decode.asArray().every((v, i) => v instanceof PDFNumber && v.asNumber() === (i % 2 === 0 ? 0 : 1));
}

async function decodeDirectly(job: ImageJob, channels: 1 | 3): Promise<HTMLCanvasElement | ImageBitmap | null> {
  const { stream, width, height } = job;
  if (stream.dict.get(name("Filter"))?.toString() === "/DCTDecode") {
    return createImageBitmap(new Blob([new Uint8Array(stream.contents)], { type: "image/jpeg" }));
  }
  const pixels = await decodeFlatePixels(stream.dict, stream.contents, width, height, channels);
  return pixels ? rgbCanvas(pixels, width, height, channels) : null;
}

function resample(source: HTMLCanvasElement | ImageBitmap, target: { width: number; height: number }): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = target.width;
  canvas.height = target.height;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(source, 0, 0, target.width, target.height);
  return canvas;
}

async function replaceWithJpeg(pdfDoc: PDFDocument, job: ImageJob, canvas: HTMLCanvasElement, quality: number): Promise<void> {
  const jpeg = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", quality));
  const { width, height } = canvas;
  releaseCanvas(canvas);
  if (!jpeg) return;
  const bytes = new Uint8Array(await jpeg.arrayBuffer());
  // Require a real gain — re-encoding for a couple of percent isn't worth a generation of JPEG loss.
  if (bytes.byteLength >= job.stream.contents.byteLength * 0.95) return;

  const newDict = job.stream.dict.clone(pdfDoc.context);
  newDict.set(name("Filter"), name("DCTDecode"));
  newDict.delete(name("DecodeParms"));
  newDict.delete(name("Decode"));
  // Canvas always produces an RGB JPEG; the declared colour space must say
  // so, otherwise a CMYK/Gray/Indexed declaration makes viewers misread it.
  newDict.set(name("ColorSpace"), name("DeviceRGB"));
  newDict.set(name("Width"), PDFNumber.of(width));
  newDict.set(name("Height"), PDFNumber.of(height));
  newDict.set(name("Length"), PDFNumber.of(bytes.byteLength));
  pdfDoc.context.assign(job.ref, PDFRawStream.of(newDict, bytes));
}

/**
 * Decodes images exactly the way a PDF viewer would — CMYK conversion,
 * Adobe-inverted JPEGs, ICC/Indexed/Separation colour spaces, /Decode arrays
 * — by placing each one alone on a page (sized to the target resolution) of
 * a throwaway PDF and rendering it with pdf.js. Browsers' own JPEG decoders
 * get CMYK PDFs wrong (colours come out inverted), so this is the only
 * reliable route for anything beyond plain Gray/RGB.
 */
async function renderThroughPdfjs(
  pdfDoc: PDFDocument,
  jobs: ImageJob[],
  onCanvas: (job: ImageJob, canvas: HTMLCanvasElement) => Promise<void>,
): Promise<void> {
  const mini = await PDFDocument.create();
  const copier = PDFObjectCopier.for(pdfDoc.context, mini.context);
  for (const job of jobs) {
    const dict = job.stream.dict.clone(pdfDoc.context);
    // Only the colour data is wanted; transparency lives in the untouched SMask.
    dict.delete(name("SMask"));
    dict.delete(name("Mask"));
    dict.delete(name("Intent"));
    const imageRef = mini.context.register(PDFRawStream.of(copier.copy(dict), job.stream.contents));
    const { width, height } = job.target;
    const page = mini.addPage([width, height]);
    page.node.setXObject(name("Im0"), imageRef);
    const content = mini.context.register(mini.context.stream(`q ${width} 0 0 ${height} 0 0 cm /Im0 Do Q`));
    page.node.set(name("Contents"), content);
  }
  const bytes = await mini.save();
  const pdf = await loadPdfDocument(new File([new Uint8Array(bytes)], "images.pdf", { type: "application/pdf" }));
  try {
    for (let i = 0; i < jobs.length; i++) {
      try {
        const canvas = await renderPageToCanvas(pdf, i + 1, 1);
        await onCanvas(jobs[i], canvas);
      } catch {
        // Skip just this image.
      }
    }
  } finally {
    await closePdfDocument(pdf);
  }
}

/** Inflates a Flate image stream and undoes a PNG predictor, returning packed samples. */
async function decodeFlatePixels(
  dict: PDFDict,
  data: Uint8Array,
  width: number,
  height: number,
  channels: number,
): Promise<Uint8Array | null> {
  const parmsObj = dict.get(name("DecodeParms"));
  const parms = parmsObj instanceof PDFDict ? parmsObj : null;
  if (parmsObj && !parms) return null;
  const predictor = numberIn(parms, "Predictor", 1);
  if (predictor !== 1 && predictor < 10) return null; // TIFF predictor: let pdf.js handle it.

  const raw = await inflate(data);
  const rowBytes = width * channels;
  if (predictor === 1) return raw.byteLength >= rowBytes * height ? raw : null;
  if (numberIn(parms, "Colors", 1) !== channels) return null;
  if (numberIn(parms, "BitsPerComponent", 8) !== 8) return null;
  if (numberIn(parms, "Columns", 1) !== width) return null;

  const out = new Uint8Array(rowBytes * height);
  const bpp = channels;
  let src = 0;
  for (let y = 0; y < height; y++) {
    if (src + 1 + rowBytes > raw.byteLength) return null;
    const type = raw[src++];
    const rowStart = y * rowBytes;
    const prevStart = rowStart - rowBytes;
    for (let x = 0; x < rowBytes; x++) {
      const value = raw[src++];
      const left = x >= bpp ? out[rowStart + x - bpp] : 0;
      const up = y > 0 ? out[prevStart + x] : 0;
      const upLeft = y > 0 && x >= bpp ? out[prevStart + x - bpp] : 0;
      let predicted: number;
      switch (type) {
        case 0:
          predicted = 0;
          break;
        case 1:
          predicted = left;
          break;
        case 2:
          predicted = up;
          break;
        case 3:
          predicted = (left + up) >> 1;
          break;
        case 4: {
          const p = left + up - upLeft;
          const pa = Math.abs(p - left);
          const pb = Math.abs(p - up);
          const pc = Math.abs(p - upLeft);
          predicted = pa <= pb && pa <= pc ? left : pb <= pc ? up : upLeft;
          break;
        }
        default:
          return null;
      }
      out[rowStart + x] = (value + predicted) & 0xff;
    }
  }
  return out;
}

function numberIn(dict: PDFDict | null, key: string, fallback: number): number {
  const value = dict?.get(name(key));
  return value instanceof PDFNumber ? value.asNumber() : fallback;
}

function rgbCanvas(pixels: Uint8Array, width: number, height: number, channels: 1 | 3): HTMLCanvasElement | null {
  const safe = clampToSafeCanvasSize(width, height);
  if (safe.width !== width || safe.height !== height) return null;
  const imageData = new ImageData(width, height);
  const dst = imageData.data;
  for (let src = 0, out = 0; out < dst.length; out += 4, src += channels) {
    if (channels === 1) {
      dst[out] = dst[out + 1] = dst[out + 2] = pixels[src];
    } else {
      dst[out] = pixels[src];
      dst[out + 1] = pixels[src + 1];
      dst[out + 2] = pixels[src + 2];
    }
    dst[out + 3] = 255;
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.putImageData(imageData, 0, 0);
  return canvas;
}

/** SMasks are alpha channels: lossy re-encoding them causes halos, so they're left alone. */
function collectSoftMaskRefs(pdfDoc: PDFDocument): Set<string> {
  const refs = new Set<string>();
  for (const [, obj] of pdfDoc.context.enumerateIndirectObjects()) {
    if (!(obj instanceof PDFStream)) continue;
    const smask = obj.dict.get(name("SMask"));
    if (smask instanceof PDFRef) refs.add(smask.toString());
  }
  return refs;
}

// ---------------------------------------------------------------------------
// Structure

async function deflateUncompressedStreams(pdfDoc: PDFDocument): Promise<void> {
  const context = pdfDoc.context;
  for (const [ref, obj] of context.enumerateIndirectObjects()) {
    if (!(obj instanceof PDFRawStream)) continue;
    const dict = obj.dict;
    if (dict.get(name("Filter"))) continue;
    // XMP is meant to stay readable by tools that scan for it without a PDF parser.
    if (dict.get(name("Type"))?.toString() === "/Metadata") continue;
    if (obj.contents.byteLength < 64) continue;
    const compressed = await deflate(obj.contents);
    if (compressed.byteLength >= obj.contents.byteLength) continue;
    const newDict = dict.clone(context);
    newDict.set(name("Filter"), name("FlateDecode"));
    newDict.delete(name("DecodeParms"));
    newDict.set(name("Length"), PDFNumber.of(compressed.byteLength));
    context.assign(ref, PDFRawStream.of(newDict, compressed));
  }
}

async function streamFingerprint(stream: PDFRawStream): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new Uint8Array(stream.contents));
  const hex = Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex}|${stream.dict.toString()}`;
}

/** Merges byte-identical streams (the same logo/photo/font embedded many times) into one object. */
async function deduplicateStreams(pdfDoc: PDFDocument): Promise<void> {
  const context = pdfDoc.context;
  const canonical = new Map<string, PDFRef>();
  const replace = new Map<string, PDFRef>();
  for (const [ref, obj] of context.enumerateIndirectObjects()) {
    if (!(obj instanceof PDFRawStream) || obj.contents.byteLength < 1024) continue;
    const key = await streamFingerprint(obj);
    const existing = canonical.get(key);
    if (existing) replace.set(ref.toString(), existing);
    else canonical.set(key, ref);
  }
  if (replace.size === 0) return;

  const rewrite = (value: PDFObject): PDFObject => {
    if (value instanceof PDFRef) return replace.get(value.toString()) ?? value;
    if (value instanceof PDFDict) {
      for (const [key, child] of value.entries()) value.set(key, rewrite(child));
    } else if (value instanceof PDFArray) {
      for (let i = 0; i < value.size(); i++) value.set(i, rewrite(value.get(i)));
    } else if (value instanceof PDFStream) {
      rewrite(value.dict);
    }
    return value;
  };
  for (const [, obj] of context.enumerateIndirectObjects()) rewrite(obj);
}

function dropPrivateData(pdfDoc: PDFDocument): void {
  pdfDoc.catalog.delete(name("PieceInfo"));
  for (const page of pdfDoc.getPages()) {
    page.node.delete(name("PieceInfo"));
    page.node.delete(name("Thumb"));
  }
}
