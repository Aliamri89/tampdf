import { adsTxtLine } from "@/lib/ads";
import { getServices } from "@/lib/services";

// Authorises Google to sell this site's ad inventory (https://tampdf.com/ads.txt).
// Only exists while AdSense is switched on and has a publisher id (admin ▸
// Services, or NEXT_PUBLIC_ADSENSE_CLIENT as fallback).
export async function GET() {
  const { adsense } = await getServices();
  if (!adsense.client) return new Response("Not found", { status: 404 });
  return new Response(`${adsTxtLine(adsense.client)}\n`, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
