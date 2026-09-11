import { PDFArray, PDFDict, PDFDocument, PDFName, type PDFPage } from "pdf-lib";
import { getVisibleFrame } from "@/lib/pdf/page-geometry";

export type FlipDirection = "horizontal" | "vertical";

function mirrorAnnotations(page: PDFPage, axis: "x" | "y", sum: number) {
  const annots = page.node.Annots();
  if (!annots) return;
  for (let index = 0; index < annots.size(); index++) {
    const annot = annots.lookup(index);
    if (!(annot instanceof PDFDict)) continue;
    const rect = annot.lookup(PDFName.of("Rect"));
    if (!(rect instanceof PDFArray)) continue;
    const { x, y, width, height } = rect.asRectangle();
    const mirrored =
      axis === "x"
        ? [sum - (x + width), y, sum - x, y + height]
        : [x, sum - (y + height), x + width, sum - y];
    annot.set(PDFName.of("Rect"), page.doc.context.obj(mirrored));
  }
}

/**
 * Mirrors every page's content. The flip is done around the centre of the
 * visible (crop) box, and on pages rotated 90°/270° a flip the user sees as
 * horizontal is a vertical one in the page's own coordinates.
 */
export async function flipPdf(file: File, direction: FlipDirection): Promise<Uint8Array> {
  const pdf = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true });

  for (const page of pdf.getPages()) {
    const frame = getVisibleFrame(page);
    const sideways = frame.rotation === 90 || frame.rotation === 270;
    const axis = (direction === "horizontal") !== sideways ? "x" : "y";

    // scaleContent wraps innermost, translateContent outermost:
    // x' = -x + (2·x0 + width), i.e. a mirror about the box centre.
    if (axis === "x") {
      const sum = 2 * frame.x + frame.width;
      page.scaleContent(-1, 1);
      page.translateContent(sum, 0);
      mirrorAnnotations(page, "x", sum);
    } else {
      const sum = 2 * frame.y + frame.height;
      page.scaleContent(1, -1);
      page.translateContent(0, sum);
      mirrorAnnotations(page, "y", sum);
    }
  }

  return pdf.save();
}
