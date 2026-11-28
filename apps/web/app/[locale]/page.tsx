import {
  getLocalizedCategories,
  getLocalizedSiteConfig,
  getLocalizedTools,
  isValidLocale,
  toArticleLocale,
} from "@tampdf/config";
import { notFound } from "next/navigation";
import { BlogPostCard } from "@/components/article/blog-post-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroUploader } from "@/components/home/hero-uploader";
import { HighlightedText } from "@/components/home/highlighted-text";
import {
  AboutSection,
  HowSection,
  SectionLink,
  WhySection,
} from "@/components/home/home-sections";
import { ToolsGrid, type GridTool } from "@/components/home/tools-grid";
import { PageBackdrop } from "@/components/page-backdrop";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/i18n/get-dictionary";
import { getFaqs, type FaqItem } from "@/lib/faqs";
import { sortForPicker } from "@/lib/home-order";
import { safeJsonLd } from "@/lib/json-ld";
import { getPayloadClient } from "@/lib/payload-client";
import type { Post } from "@/payload/payload-types";

const LATEST_POSTS = 3;
const HOME_FAQS = 5;

/**
 * The newest published articles, for the "From the blog" strip. Supplementary
 * content: a database problem must not take the tools down with it, so a
 * failure here degrades to an empty list (unlike the blog page itself, where
 * an empty list would be the whole point of the page and is rethrown).
 */
async function getLatestPosts(locale: "en" | "ar"): Promise<Post[]> {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "posts",
      where: { status: { equals: "published" } },
      sort: "-publishedDate",
      locale,
      depth: 1,
      limit: LATEST_POSTS,
    });
    return docs as Post[];
  } catch (error) {
    console.error("HomePage: could not load the latest posts, hiding that section:", error);
    return [];
  }
}

async function getHomeFaqs(locale: "en" | "ar"): Promise<FaqItem[]> {
  const faqs = await getFaqs(locale);
  return faqs.slice(0, HOME_FAQS);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const dict = getDictionary(locale);
  const siteConfig = getLocalizedSiteConfig(locale);
  const highlight = dict.home.heroHighlight;
  // Articles and FAQs exist in English/Arabic only; other languages read the English ones.
  const articleLocale = toArticleLocale(locale);

  // Every tool in the shared registry (never a separate list), most-used first.
  const tools: GridTool[] = sortForPicker(getLocalizedTools(locale)).map((tool) => ({
    slug: tool.slug,
    name: tool.shortName ?? tool.name,
    icon: tool.icon,
    category: tool.category,
  }));

  const imageLabel =
    getLocalizedCategories(locale).find((category) => category.id === "image")?.name ?? "Image Tools";

  const [posts, faqs] = await Promise.all([
    getLatestPosts(articleLocale),
    getHomeFaqs(articleLocale),
  ]);

  // Identifies the site itself (name, logo, search) for search engines; the
  // FAQ block is marked up so the same questions can show in search results.
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    inLanguage: locale,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.svg`,
    },
  };
  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(siteJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      )}
      <PageBackdrop />

      <Container maxWidth="3xl" className="pt-14 text-center sm:pt-20">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <span aria-hidden className="h-px w-8 shrink-0 bg-brand-500 sm:w-16" />
          <p className="text-lg font-semibold leading-snug text-foreground/85 sm:text-xl">
            <HighlightedText text={dict.home.hero.badge} highlight={highlight} />
          </p>
          <span aria-hidden className="h-px w-8 shrink-0 bg-brand-500 sm:w-16" />
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          <HighlightedText text={dict.home.hero.title} highlight={highlight} />
        </h1>

        <div className="mx-auto mt-6 max-w-2xl sm:mt-8">
          {/* Says what the box below actually does, since it is one specific tool. */}
          <p className="mb-2.5 text-sm font-semibold uppercase tracking-wide text-foreground/50">
            {dict.home.quickStart}
          </p>
          <HeroUploader />
        </div>
      </Container>

      {/* `id`s kept for the footer's "+N more" column links (`#pdf` / `#image`). */}
      <section id="pdf" className="scroll-mt-20 pb-6 pt-16 sm:pt-24">
        <span id="image" className="sr-only" aria-hidden />
        <Container>
          <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-foreground sm:mb-8 sm:text-3xl">
            {dict.home.moreTools}
          </h2>
          <ToolsGrid locale={locale} tools={tools} imageLabel={imageLabel} />
        </Container>
      </section>

      <WhySection dict={dict} />
      <HowSection dict={dict} />
      <AboutSection dict={dict} />

      {posts.length > 0 && (
        <section className="border-t border-border bg-surface-muted/40 py-14 sm:py-16">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {dict.home.latest.heading}
                </h2>
                <p className="mt-1.5 text-[15px] text-foreground/65">{dict.home.latest.subtitle}</p>
              </div>
              <SectionLink href={`/${locale}/blog`} label={dict.home.latest.cta} />
            </div>
            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} locale={locale} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="py-14 sm:py-16">
          <Container maxWidth="3xl">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {dict.home.faq.heading}
            </h2>
            <div className="mt-7">
              <FaqAccordion items={faqs} />
            </div>
            <p className="mt-6 text-center">
              <SectionLink href={`/${locale}/faq`} label={dict.home.faq.cta} />
            </p>
          </Container>
        </section>
      )}
    </>
  );
}
