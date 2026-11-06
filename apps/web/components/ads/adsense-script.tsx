import Script from "next/script";
import { getServices } from "@/lib/services";

/**
 * Loads Google's AdSense library once for the whole site (mounted in the
 * locale layout). Renders nothing unless AdSense is switched on and has a
 * publisher id (admin ▸ Services, or NEXT_PUBLIC_ADSENSE_CLIENT as fallback).
 *
 * Consent for visitors in the EEA, UK and Switzerland must go through a
 * Google-certified consent platform; the simplest is Google's own message
 * (AdSense ▸ Privacy & messaging), which this script displays by itself —
 * no extra code is needed here.
 */
export async function AdSenseScript() {
  const { adsense } = await getServices();
  if (!adsense.client) return null;
  return (
    <Script
      id="adsense-lib"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense.client}`}
      crossOrigin="anonymous"
    />
  );
}
