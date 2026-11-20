"use client";

import { useEffect, useState } from "react";
import { createLimiter } from "@/lib/concurrency";
import { isPdfPasswordError, renderPdfThumbnail } from "@/lib/pdf/render";

// Image previews are made a few at a time and at list size, instead of
// showing every full-size photo (each decoded at full resolution in memory).
const imageSlot = createLimiter(3);
const IMAGE_THUMBNAIL_WIDTH = 160;

async function makeImageThumbnail(file: File): Promise<string> {
  try {
    const bitmap = await createImageBitmap(file, {
      resizeWidth: IMAGE_THUMBNAIL_WIDTH,
      resizeQuality: "medium",
    });
    const canvas = document.createElement("canvas");
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
    canvas.width = canvas.height = 0;
    if (blob) return URL.createObjectURL(blob);
  } catch {
    // Formats or browsers that can't make a small bitmap: show the file itself.
  }
  return URL.createObjectURL(file);
}

function isPdf(file: File): boolean {
  return file.type === "application/pdf" || /\.pdf$/i.test(file.name);
}

function isImage(file: File): boolean {
  return file.type.startsWith("image/") || /\.(jpe?g|png|webp|gif|bmp|avif)$/i.test(file.name);
}

/**
 * Small preview URL for a picked file: the image itself for images, the first
 * page for PDFs. Returns `null` while it is being made, for other file types,
 * and when it can't be made (e.g. a password-protected PDF), so the caller can
 * show an icon instead. Pass `skip` when the caller already has its own.
 */
export function useFileThumbnail(file: File | null | undefined, skip = false): string | null {
  const [state, setState] = useState<{ file: File; url: string } | null>(null);

  useEffect(() => {
    if (!file || skip) return;
    let cancelled = false;
    let objectUrl: string | null = null;

    (async () => {
      try {
        if (isPdf(file)) {
          const url = await renderPdfThumbnail(file, 120);
          if (!cancelled) setState({ file, url });
        } else if (isImage(file)) {
          const url = await imageSlot(async () => (cancelled ? null : makeImageThumbnail(file)));
          if (!url) return;
          if (cancelled) {
            URL.revokeObjectURL(url);
            return;
          }
          objectUrl = url;
          setState({ file, url });
        }
      } catch (error) {
        // A protected or unreadable PDF just keeps the icon.
        if (!isPdfPasswordError(error)) console.warn("Could not render a file preview", error);
      }
    })();

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [file, skip]);

  return state && state.file === file ? state.url : null;
}
