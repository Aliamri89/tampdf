import { closePdfDocument, loadPdfDocument } from "@/lib/pdf/render";

export interface PageSizeGroup {
  /** Visible size in PDF points (1/72 inch), rotation applied. */
  width: number;
  height: number;
  count: number;
  paper: string | null;
}

export interface PdfInfo {
  pageCount: number;
  version: string | null;
  encrypted: boolean;
  hasForms: boolean;
  linearized: boolean;
  title: string;
  author: string;
  subject: string;
  keywords: string;
  creator: string;
  producer: string;
  created: Date | null;
  modified: Date | null;
  pageSizes: PageSizeGroup[];
  /** Page sizes are read from at most this many pages. */
  sampledPages: number;
}

const PAPER_SIZES: [string, number, number][] = [
  ["A3", 841.89, 1190.55],
  ["A4", 595.28, 841.89],
  ["A5", 419.53, 595.28],
  ["Letter", 612, 792],
  ["Legal", 612, 1008],
  ["Tabloid", 792, 1224],
];

const MAX_SAMPLED_PAGES = 300;

export function paperName(width: number, height: number): string | null {
  const near = (a: number, b: number) => Math.abs(a - b) <= 3;
  for (const [name, w, h] of PAPER_SIZES) {
    if ((near(width, w) && near(height, h)) || (near(width, h) && near(height, w))) return name;
  }
  return null;
}

/** Parses a PDF date string ("D:YYYYMMDDHHmmSSOHH'mm'"). */
export function parsePdfDate(value: unknown): Date | null {
  if (typeof value !== "string") return null;
  const match =
    /^(?:D:)?(\d{4})(\d{2})?(\d{2})?(\d{2})?(\d{2})?(\d{2})?([Zz+-])?(\d{2})?'?(\d{2})?/.exec(
      value.trim(),
    );
  if (!match) return null;
  const [, year, month = "01", day = "01", hour = "00", minute = "00", second = "00", sign, offH, offM] =
    match;
  let time = Date.UTC(+year, +month - 1, +day, +hour, +minute, +second);
  if (sign === "+" || sign === "-") {
    const offset = (Number(offH ?? 0) * 60 + Number(offM ?? 0)) * 60_000;
    time += sign === "+" ? -offset : offset;
  }
  const date = new Date(time);
  return Number.isNaN(date.getTime()) ? null : date;
}

export async function getPdfInfo(file: File): Promise<PdfInfo> {
  const pdf = await loadPdfDocument(file);
  try {
    const { info } = await pdf.getMetadata();
    const meta = (info ?? {}) as Record<string, unknown>;
    const text = (key: string) => (typeof meta[key] === "string" ? (meta[key] as string).trim() : "");

    const sampledPages = Math.min(pdf.numPages, MAX_SAMPLED_PAGES);
    const groups = new Map<string, PageSizeGroup>();
    for (let pageNumber = 1; pageNumber <= sampledPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const { width, height } = page.getViewport({ scale: 1 });
      page.cleanup();
      const key = `${Math.round(width)}x${Math.round(height)}`;
      const group = groups.get(key);
      if (group) group.count++;
      else groups.set(key, { width, height, count: 1, paper: paperName(width, height) });
    }

    return {
      pageCount: pdf.numPages,
      version: text("PDFFormatVersion") || null,
      encrypted: Boolean(meta.EncryptFilterName),
      hasForms: Boolean(meta.IsAcroFormPresent || meta.IsXFAPresent),
      linearized: Boolean(meta.IsLinearized),
      title: text("Title"),
      author: text("Author"),
      subject: text("Subject"),
      keywords: text("Keywords"),
      creator: text("Creator"),
      producer: text("Producer"),
      created: parsePdfDate(meta.CreationDate),
      modified: parsePdfDate(meta.ModDate),
      pageSizes: [...groups.values()].sort((a, b) => b.count - a.count),
      sampledPages,
    };
  } finally {
    await closePdfDocument(pdf);
  }
}
