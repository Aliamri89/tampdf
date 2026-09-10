import { PDFDocument, PageSizes } from "pdf-lib";

export type ResizePreset =
  | "a4-portrait"
  | "a4-landscape"
  | "letter-portrait"
  | "letter-landscape"
  | "a3-portrait"
  | "a5-portrait";

/** Target [width, height] in PDF points, in the *visible* orientation. */
const PRESET_DIMENSIONS: Record<ResizePreset, [number, number]> = {
  "a4-portrait": [PageSizes.A4[0], PageSizes.A4[1]],
  "a4-landscape": [PageSizes.A4[1], PageSizes.A4[0]],
  "letter-portrait": [PageSizes.Letter[0], PageSizes.Letter[1]],
  "letter-landscape": [PageSizes.Letter[1], PageSizes.Letter[0]],
  "a3-portrait": [PageSizes.A3[0], PageSizes.A3[1]],
  "a5-portrait": [PageSizes.A5[0], PageSizes.A5[1]],
};

/** Scales every page proportionally by `factor` (e.g. 0.5 = half). */
export async function scalePdf(file: File, factor: number): Promise<Uint8Array> {
  const bytes = await file.arrayBuffer();
  const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
  const safeFactor = Math.max(0.05, Math.min(factor, 10));
  for (const page of pdf.getPages()) {
    page.scale(safeFactor, safeFactor);
  }
  return pdf.save();
}

/**
 * Resizes every page to a standard size, scaling content uniformly to fit
 * and centering it (letterboxed, never cropped or stretched).
 */
export async function resizePdfToPreset(file: File, preset: ResizePreset): Promise<Uint8Array> {
  const bytes = await file.arrayBuffer();
  const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
  const [targetVisibleWidth, targetVisibleHeight] = PRESET_DIMENSIONS[preset];

  for (const page of pdf.getPages()) {
    const rotation = ((page.getRotation().angle % 360) + 360) % 360;
    const rotated = rotation === 90 || rotation === 270;
    const { width, height } = page.getSize();
    const visibleWidth = rotated ? height : width;
    const visibleHeight = rotated ? width : height;

    const scale = Math.min(
      targetVisibleWidth / visibleWidth,
      targetVisibleHeight / visibleHeight,
    );

    // The MediaBox lives in unrotated space, so swap the target when rotated.
    const [mediaBoxWidth, mediaBoxHeight] = rotated
      ? [targetVisibleHeight, targetVisibleWidth]
      : [targetVisibleWidth, targetVisibleHeight];

    page.scaleContent(scale, scale);
    page.scaleAnnotations(scale, scale);
    page.setSize(mediaBoxWidth, mediaBoxHeight);
    page.translateContent(
      (mediaBoxWidth - width * scale) / 2,
      (mediaBoxHeight - height * scale) / 2,
    );
    page.setCropBox(0, 0, mediaBoxWidth, mediaBoxHeight);
  }

  return pdf.save();
}
