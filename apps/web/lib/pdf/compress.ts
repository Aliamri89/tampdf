import { PDFDocument, PDFName, PDFRawStream } from "pdf-lib";
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
    if (!filter || filter.toString() !== "/DCTDecode") continue;

    try {
      const recompressed = await recompressJpeg(obj.contents, quality, maxDimension);
      if (recompressed && recompressed.bytes.byteLength < obj.contents.byteLength) {
        const newStream = PDFRawStream.of(dict, recompressed.bytes);
        dict.set(PDFName.of("Length"), context.obj(recompressed.bytes.byteLength));
        // The re-encoded JPEG's pixel dimensions may be smaller than the
        // original if it was downsampled — the XObject's declared /Width
        // and /Height must match, or viewers may stretch or misrender it.
        dict.set(PDFName.of("Width"), context.obj(recompressed.width));
        dict.set(PDFName.of("Height"), context.obj(recompressed.height));
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
