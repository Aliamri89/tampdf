import { getSettings } from "@/lib/get-settings";
import { GoogleAnalytics } from "./google-analytics";
import { MicrosoftClarity } from "./microsoft-clarity";

/**
 * Renders every configured third-party analytics/tracking script exactly
 * once for the entire app. Mounted from the root `[locale]` layout (the
 * only layout above every frontend page and locale), so it is shared
 * across every page and every locale automatically -- nothing per-page
 * needs to import or gate this itself.
 *
 * No duplicate injection on client-side navigation: Next.js's App Router
 * only re-runs a layout when its own route segment changes. `[locale]`'s
 * layout doesn't change between pages under the same locale (only its
 * `children` prop/`<main>` content does), so this component -- and the
 * `<Script>` tags it renders -- mount once per full page load and then
 * stay mounted for the rest of the client-side session, exactly like
 * `<Header>` or `<Footer>` beside it.
 *
 * `getSettings()` is wrapped in React's `cache()` (see lib/get-settings.ts),
 * so calling it here is NOT a second database round-trip: the layout's own
 * `generateMetadata` already calls it for the same request/render, and this
 * call is deduped against that one -- the settings document is fetched
 * once per request no matter how many places read it.
 *
 * Each provider below is a small, self-contained component that renders
 * nothing when its id/key is unset (see GoogleAnalytics / MicrosoftClarity),
 * so this list stays a flat, unconditional set of providers -- no `if`
 * branches to maintain here as more are added.
 *
 * To add another provider later (e.g. Meta Pixel, Plausible):
 *   1. Add its id/key field to the `analytics` group in
 *      apps/web/payload/globals/Settings.ts.
 *   2. Create a component next to this file (e.g. meta-pixel.tsx) that
 *      takes that id as a prop and renders nothing when it's falsy --
 *      copy the shape of google-analytics.tsx / microsoft-clarity.tsx.
 *   3. Render it below, reading its value from `settings.analytics`.
 */
export async function AnalyticsScripts() {
  const settings = await getSettings();
  const { ga4MeasurementId, clarityProjectId } = settings.analytics ?? {};

  return (
    <>
      <GoogleAnalytics measurementId={ga4MeasurementId} />
      <MicrosoftClarity projectId={clarityProjectId} />
    </>
  );
}

