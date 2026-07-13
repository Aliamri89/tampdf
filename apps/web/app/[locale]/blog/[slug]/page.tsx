import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { isValidLocale, locales, type Locale } from "@tampdf/config";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/i18n/get-dictionary";
import { getPayloadClient } from "@/lib/payload-client";
import { richTextToHtml } from "@/lib/richtext";
import type { Media, Post } from "@/payload/payload-types";

async function getPost(slug: string, locale: Locale): Promise<Post | null> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug }, status: { equals: "published" } },
    locale,
    depth: 1,
    limit: 1,
  });
  return (docs[0] as Post | undefined) ?? null;
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

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || undefined;
  const ogImageSource = (post.seo?.ogImage ?? post.featuredImage) as Media | number | null | undefined;
  const ogImageUrl =
    ogImageSource && typeof ogImageSource === "object" ? ogImageSource.url : undefined;
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
      title,
      description,
      url: `/${locale}${path}`,
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
    },
    twitter: {
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
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

  const image = post.featuredImage as Media | number | null | undefined;
  const imageUrl = image && typeof image === "object" ? image.url : null;
  const publishedDate = post.publishedDate
    ? new Date(post.publishedDate).toLocaleDateString(locale === "ar" ? "ar" : "en-US", {
        dateStyle: "medium",
      })
    : null;

  return (
    <>
      <Container className="pt-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-foreground/50"
        >
          <Link href={`/${locale}`} className="hover:text-foreground">
            {dict.breadcrumb.home}
          </Link>
          <ChevronRight size={14} className="rtl:rotate-180" />
          <Link href={`/${locale}/blog`} className="hover:text-foreground">
            {dict.staticPages.blog.title}
          </Link>
          <ChevronRight size={14} className="rtl:rotate-180" />
          <span className="text-foreground/80">{post.title}</span>
        </nav>
      </Container>

      <Container className="mx-auto max-w-2xl py-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
        {publishedDate && <p className="mt-3 text-sm text-foreground/50">{publishedDate}</p>}

        {imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element -- CMS-hosted image, arbitrary origin
          <img
            src={imageUrl}
            alt={image && typeof image === "object" ? image.alt : ""}
            className="mt-6 w-full rounded-xl border border-border object-cover"
          />
        )}

        <div
          className="prose-content mt-6 space-y-4 leading-relaxed text-foreground/80 [&_a]:text-brand-600 [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:ms-5 [&_ol]:list-decimal [&_p]:leading-relaxed [&_ul]:list-disc"
          dangerouslySetInnerHTML={{ __html: richTextToHtml(post.content) }}
        />
      </Container>
    </>
  );
}
