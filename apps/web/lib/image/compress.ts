import { clampToSafeCanvasSize, releaseCanvas } from "@/lib/canvas-limits";
import { quantizeToPng } from "@/lib/image/png-quantize";

export interface CompressedImage {
  name: string;
  blob: Blob;
  originalSize: number;
  compressedSize: number;
}

export type CompressionLevel = "low" | "medium" | "high";

interface LevelSettings {
  /** JPEG/WebP encoder quality. */
  quality: number;
  /** Pixel-area cap (only ever downscales). Area, not long edge, so tall screenshots stay readable. */
  maxPixels: number;
  /** Palette size for PNG output. */
  pngColors: number;
}

const SETTINGS: Record<CompressionLevel, LevelSettings> = {
  low: { quality: 0.78, maxPixels: 16_000_000, pngColors: 256 },
  medium: { quality: 0.66, maxPixels: 6_000_000, pngColors: 192 },
  high: { quality: 0.52, maxPixels: 3_000_000, pngColors: 112 },
};

function toBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
}

function hasTransparency(data: Uint8ClampedArray): boolean {
  for (let i = 3; i < data.length; i += 4) if (data[i] < 255) return true;
  return false;
}

/**
 * Compresses an image entirely client-side while keeping its format:
 * - JPEG → re-encoded JPEG (quality + resolution cap; also strips EXIF bloat);
 * - PNG → palette-quantised PNG (pngquant-style), keeping transparency;
 * - WebP → re-encoded lossy WebP, keeping transparency (falls back to JPEG/PNG
 *   in browsers that can't encode WebP).
 * Never returns a file larger than the original.
 */
export async function compressImage(file: File, level: CompressionLevel = "medium"): Promise<CompressedImage> {
  const settings = SETTINGS[level];
  const bitmap = await createImageBitmap(file);
  const area = bitmap.width * bitmap.height;
  const downscale = area > settings.maxPixels ? Math.sqrt(settings.maxPixels / area) : 1;
  const { width, height } = clampToSafeCanvasSize(
    Math.max(1, Math.round(bitmap.width * downscale)),
    Math.max(1, Math.round(bitmap.height * downscale)),
  );
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser");
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const isPng = file.type === "image/png" || /\.png$/i.test(file.name);
  const isWebp = file.type === "image/webp" || /\.webp$/i.test(file.name);

  let blob: Blob | null = null;
  try {
    if (isPng) {
      const imageData = ctx.getImageData(0, 0, width, height);
      blob = await quantizeToPng(imageData, settings.pngColors);
    } else if (isWebp) {
      const webp = await toBlob(canvas, "image/webp", settings.quality);
      if (webp?.type === "image/webp") {
        blob = webp;
      } else {
        const imageData = ctx.getImageData(0, 0, width, height);
        blob = hasTransparency(imageData.data)
          ? await quantizeToPng(imageData, settings.pngColors)
          : await toBlob(canvas, "image/jpeg", settings.quality);
      }
    } else {
      blob = await toBlob(canvas, "image/jpeg", settings.quality);
    }
  } finally {
    releaseCanvas(canvas);
  }
  if (!blob) throw new Error("Failed to compress image");

  const smaller = blob.size < file.size;
  const finalBlob = smaller ? blob : file;
  const baseName = file.name.replace(/\.[^.]+$/, "");
  const extensionFor: Record<string, string> = { "image/png": ".png", "image/webp": ".webp", "image/jpeg": ".jpg" };
  const originalExtension = file.name.match(/\.[^.]+$/)?.[0] ?? "";
  const sameFormat = blob.type === file.type;
  const extension = smaller && !sameFormat ? (extensionFor[blob.type] ?? originalExtension) : originalExtension;

  return {
    name: `${baseName}${extension || ".jpg"}`,
    blob: finalBlob,
    originalSize: file.size,
    compressedSize: finalBlob.size,
  };
}
