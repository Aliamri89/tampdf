import Script from "next/script";
import { ADSENSE_CLIENT } from "@/lib/ads";

/**
 * Loads Google's AdSense library once for the whole site (mounted in the
 * locale layout). Renders nothing unless NEXT_PUBLIC_ADSENSE_CLIENT is set.
 *
 * Consent for visitors in the EEA, UK and Switzerland must go through a
 * Google-certified consent platform; the simplest is Google's own message
 * (AdSense ▸ Privacy & messaging), which this script displays by itself —
 * no extra code is needed here.
 */
export function AdSenseScript() {
  if (!ADSENSE_CLIENT) return null;
  return (
    <Script
      id="adsense-lib"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
    />
  );
}
