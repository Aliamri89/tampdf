import type { Metadata } from "next";
import { isValidLocale, locales, type Locale } from "@tampdf/config";

/** Builds locale-aware metadata (title, description, hreflang alternates) for a static informational page. */
export function buildStaticPageMetadata(
  rawLocale: string,
  path: string,
  title: string,
  description: string,
): Metadata {
  if (!isValidLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
        "x-default": `/en${path}`,
      },
    },
    openGraph: { title, description, url: `/${locale}${path}` },
    twitter: { title, description },
  };
}
