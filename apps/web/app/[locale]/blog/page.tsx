import type { Metadata } from "next";
import { isValidLocale, toArticleLocale } from "@tampdf/config";
import { notFound } from "next/navigation";
import { BlogPostCard } from "@/components/article/blog-post-card";
import { StaticPage } from "@/components/static-page";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildStaticPageMetadata } from "@/lib/static-page-metadata";
import { getPayloadClient } from "@/lib/payload-client";
import type { Post } from "@/payload/payload-types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const dict = getDictionary(isValidLocale(rawLocale) ? rawLocale : "en");
  return buildStaticPageMetadata(
    rawLocale,
    "/blog",
    dict.staticPages.blog.title,
    dict.staticPages.blog.intro,
  );
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const dict = getDictionary(locale);
  // Articles are only localized in English/Arabic in Payload (see
  // `toArticleLocale`) -- every other UI language still reads them in
  // English, the site's own chrome around them stays fully translated.
  const articleLocale = toArticleLocale(locale);

  // A failed query must NOT turn into an empty list: this page is prerendered
  // and cached (ISR), so an empty result caused by a database error would be
  // stored and shown as "this page is temporary" until the next revalidation.
  // Letting the error propagate makes Next.js keep serving the last good page
  // and retry on the next revalidation. The placeholder below is therefore
  // shown only when the query succeeded and there really are no articles.
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" } },
    sort: "-publishedDate",
    locale: articleLocale,
    depth: 1,
    limit: 50,
  });
  const posts = result.docs as Post[];

  return (
    <StaticPage
      locale={locale}
      title={dict.staticPages.blog.title}
      isPlaceholder={posts.length === 0}
      centerTitle
      contentMaxWidth="6xl"
    >
      {posts.length > 0 && (
        <div className="not-prose grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} locale={locale} />
          ))}
        </div>
      )}
    </StaticPage>
  );
}
