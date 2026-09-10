import { PDFDocument } from "pdf-lib";

/**
 * Returns a new PDF containing only the pages **not** in `toDelete`
 * (0-based indices), in their original order. Builds a fresh document from
 * the kept pages rather than looping `removePage`, which avoids
 * index-shift bugs and stale outline references.
 */
export async function deletePdfPages(file: File, toDelete: Set<number>): Promise<Uint8Array> {
  const bytes = await file.arrayBuffer();
  const src = await PDFDocument.load(bytes, { ignoreEncryption: true });
  const keep = src.getPageIndices().filter((index) => !toDelete.has(index));
  if (keep.length === 0) throw new Error("no-pages-left");
  const out = await PDFDocument.create();
  const copied = await out.copyPages(src, keep);
  copied.forEach((page) => out.addPage(page));
  return out.save();
}
