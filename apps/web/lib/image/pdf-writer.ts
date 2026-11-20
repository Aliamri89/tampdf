import { clampToSafeCanvasSize, releaseCanvas } from "@/lib/canvas-limits";

/**
 * A minimal PDF writer for "images to PDF", built for phones.
 *
 * pdf-lib keeps every image's bytes in JavaScript memory, decodes PNGs in
 * JavaScript, and then copies everything again into one big array on save —
 * with several large photos that is enough to freeze or crash a mobile tab.
 * This writer instead:
 *
 * - puts JPEG files into the PDF untouched (a JPEG is already valid PDF image
 *   data), by reference to the picked file, so they are never loaded into
 *   JavaScript memory at all;
 * - decodes other images (PNG, WebP, …) natively, one at a time and in strips
 *   of rows, and compresses the pixels with the browser's own deflate;
 * - assembles the result as a `Blob` of parts, so no single huge buffer is built.
 */

export type PdfPageSize = "image" | "a4" | "letter";

export interface WriteOptions {
  /** Fill each page with white under the image (transparent PNGs otherwise show black in some viewers). */
  whiteBackground?: boolean;
  /** "image" sizes each page to its image; "a4"/"letter" fit it on a standard page (landscape for wide images). */
  pageSize?: PdfPageSize;
  /** Blank border around the image, in PDF points. */
  margin?: number;
}

/** Thrown when a picked file cannot be decoded as an image. */
export class ImageReadError extends Error {
  constructor(name: string) {
    super(`Could not read image ${name}`);
    this.name = "ImageReadError";
  }
}

export const canWriteImagePdf = (): boolean => typeof CompressionStream !== "undefined";

const A4: [number, number] = [595.28, 841.89];
const LETTER: [number, number] = [612, 792];
const ROWS_PER_STRIP = 128;
const encoder = new TextEncoder();

interface JpegInfo {
  width: number;
  height: number;
  components: number;
  bits: number;
}

/** Reads a JPEG's size and colour channels from its header segments (only a few small reads). */
async function readJpegInfo(file: Blob): Promise<JpegInfo | null> {
  const read = async (start: number, length: number) =>
    new Uint8Array(await file.slice(start, start + length).arrayBuffer());
  const head = await read(0, 2);
  if (head[0] !== 0xff || head[1] !== 0xd8) return null;
  let pos = 2;
  while (pos < file.size) {
    const marker = await read(pos, 4);
    if (marker.length < 2 || marker[0] !== 0xff) return null;
    const code = marker[1];
    if (code === 0xff) {
      pos += 1; // fill byte
      continue;
    }
    if (code === 0xd8 || code === 0x01 || (code >= 0xd0 && code <= 0xd7)) {
      pos += 2; // markers without a length
      continue;
    }
    if (marker.length < 4) return null;
    const length = (marker[2] << 8) | marker[3];
    const isFrame =
      code >= 0xc0 && code <= 0xcf && code !== 0xc4 && code !== 0xc8 && code !== 0xcc;
    if (isFrame) {
      const frame = await read(pos + 4, 6);
      const info = {
        bits: frame[0],
        height: (frame[1] << 8) | frame[2],
        width: (frame[3] << 8) | frame[4],
        components: frame[5],
      };
      const valid =
        info.width > 0 && info.height > 0 && [1, 3, 4].includes(info.components) && info.bits === 8;
      return valid ? info : null;
    }
    if (code === 0xd9 || code === 0xda) return null; // image data before any frame header
    pos += 2 + length;
  }
  return null;
}

async function decodeBitmap(file: File): Promise<ImageBitmap> {
  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file);
  } catch {
    throw new ImageReadError(file.name);
  }
  const safe = clampToSafeCanvasSize(bitmap.width, bitmap.height);
  if (safe.width === bitmap.width && safe.height === bitmap.height) return bitmap;
  bitmap.close();
  // Larger than a phone's canvas limit: decode straight to the largest safe size.
  return createImageBitmap(file, {
    resizeWidth: safe.width,
    resizeHeight: safe.height,
    resizeQuality: "high",
  });
}

/** Decodes an image and returns its pixels as deflate-compressed RGB (and alpha, if any). */
async function compressPixels(file: File) {
  const bitmap = await decodeBitmap(file);
  const { width, height } = bitmap;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new ImageReadError(file.name);
  ctx.drawImage(bitmap, 0, 0);
  bitmap.close();

  const rgbStream = new CompressionStream("deflate");
  const alphaStream = new CompressionStream("deflate");
  const rgbBlob = new Response(rgbStream.readable).blob();
  const alphaBlob = new Response(alphaStream.readable).blob();
  const rgbWriter = rgbStream.writable.getWriter();
  const alphaWriter = alphaStream.writable.getWriter();
  let hasAlpha = false;

  try {
    for (let y = 0; y < height; y += ROWS_PER_STRIP) {
      const rows = Math.min(ROWS_PER_STRIP, height - y);
      const rgba = ctx.getImageData(0, y, width, rows).data;
      const rgb = new Uint8Array(width * rows * 3);
      const alpha = new Uint8Array(width * rows);
      for (let p = 0, q = 0, a = 0; p < rgba.length; p += 4) {
        rgb[q++] = rgba[p];
        rgb[q++] = rgba[p + 1];
        rgb[q++] = rgba[p + 2];
        alpha[a++] = rgba[p + 3];
        if (rgba[p + 3] !== 255) hasAlpha = true;
      }
      await rgbWriter.write(rgb);
      await alphaWriter.write(alpha);
    }
  } finally {
    releaseCanvas(canvas);
  }
  await rgbWriter.close();
  await alphaWriter.close();
  return { width, height, rgb: await rgbBlob, alpha: hasAlpha ? await alphaBlob : null };
}

