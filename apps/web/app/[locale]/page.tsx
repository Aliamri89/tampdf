import {
  getLocalizedCategories,
  getLocalizedSiteConfig,
  getLocalizedToolsByCategory,
  isValidLocale,
  type Locale,
} from "@tampdf/config";
import { notFound } from "next/navigation";
import { BackToTop } from "@/components/home/back-to-top";
import { QuickBar, type QuickBarItem } from "@/components/home/quick-bar";
import { ToolSection } from "@/components/home/tool-section";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  const siteConfig = getLocalizedSiteConfig(locale);
  const dict = getDictionary(locale);
  const categories = getLocalizedCategories(locale).map((category) => ({
    category,
    tools: getLocalizedToolsByCategory(category.id, locale),
  }));

  const quickItems: QuickBarItem[] = [
    { key: "allTools", label: dict.home.quickBar.allTools, kind: "scroll", target: "tools" },
    { key: "compressPdf", label: dict.home.quickBar.compressPdf, kind: "link", target: "compress-pdf" },
    { key: "mergePdf", label: dict.home.quickBar.mergePdf, kind: "link", target: "merge-pdf" },
    { key: "convertPdf", label: dict.home.quickBar.convertPdf, kind: "link", target: "pdf-to-jpg" },
    { key: "imageTools", label: dict.home.quickBar.imageTools, kind: "scroll", target: "image" },
    { key: "rotatePdf", label: dict.home.quickBar.rotatePdf, kind: "link", target: "rotate-pdf" },
  ];

  return (
    <div id="tools" className="scroll-mt-20 pb-16">
      <Container className="pt-8 pb-4 text-center sm:pt-10">
        <h1 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {siteConfig.tagline}
        </h1>
        <p className="mx-auto mt-2.5 max-w-2xl text-sm leading-relaxed text-foreground/60 sm:text-base">
          {siteConfig.description}
        </p>
      </Container>

      <Container className="pb-9">
        <QuickBar locale={locale} items={quickItems} />
      </Container>

      <Container className="space-y-6">
        {categories.map(({ category, tools }) =>
          tools.length === 0 ? null : (
            <ToolSection key={category.id} category={category} tools={tools} locale={locale} />
          ),
        )}
      </Container>

      <div className="mt-14 flex justify-center">
        <BackToTop label={dict.home.backToTop} />
      </div>
    </div>
  );
}
