/**
 * Google AdSense configuration. Everything is opt-in through build-time
 * environment variables: with none set the site renders no ad code, no ad
 * space and no ads.txt, exactly as before.
 *
 *   NEXT_PUBLIC_ADSENSE_CLIENT      publisher id, "ca-pub-1234567890123456"
 *   NEXT_PUBLIC_ADSENSE_SLOT_TOOL   ad unit id (digits) for tool pages
 *   NEXT_PUBLIC_ADSENSE_SLOT_BLOG   ad unit id (digits) for blog articles
 *
 * The publisher id is public by design (it is in every page that shows ads).
 */
const CLIENT_PATTERN = /^ca-pub-\d{10,20}$/;
const SLOT_PATTERN = /^\d{6,20}$/;

function valid(value: string | undefined, pattern: RegExp): string | null {
  const trimmed = value?.trim();
  return trimmed && pattern.test(trimmed) ? trimmed : null;
}

export const ADSENSE_CLIENT = valid(process.env.NEXT_PUBLIC_ADSENSE_CLIENT, CLIENT_PATTERN);

export const AD_SLOTS = {
  tool: valid(process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL, SLOT_PATTERN),
  blog: valid(process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG, SLOT_PATTERN),
} as const;

export type AdPlacement = keyof typeof AD_SLOTS;

/** ads.txt line that authorises Google to sell this site's inventory. */
export function adsTxtLine(client: string): string {
  return `google.com, ${client.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0`;
}
