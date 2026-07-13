import sharp from "sharp";
import { getLocalizedSiteConfig, isValidLocale, type Locale } from "@tampdf/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function escapeXml(value: string): string {
  return value.replace(
    /[<>&'"]/g,
    (char) =>
      ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[char] as string,
  );
}

/**
 * Rendered via `sharp`'s own SVG rasterizer rather than `next/og`'s
 * ImageResponse (Satori + resvg-wasm) — that pipeline hits a libvips
 * colourspace crash in this environment. Sharp's direct SVG-to-PNG path
 * doesn't go through the same code and renders reliably.
 */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? (rawLocale as Locale) : "en";
  const siteConfig = getLocalizedSiteConfig(locale);
  const isRtl = locale === "ar";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size.width}" height="${size.height}">
      <rect width="${size.width}" height="${size.height}" fill="#fdfdfd"/>
      <rect x="552" y="235" width="96" height="96" rx="24" fill="#ed0a0a"/>
      <text x="600" y="297" font-family="Arial, sans-serif" font-size="44" font-weight="700" fill="#ffffff" text-anchor="middle">T</text>
      <text x="600" y="420" font-family="Arial, sans-serif" font-size="64" font-weight="700" text-anchor="middle"><tspan fill="#1a1a1a">TAM</tspan><tspan fill="#ed0a0a">PDF</tspan></text>
      <text x="600" y="466" font-family="Arial, sans-serif" font-size="28" fill="#5c5c5c" text-anchor="middle" direction="${isRtl ? "rtl" : "ltr"}">${escapeXml(siteConfig.tagline)}</text>
    </svg>
  `;

  const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
}
