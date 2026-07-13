import type { ToolCategoryId } from "./types";

export interface ComingSoonTool {
  /** Stable identifier, not a routable slug — these tools have no page yet. */
  id: string;
  name: string;
  shortDescription: string;
  category: ToolCategoryId;
  icon: string;
}

/**
 * Tools not yet built. When a category has fewer real tools than the
 * largest category, the homepage pads it with entries from here (see
 * getLocalizedComingSoonByCategory) so every category shows the same
 * number of cards. Empty for now — add entries here as new tools are
 * planned but not yet implemented.
 */
export const comingSoonTools: ComingSoonTool[] = [];
