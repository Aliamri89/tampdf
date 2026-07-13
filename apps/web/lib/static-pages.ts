import type { Locale } from "@tampdf/config";
import type { Metadata } from "next";
import { getPayloadClient } from "@/lib/payload-client";
import { buildStaticPageMetadata } from "@/lib/static-page-metadata";
import type { StaticPage as StaticPageDoc } from "@/payload/payload-types";

export type StaticPageKey =
  | "about-us"
  | "contact-us"
  | "privacy-policy"
  | "terms-of-service"
  | "cookie-policy"
  | "faq";

async function findStaticPage(key: StaticPageKey, locale: Locale): Promise<StaticPageDoc | null> {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "static-pages",
      where: { key: { equals: key } },
      locale,
      limit: 1,
    });
    return (docs[0] as StaticPageDoc | undefined) ?? null;
  } catch (error) {
    // Database unreachable or not yet migrated. Callers already treat a
    // null doc as "no CMS content yet" and fall back to dictionary copy.
    console.error(`findStaticPage(${key}) failed, falling back to dictionary content:`, error);
    return null;
  }
}

export async function getStaticPageContent(key: StaticPageKey, locale: Locale) {
  const doc = await findStaticPage(key, locale);
  return doc;
}

/** Falls back to the existing dictionary title/description when no CMS content has been entered yet. */
export async function getStaticPageMetadata(
  key: StaticPageKey,
  rawLocale: string,
  locale: Locale,
  path: string,
  fallbackTitle: string,
  fallbackDescription: string,
): Promise<Metadata> {
  const doc = await findStaticPage(key, locale);
  const title = doc?.seo?.seoTitle || doc?.title || fallbackTitle;
  const description = doc?.seo?.seoDescription || fallbackDescription;
  return buildStaticPageMetadata(rawLocale, path, title, description);
}
