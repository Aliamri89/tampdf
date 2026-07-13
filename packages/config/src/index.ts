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
import { siteAr } from "./translations/site-ar";
import { toolsAr } from "./translations/tools-ar";
import type { ToolCategory, ToolCategoryId, ToolDefinition } from "./types";

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
  tagline: "Every file tool you need, in one place.",
  description:
    "TAMPDF is a free online toolkit for merging, splitting, compressing, and converting PDFs, images, and documents — fast, private, and secure.",
};

/** Returns a tool's content (name/description/FAQ/keywords) translated for `locale`. */
export function getLocalizedTool(slug: string, locale: Locale): ToolDefinition | undefined {
  const base = getToolBySlug(slug);
  if (!base) return undefined;
  if (locale === defaultLocale) return base;
  const override = toolsAr[slug];
  return override ? { ...base, ...override } : base;
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
  const override = categoriesAr[categoryId];
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
  return locale === defaultLocale ? siteConfig : { ...siteConfig, ...siteAr };
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
