import { degrees, PDFDocument } from "pdf-lib";

/** Applies a rotation delta (in degrees) to specific pages of a PDF and returns the new bytes. */
export async function rotatePdfPages(
  file: File,
  rotations: Record<number, number>,
): Promise<Uint8Array> {
  const bytes = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(bytes, { ignoreEncryption: true });
  const pages = pdfDoc.getPages();

  pages.forEach((page, index) => {
    const pageNumber = index + 1;
    const delta = rotations[pageNumber] ?? 0;
    if (delta === 0) return;
    const current = page.getRotation().angle;
    page.setRotation(degrees((((current + delta) % 360) + 360) % 360));
  });

  return pdfDoc.save();
}
