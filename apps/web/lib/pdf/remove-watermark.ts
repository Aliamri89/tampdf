import {
  PDFArray,
  PDFDict,
  PDFDocument,
  PDFHexString,
  PDFName,
  PDFRawStream,
  PDFStream,
  PDFString,
  decodePDFRawStream,
  type PDFPage,
} from "pdf-lib";

export interface RemoveWatermarkResult {
  bytes: Uint8Array;
  /** Watermark objects removed across the whole document. */
  removed: number;
}

/**
 * Removes watermarks that were added as *watermark objects*, which covers
 * Acrobat, TAMPDF's own Add Watermark tool, and most editors:
 *
 * - `/Artifact <</Subtype /Watermark …>> BDC … EMC` marked-content blocks,
 * - optional-content blocks (`/OC /name BDC … EMC`) whose layer is named
 *   "Watermark",
 * - annotations with `/Subtype /Watermark`.
 *
 * A watermark flattened into a scanned image or merged into ordinary page
 * text has no such marker and cannot be told apart from real content.
 */
export async function removeWatermarks(file: File): Promise<RemoveWatermarkResult> {
  const pdf = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true });
  let removed = 0;

  for (const page of pdf.getPages()) {
    removed += removeWatermarkAnnotations(page);

    const content = readPageContent(page);
    if (!content) continue;
    const { output, count } = stripWatermarkBlocks(content, watermarkLayerNames(page));
    if (count > 0) {
      const stream = pdf.context.flateStream(output);
      page.node.set(PDFName.of("Contents"), pdf.context.register(stream));
      removed += count;
    }
  }

  return { bytes: await pdf.save(), removed };
}

function removeWatermarkAnnotations(page: PDFPage): number {
  const annots = page.node.Annots();
  if (!annots) return 0;
  let removed = 0;
  for (let index = annots.size() - 1; index >= 0; index--) {
    const annot = annots.lookup(index);
    if (annot instanceof PDFDict && annot.get(PDFName.of("Subtype")) === PDFName.of("Watermark")) {
      annots.remove(index);
      removed++;
    }
  }
  return removed;
}

function decodeStream(stream: PDFStream): Uint8Array {
  if (stream instanceof PDFRawStream) return decodePDFRawStream(stream).decode();
  const maybe = stream as PDFStream & { getUnencodedContents?: () => Uint8Array };
  return maybe.getUnencodedContents ? maybe.getUnencodedContents() : stream.getContents();
}

/** The page's content streams decoded and joined into one buffer (null if unreadable). */
function readPageContent(page: PDFPage): Uint8Array | null {
  const contents = page.node.Contents();
  const streams: PDFStream[] = [];
  if (contents instanceof PDFArray) {
    for (let index = 0; index < contents.size(); index++) {
      const item = contents.lookup(index);
      if (item instanceof PDFStream) streams.push(item);
    }
  } else if (contents instanceof PDFStream) {
    streams.push(contents);
  }
  if (streams.length === 0) return null;

  try {
    const parts = streams.map(decodeStream);
    const total = parts.reduce((sum, part) => sum + part.length + 1, 0);
    const joined = new Uint8Array(total);
    let offset = 0;
    for (const part of parts) {
      joined.set(part, offset);
      offset += part.length;
      joined[offset++] = 0x0a;
    }
    return joined;
  } catch {
    // An unsupported stream filter — leave the page untouched.
    return null;
  }
}

