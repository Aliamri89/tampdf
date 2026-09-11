import {
  clampToSafeCanvasSize,
  createCanvas,
  detectImageMime,
  encodeCanvasPreferring,
  releaseCanvas,
  type ImageMime,
} from "@/lib/image/canvas";

export interface TransformedImage {
  blob: Blob;
  /** Format actually written (WebP falls back to PNG where unsupported). */
  mime: ImageMime;
  width: number;
  height: number;
}

async function render(
  file: File,
  width: number,
  height: number,
  draw: (ctx: CanvasRenderingContext2D, bitmap: ImageBitmap) => void,
): Promise<TransformedImage> {
  const mime = detectImageMime(file);
  const bitmap = await createImageBitmap(file);
  try {
    const size = clampToSafeCanvasSize(Math.max(1, Math.round(width)), Math.max(1, Math.round(height)));
    const { canvas, ctx } = createCanvas(size.width, size.height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.scale(size.width / Math.max(1, Math.round(width)), size.height / Math.max(1, Math.round(height)));
    draw(ctx, bitmap);
    try {
      const encoded = await encodeCanvasPreferring(canvas, mime);
      return { ...encoded, width: size.width, height: size.height };
    } finally {
      releaseCanvas(canvas);
    }
  } finally {
    bitmap.close();
  }
}

export async function readImageSize(file: File): Promise<{ width: number; height: number }> {
  const bitmap = await createImageBitmap(file);
  const size = { width: bitmap.width, height: bitmap.height };
  bitmap.close();
  return size;
}

/** Scales an image to exactly `width` × `height` pixels, keeping its format. */
export function resizeImage(file: File, width: number, height: number): Promise<TransformedImage> {
  return render(file, width, height, (ctx, bitmap) => {
    ctx.drawImage(bitmap, 0, 0, Math.round(width), Math.round(height));
  });
}

export type ImageFlip = "horizontal" | "vertical";

/** Mirrors an image left↔right or top↕bottom, keeping its format. */
export async function flipImage(file: File, direction: ImageFlip): Promise<TransformedImage> {
  const { width, height } = await readImageSize(file);
  return render(file, width, height, (ctx, bitmap) => {
    if (direction === "horizontal") {
      ctx.translate(width, 0);
      ctx.scale(-1, 1);
    } else {
      ctx.translate(0, height);
      ctx.scale(1, -1);
    }
    ctx.drawImage(bitmap, 0, 0, width, height);
  });
}

export interface PixelRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Cuts out `rect` (in source pixels), keeping the image's format. */
export function cropImage(file: File, rect: PixelRect): Promise<TransformedImage> {
  return render(file, rect.width, rect.height, (ctx, bitmap) => {
    ctx.drawImage(bitmap, rect.x, rect.y, rect.width, rect.height, 0, 0, rect.width, rect.height);
  });
}
