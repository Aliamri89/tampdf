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

export function getPostImageUrl(post: Post): string | null {
  return getPostImage(post)?.url ?? null;
}

/** OG/Twitter image: explicit `seo.ogImage` first, else the featured image, preferring the pre-cropped 1200x630 "og" size. */
export function getOgImageUrl(post: Post): string | null {
  const source = (post.seo?.ogImage ?? post.featuredImage) as Media | number | null | undefined;
  if (!source || typeof source !== "object") return null;
  return source.sizes?.og?.url ?? source.url ?? null;
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
    const [previousResult, nextResult] = await Promise.all([
      payload.find({
        collection: "posts",
        where: {
          status: { equals: "published" },
          publishedDate: { less_than: post.publishedDate },
        },
        sort: "-publishedDate",
        locale,
        depth: 0,
        limit: 1,
      }),
      payload.find({
        collection: "posts",
        where: {
          status: { equals: "published" },
          publishedDate: { greater_than: post.publishedDate },
        },
        sort: "publishedDate",
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

export async function getRelatedPosts(post: Post, locale: Locale, limit = 3): Promise<Post[]> {
  const manualIds = (post.relatedPosts ?? [])
    .map((related) => (typeof related === "object" ? related.id : related))
    .filter((id) => id !== post.id);

  try {
    const payload = await getPayloadClient();

    if (manualIds.length > 0) {
      const result = await payload.find({
        collection: "posts",
        where: { id: { in: manualIds }, status: { equals: "published" } },
        locale,
        depth: 1,
        limit,
      });
      return result.docs as Post[];
    }

    const result = await payload.find({
      collection: "posts",
      where: { status: { equals: "published" }, id: { not_equals: post.id } },
      sort: "-publishedDate",
      locale,
      depth: 1,
      limit,
    });
    return result.docs as Post[];
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
  if (!tool) return null;

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
