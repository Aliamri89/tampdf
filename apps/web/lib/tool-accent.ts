import type { CSSProperties } from "react";
import { tools } from "@tampdf/config";

/**
 * Two accents only, matching the homepage: PDF tools use the brand red,
 * image tools blue. Used by the related-tools cards and, through `vars`, to
 * re-point the `--brand-*` scale on an image tool's page so its buttons,
 * selections and focus rings turn blue (PDF tools keep the default red).
 *
 * Class strings are full literals (never interpolated) so Tailwind v4's JIT
 * compiler can see them.
 */
export interface ToolAccent {
  card: string;
  border: string;
  iconBg: string;
  iconText: string;
  arrowHover: string;
  shadow: string;
  /** `--brand-*` overrides for the tool page; empty for the default red. */
  vars: CSSProperties;
}

// Tailwind blue palette, 50 → 900.
const BLUE_VARS = {
  "--brand-50": "#eff6ff",
  "--brand-100": "#dbeafe",
  "--brand-200": "#bfdbfe",
  "--brand-300": "#93c5fd",
  "--brand-400": "#60a5fa",
  "--brand-500": "#2563eb",
  "--brand-600": "#1d4ed8",
  "--brand-700": "#1e40af",
  "--brand-800": "#1e3a8a",
  "--brand-900": "#172554",
} as CSSProperties;

const PDF_ACCENT: ToolAccent = {
  card: "bg-home-card",
  border: "border-home-border hover:border-[#ed0a0a]",
  iconBg: "bg-[#ed0a0a]",
  iconText: "text-white",
  arrowHover: "group-hover:border-[#ed0a0a] group-hover:bg-[#ed0a0a] group-hover:text-white",
  shadow: "hover:shadow-[#ed0a0a]/20",
  vars: {},
};

const IMAGE_ACCENT: ToolAccent = {
  card: "bg-home-card",
  border: "border-home-border hover:border-[#2563eb]",
  iconBg: "bg-[#2563eb]",
  iconText: "text-white",
  arrowHover: "group-hover:border-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white",
  shadow: "hover:shadow-[#2563eb]/20",
  vars: BLUE_VARS,
};

export function getToolAccent(slug: string): ToolAccent {
  return tools.find((tool) => tool.slug === slug)?.category === "image" ? IMAGE_ACCENT : PDF_ACCENT;
}
