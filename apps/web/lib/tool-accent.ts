import type { CSSProperties } from "react";

/**
 * Per-tool pastel accent. Used for the homepage cards (tinted body, icon
 * tile, arrow) and on each tool's own page, where `vars` re-points the
 * `--brand-*` scale so the whole workspace — buttons, dropzone, selected
 * options, focus rings — takes on that tool's colour.
 *
 * Class strings are full literals (never interpolated) so Tailwind v4's JIT
 * compiler can see them — same rule as `lib/category-style.ts`.
 */
export interface ToolAccent {
  card: string;
  border: string;
  iconBg: string;
  iconText: string;
  arrowHover: string;
  shadow: string;
  /** `--brand-50…900` overrides for the tool page. */
  vars: CSSProperties;
}

type Scale = [string, string, string, string, string, string, string, string, string, string, string];

/**
 * `button` is the palette step used for `--brand-500` (solid buttons with
 * white text), chosen per hue for legible contrast; the darker steps
 * follow from it.
 */
function brandVars(scale: Scale, button: 6 | 7): CSSProperties {
  const step = (index: number) => scale[Math.min(scale.length - 1, index)];
  return {
    "--brand-50": scale[0],
    "--brand-100": scale[1],
    "--brand-200": scale[2],
    "--brand-300": scale[3],
    "--brand-400": step(button - 2),
    "--brand-500": step(button),
    "--brand-600": step(button + 1),
    "--brand-700": step(button + 2),
    "--brand-800": step(button + 3),
    "--brand-900": step(button + 4),
  } as CSSProperties;
}

