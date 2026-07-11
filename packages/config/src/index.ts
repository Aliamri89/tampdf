export * from "./types";
export { categories } from "./categories";
export { tools } from "./tools";

import { categories } from "./categories";
import { tools } from "./tools";
import type { ToolCategoryId, ToolDefinition } from "./types";

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
  name: "Fileati",
  domain: "fileati.com",
  url: "https://fileati.com",
  tagline: "Every file tool you need, in one place.",
  description:
    "Fileati is a free online toolkit for merging, splitting, compressing, and converting PDFs, images, and documents — fast, private, and secure.",
};
