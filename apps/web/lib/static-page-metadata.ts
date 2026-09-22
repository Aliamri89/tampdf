import type { Metadata } from "next";
import { isValidLocale, locales } from "@tampdf/config";

/** Builds locale-aware metadata (title, description, hreflang alternates) for a static informational page. */
export function buildStaticPageMetadata(
  rawLocale: string,
  path: string,
  title: string,
  description: string,
): Metadata {
  // Languages without their own dictionary render the English content, so
  // their canonical URL points at the real `/en` page instead of claiming
  // an independent (but actually duplicate) `/xx` page.
  const canonicalLocale = isValidLocale(rawLocale) ? rawLocale : "en";
  const canonical = `/${canonicalLocale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
        "x-default": `/en${path}`,
      },
    },
    openGraph: { title, description, url: canonical },
    twitter: { title, description },
  };
}
