import Script from "next/script";
import { CLARITY_ID_PATTERN } from "@/lib/services";

/**
 * Renders Microsoft Clarity's loader snippet. No-ops when `projectId` is
 * falsy or malformed, mirroring `GoogleAnalytics` -- see that file for why.
 */
export function MicrosoftClarity({ projectId }: { projectId?: string | null }) {
  if (!projectId) return null;

  if (!CLARITY_ID_PATTERN.test(projectId)) {
    console.error(
      `[MicrosoftClarity] Ignoring malformed Clarity Project ID (expected alphanumeric): ${projectId}`,
    );
    return null;
  }

  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${projectId}");
        // This script only runs after the visitor accepted analytics. Pass that
        // on to Clarity's consent API (advertising storage is never granted).
        window.clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });
      `}
    </Script>
  );
}

