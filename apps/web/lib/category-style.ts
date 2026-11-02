import type { ToolCategoryId } from "@tampdf/config";

interface CategoryStyle {
  iconBg: string;
  iconText: string;
  hoverBorder: string;
  hoverShadow: string;
}

/**
 * Light, per-category accent used on tool cards and icon tiles. PDF tools
 * use the brand red (matching the logo); Image tools use blue for instant
 * visual distinction at a glance.
 */
export const categoryStyles: Record<ToolCategoryId, CategoryStyle> = {
  pdf: {
    iconBg: "bg-brand-50 dark:bg-brand-500/10",
    iconText: "text-brand-600 dark:text-brand-400",
    hoverBorder: "hover:border-brand-200 dark:hover:border-brand-500/30",
    hoverShadow: "hover:shadow-brand-500/10",
  },
  image: {
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
    iconText: "text-blue-600 dark:text-blue-400",
    hoverBorder: "hover:border-blue-200 dark:hover:border-blue-500/30",
    hoverShadow: "hover:shadow-blue-500/10",
  },
};
