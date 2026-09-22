import {
  getLocalizedSiteConfig,
  getLocalizedTools,
  isValidLocale,
  type Locale,
} from "@tampdf/config";
import { notFound } from "next/navigation";
import { FeaturesRow } from "@/components/home/features-row";
import { HeroVisuals } from "@/components/home/hero-visuals";
import { ToolPicker } from "@/components/home/tool-picker";
import { PageBackdrop } from "@/components/page-backdrop";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/i18n/get-dictionary";
import { sortForPicker, TOOL_PICKER_ESSENTIALS_COUNT } from "@/lib/home-order";

/** Colours the highlight phrase of the tagline (e.g. "PDF") without changing its text. */
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

  // The picker is deliberately PDF-focused (see the redesign plan): every
  // tool whose category is "pdf", plus the handful of image tools whose
  // *output* is a PDF (e.g. "JPG to PDF"), pulled live from the shared
  // registry rather than a separate hardcoded list.
  const pickerTools = sortForPicker(
    getLocalizedTools(locale).filter(
      (tool) => tool.category === "pdf" || tool.outputExtension === ".pdf",
    ),
  );

  return (
    <>
      <PageBackdrop />
      {/* `id`s kept for the footer's existing "+N more" column links
          (`#pdf` / `#image`), which still point here now that the homepage
          no longer has separate tool-category sections. */}
      <div id="pdf" className="relative overflow-hidden pb-16 pt-14 sm:pt-20">
        <span id="image" className="sr-only" aria-hidden />
        <HeroVisuals />

        <Container maxWidth="3xl" className="relative text-center">
          <h1 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <Tagline text={siteConfig.tagline} highlight={dict.home.heroHighlight} />
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-foreground/60 sm:text-base">
            {siteConfig.description}
          </p>

          <div className="mt-9 sm:mt-10">
            <ToolPicker
              locale={locale}
              tools={pickerTools}
              essentialsCount={TOOL_PICKER_ESSENTIALS_COUNT}
            />
          </div>

          <div className="mt-14 sm:mt-16">
            <FeaturesRow locale={locale} />
          </div>
        </Container>
      </div>
    </>
  );
}
