import { getLocalizedSiteConfig, getLocalizedTool, type Locale, type ToolDefinition } from "@tampdf/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/format";
import { getPayloadClient } from "@/lib/payload-client";
import type { ArticleHeading } from "@/lib/richtext";
import type { Media, Post, Setting } from "@/payload/payload-types";

const WORDS_PER_MINUTE = 200;

/** Rounded up to the nearest minute, minimum 1 — matches how every major reading-time convention rounds. */
export function calculateReadingMinutes(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

/** Shared by every date display on the blog (article header, post cards). */
export function formatArticleDate(value: string, locale: Locale): string {
  return new Date(value).toLocaleDateString(locale === "ar" ? "ar" : "en-US", {
    dateStyle: "medium",
  });
}

/** 1 and 2 minutes need their own template (singular/dual, most pronounced in Arabic); 3+ shares one plural template. */
export function formatReadingTime(dict: Dictionary, minutes: number): string {
  if (minutes === 1) return dict.article.readingTimeOne;
  if (minutes === 2) return dict.article.readingTimeTwo;
  return t(dict.article.readingTime, { minutes });
}

/**
 * The TOC only earns its screen space on articles that are both long
 * enough to need in-page navigation and structured enough for that
 * navigation to be useful.
 */
export function shouldShowToc(headings: ArticleHeading[], wordCount: number): boolean {
  return headings.length >= 3 && wordCount >= 400;
}

export function getPostImage(post: Post): Media | null {
  const image = post.featuredImage;
  return image && typeof image === "object" ? image : null;
}

export interface OgImage {
  url: string;
  width: number | null;
  height: number | null;
}

/**
 * The image used for OG/Twitter meta AND the Article JSON-LD `image` field
 * (both call this, so they can never disagree on which image the post is
 * "really" using). Explicit `seo.ogImage` first, else the featured image;
 * prefers the pre-cropped 1200x630 "og" size, falling back to the original
 * upload's own dimensions when that size hasn't been generated (e.g. a
 * source image too small to upscale) rather than lying about its size.
 */
export function getOgImage(post: Post): OgImage | null {
  const source = (post.seo?.ogImage ?? post.featuredImage) as Media | number | null | undefined;
  if (!source || typeof source !== "object") return null;

  const og = source.sizes?.og;
  if (og?.url) return { url: og.url, width: og.width ?? 1200, height: og.height ?? 630 };

  return source.url ? { url: source.url, width: source.width ?? null, height: source.height ?? null } : null;
}

/**
 * `updatedAt` changes on every save (including trivial edits), so it's
 * only shown as a distinct "last updated" date when it's meaningfully
 * later than the published date — otherwise every fresh post would show
 * two identical dates.
 */
export function getLastUpdatedDate(post: Post): string | null {
  if (!post.publishedDate) return null;
  const updated = new Date(post.updatedAt).getTime();
  const published = new Date(post.publishedDate).getTime();
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  return updated - published > ONE_DAY_MS ? post.updatedAt : null;
}

export async function getAdjacentPosts(
  post: Post,
  locale: Locale,
): Promise<{ previous: Post | null; next: Post | null }> {
  if (!post.publishedDate) return { previous: null, next: null };

  try {
    const payload = await getPayloadClient();
    // `id` is a secondary sort key so posts sharing the exact same
    // `publishedDate` (e.g. bulk-published together) still resolve a
    // deterministic previous/next instead of excluding each other via a
    // strict `less_than`/`greater_than` on the tied timestamp.
    const [previousResult, nextResult] = await Promise.all([
      payload.find({
        collection: "posts",
        where: {
          status: { equals: "published" },
          id: { not_equals: post.id },
          publishedDate: { less_than_equal: post.publishedDate },
        },
        sort: ["-publishedDate", "-id"],
        locale,
        depth: 0,
        limit: 1,
      }),
      payload.find({
        collection: "posts",
        where: {
          status: { equals: "published" },
          id: { not_equals: post.id },
          publishedDate: { greater_than_equal: post.publishedDate },
        },
        sort: ["publishedDate", "id"],
        locale,
        depth: 0,
        limit: 1,
      }),
    ]);
    return {
      previous: (previousResult.docs[0] as Post | undefined) ?? null,
      next: (nextResult.docs[0] as Post | undefined) ?? null,
    };
  } catch (error) {
    console.error(`getAdjacentPosts(${post.slug}) failed, treating as none:`, error);
    return { previous: null, next: null };
  }
}

async function getAutoRelatedPosts(post: Post, locale: Locale, limit: number): Promise<Post[]> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" }, id: { not_equals: post.id } },
    sort: "-publishedDate",
    locale,
    depth: 1,
    limit,
  });
  return result.docs as Post[];
}

