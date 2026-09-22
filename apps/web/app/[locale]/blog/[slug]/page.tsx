import type { Metadata } from "next";
import Link from "next/link";
import { cache } from "react";
import { ChevronRight } from "lucide-react";
import { getLocalizedSiteConfig, isValidLocale, locales, toArticleLocale } from "@tampdf/config";
import { notFound } from "next/navigation";
import { ArticleCta } from "@/components/article/article-cta";
import { ArticleImage } from "@/components/article/article-image";
import { ArticleMeta } from "@/components/article/article-meta";
import { ArticlePagination } from "@/components/article/article-pagination";
import { RelatedArticles } from "@/components/article/related-articles";
import { TableOfContents } from "@/components/article/table-of-contents";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  calculateReadingMinutes,
  getAdjacentPosts,
  getLastUpdatedDate,
  getOgImage,
  getPostImage,
  getRelatedPosts,
  resolveArticleCta,
  shouldShowToc,
} from "@/lib/article";
import { safeJsonLd } from "@/lib/json-ld";
import { getPayloadClient } from "@/lib/payload-client";
import { articleProseClassName } from "@/lib/prose";
import { richTextToArticleContent } from "@/lib/richtext";
import { getSettings } from "@/lib/get-settings";
import type { Post } from "@/payload/payload-types";

// `cache()`-wrapped so `generateMetadata` and the page body — which both
// need the same post — share a single `find` call per request instead of
// querying twice.
const getPost = cache(async (slug: string, locale: "en" | "ar"): Promise<Post | null> => {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "posts",
      where: { slug: { equals: slug }, status: { equals: "published" } },
      locale,
      depth: 1,
      limit: 1,
    });
    return (docs[0] as Post | undefined) ?? null;
  } catch (error) {
    // Database unreachable or not yet migrated — treat as not-found rather
    // than failing the page.
    console.error(`getPost(${slug}) failed, treating as not found:`, error);
    return null;
  }
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const uiLocale = isValidLocale(rawLocale) ? rawLocale : "en";
  const articleLocale = toArticleLocale(uiLocale);
  const post = await getPost(slug, articleLocale);
  if (!post) return {};

  const siteConfig = getLocalizedSiteConfig(articleLocale);
  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt || undefined;
  const ogImage = getOgImage(post);
  const path = `/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${articleLocale}${path}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
        "x-default": `/en${path}`,
      },
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/${articleLocale}${path}`,
      publishedTime: post.publishedDate ?? post.createdAt,
      modifiedTime: post.updatedAt,
      images: ogImage
        ? [
            {
              url: new URL(ogImage.url, siteConfig.url).toString(),
              width: ogImage.width ?? undefined,
              height: ogImage.height ?? undefined,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [new URL(ogImage.url, siteConfig.url).toString()] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const uiLocale = rawLocale;
  // Articles are only localized in English/Arabic in Payload -- the rest of
  // the page (breadcrumb labels, nav) stays in the visitor's real chosen
  // language via `uiDict`, but the article itself, its metadata, and its
  // related/adjacent posts are all fetched and linked in `articleLocale`.
  const articleLocale = toArticleLocale(uiLocale);
  const uiDict = getDictionary(uiLocale);
  const dict = getDictionary(articleLocale);
  const post = await getPost(slug, articleLocale);
  if (!post) notFound();

  const siteConfig = getLocalizedSiteConfig(articleLocale);
  const image = getPostImage(post);
  const { html, headings, wordCount } = richTextToArticleContent(post.content);
  const readingMinutes = calculateReadingMinutes(wordCount);
  const showToc = shouldShowToc(headings, wordCount);
  // The TOC only lists top-level sections; shouldShowToc above still uses
  // the full H2+H3 count to decide whether the article is long/structured
  // enough to need one at all.
  const tocHeadings = headings.filter((item) => item.level === 2);
  const lastUpdatedDate = getLastUpdatedDate(post);
  const cta = resolveArticleCta(post, articleLocale, dict);

  const [{ previous, next }, relatedPosts, settings] = await Promise.all([
    getAdjacentPosts(post, articleLocale),
    getRelatedPosts(post, articleLocale),
    getSettings(),
  ]);

  const canonicalUrl = `${siteConfig.url}/${articleLocale}/blog/${post.slug}`;
  const articleJsonLd = buildArticleJsonLd({
    post,
    locale: articleLocale,
    url: canonicalUrl,
    imageUrl: getOgImage(post)?.url ?? null,
    description: post.seo?.metaDescription || post.excerpt || undefined,
    settings,
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd({ locale: articleLocale, dict, post });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />

      <Container className="pt-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-foreground/50"
        >
          <Link href={`/${uiLocale}`} className="shrink-0 hover:text-foreground">
            {uiDict.breadcrumb.home}
          </Link>
          <ChevronRight size={14} className="shrink-0 rtl:rotate-180" />
          <Link href={`/${uiLocale}/blog`} className="shrink-0 hover:text-foreground">
            {uiDict.staticPages.blog.title}
          </Link>
          <ChevronRight size={14} className="shrink-0 rtl:rotate-180" />
          <span className="min-w-0 truncate text-foreground/80">{post.title}</span>
        </nav>
      </Container>

      <Container maxWidth="3xl" className="py-10">
        <article>
          <header>
            <h1 className="break-words text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
            <ArticleMeta
              locale={articleLocale}
              dict={dict}
              publishedDate={post.publishedDate ?? null}
              updatedDate={lastUpdatedDate}
              readingMinutes={readingMinutes}
            />

            {image && (
              <ArticleImage
                image={image}
                priority
                className="mt-6 aspect-[16/9] w-full rounded-xl border border-border"
              />
            )}
          </header>

          {post.excerpt?.trim() && (
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">{post.excerpt}</p>
          )}

          {showToc && (
            <div className="mt-8">
              <TableOfContents headings={tocHeadings} heading={dict.article.tocHeading} />
            </div>
          )}

          <div
            className={`${showToc ? "" : "mt-8"} ${articleProseClassName}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {cta && (
            <div className="mt-14">
              <ArticleCta cta={cta} locale={articleLocale} />
            </div>
          )}
        </article>

        <div className="mt-12">
          <ArticlePagination
            previous={previous}
            next={next}
            locale={articleLocale}
            previousLabel={dict.article.previousArticle}
            nextLabel={dict.article.nextArticle}
          />
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <RelatedArticles posts={relatedPosts} locale={articleLocale} heading={dict.article.relatedHeading} />
          </div>
        )}
      </Container>
    </>
  );
}
