import { TOOL_SLUG_LABELS } from "../collections/ToolUsageEvents";

/**
 * Bilingual display names for TOOL_SLUGS (see ToolUsageEvents.ts, the
 * source of truth). Re-exported here so the Dashboard component can pick
 * the string for the admin's current language.
 */
export function toolLabel(slug: string, language: string): string {
  const entry = TOOL_SLUG_LABELS[slug as keyof typeof TOOL_SLUG_LABELS];
  if (!entry) return slug;
  return language === "ar" ? entry.ar : entry.en;
}
