import type { PDFDocumentProxy } from "pdfjs-dist";
import { MAX_CANVAS_PIXELS, releaseCanvas } from "@/lib/canvas-limits";

// pdfjs-dist references browser-only globals (DOMMatrix, etc.) at module
// scope, which breaks if it's ever evaluated during SSR. Loading it lazily
// via dynamic import keeps it out of any server-rendered code path — these
// functions only ever run inside a client-side event handler.
let pdfjsLibPromise: Promise<typeof import("pdfjs-dist")> | null = null;

async function getPdfjsLib() {
  if (!pdfjsLibPromise) {
    pdfjsLibPromise = import("pdfjs-dist").then((pdfjsLib) => {
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url,
      ).toString();
      return pdfjsLib;
    });
  }
  return pdfjsLibPromise;
}

/**
 * PDF.js paces its canvas rendering with requestAnimationFrame, which
 * browsers throttle or fully pause for backgrounded/non-visible tabs. That
 * would silently stall a conversion if a user switches tabs while it runs.
 * Rendering is a background computation, not a display animation, so we
 * swap in a fixed setTimeout-based scheduler for the duration of the
 * render call instead of relying on the display refresh cycle.
 *
 * Reentrant via a depth counter: multiple pages/files can render
 * concurrently (e.g. several PDFs uploaded at once), and only the
 * outermost caller may patch/restore the real rAF. Without the counter,
 * whichever concurrent call finishes first would restore the native rAF
 * while another was still mid-render, silently reintroducing the hang.
 */
let rafPatchDepth = 0;
let originalRaf: typeof window.requestAnimationFrame | null = null;
let originalCancelRaf: typeof window.cancelAnimationFrame | null = null;

async function withoutRequestAnimationFrame<T>(fn: () => Promise<T>): Promise<T> {
  if (rafPatchDepth === 0) {
    originalRaf = window.requestAnimationFrame;
    originalCancelRaf = window.cancelAnimationFrame;
    window.requestAnimationFrame = ((callback: FrameRequestCallback) =>
      window.setTimeout(() => callback(performance.now()), 16)) as typeof window.requestAnimationFrame;
    window.cancelAnimationFrame = ((handle: number) =>
      window.clearTimeout(handle)) as typeof window.cancelAnimationFrame;
  }
  rafPatchDepth++;
  try {
    return await fn();
  } finally {
    rafPatchDepth--;
    if (rafPatchDepth === 0 && originalRaf && originalCancelRaf) {
      window.requestAnimationFrame = originalRaf;
      window.cancelAnimationFrame = originalCancelRaf;
      originalRaf = null;
      originalCancelRaf = null;
    }
  }
}

export async function loadPdfDocument(file: File): Promise<PDFDocumentProxy> {
  const pdfjsLib = await getPdfjsLib();
  const buffer = await file.arrayBuffer();
  return pdfjsLib.getDocument({
    data: buffer,
    // Real-world PDFs (scans, government/school documents, anything with
    // non-Latin text) very often reference standard system fonts and CID
    // character maps instead of embedding everything. Without these, pdf.js
    // can fail to parse or render such documents entirely — a minimal
    // Latin-text test PDF never exercises this path, which is why it went
    // unnoticed until real user files failed in production. Assets copied
    // from pdfjs-dist into public/pdfjs at build time (see public/pdfjs).
    cMapUrl: "/pdfjs/cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "/pdfjs/standard_fonts/",
  }).promise;
}

/**
 * True when a PDF failed to load specifically because it's encrypted with a
 * password. Unlike pdf-lib (used elsewhere for merge/rotate/compress, which
 * can proceed past a nominal owner-password via `ignoreEncryption`), pdf.js
 * has no way to render genuinely password-protected content without the
 * password — that's a real, expected limitation, not corruption, so callers
 * should show a distinct, accurate message instead of a generic read error.
 */
export function isPdfPasswordError(error: unknown): boolean {
  return Boolean(error) && typeof error === "object" && (error as { name?: unknown }).name === "PasswordException";
}

/** Renders a single PDF page to a canvas at the given scale (1 = CSS pixel size). */
export async function renderPageToCanvas(
  pdf: PDFDocumentProxy,
  pageNumber: number,
  scale: number,
): Promise<HTMLCanvasElement> {
  const page = await pdf.getPage(pageNumber);
  let viewport = page.getViewport({ scale });
  const requestedPixels = viewport.width * viewport.height;
  if (requestedPixels > MAX_CANVAS_PIXELS) {
    const safeScale = scale * Math.sqrt(MAX_CANVAS_PIXELS / requestedPixels);
    viewport = page.getViewport({ scale: safeScale });
  }
  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(viewport.width);
  canvas.height = Math.ceil(viewport.height);
  const canvasContext = canvas.getContext("2d");
  if (!canvasContext) throw new Error("Canvas 2D context is not supported in this browser");
  try {
    await withoutRequestAnimationFrame(
      () => page.render({ canvasContext, viewport, canvas: null }).promise,
    );
  } finally {
    page.cleanup();
  }
  return canvas;
}

function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Failed to encode canvas"))),
      type,
      quality,
    );
  });
}

/** Renders the first page of a PDF to a small JPEG thumbnail data URL. */
export async function renderPdfThumbnail(file: File, maxDimension = 160): Promise<string> {
  const pdf = await loadPdfDocument(file);
  try {
    const page = await pdf.getPage(1);
    const baseViewport = page.getViewport({ scale: 1 });
    const scale = maxDimension / Math.max(baseViewport.width, baseViewport.height);
    const canvas = await renderPageToCanvas(pdf, 1, scale);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
    releaseCanvas(canvas);
    return dataUrl;
  } finally {
    await pdf.cleanup();
  }
}

export interface PageThumbnail {
  pageNumber: number;
  dataUrl: string;
}

/** Renders a small JPEG thumbnail data URL for every page of a PDF. */
export async function renderAllPageThumbnails(
  file: File,
  maxDimension = 140,
): Promise<PageThumbnail[]> {
  const pdf = await loadPdfDocument(file);
  try {
    const total = pdf.numPages;
    const thumbnails: PageThumbnail[] = [];
    for (let pageNumber = 1; pageNumber <= total; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const baseViewport = page.getViewport({ scale: 1 });
      const scale = maxDimension / Math.max(baseViewport.width, baseViewport.height);
      const canvas = await renderPageToCanvas(pdf, pageNumber, scale);
      thumbnails.push({ pageNumber, dataUrl: canvas.toDataURL("image/jpeg", 0.75) });
      releaseCanvas(canvas);
    }
    return thumbnails;
  } finally {
    await pdf.cleanup();
  }
}

export interface RenderedPage {
  pageNumber: number;
  blob: Blob;
}

/** Renders every page of a PDF to a JPEG blob at the given scale/quality. */
export async function renderPdfToJpegs(
  file: File,
  scale: number,
  quality: number,
  onProgress?: (rendered: number, total: number) => void,
): Promise<RenderedPage[]> {
  const pdf = await loadPdfDocument(file);
  try {
    const total = pdf.numPages;
    const pages: RenderedPage[] = [];
    for (let pageNumber = 1; pageNumber <= total; pageNumber++) {
      const canvas = await renderPageToCanvas(pdf, pageNumber, scale);
      const blob = await canvasToBlob(canvas, "image/jpeg", quality);
      releaseCanvas(canvas);
      pages.push({ pageNumber, blob });
      onProgress?.(pageNumber, total);
    }
    return pages;
  } finally {
    await pdf.cleanup();
  }
}
