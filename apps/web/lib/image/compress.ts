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
  /** Lowest quality the adaptive search may fall to when a file barely shrinks. */
  minQuality: number;
}

const SETTINGS: Record<CompressionLevel, LevelSettings> = {
  low: { quality: 0.78, maxPixels: 16_000_000, pngColors: 256, minQuality: 0.62 },
  medium: { quality: 0.68, maxPixels: 5_000_000, pngColors: 192, minQuality: 0.5 },
  high: { quality: 0.54, maxPixels: 2_500_000, pngColors: 112, minQuality: 0.38 },
};

function toBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
}

function hasTransparency(data: Uint8ClampedArray): boolean {
  for (let i = 3; i < data.length; i += 4) if (data[i] < 255) return true;
  return false;
}

/**
 * Lossy encode with a small adaptive search: start at the level's quality and,
 * while the file has shrunk by less than ~30% (typical for photos that were
 * already saved at a modest quality), step the quality down — never below the
 * level's floor — and keep the smallest result.
 */
async function encodeLossy(
  canvas: HTMLCanvasElement,
  type: string,
  settings: LevelSettings,
  originalSize: number,
): Promise<Blob | null> {
  let quality = settings.quality;
  let best = await toBlob(canvas, type, quality);
  for (let step = 0; step < 3 && best && best.type === type; step++) {
    if (best.size <= originalSize * 0.7 || quality - 0.07 < settings.minQuality) break;
    quality -= 0.07;
    const next = await toBlob(canvas, type, quality);
    if (!next || next.size >= best.size) break;
    best = next;
  }
  return best;
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
      const webp = await encodeLossy(canvas, "image/webp", settings, file.size);
      if (webp?.type === "image/webp") {
        blob = webp;
      } else {
        const imageData = ctx.getImageData(0, 0, width, height);
        blob = hasTransparency(imageData.data)
          ? await quantizeToPng(imageData, settings.pngColors)
          : await encodeLossy(canvas, "image/jpeg", settings, file.size);
      }
    } else {
      blob = await encodeLossy(canvas, "image/jpeg", settings, file.size);
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
