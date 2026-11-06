"use client";

import { useEffect, useState } from "react";
import { isPdfPasswordError, renderPdfThumbnail } from "@/lib/pdf/render";

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
          const url = await renderPdfThumbnail(file, 240);
          if (!cancelled) setState({ file, url });
        } else if (isImage(file)) {
          await Promise.resolve();
          if (cancelled) return;
          objectUrl = URL.createObjectURL(file);
          setState({ file, url: objectUrl });
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
