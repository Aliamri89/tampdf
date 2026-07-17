import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getLocalizedSiteConfig, isValidLocale, locales, type Locale } from "@tampdf/config";
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
  getOgImageUrl,
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

async function getPost(slug: string, locale: Locale): Promise<Post | null> {
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
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isValidLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const post = await getPost(slug, locale);
  if (!post) return {};

  const siteConfig = getLocalizedSiteConfig(locale);
  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt || undefined;
  const ogImageUrl = getOgImageUrl(post);
  const path = `/blog/${post.slug}`;

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
    openGraph: {
      type: "article",
      title,
      description,
      url: `/${locale}${path}`,
      publishedTime: post.publishedDate ?? post.createdAt,
      modifiedTime: post.updatedAt,
      images: ogImageUrl ? [{ url: new URL(ogImageUrl, siteConfig.url).toString(), width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImageUrl ? [new URL(ogImageUrl, siteConfig.url).toString()] : undefined,
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
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const post = await getPost(slug, locale);
  if (!post) notFound();

  const siteConfig = getLocalizedSiteConfig(locale);
  const image = getPostImage(post);
  const { html, headings, wordCount } = richTextToArticleContent(post.content);
  const readingMinutes = calculateReadingMinutes(wordCount);
  const showToc = shouldShowToc(headings, wordCount);
  const lastUpdatedDate = getLastUpdatedDate(post);
  const cta = resolveArticleCta(post, locale, dict);

  const [{ previous, next }, relatedPosts, settings] = await Promise.all([
    getAdjacentPosts(post, locale),
    getRelatedPosts(post, locale),
    getSettings(),
  ]);

  const canonicalUrl = `${siteConfig.url}/${locale}/blog/${post.slug}`;
  const articleJsonLd = buildArticleJsonLd({
    post,
    locale,
    url: canonicalUrl,
    imageUrl: image?.url ?? null,
    description: post.seo?.metaDescription || post.excerpt || undefined,
    settings,
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd({ locale, dict, post });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />

      <Container className="pt-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-foreground/50"
        >
          <Link href={`/${locale}`} className="shrink-0 hover:text-foreground">
            {dict.breadcrumb.home}
          </Link>
          <ChevronRight size={14} className="shrink-0 rtl:rotate-180" />
          <Link href={`/${locale}/blog`} className="shrink-0 hover:text-foreground">
            {dict.staticPages.blog.title}
          </Link>
          <ChevronRight size={14} className="shrink-0 rtl:rotate-180" />
          <span className="min-w-0 truncate text-foreground/80">{post.title}</span>
        </nav>
      </Container>

      <Container maxWidth="2xl" className="py-10">
        <article>
          <header>
            <h1 className="break-words text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
            <ArticleMeta
              locale={locale}
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

          {showToc && <div className="mt-8"><TableOfContents headings={headings} heading={dict.article.tocHeading} /></div>}

          <div
            className={`${showToc ? "" : "mt-8"} ${articleProseClassName}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {cta && (
            <div className="mt-10">
              <ArticleCta cta={cta} locale={locale} />
            </div>
          )}
        </article>

        <div className="mt-12">
          <ArticlePagination
            previous={previous}
            next={next}
            locale={locale}
            previousLabel={dict.article.previousArticle}
            nextLabel={dict.article.nextArticle}
          />
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <RelatedArticles posts={relatedPosts} locale={locale} heading={dict.article.relatedHeading} />
          </div>
        )}
      </Container>
    </>
  );
}