export async function getRelatedPosts(post: Post, locale: Locale, limit = 3): Promise<Post[]> {
  const manualIds = (post.relatedPosts ?? [])
    .map((related) => (typeof related === "object" ? related.id : related))
    .filter((id) => id !== post.id);

  try {
    if (manualIds.length > 0) {
      const payload = await getPayloadClient();
      const result = await payload.find({
        collection: "posts",
        where: { id: { in: manualIds }, status: { equals: "published" } },
        locale,
        depth: 1,
        limit,
      });
      const docs = result.docs as Post[];
      if (docs.length > 0) {
        // `where: id in [...]` doesn't preserve list order, so re-sort to
        // match the order the editor curated in the relationship field —
        // otherwise "Related articles" can silently ignore their picks.
        const byId = new Map(docs.map((doc) => [doc.id, doc]));
        return manualIds.map((id) => byId.get(id)).filter((doc): doc is Post => Boolean(doc));
      }
      // Every manually-picked post is gone/unpublished — fall back to
      // auto-select rather than showing an empty section, matching what
      // the admin UI's field description ("leave empty to auto-select")
      // implies should happen when there's effectively nothing curated.
    }

    return await getAutoRelatedPosts(post, locale, limit);
  } catch (error) {
    console.error(`getRelatedPosts(${post.slug}) failed, falling back to empty list:`, error);
    return [];
  }
}

export interface ArticleCta {
  tool: ToolDefinition;
  heading: string;
  body: string;
  buttonLabel: string;
}

/** Returns null when the post has no `relatedTool` set — the CTA section simply doesn't render. */
export function resolveArticleCta(post: Post, locale: Locale, dict: Dictionary): ArticleCta | null {
  if (!post.relatedTool) return null;
  const tool = getLocalizedTool(post.relatedTool, locale);
  if (!tool) {
    // relatedTool is stored as a slug string, decoupled from `@tampdf/config`'s
    // actual tool list — this only fires if that slug was since renamed/removed.
    console.error(`resolveArticleCta(${post.slug}): unresolvable relatedTool "${post.relatedTool}"`);
    return null;
  }

  return {
    tool,
    heading: post.cta?.heading || t(dict.article.ctaDefaultHeading, { tool: tool.name }),
    body: post.cta?.body || tool.shortDescription,
    buttonLabel: post.cta?.buttonLabel || tool.actionLabel,
  };
}

export function buildArticleJsonLd({
  post,
  locale,
  url,
  imageUrl,
  description,
  settings,
}: {
  post: Post;
  locale: Locale;
  url: string;
  imageUrl: string | null;
  description: string | undefined;
  settings: Setting;
}) {
  const siteConfig = getLocalizedSiteConfig(locale);
  const logo = settings.logo && typeof settings.logo === "object" ? settings.logo.url : null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    image: imageUrl ? [new URL(imageUrl, siteConfig.url).toString()] : undefined,
    datePublished: post.publishedDate ?? post.createdAt,
    dateModified: post.updatedAt,
    inLanguage: locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: settings.siteName || siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: settings.siteName || siteConfig.name,
      logo: logo ? { "@type": "ImageObject", url: new URL(logo, siteConfig.url).toString() } : undefined,
    },
  };
}

export function buildBreadcrumbJsonLd({
  locale,
  dict,
  post,
}: {
  locale: Locale;
  dict: Dictionary;
  post: Post;
}) {
  const siteConfig = getLocalizedSiteConfig(locale);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.breadcrumb.home, item: `${siteConfig.url}/${locale}` },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.staticPages.blog.title,
        item: `${siteConfig.url}/${locale}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteConfig.url}/${locale}/blog/${post.slug}`,
      },
    ],
  };
}
