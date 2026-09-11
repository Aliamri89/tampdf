import { PDFDocument, PDFName, PDFOperator, PDFOperatorNames, degrees } from "pdf-lib";
import { getVisibleFrame, visibleToUser } from "@/lib/pdf/page-geometry";

export type WatermarkLayout = "single" | "tiled";

const WATERMARK_PROPERTIES = "<< /Type /Pagination /Subtype /Watermark >>";

export interface WatermarkOptions {
  /** 0..1 */
  opacity: number;
  /** Degrees, counter-clockwise as seen on the page. */
  angle: number;
  /** Width of one watermark copy as a fraction of the page width. */
  size: number;
  layout: WatermarkLayout;
}

export interface WatermarkPlacement {
  /** Centre in visible page coordinates (origin bottom-left). */
  cx: number;
  cy: number;
  width: number;
  height: number;
}

/**
 * Where each copy of the watermark goes on a page of the given visible
 * size. Shared by the PDF writer and the on-screen preview so what the
 * user sees is exactly what gets written.
 */
export function watermarkPlacements(
  pageWidth: number,
  pageHeight: number,
  aspect: number,
  options: Pick<WatermarkOptions, "size" | "layout">,
): WatermarkPlacement[] {
  const width = pageWidth * options.size;
  const height = width * aspect;
  if (options.layout === "single") {
    return [{ cx: pageWidth / 2, cy: pageHeight / 2, width, height }];
  }

  const stepX = width * 1.35;
  const stepY = Math.max(height * 3.2, width * 0.55);
  const cols = Math.ceil(pageWidth / stepX) + 2;
  const rows = Math.ceil(pageHeight / stepY) + 2;
  const placements: WatermarkPlacement[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = pageWidth / 2 + (col - (cols - 1) / 2) * stepX + (row % 2 ? stepX / 2 : 0);
      const cy = pageHeight / 2 + (row - (rows - 1) / 2) * stepY;
      if (Math.abs(cx - pageWidth / 2) > pageWidth / 2 + width) continue;
      if (Math.abs(cy - pageHeight / 2) > pageHeight / 2 + width) continue;
      placements.push({ cx, cy, width, height });
    }
  }
  return placements;
}

/**
 * Stamps a (pre-rendered) PNG watermark on every page. The drawing is
 * wrapped in the standard `/Artifact <</Subtype /Watermark>>` marked-content
 * sequence — the same marker Acrobat uses — so readers treat it as a
 * watermark and our Remove Watermark tool can take it back out.
 */
export async function addImageWatermark(
  file: File,
  png: { bytes: Uint8Array; width: number; height: number },
  options: WatermarkOptions,
): Promise<Uint8Array> {
  const pdf = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true });
  const image = await pdf.embedPng(png.bytes);
  const aspect = png.height / png.width;

  for (const page of pdf.getPages()) {
    // Normalise first so the page's existing content is wrapped in q/Q
    // before our content stream is appended (see PDFPageLeaf.normalize).
    page.node.normalize();
    const frame = getVisibleFrame(page);
    const totalAngle = options.angle + frame.rotation;
    const radians = (totalAngle * Math.PI) / 180;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);

    page.pushOperators(
      PDFOperator.of(PDFOperatorNames.BeginMarkedContentSequence, [
        PDFName.of("Artifact"),
        // String operands are written verbatim, so the property list can be inlined.
        WATERMARK_PROPERTIES,
      ]),
    );
    for (const placement of watermarkPlacements(
      frame.visibleWidth,
      frame.visibleHeight,
      aspect,
      options,
    )) {
      const center = visibleToUser(frame, placement.cx, placement.cy);
      const halfW = placement.width / 2;
      const halfH = placement.height / 2;
      page.drawImage(image, {
        x: center.x - (halfW * cos - halfH * sin),
        y: center.y - (halfW * sin + halfH * cos),
        width: placement.width,
        height: placement.height,
        rotate: degrees(totalAngle),
        opacity: options.opacity,
      });
    }
    page.pushOperators(PDFOperator.of(PDFOperatorNames.EndMarkedContent));
  }

  return pdf.save();
}
