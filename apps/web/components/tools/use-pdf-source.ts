"use client";

import { useRef, useState } from "react";
import {
  countPdfPages,
  isPdfPasswordError,
  renderAllPageThumbnails,
  renderFirstPagePreview,
  type PagePreview,
  type PageThumbnail,
} from "@/lib/pdf/render";

export type PdfReadError = "password" | "generic" | null;

/**
 * Loads a single PDF for a workspace: its page count plus, depending on
 * `mode`, a thumbnail per page or a page-1 preview. A newer load (or a
 * reset) always wins over one still in flight.
 */
export function usePdfSource(mode: "count" | "thumbnails" | "preview") {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [thumbs, setThumbs] = useState<PageThumbnail[]>([]);
  const [preview, setPreview] = useState<PagePreview | null>(null);
  const [loading, setLoading] = useState(false);
  const [readError, setReadError] = useState<PdfReadError>(null);
  const token = useRef(0);

  async function load(next: File) {
    const current = ++token.current;
    setFile(next);
    setPageCount(0);
    setThumbs([]);
    setPreview(null);
    setReadError(null);
    setLoading(true);
    try {
      if (mode === "thumbnails") {
        const pages = await renderAllPageThumbnails(next);
        if (current !== token.current) return;
        setThumbs(pages);
        setPageCount(pages.length);
      } else if (mode === "preview") {
        const result = await renderFirstPagePreview(next);
        if (current !== token.current) return;
        setPreview(result);
        setPageCount(result.pageCount);
      } else {
        const count = await countPdfPages(next);
        if (current !== token.current) return;
        setPageCount(count);
      }
    } catch (err) {
      if (current !== token.current) return;
      setReadError(isPdfPasswordError(err) ? "password" : "generic");
    } finally {
      if (current === token.current) setLoading(false);
    }
  }

  function clear() {
    token.current++;
    setFile(null);
    setPageCount(0);
    setThumbs([]);
    setPreview(null);
    setReadError(null);
    setLoading(false);
  }

  return {
    file,
    pageCount,
    thumbs,
    preview,
    loading,
    readError,
    ready: Boolean(file) && !loading && !readError && pageCount > 0,
    load,
    clear,
  };
}
