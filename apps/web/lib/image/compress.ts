import { clampToSafeCanvasSize, releaseCanvas } from "@/lib/canvas-limits";

export interface CompressedImage {
  name: string;
  blob: Blob;
  originalSize: number;
  compressedSize: number;
}

export type CompressionLevel = "low" | "medium" | "high";

const QUALITY_BY_LEVEL: Record<CompressionLevel, number> = {
  low: 0.88,
  medium: 0.75,
  high: 0.6,
};

/**
 * JPEG quality alone gives underwhelming results on modern camera photos,
 * which routinely ship at 4000px+ on the long edge — far beyond what's
 * visible at any normal viewing size. Capping the long edge (only ever
 * downscaling, never up) does most of the real size reduction while a
 * higher quality factor than before keeps the result visually clean; only
 * applied when the source actually exceeds the cap.
 */
const MAX_DIMENSION_BY_LEVEL: Record<CompressionLevel, number> = {
  low: 3200,
  medium: 2200,
  high: 1600,
};

/** Samples the alpha channel to check whether an image actually uses transparency. */
function hasTransparency(ctx: CanvasRenderingContext2D, width: number, height: number): boolean {
  const { data } = ctx.getImageData(0, 0, width, height);
  const totalPixels = width * height;
  const stride = Math.max(1, Math.floor(totalPixels / 50_000)) * 4;
  for (let i = 3; i < data.length; i += stride) {
    if (data[i] < 255) return true;
  }
  return false;
}

/**
 * Compresses an image entirely client-side via the canvas API.
 *
 * Canvas ignores the `quality` argument for PNG output (lossless by spec),
 * so re-encoding a PNG as PNG barely shrinks it. To get a real size
 * reduction, every image is re-encoded as JPEG at the chosen quality level
 * unless it actually uses transparency (checked directly, not just guessed
 * from the source format) — in which case it stays PNG to preserve the
 * alpha channel, with a smaller size gain.
 */
export async function compressImage(
  file: File,
  level: CompressionLevel = "medium",
): Promise<CompressedImage> {
  const quality = QUALITY_BY_LEVEL[level];
  const bitmap = await createImageBitmap(file);
  const maxDimension = MAX_DIMENSION_BY_LEVEL[level];
  const longEdge = Math.max(bitmap.width, bitmap.height);
  const downscale = longEdge > maxDimension ? maxDimension / longEdge : 1;
  const { width, height } = clampToSafeCanvasSize(
    Math.round(bitmap.width * downscale),
    Math.round(bitmap.height * downscale),
  );
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser");
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const mightHaveAlpha = file.type === "image/png" || file.type === "image/webp";
  const outputType =
    mightHaveAlpha && hasTransparency(ctx, canvas.width, canvas.height)
      ? "image/png"
      : "image/jpeg";

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, outputType, quality),
  );
  releaseCanvas(canvas);
  if (!blob) throw new Error("Failed to compress image");

  const compressedIsSmaller = blob.size < file.size;
  const finalBlob = compressedIsSmaller ? blob : file;
  const originalExtension = file.name.match(/\.[^.]+$/)?.[0] ?? "";
  const newExtension = outputType === "image/png" ? ".png" : ".jpg";
  const extension = compressedIsSmaller ? newExtension : originalExtension || newExtension;
  const baseName = file.name.replace(/\.[^.]+$/, "");

  return {
    name: `${baseName}${extension}`,
    blob: finalBlob,
    originalSize: file.size,
    compressedSize: finalBlob.size,
  };
}
