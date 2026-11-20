import {
  PDFArray,
  PDFDict,
  PDFDocument,
  PDFHexString,
  PDFName,
  PDFRawStream,
  PDFRef,
  PDFStream,
  PDFString,
  decodePDFRawStream,
  type PDFContext,
  type PDFObject,
  type PDFPage,
} from "pdf-lib";
import { removeUnreachableObjects } from "@/lib/pdf/gc";

export interface RemoveWatermarkResult {
  bytes: Uint8Array;
  /** Watermark objects removed across the whole document. */
  removed: number;
  /**
   * Why nothing was removed, when that is the case:
   * - "encrypted": the PDF is encrypted, so its pages can't be read or checked;
   * - "scanned": every page is only a picture (a scan): a mark inside it is part of the image;
   * - "unreadable": some pages use data this tool can't read, so they couldn't be checked;
   * - "none": every page was checked and no removable watermark exists.
   */
  reason: "encrypted" | "scanned" | "unreadable" | "none" | null;
}

/** Layer (optional content) names used for watermarks, in the languages editors commonly use. */
const WATERMARK_LAYER =
  /watermark|wasserzeichen|filigran|filigrane|filigrana|marca d['’]?\s?[aá]gua|marca de agua|watermerk|vattenst[äa]mpel|vandm[æa]rke|vannmerke|vesileima|znak wodny|vodoznak|водян|υδατογράφ|水印|浮水印|透かし|워터마크|علامة مائية|ลายน้ำ|hình mờ|tanda air/i;

interface Scope {
  /** Resource names (under /Properties) whose marked content is a watermark. */
  watermarkProperties: Set<string>;
  /** Resource names (under /Properties) of watermark layers. */
  watermarkLayers: Set<string>;
  /** XObject names that are watermarks themselves (by layer or Acrobat's watermark tag). */
  watermarkXObjects: Set<string>;
  /** XObject names that are pictures (used to recognise scanned pages). */
  imageXObjects: Set<string>;
}

interface Totals {
  removed: number;
  unreadable: number;
}

/**
 * Removes watermarks that were added as *watermark objects*, which covers
 * Acrobat, Word/Office exports, TAMPDF's own Add Watermark tool and most editors:
 *
 * - marked content tagged as a watermark: `/Artifact <</Subtype /Watermark>> BDC … EMC`
 *   (also via a named property), `/Watermark BMC … EMC`;
 * - content in an optional-content layer named "Watermark" (in several languages),
 *   whether marked with `/OC … BDC` or set on the drawn object itself;
 * - Acrobat watermark objects (`/PieceInfo … /Private /Watermark`) drawn with `Do`;
 * - annotations with `/Subtype /Watermark` (or a watermark layer / name).
 *
 * Content inside form XObjects is checked too, since some PDFs wrap every
 * page in one. A watermark flattened into a scanned image or merged into the
 * ordinary page text has no such marker and cannot be told apart from real
 * content; `reason` tells the caller which case applies.
 */
export async function removeWatermarks(file: File): Promise<RemoveWatermarkResult> {
  const pdf = await PDFDocument.load(await file.arrayBuffer(), {
    ignoreEncryption: true,
    throwOnInvalidObject: false,
  });
  if (pdf.isEncrypted) {
    return { bytes: new Uint8Array(), removed: 0, reason: "encrypted" };
  }

  const totals: Totals = { removed: 0, unreadable: 0 };
  const visitedForms = new Set<string>();
  let scannedPages = 0;
  const pages = pdf.getPages();

  for (const page of pages) {
    totals.removed += removeWatermarkAnnotations(page);

    const resources = page.node.Resources();
    const scope = scopeFor(pdf.context, resources);
    processForms(pdf.context, resources, totals, visitedForms);

    const content = readPageContent(page);
    if (content === "unreadable") {
      totals.unreadable++;
      continue;
    }
    if (!content) continue;
    const { output, count, drawsText, drawsImage } = stripWatermarkBlocks(content, scope);
    if (!drawsText && drawsImage) scannedPages++;
    if (count > 0) {
      const stream = pdf.context.flateStream(output);
      page.node.set(PDFName.of("Contents"), pdf.context.register(stream));
      totals.removed += count;
    }
  }

  if (totals.removed === 0) {
    const reason =
      totals.unreadable > 0
        ? "unreadable"
        : pages.length > 0 && scannedPages === pages.length
          ? "scanned"
          : "none";
    return { bytes: new Uint8Array(), removed: 0, reason };
  }

  dropUnusedXObjects(pages);
  // The watermark's image and the replaced content streams are now orphans.
  removeUnreachableObjects(pdf);
  return { bytes: await pdf.save({ useObjectStreams: true }), removed: totals.removed, reason: null };
}

function textOf(value: PDFObject | undefined): string {
  if (value instanceof PDFString || value instanceof PDFHexString) return value.decodeText();
  if (value instanceof PDFName) return value.decodeText();
  return "";
}

/** True when an /OC value (an optional-content group or membership dictionary) is a watermark layer. */
function isWatermarkLayer(context: PDFContext, value: PDFObject | undefined): boolean {
  const dict = value instanceof PDFRef ? context.lookup(value) : value;
  if (!(dict instanceof PDFDict)) return false;
  if (WATERMARK_LAYER.test(textOf(dict.lookup(PDFName.of("Name"))))) return true;
  // Membership dictionary: watermark if any of its groups is.
  const groups = dict.lookup(PDFName.of("OCGs"));
  if (groups instanceof PDFArray) {
    return groups.asArray().some((group) => isWatermarkLayer(context, group));
  }
  return groups instanceof PDFDict ? isWatermarkLayer(context, groups) : false;
}

/** Marked-content properties that say "this is a watermark". */
function isWatermarkProperties(dict: PDFDict): boolean {
  const subtype = textOf(dict.lookup(PDFName.of("Subtype")));
  const type = textOf(dict.lookup(PDFName.of("Type")));
  return /^watermark$/i.test(subtype) || /^watermark$/i.test(type);
}

/** Acrobat tags its watermark objects with `/PieceInfo << /ADBE_CompoundType << /Private /Watermark >> >>`. */
function hasAcrobatWatermarkTag(dict: PDFDict): boolean {
  const pieceInfo = dict.lookup(PDFName.of("PieceInfo"));
  if (!(pieceInfo instanceof PDFDict)) return false;
  for (const [, entry] of pieceInfo.entries()) {
    const app = entry instanceof PDFRef ? dict.context.lookup(entry) : entry;
    if (app instanceof PDFDict && /^watermark$/i.test(textOf(app.lookup(PDFName.of("Private"))))) {
      return true;
    }
  }
  return false;
}

function scopeFor(context: PDFContext, resources: PDFDict | undefined): Scope {
  const scope: Scope = {
    watermarkProperties: new Set(),
    watermarkLayers: new Set(),
    watermarkXObjects: new Set(),
    imageXObjects: new Set(),
  };
  if (!resources) return scope;

  const properties = resources.lookup(PDFName.of("Properties"));
  if (properties instanceof PDFDict) {
    for (const [key, value] of properties.entries()) {
      const name = key.decodeText();
      const dict = context.lookup(value);
      if (!(dict instanceof PDFDict)) continue;
      if (isWatermarkLayer(context, dict)) scope.watermarkLayers.add(name);
      if (isWatermarkProperties(dict)) scope.watermarkProperties.add(name);
    }
  }

  const xobjects = resources.lookup(PDFName.of("XObject"));
  if (xobjects instanceof PDFDict) {
    for (const [key, value] of xobjects.entries()) {
      const name = key.decodeText();
      const stream = context.lookup(value);
      if (!(stream instanceof PDFStream)) continue;
      const dict = stream.dict;
      const isImage = textOf(dict.lookup(PDFName.of("Subtype"))) === "Image";
      if (isImage) scope.imageXObjects.add(name);
      if (isWatermarkLayer(context, dict.get(PDFName.of("OC"))) || hasAcrobatWatermarkTag(dict)) {
        scope.watermarkXObjects.add(name);
      }
    }
  }
  return scope;
}

/** Strips watermark content inside the form XObjects a page (or form) uses, recursively. */
function processForms(
  context: PDFContext,
  resources: PDFDict | undefined,
  totals: Totals,
  visited: Set<string>,
): void {
  const xobjects = resources?.lookup(PDFName.of("XObject"));
  if (!(xobjects instanceof PDFDict)) return;
  for (const [, value] of xobjects.entries()) {
    if (!(value instanceof PDFRef) || visited.has(value.toString())) continue;
    visited.add(value.toString());
    const form = context.lookup(value);
    if (!(form instanceof PDFStream)) continue;
    if (textOf(form.dict.lookup(PDFName.of("Subtype"))) !== "Form") continue;

    const formResources = form.dict.lookup(PDFName.of("Resources"));
    const ownResources = formResources instanceof PDFDict ? formResources : resources;
    processForms(context, ownResources, totals, visited);

    let data: Uint8Array;
    try {
      data = decodeStream(form);
    } catch {
      totals.unreadable++;
      continue;
    }
    const { output, count } = stripWatermarkBlocks(data, scopeFor(context, ownResources));
    if (count === 0) continue;
    // Same dictionary (BBox, Matrix, Resources, …), new content, re-compressed.
    const replacement = context.flateStream(output);
    for (const [key, entry] of form.dict.entries()) {
      const name = key.decodeText();
      if (name === "Length" || name === "Filter" || name === "DecodeParms") continue;
      replacement.dict.set(key, entry);
    }
    context.assign(value, replacement);
    totals.removed += count;
  }
}

/**
 * Removes XObject resources no page content names anymore (e.g. the stripped
 * watermark image). XObject dictionaries can be shared between pages, so a
 * name is only dropped when none of the pages using that dictionary needs it.
 */
function dropUnusedXObjects(pages: PDFPage[]): void {
  const usage = new Map<PDFDict, (string | null)[]>();
  for (const page of pages) {
    const xobjects = page.node.Resources()?.lookup(PDFName.of("XObject"));
    if (!(xobjects instanceof PDFDict)) continue;
    const content = readPageContent(page);
    const texts = usage.get(xobjects) ?? [];
    texts.push(content instanceof Uint8Array ? new TextDecoder("latin1").decode(content) : null);
    usage.set(xobjects, texts);
  }
  for (const [xobjects, texts] of usage) {
    if (texts.some((text) => text === null)) continue;
    for (const key of xobjects.keys()) {
      const escaped = key.asString().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const pattern = new RegExp(`${escaped}(?=[\\s/\\[\\]<>()%]|$)`);
      if (!texts.some((text) => pattern.test(text!))) xobjects.delete(key);
    }
  }
}

function removeWatermarkAnnotations(page: PDFPage): number {
  const annots = page.node.Annots();
  if (!annots) return 0;
  const context = page.doc.context;
  let removed = 0;
  for (let index = annots.size() - 1; index >= 0; index--) {
    const annot = annots.lookup(index);
    if (!(annot instanceof PDFDict)) continue;
    const isWatermark =
      textOf(annot.lookup(PDFName.of("Subtype"))) === "Watermark" ||
      isWatermarkLayer(context, annot.get(PDFName.of("OC"))) ||
      /^watermark/i.test(textOf(annot.lookup(PDFName.of("NM"))));
    if (isWatermark) {
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

/** The page's content streams decoded and joined into one buffer (null if none, "unreadable" if they can't be decoded). */
function readPageContent(page: PDFPage): Uint8Array | null | "unreadable" {
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
    return "unreadable";
  }
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

const EMPTY_SCOPE: Scope = {
  watermarkProperties: new Set(),
  watermarkLayers: new Set(),
  watermarkXObjects: new Set(),
  imageXObjects: new Set(),
};

function isWatermarkBlock(operator: string, operands: Operand[], scope: Scope): boolean {
  if (operator === "BMC") {
    const tag = operands[operands.length - 1];
    return tag?.kind === "name" && /^watermark$/i.test(tag.text);
  }
  const [tag, properties] = operands.slice(-2);
  if (!tag || tag.kind !== "name" || !properties) return false;
  if (/^watermark$/i.test(tag.text)) return true;
  if (tag.text === "OC") {
    return properties.kind === "name" && scope.watermarkLayers.has(properties.text);
  }
  if (properties.kind === "dict") {
    return /\/(Sub)?[Tt]ype\s*\/Watermark\b/.test(properties.text);
  }
  return properties.kind === "name" && scope.watermarkProperties.has(properties.text);
}

/**
 * Cuts every watermark (see `removeWatermarks`) out of a decoded content
 * stream: marked-content blocks (only the outermost matching block) and
 * `Do` calls that draw a watermark object. Each cut is replaced with a
 * newline so neighbouring tokens never merge. Also reports whether the
 * content draws text or pictures, to recognise scanned pages.
 */
export function stripWatermarkBlocks(
  data: Uint8Array,
  scope: Scope | Set<string> = EMPTY_SCOPE,
): { output: Uint8Array; count: number; drawsText: boolean; drawsImage: boolean } {
  const resolved: Scope =
    scope instanceof Set ? { ...EMPTY_SCOPE, watermarkLayers: scope } : scope;
  const cuts: [number, number][] = [];
  const open: { start: number; remove: boolean }[] = [];
  let operands: Operand[] = [];
  let drawsText = false;
  let drawsImage = false;
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
    const insideRemoved = open.some((block) => block.remove);
    if (word === "BI") {
      i = skipInlineImage(data, i);
      if (!insideRemoved) drawsImage = true;
    } else if (word === "BDC" || word === "BMC") {
      open.push({ start: operatorStart, remove: isWatermarkBlock(word, operands, resolved) });
    } else if (word === "EMC") {
      const block = open.pop();
      if (block?.remove && !open.some((outer) => outer.remove)) cuts.push([block.start, i]);
    } else if (word === "Do" && !insideRemoved) {
      const target = operands[operands.length - 1];
      if (target?.kind === "name" && resolved.watermarkXObjects.has(target.text)) {
        cuts.push([operatorStart, i]);
      } else if (target?.kind === "name" && resolved.imageXObjects.has(target.text)) {
        drawsImage = true;
      }
    } else if ((word === "Tj" || word === "TJ" || word === "'" || word === '"') && !insideRemoved) {
      drawsText = true;
    }
    operands = [];
  }

  if (cuts.length === 0) return { output: data, count: 0, drawsText, drawsImage };

  cuts.sort((a, b) => a[0] - b[0]);
  const kept: Uint8Array[] = [];
  let cursor = 0;
  for (const [from, to] of cuts) {
    if (from < cursor) continue;
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
  return { output, count: cuts.length, drawsText, drawsImage };
}
