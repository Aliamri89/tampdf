import { PDFDocument, PDFName, PDFRawStream } from "pdf-lib";

export type CompressionLevel = "low" | "medium" | "high";

const QUALITY_BY_LEVEL: Record<CompressionLevel, number> = {
  low: 0.8,
  medium: 0.6,
  high: 0.4,
};

/**
 * Recompresses JPEG images embedded in a PDF (streams using the DCTDecode
 * filter) by decoding them with the browser's image decoder and re-encoding
 * at a lower quality via canvas. Other image encodings are left untouched.
 * Runs entirely client-side; the PDF is never uploaded anywhere.
 */
export async function compressPdf(
  file: File,
  level: CompressionLevel = "medium",
): Promise<Uint8Array> {
  const quality = QUALITY_BY_LEVEL[level];
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
      const recompressed = await recompressJpeg(obj.contents, quality);
      if (recompressed && recompressed.byteLength < obj.contents.byteLength) {
        const newStream = PDFRawStream.of(dict, recompressed);
        dict.set(PDFName.of("Length"), context.obj(recompressed.byteLength));
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
): Promise<Uint8Array | null> {
  const blob = new Blob([new Uint8Array(jpegBytes)], { type: "image/jpeg" });
  const bitmap = await createImageBitmap(blob);

  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.drawImage(bitmap, 0, 0);
  bitmap.close();

  const outputBlob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", quality),
  );
  if (!outputBlob) return null;

  return new Uint8Array(await outputBlob.arrayBuffer());
}
