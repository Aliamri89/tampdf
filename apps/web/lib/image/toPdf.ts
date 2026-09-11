import { PDFDocument, PageSizes, rgb } from "pdf-lib";
import { convertImage } from "@/lib/image/convert";

export type ImagePdfPageSize = "image" | "a4" | "letter";

interface ImagesToPdfOptions {
  /**
   * Fill each page with white before drawing the image. Transparent PNGs
   * otherwise render as black in some PDF viewers.
   */
  whiteBackground?: boolean;
  /**
   * "image" (default) sizes each page to its image; "a4"/"letter" fit the
   * image onto a standard page, turned landscape for landscape images.
   */
  pageSize?: ImagePdfPageSize;
  /** Blank border around the image, in PDF points. */
  margin?: number;
}

/**
 * pdf-lib can only embed PNG and JPEG, so anything else (e.g. WebP) is
 * re-encoded losslessly as PNG in the browser first.
 */
async function toEmbeddable(file: File): Promise<{ bytes: ArrayBuffer; kind: "png" | "jpg" }> {
  if (file.type === "image/png") return { bytes: await file.arrayBuffer(), kind: "png" };
  if (file.type === "image/jpeg") return { bytes: await file.arrayBuffer(), kind: "jpg" };
  const png = await convertImage(file, "image/png");
  return { bytes: await png.arrayBuffer(), kind: "png" };
}

export async function imagesToPdf(
  files: File[],
  options: ImagesToPdfOptions = {},
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const margin = Math.max(0, options.margin ?? 0);

  for (const file of files) {
    const { bytes, kind } = await toEmbeddable(file);
    const image = kind === "png" ? await pdfDoc.embedPng(bytes) : await pdfDoc.embedJpg(bytes);

    let pageWidth = image.width + margin * 2;
    let pageHeight = image.height + margin * 2;
    let drawWidth = image.width;
    let drawHeight = image.height;

    if (options.pageSize === "a4" || options.pageSize === "letter") {
      const [width, height] = options.pageSize === "a4" ? PageSizes.A4 : PageSizes.Letter;
      const landscape = image.width > image.height;
      pageWidth = landscape ? height : width;
      pageHeight = landscape ? width : height;
      const scale = Math.min(
        (pageWidth - margin * 2) / image.width,
        (pageHeight - margin * 2) / image.height,
      );
      drawWidth = image.width * scale;
      drawHeight = image.height * scale;
    }

    const page = pdfDoc.addPage([pageWidth, pageHeight]);
    if (options.whiteBackground) {
      page.drawRectangle({
        x: 0,
        y: 0,
        width: pageWidth,
        height: pageHeight,
        color: rgb(1, 1, 1),
      });
    }
    page.drawImage(image, {
      x: (pageWidth - drawWidth) / 2,
      y: (pageHeight - drawHeight) / 2,
      width: drawWidth,
      height: drawHeight,
    });
  }

  return pdfDoc.save();
}
