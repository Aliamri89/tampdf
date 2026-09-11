import {
  clampToSafeCanvasSize,
  createCanvas,
  encodeCanvas,
  releaseCanvas,
  type ImageMime,
} from "@/lib/image/canvas";

/**
 * Re-encodes an image in another format via the canvas API. JPEG has no
 * alpha channel, so transparent areas are flattened onto white first
 * (otherwise they'd turn black).
 */
export async function convertImage(file: File, target: ImageMime, quality = 0.92): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const { width, height } = clampToSafeCanvasSize(bitmap.width, bitmap.height);
  const { canvas, ctx } = createCanvas(width, height);
  if (target === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  try {
    return await encodeCanvas(canvas, target, quality);
  } finally {
    releaseCanvas(canvas);
  }
}
