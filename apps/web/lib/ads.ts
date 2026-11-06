/**
 * Google AdSense: shared formats and the environment-variable FALLBACK.
 *
 * The settings that are actually used come from the admin panel (Services ▸
 * AdSense) with these variables behind them — see lib/services.ts, which is the
 * only place that merges the two. Read the merged result from there; do not use
 * the ENV_* values below directly in components.
 *
 *   NEXT_PUBLIC_ADSENSE_CLIENT      publisher id, "ca-pub-1234567890123456"
 *   NEXT_PUBLIC_ADSENSE_SLOT_TOOL   ad unit id (digits) for tool pages
 *   NEXT_PUBLIC_ADSENSE_SLOT_BLOG   ad unit id (digits) for blog articles
 *
 * The publisher id is public by design (it is in every page that shows ads).
 */
export const ADSENSE_CLIENT_PATTERN = /^ca-pub-\d{10,20}$/;
export const ADSENSE_SLOT_PATTERN = /^\d{6,20}$/;

/** The trimmed value if it matches the pattern, otherwise null. */
export function validAdsenseValue(value: string | null | undefined, pattern: RegExp): string | null {
  const trimmed = value?.trim();
  return trimmed && pattern.test(trimmed) ? trimmed : null;
}

export const ENV_ADSENSE_CLIENT = validAdsenseValue(
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT,
  ADSENSE_CLIENT_PATTERN,
);

export const ENV_AD_SLOTS = {
  tool: validAdsenseValue(process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL, ADSENSE_SLOT_PATTERN),
  blog: validAdsenseValue(process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG, ADSENSE_SLOT_PATTERN),
} as const;

export type AdPlacement = keyof typeof ENV_AD_SLOTS;

/** ads.txt line that authorises Google to sell this site's inventory. */
export function adsTxtLine(client: string): string {
  return `google.com, ${client.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0`;
}
