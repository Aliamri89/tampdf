import { PDFDocument, StandardFonts, degrees, rgb } from "pdf-lib";
import { getVisibleFrame, visibleToUser } from "@/lib/pdf/page-geometry";

export type PageNumberPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type PageNumberFormat = "n" | "n-of-total" | "page-n" | "page-n-of-total" | "dash-n";

export interface PageNumberOptions {
  position: PageNumberPosition;
  format: PageNumberFormat;
  /** Number printed on the first numbered page. */
  startAt: number;
  fontSize: number;
  /** Leave the first page (usually a cover) unnumbered. */
  skipFirstPage: boolean;
}

/**
 * Standard PDF fonts only cover Latin text, so labels are kept to digits
 * and the English word "Page" — this avoids embedding a font file (no
 * extra dependency) while working in every PDF viewer.
 */
export function formatPageNumber(format: PageNumberFormat, n: number, total: number): string {
  switch (format) {
    case "n-of-total":
      return `${n} / ${total}`;
    case "page-n":
      return `Page ${n}`;
    case "page-n-of-total":
      return `Page ${n} of ${total}`;
    case "dash-n":
      return `- ${n} -`;
    default:
      return String(n);
  }
}

export async function addPageNumbers(file: File, options: PageNumberOptions): Promise<Uint8Array> {
  const pdf = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true });
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const pages = pdf.getPages();
  const skip = options.skipFirstPage && pages.length > 1 ? 1 : 0;
  const startAt = Math.max(0, Math.floor(options.startAt));
  const lastNumber = startAt + pages.length - skip - 1;
  const size = options.fontSize;
  const [vertical, horizontal] = options.position.split("-") as [
    "top" | "bottom",
    "left" | "center" | "right",
  ];

  pages.forEach((page, index) => {
    if (index < skip) return;
    const label = formatPageNumber(options.format, startAt + index - skip, lastNumber);
    const frame = getVisibleFrame(page);
    const margin = Math.max(20, Math.min(frame.visibleWidth, frame.visibleHeight) * 0.045);
    const textWidth = font.widthOfTextAtSize(label, size);
    const u =
      horizontal === "left"
        ? margin
        : horizontal === "right"
          ? frame.visibleWidth - margin - textWidth
          : (frame.visibleWidth - textWidth) / 2;
    const v = vertical === "top" ? frame.visibleHeight - margin - size * 0.75 : margin;
    const { x, y } = visibleToUser(frame, u, v);
    page.drawText(label, {
      x,
      y,
      size,
      font,
      color: rgb(0.25, 0.25, 0.25),
      rotate: degrees(frame.rotation),
    });
  });

  return pdf.save();
}