/** Resource names (under /Properties) of optional-content layers named like "Watermark". */
function watermarkLayerNames(page: PDFPage): Set<string> {
  const names = new Set<string>();
  const properties = page.node.Resources()?.lookup(PDFName.of("Properties"));
  if (!(properties instanceof PDFDict)) return names;
  for (const [key, value] of properties.entries()) {
    const layer = page.doc.context.lookup(value);
    if (!(layer instanceof PDFDict)) continue;
    const label = layer.lookup(PDFName.of("Name"));
    const text =
      label instanceof PDFString || label instanceof PDFHexString ? label.decodeText() : "";
    if (/watermark/i.test(text)) names.add(key.asString().replace(/^\//, ""));
  }
  return names;
}

// ---- Minimal content-stream tokenizer -------------------------------------

const isWhitespace = (c: number) =>
  c === 0x00 || c === 0x09 || c === 0x0a || c === 0x0c || c === 0x0d || c === 0x20;
const isDelimiter = (c: number) =>
  c === 0x28 || c === 0x29 || c === 0x3c || c === 0x3e || c === 0x5b || c === 0x5d ||
  c === 0x7b || c === 0x7d || c === 0x2f || c === 0x25;
const isRegular = (c: number) => !isWhitespace(c) && !isDelimiter(c);

function latin1(data: Uint8Array, start: number, end: number): string {
  let out = "";
  for (let i = start; i < end; i++) out += String.fromCharCode(data[i]);
  return out;
}

function skipLiteralString(d: Uint8Array, i: number): number {
  let depth = 0;
  for (; i < d.length; i++) {
    const c = d[i];
    if (c === 0x5c) {
      i++;
    } else if (c === 0x28) {
      depth++;
    } else if (c === 0x29) {
      depth--;
      if (depth === 0) return i + 1;
    }
  }
  return d.length;
}

function skipHexString(d: Uint8Array, i: number): number {
  for (i++; i < d.length; i++) if (d[i] === 0x3e) return i + 1;
  return d.length;
}

function skipDict(d: Uint8Array, i: number): number {
  let depth = 0;
  while (i < d.length) {
    const c = d[i];
    if (c === 0x28) {
      i = skipLiteralString(d, i);
    } else if (c === 0x3c && d[i + 1] === 0x3c) {
      depth++;
      i += 2;
    } else if (c === 0x3c) {
      i = skipHexString(d, i);
    } else if (c === 0x3e && d[i + 1] === 0x3e) {
      depth--;
      i += 2;
      if (depth === 0) return i;
    } else {
      i++;
    }
  }
  return d.length;
}

function skipArray(d: Uint8Array, i: number): number {
  let depth = 0;
  while (i < d.length) {
    const c = d[i];
    if (c === 0x28) {
      i = skipLiteralString(d, i);
    } else if (c === 0x3c) {
      i = d[i + 1] === 0x3c ? skipDict(d, i) : skipHexString(d, i);
    } else if (c === 0x5b) {
      depth++;
      i++;
    } else if (c === 0x5d) {
      depth--;
      i++;
      if (depth === 0) return i;
    } else {
      i++;
    }
  }
  return d.length;
}

/** Skips an inline image (`BI … ID <binary> EI`), starting just after `BI`. */
function skipInlineImage(d: Uint8Array, i: number): number {
  while (i < d.length) {
    const c = d[i];
    if (isWhitespace(c)) {
      i++;
    } else if (c === 0x28) {
      i = skipLiteralString(d, i);
    } else if (c === 0x3c) {
      i = d[i + 1] === 0x3c ? skipDict(d, i) : skipHexString(d, i);
    } else if (c === 0x5b) {
      i = skipArray(d, i);
    } else if (c === 0x2f || !isRegular(c)) {
      i++;
      while (i < d.length && isRegular(d[i])) i++;
    } else {
      const start = i;
      while (i < d.length && isRegular(d[i])) i++;
      if (latin1(d, start, i) === "ID") {
        i++;
        break;
      }
    }
  }
  for (; i < d.length - 2; i++) {
    if (
      isWhitespace(d[i]) &&
      d[i + 1] === 0x45 &&
      d[i + 2] === 0x49 &&
      (i + 3 >= d.length || !isRegular(d[i + 3]))
    ) {
      return i + 3;
    }
  }
  return d.length;
}

interface Operand {
  kind: "name" | "dict" | "other";
  start: number;
  text: string;
}

function isWatermarkBlock(operands: Operand[], layerNames: Set<string>): boolean {
  const [tag, properties] = operands.slice(-2);
  if (!tag || tag.kind !== "name" || !properties) return false;
  if (tag.text === "Artifact" && properties.kind === "dict") {
    return /\/Subtype\s*\/Watermark\b/.test(properties.text);
  }
  if (tag.text === "OC" && properties.kind === "name") {
    return layerNames.has(properties.text);
  }
  return false;
}

/**
 * Cuts every watermark marked-content block (see `removeWatermarks`) out of
 * a decoded content stream. Only the outermost matching block is cut, and
 * each cut is replaced with a newline so neighbouring tokens never merge.
 */
export function stripWatermarkBlocks(
  data: Uint8Array,
  layerNames: Set<string> = new Set(),
): { output: Uint8Array; count: number } {
  const cuts: [number, number][] = [];
  const open: { start: number; remove: boolean }[] = [];
  let operands: Operand[] = [];
  let i = 0;

  while (i < data.length) {
    const c = data[i];
    if (isWhitespace(c)) {
      i++;
      continue;
    }
    if (c === 0x25) {
      while (i < data.length && data[i] !== 0x0a && data[i] !== 0x0d) i++;
      continue;
    }
    const start = i;
    if (c === 0x28) {
      i = skipLiteralString(data, i);
      operands.push({ kind: "other", start, text: "" });
      continue;
    }
    if (c === 0x3c) {
      if (data[i + 1] === 0x3c) {
        i = skipDict(data, i);
        operands.push({ kind: "dict", start, text: latin1(data, start, i) });
      } else {
        i = skipHexString(data, i);
        operands.push({ kind: "other", start, text: "" });
      }
      continue;
    }
    if (c === 0x5b) {
      i = skipArray(data, i);
      operands.push({ kind: "other", start, text: "" });
      continue;
    }
    if (c === 0x2f) {
      i++;
      while (i < data.length && isRegular(data[i])) i++;
      operands.push({ kind: "name", start, text: latin1(data, start + 1, i) });
      continue;
    }
    if (!isRegular(c)) {
      i++;
      continue;
    }

    while (i < data.length && isRegular(data[i])) i++;
    const word = latin1(data, start, i);
    if (/^[+-]?(\d+\.?\d*|\.\d+)$/.test(word)) {
      operands.push({ kind: "other", start, text: word });
      continue;
    }

    const operatorStart = operands.length > 0 ? operands[0].start : start;
    if (word === "BI") {
      i = skipInlineImage(data, i);
    } else if (word === "BDC" || word === "BMC") {
      open.push({
        start: operatorStart,
        remove: word === "BDC" && isWatermarkBlock(operands, layerNames),
      });
    } else if (word === "EMC") {
      const block = open.pop();
      if (block?.remove && !open.some((outer) => outer.remove)) cuts.push([block.start, i]);
    }
    operands = [];
  }

  if (cuts.length === 0) return { output: data, count: 0 };

  const kept: Uint8Array[] = [];
  let cursor = 0;
  for (const [from, to] of cuts) {
    kept.push(data.subarray(cursor, from), new Uint8Array([0x0a]));
    cursor = to;
  }
  kept.push(data.subarray(cursor));
  const output = new Uint8Array(kept.reduce((sum, part) => sum + part.length, 0));
  let offset = 0;
  for (const part of kept) {
    output.set(part, offset);
    offset += part.length;
  }
  return { output, count: cuts.length };
}
