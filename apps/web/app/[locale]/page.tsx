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
import { PageBackdrop } from "@/components/page-backdrop";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/i18n/get-dictionary";
import { sortForHome } from "@/lib/home-order";

/** Colours the highlight phrase of the tagline (e.g. "in one place") without changing its text. */
function Tagline({ text, highlight }: { text: string; highlight: string }) {
  const index = text.indexOf(highlight);
  if (!highlight || index === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <span className="text-brand-500">{highlight}</span>
      {text.slice(index + highlight.length)}
    </>
  );
}

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
    tools: sortForHome(getLocalizedToolsByCategory(category.id, locale)),
  }));

  const quickItems: QuickBarItem[] = [
    { key: "allTools", label: dict.home.quickBar.allTools, href: "#tool-sections", icon: "grid", tone: "brand" },
    { key: "compressPdf", label: dict.home.quickBar.compressPdf, href: `/${locale}/compress-pdf`, icon: "compress", tone: "emerald" },
    { key: "convertPdf", label: dict.home.quickBar.convertPdf, href: `/${locale}/pdf-to-jpg`, icon: "convert", tone: "sky" },
    { key: "mergePdf", label: dict.home.quickBar.mergePdf, href: `/${locale}/merge-pdf`, icon: "merge", tone: "orange" },
    { key: "imageTools", label: dict.home.quickBar.imageTools, href: "#image", icon: "image", tone: "violet" },
    { key: "rotatePdf", label: dict.home.quickBar.rotatePdf, href: `/${locale}/rotate-pdf`, icon: "rotate", tone: "blue" },
  ];

  return (
    <>
      <PageBackdrop />
      <div id="tools" className="scroll-mt-20 pb-12">
        <Container maxWidth="wide" className="pt-9 pb-6 text-center sm:pt-12 sm:pb-8">
          <h1 className="mx-auto max-w-3xl text-[1.7rem] font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
            <Tagline text={siteConfig.tagline} highlight={dict.home.heroHighlight} />
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60 sm:text-base">
            {siteConfig.description}
          </p>
        </Container>

        <Container maxWidth="wide" className="pb-8 sm:pb-10">
          <QuickBar items={quickItems} />
        </Container>

        <Container maxWidth="wide" id="tool-sections" className="scroll-mt-20 space-y-6">
          {categories.map(({ category, tools }) =>
            tools.length === 0 ? null : (
              <ToolSection key={category.id} category={category} tools={tools} locale={locale} />
            ),
          )}
        </Container>

        <div className="mt-12 flex justify-center">
          <BackToTop label={dict.home.backToTop} />
        </div>
      </div>
    </>
  );
}
