import { getLocalizedTools, isValidLocale } from "@tampdf/config";
import { notFound } from "next/navigation";
import { HeroUploader } from "@/components/home/hero-uploader";
import { HighlightedText } from "@/components/home/highlighted-text";
import { ToolsGrid, type GridTool } from "@/components/home/tools-grid";
import { PageBackdrop } from "@/components/page-backdrop";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/i18n/get-dictionary";
import { sortForPicker } from "@/lib/home-order";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const dict = getDictionary(locale);
  const highlight = dict.home.heroHighlight;

  // Every tool in the shared registry (never a separate list), most-used first.
  const tools: GridTool[] = sortForPicker(getLocalizedTools(locale)).map((tool) => ({
    slug: tool.slug,
    name: tool.shortName ?? tool.name,
    icon: tool.icon,
    category: tool.category,
  }));

  return (
    <>
      <PageBackdrop />

      <Container maxWidth="3xl" className="pt-8 text-center sm:pt-12">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <span aria-hidden className="h-px w-8 shrink-0 bg-brand-500 sm:w-16" />
          <p className="text-base font-semibold leading-snug text-foreground/85 sm:text-xl">
            <HighlightedText text={dict.home.hero.badge} highlight={highlight} />
          </p>
          <span aria-hidden className="h-px w-8 shrink-0 bg-brand-500 sm:w-16" />
        </div>

        <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          <HighlightedText text={dict.home.hero.title} highlight={highlight} />
        </h1>

        <div className="mx-auto mt-3 max-w-2xl sm:mt-4">
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
          <ToolsGrid locale={locale} tools={tools} />
        </Container>
      </section>
    </>
  );
}
