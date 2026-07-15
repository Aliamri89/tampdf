/**
 * iOS/iPadOS Safari silently caps canvases at 16,777,216 px (4096×4096) of
 * area and enforces a total canvas memory budget shared across every canvas
 * still alive in the tab — undocumented by Apple, never hit in desktop
 * testing, and the reason a render or `toBlob()` call can fail on a real
 * phone for a file that works fine on a laptop. Modern phone cameras
 * routinely exceed this (e.g. many shoot well above 4000×3000). Every
 * canvas created from user-supplied image/PDF data should be clamped to
 * this budget rather than fail outright.
 */
export const MAX_CANVAS_PIXELS = 16_777_216;

/** Scales width/height down (preserving aspect ratio) to fit MAX_CANVAS_PIXELS, if needed. */
export function clampToSafeCanvasSize(
  width: number,
  height: number,
): { width: number; height: number } {
  const pixels = width * height;
  if (pixels <= MAX_CANVAS_PIXELS) return { width, height };
  const scale = Math.sqrt(MAX_CANVAS_PIXELS / pixels);
  return { width: Math.max(1, Math.floor(width * scale)), height: Math.max(1, Math.floor(height * scale)) };
}

/** Releases a canvas's backing memory immediately instead of waiting on GC. */
export function releaseCanvas(canvas: HTMLCanvasElement): void {
  canvas.width = 0;
  canvas.height = 0;
}