const num = (value: number) => {
  const rounded = Math.round(value * 1000) / 1000;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(3).replace(/0+$/, "");
};

/** Builds one PDF (as a Blob) with one image per page. Images are read one after another. */
export async function writeImagesPdf(files: File[], options: WriteOptions = {}): Promise<Blob> {
  const margin = Math.max(0, options.margin ?? 0);
  const parts: BlobPart[] = [];
  const offsets: number[] = []; // offsets[n] = byte offset of object n
  let length = 0;

  const push = (part: string | Blob) => {
    if (typeof part === "string") {
      const bytes = encoder.encode(part);
      parts.push(bytes);
      length += bytes.length;
    } else {
      parts.push(part);
      length += part.size;
    }
  };
  const object = (id: number, body: string) => {
    offsets[id] = length;
    push(`${id} 0 obj\n${body}\nendobj\n`);
  };
  const streamObject = (id: number, dict: string, data: Blob) => {
    offsets[id] = length;
    push(`${id} 0 obj\n<< ${dict} /Length ${data.size} >>\nstream\n`);
    push(data);
    push("\nendstream\nendobj\n");
  };

  push("%PDF-1.7\n%âãÏÓ\n");
  object(1, "<< /Type /Catalog /Pages 2 0 R >>");

  const kids: string[] = [];
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    // Objects per image: image, soft mask (alpha), page content, page.
    const imageId = 3 + index * 4;
    const maskId = imageId + 1;
    const contentId = imageId + 2;
    const pageId = imageId + 3;

    let width: number;
    let height: number;
    const jpeg = await readJpegInfo(file);
    if (jpeg) {
      ({ width, height } = jpeg);
      const colorSpace =
        jpeg.components === 1 ? "/DeviceGray" : jpeg.components === 4 ? "/DeviceCMYK" : "/DeviceRGB";
      // Same CMYK handling as pdf-lib: standalone CMYK JPEGs are usually stored inverted.
      const decode = jpeg.components === 4 ? " /Decode [1 0 1 0 1 0 1 0]" : "";
      streamObject(
        imageId,
        `/Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace ${colorSpace} /BitsPerComponent 8 /Filter /DCTDecode${decode}`,
        file,
      );
      object(maskId, "null");
    } else {
      const pixels = await compressPixels(file);
      ({ width, height } = pixels);
      const mask = pixels.alpha ? ` /SMask ${maskId} 0 R` : "";
      streamObject(
        imageId,
        `/Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /FlateDecode${mask}`,
        pixels.rgb,
      );
      if (pixels.alpha) {
        streamObject(
          maskId,
          `/Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceGray /BitsPerComponent 8 /Filter /FlateDecode`,
          pixels.alpha,
        );
      } else {
        object(maskId, "null");
      }
    }

    let pageWidth = width + margin * 2;
    let pageHeight = height + margin * 2;
    let drawWidth = width;
    let drawHeight = height;
    if (options.pageSize === "a4" || options.pageSize === "letter") {
      const [w, h] = options.pageSize === "a4" ? A4 : LETTER;
      const landscape = width > height;
      pageWidth = landscape ? h : w;
      pageHeight = landscape ? w : h;
      const scale = Math.min((pageWidth - margin * 2) / width, (pageHeight - margin * 2) / height);
      drawWidth = width * scale;
      drawHeight = height * scale;
    }
    const x = (pageWidth - drawWidth) / 2;
    const y = (pageHeight - drawHeight) / 2;
    const background = options.whiteBackground
      ? `1 1 1 rg 0 0 ${num(pageWidth)} ${num(pageHeight)} re f\n`
      : "";
    const content = new Blob([
      `${background}q ${num(drawWidth)} 0 0 ${num(drawHeight)} ${num(x)} ${num(y)} cm /Im0 Do Q\n`,
    ]);
    streamObject(contentId, "", content);
    object(
      pageId,
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${num(pageWidth)} ${num(pageHeight)}] /Resources << /XObject << /Im0 ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>`,
    );
    kids.push(`${pageId} 0 R`);

    // Let the page breathe between images (keeps the UI responsive on phones).
    await new Promise((resolve) => setTimeout(resolve, 0));
  }

  object(2, `<< /Type /Pages /Kids [${kids.join(" ")}] /Count ${kids.length} >>`);

  const total = 3 + files.length * 4;
  const xrefOffset = length;
  let xref = `xref\n0 ${total}\n0000000000 65535 f \n`;
  for (let id = 1; id < total; id++) xref += `${String(offsets[id]).padStart(10, "0")} 00000 n \n`;
  push(xref);
  push(`trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);

  return new Blob(parts, { type: "application/pdf" });
}
