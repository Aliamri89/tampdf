import type { Metadata } from "next";
import { isValidLocale, type Locale } from "@tampdf/config";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/article/post-card";
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
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  let posts: Post[] = [];
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "posts",
      where: { status: { equals: "published" } },
      sort: "-publishedDate",
      locale,
      depth: 1,
      limit: 50,
    });
    posts = result.docs as Post[];
  } catch (error) {
    // Database unreachable or not yet migrated — fall back to the empty
    // state below rather than failing the page.
    console.error("BlogPage failed to load posts, falling back to empty list:", error);
  }

  return (
    <StaticPage
      locale={locale}
      title={dict.staticPages.blog.title}
      isPlaceholder={posts.length === 0}
    >
      {posts.length > 0 && (
        <div className="not-prose grid grid-cols-1 gap-5 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} locale={locale} />
          ))}
        </div>
      )}
    </StaticPage>
  );
}
