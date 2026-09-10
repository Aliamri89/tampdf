import { PDFDocument } from "pdf-lib";

/**
 * Returns a new PDF whose pages follow `order` — an array of 0-based source
 * page indices (a permutation). Pages are copied as-is, so `copyPages` with
 * a reordered index list *is* the reorder.
 */
export async function reorderPdfPages(file: File, order: number[]): Promise<Uint8Array> {
  const bytes = await file.arrayBuffer();
  const src = await PDFDocument.load(bytes, { ignoreEncryption: true });
  const out = await PDFDocument.create();
  const copied = await out.copyPages(src, order);
  copied.forEach((page) => out.addPage(page));
  return out.save();
}
