export interface CompressedImage {
  name: string;
  blob: Blob;
  originalSize: number;
  compressedSize: number;
}

/**
 * Compresses an image entirely client-side via the canvas API.
 * PNGs are re-encoded as PNG (lossless, but canvas re-encoding still
 * often shrinks poorly-optimized source files); JPEG/WebP are re-encoded
 * at the given quality.
 */
export async function compressImage(
  file: File,
  quality: number = 0.7,
): Promise<CompressedImage> {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser");
  ctx.drawImage(bitmap, 0, 0);
  bitmap.close();

  const outputType = file.type === "image/png" ? "image/png" : "image/jpeg";

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, outputType, quality),
  );
  if (!blob) throw new Error("Failed to compress image");

  const finalBlob = blob.size < file.size ? blob : file.slice(0, file.size, file.type);
  const extension = outputType === "image/png" ? "png" : "jpg";
  const baseName = file.name.replace(/\.[^.]+$/, "");

  return {
    name: `${baseName}.${extension}`,
    blob: finalBlob,
    originalSize: file.size,
    compressedSize: finalBlob.size,
  };
}
