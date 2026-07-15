import { PDFDict, PDFDocument, PDFName, PDFNumber, PDFRawStream } from "pdf-lib";
import { clampToSafeCanvasSize, releaseCanvas } from "@/lib/canvas-limits";

export type CompressionLevel = "low" | "medium" | "high";

const QUALITY_BY_LEVEL: Record<CompressionLevel, number> = {
  low: 0.82,
  medium: 0.68,
  high: 0.52,
};

/**
 * JPEG quality alone gives weak results on scanned/exported PDFs, whose
 * embedded images are frequently scanned at 300dpi+ — far higher resolution
 * than needed for on-screen viewing or even most printing. Capping the long
 * edge (only ever downscaling, never up) is where the real size reduction
 * comes from; a higher quality factor than a quality-only approach would use
 * keeps the result visually clean at that resolution.
 */
const MAX_DIMENSION_BY_LEVEL: Record<CompressionLevel, number> = {
  low: 3000,
  medium: 2000,
  high: 1400,
};

/**
 * Recompresses JPEG images embedded in a PDF (streams using the DCTDecode
 * filter) by decoding them with the browser's image decoder and re-encoding
 * at a lower quality/resolution via canvas. Other image encodings are left
 * untouched. Runs entirely client-side; the PDF is never uploaded anywhere.
 */
export async function compressPdf(
  file: File,
  level: CompressionLevel = "medium",
): Promise<Uint8Array> {
  const quality = QUALITY_BY_LEVEL[level];
  const maxDimension = MAX_DIMENSION_BY_LEVEL[level];
  const bytes = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(bytes, {
    ignoreEncryption: true,
    updateMetadata: false,
  });

  const context = pdfDoc.context;
  const indirectObjects = context.enumerateIndirectObjects();

  for (const [ref, obj] of indirectObjects) {
    if (!(obj instanceof PDFRawStream)) continue;

    const dict = obj.dict;
    const subtype = dict.get(PDFName.of("Subtype"));
    if (!subtype || subtype.toString() !== "/Image") continue;

    const filter = dict.get(PDFName.of("Filter"));
    const filterName = filter?.toString();

    try {
      let recompressed: { bytes: Uint8Array; width: number; height: number } | null = null;

      if (filterName === "/DCTDecode") {
        recompressed = await recompressJpeg(obj.contents, quality, maxDimension);
      } else if (filterName === "/FlateDecode") {
        recompressed = await recompressFlateBitmap(dict, obj.contents, quality, maxDimension);
      }

      if (recompressed && recompressed.bytes.byteLength < obj.contents.byteLength) {
        const newStream = PDFRawStream.of(dict, recompressed.bytes);
        dict.set(PDFName.of("Length"), context.obj(recompressed.bytes.byteLength));
        // The re-encoded JPEG's pixel dimensions may be smaller than the
        // original if it was downsampled — the XObject's declared /Width
        // and /Height must match, or viewers may stretch or misrender it.
        dict.set(PDFName.of("Width"), context.obj(recompressed.width));
        dict.set(PDFName.of("Height"), context.obj(recompressed.height));
        if (filterName === "/FlateDecode") {
          // Re-encoded as JPEG, so the stream is no longer Flate-compressed
          // raw pixel data — the filter and any Flate-specific decode
          // parameters (e.g. a PNG predictor) must be updated to match, or
          // viewers will try to inflate an already-decoded JPEG stream.
          dict.set(PDFName.of("Filter"), PDFName.of("DCTDecode"));
          dict.delete(PDFName.of("DecodeParms"));
        }
        context.assign(ref, newStream);
      }
    } catch {
      // Skip images that fail to decode/re-encode and keep the original bytes.
    }
  }

  pdfDoc.setProducer("TAMPDF");
  pdfDoc.setCreator("TAMPDF");

  return pdfDoc.save({ useObjectStreams: true });
}

async function recompressJpeg(
  jpegBytes: Uint8Array,
  quality: number,
  maxDimension: number,
): Promise<{ bytes: Uint8Array; width: number; height: number } | null> {
  const blob = new Blob([new Uint8Array(jpegBytes)], { type: "image/jpeg" });
  const bitmap = await createImageBitmap(blob);
  const longEdge = Math.max(bitmap.width, bitmap.height);
  const downscale = longEdge > maxDimension ? maxDimension / longEdge : 1;
  const { width, height } = clampToSafeCanvasSize(
    Math.round(bitmap.width * downscale),
    Math.round(bitmap.height * downscale),
  );

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const outputBlob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", quality),
  );
  releaseCanvas(canvas);
  if (!outputBlob) return null;

  return { bytes: new Uint8Array(await outputBlob.arrayBuffer()), width, height };
}

