import { PDFDocument } from "pdf-lib";

export interface SplitPart {
  /** Human-readable label for the output file name, e.g. "1-3" or "4". */
  label: string;
  /** 0-based page indices, in source order. */
  indices: number[];
}

export interface SplitOutput {
  label: string;
  bytes: Uint8Array;
}

/**
 * Parses a page-range string like `"1-3, 5, 8-10"` into parts (each token
 * becomes one output file). Page numbers are 1-based in the input and
 * clamped to `1..totalPages`.
 */
export function parsePageRanges(input: string, totalPages: number): SplitPart[] {
  const parts: SplitPart[] = [];
  for (const raw of input.split(",")) {
    const token = raw.trim();
    if (!token) continue;
    const match = token.match(/^(\d+)(?:\s*-\s*(\d+))?$/);
    if (!match) throw new Error(`invalid-range:${token}`);
    let start = parseInt(match[1], 10);
    let end = match[2] ? parseInt(match[2], 10) : start;
    if (start > end) [start, end] = [end, start];
    start = Math.max(1, Math.min(start, totalPages));
    end = Math.max(1, Math.min(end, totalPages));
    const indices: number[] = [];
    for (let page = start; page <= end; page++) indices.push(page - 1);
    parts.push({ label: start === end ? `${start}` : `${start}-${end}`, indices });
  }
  if (parts.length === 0) throw new Error("no-ranges");
  return parts;
}

/** Splits `totalPages` into consecutive chunks of `size` pages each. */
export function chunkParts(totalPages: number, size: number): SplitPart[] {
  const chunk = Math.max(1, Math.floor(size));
  const parts: SplitPart[] = [];
  for (let start = 0; start < totalPages; start += chunk) {
    const end = Math.min(start + chunk, totalPages);
    const indices: number[] = [];
    for (let i = start; i < end; i++) indices.push(i);
    parts.push({ label: end - start === 1 ? `${start + 1}` : `${start + 1}-${end}`, indices });
  }
  return parts;
}

/** Produces one PDF per part; pages are copied as-is (no re-compression). */
export async function splitPdf(file: File, parts: SplitPart[]): Promise<SplitOutput[]> {
  const srcBytes = await file.arrayBuffer();
  const src = await PDFDocument.load(srcBytes, { ignoreEncryption: true });
  const outputs: SplitOutput[] = [];
  for (const part of parts) {
    const out = await PDFDocument.create();
    const copied = await out.copyPages(src, part.indices);
    copied.forEach((page) => out.addPage(page));
    outputs.push({ label: part.label, bytes: await out.save() });
  }
  return outputs;
}
