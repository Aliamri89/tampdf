export * from "./types";
export * from "./locale";
export * from "./coming-soon";
export { categories } from "./categories";
export { tools } from "./tools";

import { categories } from "./categories";
import { comingSoonTools, type ComingSoonTool } from "./coming-soon";
import { defaultLocale, type Locale } from "./locale";
import { tools } from "./tools";
import { categoriesAr } from "./translations/categories-ar";
import { comingSoonAr } from "./translations/coming-soon-ar";
import { categoriesByLocale, siteByLocale } from "./translations/site-and-categories";
import { siteAr } from "./translations/site-ar";
import { toolsAr } from "./translations/tools-ar";
import type { ToolTranslationOverride } from "./translations/tools-ar";
import { toolsCs } from "./translations/tools-cs";
import { toolsDa } from "./translations/tools-da";
import { toolsDe } from "./translations/tools-de";
import { toolsEl } from "./translations/tools-el";
import { toolsEs } from "./translations/tools-es";
import { toolsFi } from "./translations/tools-fi";
import { toolsFr } from "./translations/tools-fr";
import { toolsHi } from "./translations/tools-hi";
import { toolsId } from "./translations/tools-id";
import { toolsIt } from "./translations/tools-it";
import { toolsJa } from "./translations/tools-ja";
import { toolsKo } from "./translations/tools-ko";
import { toolsNl } from "./translations/tools-nl";
import { toolsNo } from "./translations/tools-no";
import { toolsPl } from "./translations/tools-pl";
import { toolsPt } from "./translations/tools-pt";
import { toolsRu } from "./translations/tools-ru";
import { toolsSv } from "./translations/tools-sv";
import { toolsTh } from "./translations/tools-th";
import { toolsTr } from "./translations/tools-tr";
import { toolsVi } from "./translations/tools-vi";
import { toolsZh } from "./translations/tools-zh";
import type { ToolCategory, ToolCategoryId, ToolDefinition } from "./types";

/** Every locale's tool-translation overrides, keyed by locale then slug. `en` has none — it's the base. */
const toolTranslationsByLocale: Partial<Record<Locale, Record<string, ToolTranslationOverride>>> = {
  ar: toolsAr,
  es: toolsEs,
  fr: toolsFr,
  de: toolsDe,
  it: toolsIt,
  pt: toolsPt,
  nl: toolsNl,
  tr: toolsTr,
  ru: toolsRu,
  zh: toolsZh,
  ja: toolsJa,
  ko: toolsKo,
  hi: toolsHi,
  id: toolsId,
  vi: toolsVi,
  th: toolsTh,
  pl: toolsPl,
  sv: toolsSv,
  da: toolsDa,
  no: toolsNo,
  fi: toolsFi,
  cs: toolsCs,
  el: toolsEl,
};

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(categoryId: ToolCategoryId): ToolDefinition[] {
  return tools.filter((tool) => tool.category === categoryId);
}

export function getCategoryById(categoryId: ToolCategoryId) {
  return categories.find((category) => category.id === categoryId);
}

export function getRelatedTools(tool: ToolDefinition): ToolDefinition[] {
  return tool.relatedSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((t): t is ToolDefinition => Boolean(t));
}

export const siteConfig = {
  name: "TAMPDF",
  domain: "tampdf.com",
  url: "https://tampdf.com",
  tagline: "All Your PDF Tools in One Place",
  description:
    "Free, fast, and easy-to-use PDF tools — no installs, no sign-ups. Everything runs securely in your browser.",
};

/**
 * Returns a tool's content (name/description/FAQ/keywords) translated for
 * `locale`. Every locale's override only needs to provide the fields it
 * has translated so far (see `ToolTranslationOverride`) — anything it
 * omits, such as `longDescription`/`faq` for a locale that only has the
 * short, high-visibility fields translated, quietly keeps its English
 * value via this same object-spread merge, never the whole tool.
 */
export function getLocalizedTool(slug: string, locale: Locale): ToolDefinition | undefined {
  const base = getToolBySlug(slug);
  if (!base) return undefined;
  if (locale === defaultLocale) return base;
  const override = toolTranslationsByLocale[locale]?.[slug];
  // The English card label must never leak into another locale, so
  // `shortName` only survives when the translation provides its own.
  return override ? { ...base, shortName: undefined, ...override } : base;
}

export function getLocalizedTools(locale: Locale): ToolDefinition[] {
  return tools.map((tool) => getLocalizedTool(tool.slug, locale)!);
}

export function getLocalizedToolsByCategory(
  categoryId: ToolCategoryId,
  locale: Locale,
): ToolDefinition[] {
  return getLocalizedTools(locale).filter((tool) => tool.category === categoryId);
}

export function getLocalizedCategory(
  categoryId: ToolCategoryId,
  locale: Locale,
): ToolCategory | undefined {
  const base = getCategoryById(categoryId);
  if (!base) return undefined;
  if (locale === defaultLocale) return base;
  const override = locale === "ar" ? categoriesAr[categoryId] : categoriesByLocale[locale]?.[categoryId];
  return override ? { ...base, ...override } : base;
}

export function getLocalizedCategories(locale: Locale): ToolCategory[] {
  return categories.map((category) => getLocalizedCategory(category.id, locale)!);
}

export function getLocalizedRelatedTools(
  tool: ToolDefinition,
  locale: Locale,
): ToolDefinition[] {
  return tool.relatedSlugs
    .map((slug) => getLocalizedTool(slug, locale))
    .filter((t): t is ToolDefinition => Boolean(t));
}

export function getLocalizedSiteConfig(locale: Locale): typeof siteConfig {
  if (locale === defaultLocale) return siteConfig;
  const override = locale === "ar" ? siteAr : siteByLocale[locale];
  return override ? { ...siteConfig, ...override } : siteConfig;
}

export function getLocalizedComingSoonByCategory(
  categoryId: ToolCategoryId,
  locale: Locale,
): ComingSoonTool[] {
  return comingSoonTools
    .filter((tool) => tool.category === categoryId)
    .map((tool) => {
      if (locale === defaultLocale) return tool;
      const override = comingSoonAr[tool.id];
      return override ? { ...tool, ...override } : tool;
    });
}
