"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { Locale } from "@tampdf/config";
import { trackPageVisit } from "@/lib/analytics";

/** Reports a page view on first mount and on every client-side route change. */
export function AnalyticsBeacon({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  useEffect(() => {
    trackPageVisit(locale);
  }, [pathname, locale]);

  return null;
}
