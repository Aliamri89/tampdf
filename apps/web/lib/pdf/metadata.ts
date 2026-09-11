import { PDFDict, PDFDocument, PDFHexString, PDFName, PDFRef, PDFString } from "pdf-lib";

export const METADATA_FIELDS = [
  "title",
  "author",
  "subject",
  "keywords",
  "creator",
  "producer",
] as const;

export type MetadataField = (typeof METADATA_FIELDS)[number];
export type PdfMetadata = Record<MetadataField, string>;

const INFO_KEYS: Record<MetadataField, string> = {
  title: "Title",
  author: "Author",
  subject: "Subject",
  keywords: "Keywords",
  creator: "Creator",
  producer: "Producer",
};

// `updateMetadata: false` stops pdf-lib from stamping its own
// Producer/Creator/ModDate on load, which would defeat both tools.
async function load(file: File) {
  return PDFDocument.load(await file.arrayBuffer(), {
    ignoreEncryption: true,
    updateMetadata: false,
  });
}

function getInfoDict(pdf: PDFDocument, create: boolean): PDFDict | undefined {
  const existing = pdf.context.trailerInfo.Info;
  if (existing) {
    const dict = pdf.context.lookup(existing);
    if (dict instanceof PDFDict) return dict;
  }
  if (!create) return undefined;
  const dict = pdf.context.obj({});
  pdf.context.trailerInfo.Info = pdf.context.register(dict);
  return dict;
}

function readText(dict: PDFDict, key: string): string {
  const value = dict.lookup(PDFName.of(key));
  return value instanceof PDFString || value instanceof PDFHexString ? value.decodeText() : "";
}

/**
 * Drops an entry and — when it points at an indirect object such as the
 * XMP metadata stream — the object itself. pdf-lib writes every object in
 * its context, so an unreferenced stream would otherwise still end up in
 * the saved file.
 */
function deleteEntry(pdf: PDFDocument, dict: PDFDict, key: string) {
  const name = PDFName.of(key);
  const value = dict.get(name);
  if (value instanceof PDFRef) pdf.context.delete(value);
  dict.delete(name);
}

export async function readPdfMetadata(file: File): Promise<PdfMetadata> {
  const pdf = await load(file);
  const info = getInfoDict(pdf, false);
  const values = {} as PdfMetadata;
  for (const field of METADATA_FIELDS) {
    values[field] = info ? readText(info, INFO_KEYS[field]).trim() : "";
  }
  return values;
}

/** Writes the given document properties; an empty value removes that property. */
export async function writePdfMetadata(file: File, values: PdfMetadata): Promise<Uint8Array> {
  const pdf = await load(file);
  const info = getInfoDict(pdf, true)!;
  for (const field of METADATA_FIELDS) {
    const key = PDFName.of(INFO_KEYS[field]);
    const value = values[field].trim();
    if (value) info.set(key, PDFHexString.fromText(value));
    else info.delete(key);
  }
  pdf.setModificationDate(new Date());
  // Readers prefer XMP over the Info dictionary when both exist, so a stale
  // XMP packet would hide the new values.
  deleteEntry(pdf, pdf.catalog, "Metadata");
  return pdf.save();
}

/** Removes the Info dictionary contents, XMP packets, and app-private PieceInfo data. */
export async function stripPdfMetadata(file: File): Promise<Uint8Array> {
  const pdf = await load(file);
  const info = getInfoDict(pdf, false);
  if (info) for (const key of info.keys()) info.delete(key);
  deleteEntry(pdf, pdf.catalog, "Metadata");
  deleteEntry(pdf, pdf.catalog, "PieceInfo");
  for (const page of pdf.getPages()) {
    deleteEntry(pdf, page.node, "Metadata");
    deleteEntry(pdf, page.node, "PieceInfo");
  }
  return pdf.save();
}
