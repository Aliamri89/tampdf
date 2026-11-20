"use client";

import { useToolRef, useToolState } from "@/components/tools/use-tool-state";
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
/** `scope` names the tool, so its loaded PDF is kept when the visitor leaves and comes back (see use-tool-state). */
export function usePdfSource(mode: "count" | "thumbnails" | "preview", scope: string) {
  const [file, setFile] = useToolState<File | null>(`${scope}:file`, null);
  const [pageCount, setPageCount] = useToolState(`${scope}:pageCount`, 0);
  const [thumbs, setThumbs] = useToolState<PageThumbnail[]>(`${scope}:thumbs`, []);
  const [preview, setPreview] = useToolState<PagePreview | null>(`${scope}:preview`, null);
  const [loading, setLoading] = useToolState(`${scope}:loading`, false);
  const [readError, setReadError] = useToolState<PdfReadError>(`${scope}:readError`, null);
  const tokenRef = useToolRef(`${scope}:token`, 0);

  async function load(next: File) {
    const current = ++tokenRef.current;
    setFile(next);
    setPageCount(0);
    setThumbs([]);
    setPreview(null);
    setReadError(null);
    setLoading(true);
    try {
      if (mode === "thumbnails") {
        const pages = await renderAllPageThumbnails(next);
        if (current !== tokenRef.current) return;
        setThumbs(pages);
        setPageCount(pages.length);
      } else if (mode === "preview") {
        const result = await renderFirstPagePreview(next);
        if (current !== tokenRef.current) return;
        setPreview(result);
        setPageCount(result.pageCount);
      } else {
        const count = await countPdfPages(next);
        if (current !== tokenRef.current) return;
        setPageCount(count);
      }
    } catch (err) {
      if (current !== tokenRef.current) return;
      setReadError(isPdfPasswordError(err) ? "password" : "generic");
    } finally {
      if (current === tokenRef.current) setLoading(false);
    }
  }

  function clear() {
    tokenRef.current++;
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
