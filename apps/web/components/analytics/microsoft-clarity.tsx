import Script from "next/script";

/** Clarity project ids are short alphanumeric strings, e.g. "abc1d2efgh". */
const CLARITY_ID_PATTERN = /^[a-zA-Z0-9]+$/;

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
      `}
    </Script>
  );
}

