import {
  getLocalizedCategories,
  getLocalizedComingSoonByCategory,
  getLocalizedSiteConfig,
  getLocalizedToolsByCategory,
  isValidLocale,
  type Locale,
} from "@tampdf/config";
import { notFound } from "next/navigation";
import { ComingSoonCard } from "@/components/tools/coming-soon-card";
import { ToolCard } from "@/components/tools/tool-card";
import { Container } from "@/components/ui/container";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  const siteConfig = getLocalizedSiteConfig(locale);
  const categoriesData = getLocalizedCategories(locale).map((category) => ({
    category,
    realTools: getLocalizedToolsByCategory(category.id, locale),
    comingSoon: getLocalizedComingSoonByCategory(category.id, locale),
  }));
  const maxCount = Math.max(...categoriesData.map((c) => c.realTools.length));

  return (
    <div id="tools" className="pb-14">
      <Container className="pt-6 pb-3 text-center sm:pt-7">
        <h1 className="mx-auto text-xl font-semibold tracking-tight sm:text-2xl">
          {siteConfig.tagline}
        </h1>
        <p className="mx-auto mt-1.5 max-w-2xl text-sm text-foreground/60">
          {siteConfig.description}
        </p>
      </Container>

      {categoriesData.map(({ category, realTools, comingSoon }) => {
        if (realTools.length === 0 && comingSoon.length === 0) return null;
        const placeholders = comingSoon.slice(0, Math.max(0, maxCount - realTools.length));

        return (
          <section key={category.id} id={category.id} className="scroll-mt-16 pt-6">
            <Container>
              <h2 className="text-center text-xs font-semibold tracking-wider text-foreground/40 uppercase">
                {category.name}
              </h2>
              <div className="mx-auto mt-3 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {realTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} locale={locale} />
                ))}
                {placeholders.map((tool) => (
                  <ComingSoonCard key={tool.id} tool={tool} locale={locale} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
