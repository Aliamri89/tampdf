import Script from "next/script";
import {
  CONSENT_REQUIRED_COUNTRIES_SOURCE,
  CONSENT_REQUIRED_ZONES_SOURCE,
  CONSENT_STORAGE_KEY,
} from "@/lib/consent-region";

/**
 * Google Consent Mode v2 defaults. Runs before any Google tag (gtag.js for GA4
 * and the AdSense library) so each starts in the right state. lib/consent.ts
 * then sends the matching `gtag('consent', 'update', …)` as soon as it is known
 * who decides (see the comment there).
 *
 *  - AdSense active (Google's CMP may show a message): the visitor's region
 *    is not known yet — Google's CMP decides it — so EVERYTHING starts
 *    "denied". Nothing is granted until the CMP answers (or, if it does not,
 *    until our fallback has decided).
 *  - AdSense not active (no CMP can exist): the fallback region guess
 *    applies at once — time zone or language region, see lib/consent-region.ts.
 *    Where consent is required everything starts "denied"; elsewhere "granted";
 *    a saved choice wins for analytics_storage.
 *
 * `cmp` (AdSense active) and `analytics` (GA4/Clarity active) come from the
 * server (lib/services.ts) and are also published as `window.__tampdfConsent`
 * for lib/consent.ts.
 *
 * It also creates Google's `googlefc.callbackQueue`, the documented way to be
 * told when the CMP is ready, before the CMP script can load.
 *
 * `wait_for_update` gives an update a moment to arrive before tags send data.
 * Same `beforeInteractive` approach as ThemeInitScript (root layout only).
 */
function buildScript(cmp: boolean, analytics: boolean): string {
  return `
(function () {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  var cmp = ${JSON.stringify(cmp)};
  // Read by lib/consent.ts: which services are active on this site (set by the server, not build-time).
  window.__tampdfConsent = { cmp: cmp, analytics: ${JSON.stringify(analytics)} };
  if (cmp) {
    window.googlefc = window.googlefc || {};
    window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
  }
  var required = true;
  try {
    var zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    required = !zone || zone === "UTC" || zone === "Etc/UTC" || new RegExp(${JSON.stringify(CONSENT_REQUIRED_ZONES_SOURCE)}).test(zone);
    if (!required) {
      var countries = new RegExp(${JSON.stringify(CONSENT_REQUIRED_COUNTRIES_SOURCE)});
      var tags = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
      for (var i = 0; i < tags.length && !required; i++) {
        var parts = String(tags[i]).split(/[-_]/).slice(1);
        for (var j = 0; j < parts.length; j++) {
          if (/^[A-Za-z]{2}$/.test(parts[j]) && countries.test(parts[j].toUpperCase())) { required = true; break; }
        }
      }
    }
  } catch (e) {}
  var stored = null;
  try { stored = window.localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)}); } catch (e) {}
  var analytics = !cmp && (stored === "granted" || (stored !== "denied" && !required)) ? "granted" : "denied";
  var ads = !cmp && !required ? "granted" : "denied";
  window.gtag("consent", "default", {
    analytics_storage: analytics,
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
    wait_for_update: 500
  });
  window.gtag("set", "ads_data_redaction", true);
})();
`;
}

export function ConsentModeDefaults({ cmp, analytics }: { cmp: boolean; analytics: boolean }) {
  // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document -- App Router root layout, as in ThemeInitScript.
  return <Script id="consent-mode-defaults" strategy="beforeInteractive">{buildScript(cmp, analytics)}</Script>;
}
