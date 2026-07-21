"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 `page_view` event on the initial page load and again on every
 * client-side navigation (next/link, router.push, back/forward, etc).
 *
 * GA4's own automatic pageview -- normally sent the instant `gtag('config',
 * ...)` runs -- is turned off (`send_page_view: false`, set in
 * GoogleAnalytics' init script) specifically so this component can be the
 * ONE place that ever calls `gtag('event', 'page_view', ...)`, for both the
 * very first render and every later route change. One code path, one event
 * per navigation: there's no second source that could double-fire it.
 *
 * Mirrors this codebase's existing `AnalyticsBeacon` (internal pageview
 * logging) in shape and cost: a route-change effect, nothing more.
 *
 * `useSearchParams()` requires a Suspense boundary in the App Router --
 * without one, Next.js forces the whole route to opt out of static
 * rendering at build time. The parent (GoogleAnalytics) provides that
 * boundary; this file only needs to exist inside it.
 */
export function GA4PageviewTracker({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  // Read as a string (not the searchParams object itself) so the effect
  // below only re-runs on an actual query-string change, not merely a new
  // URLSearchParams instance with identical content.
  const queryString = useSearchParams().toString();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const path = queryString ? `${pathname}?${queryString}` : pathname;

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_path: path,
      page_location: window.location.href,
      send_to: measurementId,
    });
  }, [pathname, queryString, measurementId]);

  return null;
}

