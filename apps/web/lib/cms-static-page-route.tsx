import type { Metadata } from "next";
import type { ReactNode } from "react";
import { isValidLocale, type Locale } from "@tampdf/config";
import { notFound } from "next/navigation";
import { LinkifiedText } from "@/components/linkified-text";
import { StaticPage } from "@/components/static-page";
import type { Dictionary } from "@/i18n/dictionaries";
import { getDictionary } from "@/i18n/get-dictionary";
import { richTextToHtml } from "@/lib/richtext";
import { buildStaticPageMetadata } from "@/lib/static-page-metadata";
import { getStaticPageContent, getStaticPageMetadata, type StaticPageKey } from "@/lib/static-pages";

interface Fallback {
  title: string;
  /** Short summary — also used as the SEO meta description, so keep it a single sentence. */
  intro: string;
  /** Full fallback body paragraphs shown on the page itself. Defaults to just `[intro]` when omitted. */
  body?: string[];
  /** Built-in pages: a "last updated" line shown above the sections. */
  updated?: string;
  /** Built-in pages: headed sections (translated in every language). */
  sections?: { heading: string; text: string }[];
}

const SECTION_HEADING_CLASS = "mt-6 text-xl font-semibold text-foreground";

/**
 * Builds the `generateMetadata` + default-export page pair for one of the
 * six fixed informational routes. Content comes from the matching
 * `static-pages` CMS document when the admin has published one; otherwise
 * the route falls back to the existing placeholder copy in the dictionary,
 * so these pages never show up empty before anyone has edited them.
 */
export function createStaticCmsPage(
  key: StaticPageKey,
  path: string,
  getFallback: (dict: Dictionary) => Fallback,
  /**
   * Generated content added to every version of the page (CMS or fallback).
   * Placed before the last <h2> of CMS content — conventionally a closing
   * "contact us" section — or at the end when there isn't one.
   */
  renderAppendix?: (locale: Locale, dict: Dictionary) => ReactNode,
  /**
   * `builtIn`: always render the text from the translation files and ignore any
   * CMS document with this key. Used for the legal pages, so every language
   * shows the same reviewed, translated policy that matches what the site
   * actually does (analytics consent, ads) instead of a CMS copy that only
   * exists in English/Arabic and can silently drift out of date.
   */
  options: { builtIn?: boolean } = {},
) {
  async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale: rawLocale } = await params;
    const locale = isValidLocale(rawLocale) ? rawLocale : "en";
    const fallback = getFallback(getDictionary(locale));
    if (options.builtIn) {
      return buildStaticPageMetadata(rawLocale, path, fallback.title, fallback.intro);
    }
    return getStaticPageMetadata(key, rawLocale, locale, path, fallback.title, fallback.intro);
  }

  async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale: rawLocale } = await params;
    if (!isValidLocale(rawLocale)) notFound();
    const locale = rawLocale;
    const dict = getDictionary(locale);
    const fallback = getFallback(dict);
    const doc = options.builtIn ? null : await getStaticPageContent(key, locale);
    const appendix = renderAppendix?.(locale, dict);

    if (!doc && fallback.sections) {
      // Optional appendix (e.g. the ads disclosure) goes before the closing section.
      const sections = fallback.sections;
      const renderSection = (section: { heading: string; text: string }) => (
        <section key={section.heading}>
          <h2 className={SECTION_HEADING_CLASS}>{section.heading}</h2>
          <p className="mt-2">
            <LinkifiedText text={section.text} />
          </p>
        </section>
      );
      return (
        <StaticPage locale={locale} title={fallback.title}>
          {fallback.updated && <p className="text-sm text-foreground/50">{fallback.updated}</p>}
          {sections.slice(0, -1).map(renderSection)}
          {appendix}
          {sections.slice(-1).map(renderSection)}
        </StaticPage>
      );
    }

    if (!doc) {
      const paragraphs = fallback.body ?? [fallback.intro];
      return (
        <StaticPage locale={locale} title={fallback.title} isPlaceholder={!fallback.body}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {appendix}
        </StaticPage>
      );
    }

    // Unwrap the converter's outer <div> so splitting at a heading can never
    // leave unbalanced tags (which the browser repairs → hydration mismatch).
    const rawHtml = richTextToHtml(doc.content);
    const html = rawHtml.match(/^\s*<div class="payload-richtext">([\s\S]*)<\/div>\s*$/)?.[1] ?? rawHtml;
    const headingCount = html.split("<h2").length - 1;
    const splitAt = appendix && headingCount >= 2 ? html.lastIndexOf("<h2") : html.length;
    const proseClassName =
      "[&_a]:text-brand-600 [&_a]:underline [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-5 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:ms-5 [&_ol]:list-decimal [&_ul]:list-disc";

    return (
      <StaticPage locale={locale} title={doc.title}>
        <div className={proseClassName} dangerouslySetInnerHTML={{ __html: html.slice(0, splitAt) }} />
        {appendix}
        {splitAt < html.length && (
          <div className={proseClassName} dangerouslySetInnerHTML={{ __html: html.slice(splitAt) }} />
        )}
      </StaticPage>
    );
  }

  return { generateMetadata, Page };
}
