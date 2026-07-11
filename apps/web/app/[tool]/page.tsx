import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Lock, ServerCog } from "lucide-react";
import {
  getCategoryById,
  getRelatedTools,
  getToolBySlug,
  siteConfig,
  tools,
} from "@fileati/config";
import { Icon } from "@/components/icon";
import { ToolCard } from "@/components/tools/tool-card";
import { workspaceMap } from "@/components/tools/workspace-map";
import { AccordionItem } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

export function generateStaticParams() {
  return tools.map((tool) => ({ tool: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool: slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  const title = `${tool.name} — Free Online Tool`;
  const description = tool.shortDescription;
  const url = `${siteConfig.url}/${tool.slug}`;

  return {
    title,
    description,
    keywords: tool.keywords,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool: slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const category = getCategoryById(tool.category);
  const relatedTools = getRelatedTools(tool);
  const Workspace = workspaceMap[tool.slug];

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
    url: `${siteConfig.url}/${tool.slug}`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      <Container className="pt-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-foreground/50">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          {category && (
            <>
              <ChevronRight size={14} />
              <Link href={`/#${category.id}`} className="hover:text-foreground">
                {category.name}
              </Link>
            </>
          )}
          <ChevronRight size={14} />
          <span className="text-foreground/80">{tool.name}</span>
        </nav>
      </Container>

      <Container className="pt-6 pb-4 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600">
          <Icon name={tool.icon} size={28} />
        </span>
        <h1 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {tool.name}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-foreground/60">{tool.shortDescription}</p>
        <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50">
          {tool.processing === "client" ? (
            <>
              <Lock size={13} /> Processed in your browser &mdash; files never uploaded
            </>
          ) : (
            <>
              <ServerCog size={13} /> Processed securely on our server &amp; deleted immediately
            </>
          )}
        </p>
      </Container>

      <Container className="mx-auto max-w-2xl pb-16">
        {Workspace && <Workspace />}
      </Container>

      <Container className="mx-auto max-w-2xl pb-16">
        <div className="space-y-4 text-foreground/70">
          {tool.longDescription.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>

      <Container className="mx-auto max-w-2xl pb-16">
        <h2 className="text-xl font-semibold">Frequently asked questions</h2>
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
          <h2 className="text-xl font-semibold">Related tools</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((related) => (
              <ToolCard key={related.slug} tool={related} />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
