import { clampToSafeCanvasSize, releaseCanvas } from "@/lib/canvas-limits";

const SUPPORTED_OUTPUT_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

/** Rotates an image by a multiple of 90 degrees entirely client-side via the canvas API, preserving its original format. */
export async function rotateImage(file: File, degrees: number): Promise<Blob> {
  const normalized = ((degrees % 360) + 360) % 360;
  const bitmap = await createImageBitmap(file);
  const { width: drawWidth, height: drawHeight } = clampToSafeCanvasSize(bitmap.width, bitmap.height);
  const swapDimensions = normalized === 90 || normalized === 270;
  const canvas = document.createElement("canvas");
  canvas.width = swapDimensions ? drawHeight : drawWidth;
  canvas.height = swapDimensions ? drawWidth : drawHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser");

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((normalized * Math.PI) / 180);
  ctx.drawImage(bitmap, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
  bitmap.close();

  const outputType = SUPPORTED_OUTPUT_TYPES.has(file.type) ? file.type : "image/png";
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, outputType, outputType === "image/png" ? undefined : 1),
  );
  releaseCanvas(canvas);
  if (!blob) throw new Error("Failed to rotate image");
  return blob;
}