/** Inflates a zlib (RFC 1950) stream — the format PDF's FlateDecode filter uses. */
async function inflate(data: Uint8Array): Promise<Uint8Array> {
  const stream = new Blob([new Uint8Array(data)])
    .stream()
    .pipeThrough(new DecompressionStream("deflate"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

/**
 * Many real-world PDFs — anything made by "save photo/scan as PDF" tools —
 * embed a single full-page image as an uncompressed(-ish) raw bitmap under
 * FlateDecode rather than a JPEG, which the DCTDecode path above never
 * touches. Left alone, compressing such a PDF does nothing at all (0%,
 * confirmed against a real user file whose entire size was one such image).
 * This decodes the raw pixel data and re-encodes it as JPEG the same way.
 *
 * Deliberately conservative: only handles the plain, common case (8-bit
 * DeviceRGB/DeviceGray, no predictor, no custom /Decode range, no alpha
 * mask) and returns null for anything else, leaving the image untouched
 * rather than risk misinterpreting pixel data it can't be sure about.
 */
async function recompressFlateBitmap(
  dict: PDFDict,
  flateBytes: Uint8Array,
  quality: number,
  maxDimension: number,
): Promise<{ bytes: Uint8Array; width: number; height: number } | null> {
  const bitsPerComponent = dict.get(PDFName.of("BitsPerComponent"));
  if (!(bitsPerComponent instanceof PDFNumber) || bitsPerComponent.asNumber() !== 8) return null;

  const colorSpace = dict.get(PDFName.of("ColorSpace"));
  if (!(colorSpace instanceof PDFName)) return null;
  const channels = colorSpace.asString() === "/DeviceRGB" ? 3 : colorSpace.asString() === "/DeviceGray" ? 1 : null;
  if (channels === null) return null;

  // A predictor reorders bytes for better compression (undoing it correctly
  // requires per-row reconstruction), a custom /Decode range remaps sample
  // values, and a mask means the image has transparency — JPEG has none of
  // these, so treating the raw bytes as plain pixels would be wrong.
  if (dict.get(PDFName.of("DecodeParms")) || dict.get(PDFName.of("Decode"))) return null;
  if (dict.get(PDFName.of("SMask")) || dict.get(PDFName.of("Mask"))) return null;

  const width = dict.get(PDFName.of("Width"));
  const height = dict.get(PDFName.of("Height"));
  if (!(width instanceof PDFNumber) || !(height instanceof PDFNumber)) return null;
  const srcWidth = width.asNumber();
  const srcHeight = height.asNumber();

  const pixels = await inflate(flateBytes);
  if (pixels.byteLength < srcWidth * srcHeight * channels) return null;

  const imageData = new ImageData(srcWidth, srcHeight);
  const dst = imageData.data;
  if (channels === 3) {
    for (let src = 0, out = 0; out < dst.length; src += 3, out += 4) {
      dst[out] = pixels[src];
      dst[out + 1] = pixels[src + 1];
      dst[out + 2] = pixels[src + 2];
      dst[out + 3] = 255;
    }
  } else {
    for (let src = 0, out = 0; out < dst.length; src += 1, out += 4) {
      dst[out] = dst[out + 1] = dst[out + 2] = pixels[src];
      dst[out + 3] = 255;
    }
  }

  const sourceCanvas = document.createElement("canvas");
  sourceCanvas.width = srcWidth;
  sourceCanvas.height = srcHeight;
  const sourceCtx = sourceCanvas.getContext("2d");
  if (!sourceCtx) return null;
  sourceCtx.putImageData(imageData, 0, 0);

  const longEdge = Math.max(srcWidth, srcHeight);
  const downscale = longEdge > maxDimension ? maxDimension / longEdge : 1;
  const { width: outWidth, height: outHeight } = clampToSafeCanvasSize(
    Math.round(srcWidth * downscale),
    Math.round(srcHeight * downscale),
  );

  const canvas = document.createElement("canvas");
  canvas.width = outWidth;
  canvas.height = outHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.drawImage(sourceCanvas, 0, 0, outWidth, outHeight);
  releaseCanvas(sourceCanvas);

  const outputBlob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", quality),
  );
  releaseCanvas(canvas);
  if (!outputBlob) return null;

  return { bytes: new Uint8Array(await outputBlob.arrayBuffer()), width: outWidth, height: outHeight };
}
