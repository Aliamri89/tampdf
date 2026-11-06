import { clampToSafeCanvasSize, releaseCanvas } from "@/lib/canvas-limits";
import { watermarkPlacements, type WatermarkOptions } from "@/lib/pdf/watermark";

export const WATERMARK_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"] as const;

export function isWatermarkableImage(file: File): boolean {
  return (
    /^image\/(jpeg|png|webp)$/.test(file.type) || /\.(jpe?g|png|webp)$/i.test(file.name)
  );
}

export interface WatermarkedImage {
  blob: Blob;
  /** Extension (with the dot) matching `blob`'s actual format. */
  extension: string;
}

function toBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
}

/**
 * Stamps the pre-rendered PNG watermark onto an image, using the same
 * placement maths as the PDF writer and the on-screen preview (positions are
 * expressed relative to the image's own width/height). The output keeps the
 * input format: JPEG and WebP at high quality, PNG losslessly with its
 * transparency.
 */
export async function addWatermarkToImage(
  file: File,
  png: { bytes: Uint8Array; width: number; height: number },
  options: WatermarkOptions,
): Promise<WatermarkedImage> {
  const [bitmap, mark] = await Promise.all([
    createImageBitmap(file),
    createImageBitmap(new Blob([new Uint8Array(png.bytes)], { type: "image/png" })),
  ]);

  const { width, height } = clampToSafeCanvasSize(bitmap.width, bitmap.height);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser");
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const radians = (-options.angle * Math.PI) / 180;
  ctx.globalAlpha = options.opacity;
  for (const placement of watermarkPlacements(width, height, png.height / png.width, options)) {
    ctx.save();
    // Placements use a bottom-left origin; the canvas' origin is top-left.
    ctx.translate(placement.cx, height - placement.cy);
    ctx.rotate(radians);
    ctx.drawImage(mark, -placement.width / 2, -placement.height / 2, placement.width, placement.height);
    ctx.restore();
  }
  mark.close();

  try {
    const wantsPng = file.type === "image/png" || /\.png$/i.test(file.name);
    const wantsWebp = file.type === "image/webp" || /\.webp$/i.test(file.name);
    if (wantsPng) {
      const blob = await toBlob(canvas, "image/png");
      if (blob) return { blob, extension: ".png" };
    } else if (wantsWebp) {
      const blob = await toBlob(canvas, "image/webp", 0.92);
      if (blob?.type === "image/webp") return { blob, extension: ".webp" };
    }
    const blob = await toBlob(canvas, "image/jpeg", 0.92);
    if (!blob) throw new Error("Failed to encode the image");
    return { blob, extension: ".jpg" };
  } finally {
    releaseCanvas(canvas);
  }
}
