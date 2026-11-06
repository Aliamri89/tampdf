import { ADSENSE_CLIENT, adsTxtLine } from "@/lib/ads";

// Authorises Google to sell this site's ad inventory (https://tampdf.com/ads.txt).
// Only exists once NEXT_PUBLIC_ADSENSE_CLIENT is configured.
export function GET() {
  if (!ADSENSE_CLIENT) return new Response("Not found", { status: 404 });
  return new Response(`${adsTxtLine(ADSENSE_CLIENT)}\n`, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
