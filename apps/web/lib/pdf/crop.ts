import { PDFDocument } from "pdf-lib";

export interface CropMargins {
  /** Fraction (0..0.9) of the *visible* page dimension to trim from each edge. */
  top: number;
  right: number;
  bottom: number;
  left: number;
}

/**
 * Insets the crop box of every page by `margins`. Margins are expressed in
 * the page's **visible** orientation (what a viewer shows, i.e. after any
 * /Rotate); this maps them back to the unrotated PDF box. Content is never
 * deleted — only the visible area shrinks (this is how a PDF "crop" works).
 */
export async function cropPdf(file: File, margins: CropMargins): Promise<Uint8Array> {
  const bytes = await file.arrayBuffer();
  const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });

  for (const page of pdf.getPages()) {
    const { x, y, width, height } = page.getCropBox();
    const rot = ((page.getRotation().angle % 360) + 360) % 360;
    const { top, right, bottom, left } = margins;

    // Inset amounts in the unrotated box's own axes.
    let insetTop = 0;
    let insetRight = 0;
    let insetBottom = 0;
    let insetLeft = 0;

    if (rot === 90) {
      insetLeft = top * width;
      insetTop = right * height;
      insetRight = bottom * width;
      insetBottom = left * height;
    } else if (rot === 180) {
      insetBottom = top * height;
      insetLeft = right * width;
      insetTop = bottom * height;
      insetRight = left * width;
    } else if (rot === 270) {
      insetRight = top * width;
      insetBottom = right * height;
      insetLeft = bottom * width;
      insetTop = left * height;
    } else {
      insetTop = top * height;
      insetRight = right * width;
      insetBottom = bottom * height;
      insetLeft = left * width;
    }

    const newWidth = Math.max(1, width - insetLeft - insetRight);
    const newHeight = Math.max(1, height - insetTop - insetBottom);
    page.setCropBox(x + insetLeft, y + insetBottom, newWidth, newHeight);
  }

  return pdf.save();
}
