import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale, type Locale } from "@tampdf/config";
import { notFound } from "next/navigation";
import { StaticPage } from "@/components/static-page";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildStaticPageMetadata } from "@/lib/static-page-metadata";
import { getPayloadClient } from "@/lib/payload-client";
import type { Media, Post } from "@/payload/payload-types";

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

function formatPublishedDate(value: string | null | undefined, locale: Locale): string {
  if (!value) return "";
  return new Date(value).toLocaleDateString(locale === "ar" ? "ar" : "en-US", {
    dateStyle: "medium",
  });
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

  const payload = await getPayloadClient();
  const { docs: posts } = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" } },
    sort: "-publishedDate",
    locale,
    depth: 1,
    limit: 50,
  });

  return (
    <StaticPage
      locale={locale}
      title={dict.staticPages.blog.title}
      isPlaceholder={posts.length === 0}
    >
      {posts.length === 0 ? (
        <p>{dict.staticPages.blog.intro}</p>
      ) : (
        <div className="not-prose grid grid-cols-1 gap-5 sm:grid-cols-2">
          {(posts as Post[]).map((post) => {
            const image = post.featuredImage as Media | number | null | undefined;
            const imageUrl = image && typeof image === "object" ? image.url : null;
            return (
              <Link
                key={post.id}
                href={`/${locale}/blog/${post.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-brand-300"
              >
                {imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element -- CMS-hosted image, arbitrary origin
                  <img
                    src={imageUrl}
                    alt={image && typeof image === "object" ? image.alt : ""}
                    className="h-40 w-full object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="font-semibold text-foreground group-hover:text-brand-600">
                    {post.title}
                  </h2>
                  {post.publishedDate && (
                    <p className="mt-1 text-xs text-foreground/50">
                      {formatPublishedDate(post.publishedDate, locale)}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </StaticPage>
  );
}
