import { PDFDocument } from "pdf-lib";

export interface SplitOutput {
  name: string;
  bytes: Uint8Array;
}

/**
 * Parses a human-entered page range string like "1-3, 5, 8-9" into
 * zero-indexed page groups, one group per comma-separated segment.
 * Clamps to [0, pageCount - 1] and silently drops out-of-range values.
 */
export function parsePageRanges(input: string, pageCount: number): number[][] {
  const groups: number[][] = [];

  for (const rawSegment of input.split(",")) {
    const segment = rawSegment.trim();
    if (!segment) continue;

    const match = segment.match(/^(\d+)\s*-\s*(\d+)$/);
    if (match) {
      let start = Number(match[1]);
      let end = Number(match[2]);
      if (start > end) [start, end] = [end, start];
      const pages: number[] = [];
      for (let page = start; page <= end; page++) {
        if (page >= 1 && page <= pageCount) pages.push(page - 1);
      }
      if (pages.length) groups.push(pages);
      continue;
    }

    const single = Number(segment);
    if (Number.isInteger(single) && single >= 1 && single <= pageCount) {
      groups.push([single - 1]);
    }
  }

  return groups;
}

export function everyPageIndividually(pageCount: number): number[][] {
  return Array.from({ length: pageCount }, (_, i) => [i]);
}

export async function splitPdf(
  file: File,
  pageGroups: number[][],
): Promise<SplitOutput[]> {
  const bytes = await file.arrayBuffer();
  const sourcePdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
  const baseName = file.name.replace(/\.pdf$/i, "");

  const outputs: SplitOutput[] = [];

  for (let i = 0; i < pageGroups.length; i++) {
    const group = pageGroups[i];
    const outDoc = await PDFDocument.create();
    const copiedPages = await outDoc.copyPages(sourcePdf, group);
    copiedPages.forEach((page) => outDoc.addPage(page));
    const outBytes = await outDoc.save();

    const label =
      group.length === 1
        ? `page-${group[0] + 1}`
        : `pages-${group[0] + 1}-${group[group.length - 1] + 1}`;

    outputs.push({ name: `${baseName}-${label}.pdf`, bytes: outBytes });
  }

  return outputs;
}
