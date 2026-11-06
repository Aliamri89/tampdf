import Script from "next/script";
import {
  CONSENT_REQUIRED_COUNTRIES_SOURCE,
  CONSENT_REQUIRED_ZONES_SOURCE,
  CONSENT_STORAGE_KEY,
} from "@/lib/consent-region";

/**
 * Google Consent Mode v2 defaults. Runs before any Google tag (gtag.js for GA4
 * and the AdSense library) so each starts in the right state:
 *
 *  - Where consent is required (time zone or language region, see
 *    lib/consent-region.ts) everything starts
 *    "denied": no analytics or advertising storage, no ad personalisation.
 *  - Elsewhere everything starts "granted".
 *  - A saved choice in this browser wins for analytics_storage. The banner only
 *    asks about analytics, so the ad_* signals are never granted from it; if
 *    Google's own consent message is enabled in AdSense (Privacy & messaging),
 *    that message sends the ad_* updates itself.
 *
 * lib/consent.ts sends `gtag('consent', 'update', …)` when the visitor changes
 * their choice. `wait_for_update` gives such an update a moment to arrive
 * before tags send anything.
 *
 * Same `beforeInteractive` approach as ThemeInitScript (root layout only).
 */
const script = `
(function () {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
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
  var analytics = stored === "granted" || (stored !== "denied" && !required) ? "granted" : "denied";
  var ads = required ? "denied" : "granted";
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

export function ConsentModeDefaults() {
  // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document -- App Router root layout, as in ThemeInitScript.
  return <Script id="consent-mode-defaults" strategy="beforeInteractive">{script}</Script>;
}
