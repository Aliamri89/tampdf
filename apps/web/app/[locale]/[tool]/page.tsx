import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Lock } from "lucide-react";
import {
  getLocalizedCategory,
  getLocalizedRelatedTools,
  getLocalizedSiteConfig,
  getLocalizedTool,
  isValidLocale,
  locales,
  tools,
} from "@tampdf/config";
import { Icon } from "@/components/icon";
import { PageBackdrop } from "@/components/page-backdrop";
import { ToolCard } from "@/components/tools/tool-card";
import { ToolWorkspace } from "@/components/tools/workspace-map";
import { AccordionItem } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/i18n/get-dictionary";
import { safeJsonLd } from "@/lib/json-ld";
import { getToolAccent } from "@/lib/tool-accent";

export function generateStaticParams() {
  return tools.map((tool) => ({ tool: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, tool: slug } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const tool = getLocalizedTool(slug, locale);
  if (!tool) return {};
  const dict = getDictionary(locale);

  const title = `${tool.name} ${dict.tool.metaTitleSuffix}`;
  const description = tool.shortDescription;
  const path = `/${tool.slug}`;

  return {
    title,
    description,
    keywords: tool.keywords,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
        "x-default": `/en${path}`,
      },
    },
    openGraph: { title, description, url: `/${locale}${path}` },
    twitter: { title, description },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}) {
  const { locale: rawLocale, tool: slug } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const tool = getLocalizedTool(slug, locale);
  if (!tool) notFound();

  const dict = getDictionary(locale);
  const siteConfig = getLocalizedSiteConfig(locale);
  const category = getLocalizedCategory(tool.category, locale);
  const relatedTools = getLocalizedRelatedTools(tool, locale);
  const accent = getToolAccent(tool.slug);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${siteConfig.name} ${tool.name}`,
    applicationCategory: "Utility",
    operatingSystem: "Any (web-based)",
    description: tool.shortDescription,
    url: `${siteConfig.url}/${locale}/${tool.slug}`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(softwareJsonLd) }}
      />

      <PageBackdrop />

      {/* Re-points the --brand-* scale at this tool's accent colour, so the
          workspace (buttons, dropzone, selections, focus rings) matches its
          homepage card. Header, footer and the rest of the site keep the
          TAMPDF red. */}
      <div style={accent.vars}>
        <Container className="pt-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-foreground/50"
          >
            <Link href={`/${locale}`} className="hover:text-foreground">
              {dict.breadcrumb.home}
            </Link>
            {category && (
              <>
                <ChevronRight size={14} className="rtl:rotate-180" />
                <Link href={`/${locale}#${category.id}`} className="hover:text-foreground">
                  {category.name}
                </Link>
              </>
            )}
            <ChevronRight size={14} className="rtl:rotate-180" />
            <span className="text-foreground/80">{tool.name}</span>
          </nav>
        </Container>

        <Container className="pt-7 pb-8 text-center">
          <div className="relative mx-auto h-16 w-16">
            <span
              aria-hidden
              className="absolute -inset-4 rounded-full bg-brand-200/50 blur-2xl dark:bg-brand-500/20"
            />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-lg shadow-brand-500/15 ring-1 ring-brand-100 dark:bg-surface dark:text-brand-400 dark:ring-brand-500/25">
              <Icon name={tool.icon} size={30} strokeWidth={2.1} />
            </span>
          </div>
          <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            {tool.name}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-foreground/60">{tool.shortDescription}</p>
          <p className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/75 px-3.5 py-1.5 text-xs font-medium text-foreground/60 ring-1 ring-border backdrop-blur dark:bg-surface/70">
            <Lock size={13} className="text-brand-500" /> {dict.tool.processedClient}
          </p>
        </Container>

        <Container maxWidth="3xl" className="pb-14">
          <div className="rounded-[1.75rem] bg-linear-to-b from-brand-100/80 via-brand-50/40 to-white/30 p-1.5 shadow-xl shadow-brand-500/10 ring-1 ring-brand-100/80 dark:from-brand-500/15 dark:via-brand-500/5 dark:to-transparent dark:ring-brand-500/20">
            <ToolWorkspace slug={tool.slug} />
          </div>
        </Container>

        <Container maxWidth="3xl" className="pb-14">
          <div className="space-y-4 rounded-3xl border border-white/80 bg-white/70 p-6 text-foreground/70 shadow-sm backdrop-blur-sm sm:p-8 dark:border-border dark:bg-surface/70">
            {tool.longDescription.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>

        <Container maxWidth="3xl" className="pb-14">
          <h2 className="text-xl font-bold">{dict.tool.faqHeading}</h2>
          <div className="mt-5 space-y-3">
            {tool.faq.map((item, i) => (
              <AccordionItem key={item.question} question={item.question} defaultOpen={i === 0}>
                {item.answer}
              </AccordionItem>
            ))}
          </div>
        </Container>

        {relatedTools.length > 0 && (
          <Container className="pb-20">
            <h2 className="text-xl font-bold">{dict.tool.relatedHeading}</h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTools.map((related) => (
                <ToolCard key={related.slug} tool={related} locale={locale} />
              ))}
            </div>
          </Container>
        )}
      </div>
    </>
  );
}
