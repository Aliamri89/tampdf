import { releaseCanvas } from "@/lib/canvas-limits";

export interface WatermarkImage {
  bytes: Uint8Array;
  width: number;
  height: number;
  dataUrl: string;
}

const FONT_PX = 160;

/** True if the text contains Hebrew/Arabic-script characters (incl. presentation forms). */
function hasRtlScript(text: string): boolean {
  for (const char of text) {
    const code = char.codePointAt(0) ?? 0;
    if (
      (code >= 0x0590 && code <= 0x08ff) ||
      (code >= 0xfb1d && code <= 0xfdff) ||
      (code >= 0xfe70 && code <= 0xfefc)
    ) {
      return true;
    }
  }
  return false;
}

/**
 * Renders watermark text to a transparent PNG with the browser's own text
 * engine. The standard PDF fonts can't encode Arabic (or any non-Latin)
 * text, and embedding a font would need an extra library — the canvas
 * already shapes Arabic correctly using the site's loaded font.
 */
export async function renderWatermarkText(
  text: string,
  color: string,
  fontFamily: string,
): Promise<WatermarkImage> {
  await document.fonts?.ready;
  const font = `700 ${FONT_PX}px ${fontFamily}`;

  const probe = document.createElement("canvas");
  const probeCtx = probe.getContext("2d");
  if (!probeCtx) throw new Error("Canvas is not supported in this browser");
  probeCtx.font = font;
  const padding = FONT_PX * 0.25;
  const width = Math.min(8000, Math.ceil(probeCtx.measureText(text).width + padding * 2));
  const height = Math.ceil(FONT_PX * 1.5);
  releaseCanvas(probe);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser");
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.direction = hasRtlScript(text) ? "rtl" : "ltr";
  ctx.fillText(text, width / 2, height / 2, width - padding * 2);

  const dataUrl = canvas.toDataURL("image/png");
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
  releaseCanvas(canvas);
  if (!blob) throw new Error("Failed to render watermark");
  return { bytes: new Uint8Array(await blob.arrayBuffer()), width, height, dataUrl };
}
