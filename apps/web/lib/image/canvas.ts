import { clampToSafeCanvasSize, releaseCanvas } from "@/lib/canvas-limits";

export type ImageMime = "image/jpeg" | "image/png" | "image/webp";

export const IMAGE_EXTENSION: Record<ImageMime, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

/** Thrown when the browser can't encode a format (e.g. WebP in older Safari). */
export class EncodingUnsupportedError extends Error {
  constructor(mime: string) {
    super(`Encoding ${mime} is not supported in this browser`);
    this.name = "EncodingUnsupportedError";
  }
}

export function detectImageMime(file: File): ImageMime {
  if (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/webp") {
    return file.type;
  }
  const extension = file.name.toLowerCase().match(/\.[^.]+$/)?.[0];
  if (extension === ".jpg" || extension === ".jpeg") return "image/jpeg";
  if (extension === ".webp") return "image/webp";
  return "image/png";
}

/** `photo.png` + (".jpg") → `photo.jpg`; optional suffix goes before the extension. */
export function renameFile(name: string, extension: string, suffix = ""): string {
  return `${name.replace(/\.[^.]+$/, "")}${suffix}${extension}`;
}

export function createCanvas(width: number, height: number) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser");
  return { canvas, ctx };
}

export async function encodeCanvas(
  canvas: HTMLCanvasElement,
  mime: ImageMime,
  quality = 0.92,
): Promise<Blob> {
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, mime, mime === "image/png" ? undefined : quality),
  );
  if (!blob) throw new Error("Failed to encode image");
  // Browsers silently fall back to PNG for formats they can't write.
  if (blob.type !== mime) throw new EncodingUnsupportedError(mime);
  return blob;
}

/** Encodes in the preferred format, falling back to PNG if the browser can't write it. */
export async function encodeCanvasPreferring(
  canvas: HTMLCanvasElement,
  mime: ImageMime,
  quality = 0.92,
): Promise<{ blob: Blob; mime: ImageMime }> {
  try {
    return { blob: await encodeCanvas(canvas, mime, quality), mime };
  } catch (error) {
    if (!(error instanceof EncodingUnsupportedError)) throw error;
    return { blob: await encodeCanvas(canvas, "image/png"), mime: "image/png" };
  }
}

export { clampToSafeCanvasSize, releaseCanvas };