// Tailwind palette values, 50 → 950.
const ROSE: Scale = ["#fff1f2", "#ffe4e6", "#fecdd3", "#fda4af", "#fb7185", "#f43f5e", "#e11d48", "#be123c", "#9f1239", "#881337", "#4c0519"];
const PINK: Scale = ["#fdf2f8", "#fce7f3", "#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d", "#831843", "#500724"];
const SKY: Scale = ["#f0f9ff", "#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e", "#082f49"];
const BLUE: Scale = ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a", "#172554"];
const INDIGO: Scale = ["#eef2ff", "#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3", "#312e81", "#1e1b4b"];
const VIOLET: Scale = ["#f5f3ff", "#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95", "#2e1065"];
const EMERALD: Scale = ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b", "#022c22"];
const TEAL: Scale = ["#f0fdfa", "#ccfbf1", "#99f6e4", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#115e59", "#134e4a", "#042f2e"];
const AMBER: Scale = ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f", "#451a03"];
const ORANGE: Scale = ["#fff7ed", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12", "#431407"];

const PALETTE = {
  rose: {
    card: "bg-linear-to-br from-rose-50 via-rose-50/50 to-white dark:from-rose-500/10 dark:via-rose-500/[0.04] dark:to-transparent",
    border: "border-rose-100 dark:border-rose-500/15",
    iconBg: "bg-rose-100/80 dark:bg-rose-500/15",
    iconText: "text-rose-600 dark:text-rose-400",
    arrowHover: "group-hover:border-rose-500 group-hover:bg-rose-500 group-hover:text-white",
    shadow: "hover:shadow-rose-500/10",
    vars: brandVars(ROSE, 6),
  },
  pink: {
    card: "bg-linear-to-br from-pink-50 via-pink-50/50 to-white dark:from-pink-500/10 dark:via-pink-500/[0.04] dark:to-transparent",
    border: "border-pink-100 dark:border-pink-500/15",
    iconBg: "bg-pink-100/80 dark:bg-pink-500/15",
    iconText: "text-pink-600 dark:text-pink-400",
    arrowHover: "group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white",
    shadow: "hover:shadow-pink-500/10",
    vars: brandVars(PINK, 6),
  },
  sky: {
    card: "bg-linear-to-br from-sky-50 via-sky-50/50 to-white dark:from-sky-500/10 dark:via-sky-500/[0.04] dark:to-transparent",
    border: "border-sky-100 dark:border-sky-500/15",
    iconBg: "bg-sky-100/80 dark:bg-sky-500/15",
    iconText: "text-sky-600 dark:text-sky-400",
    arrowHover: "group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white",
    shadow: "hover:shadow-sky-500/10",
    vars: brandVars(SKY, 6),
  },
  blue: {
    card: "bg-linear-to-br from-blue-50 via-blue-50/50 to-white dark:from-blue-500/10 dark:via-blue-500/[0.04] dark:to-transparent",
    border: "border-blue-100 dark:border-blue-500/15",
    iconBg: "bg-blue-100/80 dark:bg-blue-500/15",
    iconText: "text-blue-600 dark:text-blue-400",
    arrowHover: "group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white",
    shadow: "hover:shadow-blue-500/10",
    vars: brandVars(BLUE, 6),
  },
  indigo: {
    card: "bg-linear-to-br from-indigo-50 via-indigo-50/50 to-white dark:from-indigo-500/10 dark:via-indigo-500/[0.04] dark:to-transparent",
    border: "border-indigo-100 dark:border-indigo-500/15",
    iconBg: "bg-indigo-100/80 dark:bg-indigo-500/15",
    iconText: "text-indigo-600 dark:text-indigo-400",
    arrowHover: "group-hover:border-indigo-500 group-hover:bg-indigo-500 group-hover:text-white",
    shadow: "hover:shadow-indigo-500/10",
    vars: brandVars(INDIGO, 6),
  },
  violet: {
    card: "bg-linear-to-br from-violet-50 via-violet-50/50 to-white dark:from-violet-500/10 dark:via-violet-500/[0.04] dark:to-transparent",
    border: "border-violet-100 dark:border-violet-500/15",
    iconBg: "bg-violet-100/80 dark:bg-violet-500/15",
    iconText: "text-violet-600 dark:text-violet-400",
    arrowHover: "group-hover:border-violet-500 group-hover:bg-violet-500 group-hover:text-white",
    shadow: "hover:shadow-violet-500/10",
    vars: brandVars(VIOLET, 6),
  },
  emerald: {
    card: "bg-linear-to-br from-emerald-50 via-emerald-50/50 to-white dark:from-emerald-500/10 dark:via-emerald-500/[0.04] dark:to-transparent",
    border: "border-emerald-100 dark:border-emerald-500/15",
    iconBg: "bg-emerald-100/80 dark:bg-emerald-500/15",
    iconText: "text-emerald-600 dark:text-emerald-400",
    arrowHover: "group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white",
    shadow: "hover:shadow-emerald-500/10",
    vars: brandVars(EMERALD, 6),
  },
  teal: {
    card: "bg-linear-to-br from-teal-50 via-teal-50/50 to-white dark:from-teal-500/10 dark:via-teal-500/[0.04] dark:to-transparent",
    border: "border-teal-100 dark:border-teal-500/15",
    iconBg: "bg-teal-100/80 dark:bg-teal-500/15",
    iconText: "text-teal-600 dark:text-teal-400",
    arrowHover: "group-hover:border-teal-500 group-hover:bg-teal-500 group-hover:text-white",
    shadow: "hover:shadow-teal-500/10",
    vars: brandVars(TEAL, 6),
  },
  amber: {
    card: "bg-linear-to-br from-amber-50 via-amber-50/50 to-white dark:from-amber-500/10 dark:via-amber-500/[0.04] dark:to-transparent",
    border: "border-amber-100 dark:border-amber-500/15",
    iconBg: "bg-amber-100/80 dark:bg-amber-500/15",
    iconText: "text-amber-600 dark:text-amber-400",
    arrowHover: "group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-white",
    shadow: "hover:shadow-amber-500/10",
    vars: brandVars(AMBER, 7),
  },
  orange: {
    card: "bg-linear-to-br from-orange-50 via-orange-50/50 to-white dark:from-orange-500/10 dark:via-orange-500/[0.04] dark:to-transparent",
    border: "border-orange-100 dark:border-orange-500/15",
    iconBg: "bg-orange-100/80 dark:bg-orange-500/15",
    iconText: "text-orange-600 dark:text-orange-400",
    arrowHover: "group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white",
    shadow: "hover:shadow-orange-500/10",
    vars: brandVars(ORANGE, 6),
  },
} satisfies Record<string, ToolAccent>;

type AccentName = keyof typeof PALETTE;
const ROTATION: AccentName[] = ["rose", "sky", "violet", "emerald", "orange", "blue", "pink", "teal", "amber", "indigo"];

/** Stable per-tool colour, chosen so neighbouring cards on the homepage differ. */
const BY_SLUG: Record<string, AccentName> = {
  "compress-pdf": "pink",
  "merge-pdf": "rose",
  "split-pdf": "blue",
  "pdf-to-jpg": "violet",
  "images-to-pdf": "orange",
  "crop-pdf": "emerald",
  "resize-pdf": "sky",
  "delete-pdf-pages": "rose",
  "reorder-pdf-pages": "teal",
  "rotate-pdf": "amber",
  "extract-pdf-pages": "indigo",
  "add-page-numbers": "sky",
  "add-watermark": "violet",
  "remove-watermark": "pink",
  "pdf-to-images": "emerald",
  "flip-pdf": "orange",
  "edit-pdf-metadata": "blue",
  "remove-pdf-metadata": "rose",
  "pdf-info": "teal",
  "crop-image": "orange",
  "resize-image": "emerald",
  "compress-image": "sky",
  "rotate-images": "violet",
  "flip-image": "pink",
  "image-to-pdf": "rose",
  "png-to-pdf": "indigo",
  "png-to-jpg": "amber",
  "jpg-to-png": "teal",
  "webp-to-jpg": "blue",
  "jpg-to-webp": "violet",
  "webp-to-png": "orange",
  "png-to-webp": "emerald",
};

export function getToolAccent(slug: string, indexInSection = 0): ToolAccent {
  return PALETTE[BY_SLUG[slug] ?? ROTATION[indexInSection % ROTATION.length]];
}
