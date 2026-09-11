import type { PDFPage } from "pdf-lib";

export type PageRotation = 0 | 90 | 180 | 270;

/**
 * A page's crop box (in unrotated user space) plus the size a viewer
 * actually shows once /Rotate is applied. Anything we draw "on top" of a
 * page (page numbers, watermarks) is laid out in visible coordinates and
 * mapped back through `visibleToUser`, so it appears upright and in the
 * right corner no matter how the page is rotated.
 */
export interface VisibleFrame {
  rotation: PageRotation;
  x: number;
  y: number;
  width: number;
  height: number;
  visibleWidth: number;
  visibleHeight: number;
}

export function getVisibleFrame(page: PDFPage): VisibleFrame {
  const { x, y, width, height } = page.getCropBox();
  const normalized = ((page.getRotation().angle % 360) + 360) % 360;
  const rotation = (Math.round(normalized / 90) * 90) % 360 as PageRotation;
  const sideways = rotation === 90 || rotation === 270;
  return {
    rotation,
    x,
    y,
    width,
    height,
    visibleWidth: sideways ? height : width,
    visibleHeight: sideways ? width : height,
  };
}

/**
 * Maps a point in visible coordinates (origin at the bottom-left of what the
 * viewer displays) to unrotated user space. /Rotate turns the page
 * clockwise for display, so e.g. at 90° the physical left edge becomes the
 * visible top.
 */
export function visibleToUser(frame: VisibleFrame, u: number, v: number): { x: number; y: number } {
  const { x, y, width, height, rotation } = frame;
  switch (rotation) {
    case 90:
      return { x: x + (width - v), y: y + u };
    case 180:
      return { x: x + (width - u), y: y + (height - v) };
    case 270:
      return { x: x + v, y: y + (height - u) };
    default:
      return { x: x + u, y: y + v };
  }
}
