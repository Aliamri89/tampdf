/**
 * Per-tool pastel accent used on the homepage tool cards. The card body,
 * icon tile, and arrow each take a light tint that rotates through a small
 * palette so the grid reads as a colourful SaaS toolkit rather than a wall
 * of identical cards — while staying within the site's soft, minimal look.
 *
 * Class strings are full literals (never interpolated) so Tailwind v4's JIT
 * compiler can see them — same rule as `lib/category-style.ts`.
 */
export interface ToolAccent {
  /** Card background wash. */
  card: string;
  /** Card border. */
  border: string;
  /** Icon tile background. */
  iconBg: string;
  /** Icon glyph colour. */
  iconText: string;
  /** Arrow button colour on card hover. */
  arrowHover: string;
}

const PALETTE: ToolAccent[] = [
  {
    card: "bg-rose-50/70 dark:bg-rose-500/[0.07]",
    border: "border-rose-100 dark:border-rose-500/15",
    iconBg: "bg-rose-100 dark:bg-rose-500/15",
    iconText: "text-rose-600 dark:text-rose-400",
    arrowHover: "group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500",
  },
  {
    card: "bg-sky-50/70 dark:bg-sky-500/[0.07]",
    border: "border-sky-100 dark:border-sky-500/15",
    iconBg: "bg-sky-100 dark:bg-sky-500/15",
    iconText: "text-sky-600 dark:text-sky-400",
    arrowHover: "group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500",
  },
  {
    card: "bg-violet-50/70 dark:bg-violet-500/[0.07]",
    border: "border-violet-100 dark:border-violet-500/15",
    iconBg: "bg-violet-100 dark:bg-violet-500/15",
    iconText: "text-violet-600 dark:text-violet-400",
    arrowHover: "group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-500",
  },
  {
    card: "bg-emerald-50/70 dark:bg-emerald-500/[0.07]",
    border: "border-emerald-100 dark:border-emerald-500/15",
    iconBg: "bg-emerald-100 dark:bg-emerald-500/15",
    iconText: "text-emerald-600 dark:text-emerald-400",
    arrowHover:
      "group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
  },
  {
    card: "bg-amber-50/70 dark:bg-amber-500/[0.07]",
    border: "border-amber-100 dark:border-amber-500/15",
    iconBg: "bg-amber-100 dark:bg-amber-500/15",
    iconText: "text-amber-700 dark:text-amber-400",
    arrowHover: "group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500",
  },
  {
    card: "bg-blue-50/70 dark:bg-blue-500/[0.07]",
    border: "border-blue-100 dark:border-blue-500/15",
    iconBg: "bg-blue-100 dark:bg-blue-500/15",
    iconText: "text-blue-600 dark:text-blue-400",
    arrowHover: "group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
  },
];

/** Stable per-slug assignment; anything not listed falls back to rotation by position. */
const BY_SLUG: Record<string, number> = {
  "merge-pdf": 0,
  "split-pdf": 1,
  "compress-pdf": 2,
  "pdf-to-jpg": 3,
  "png-to-pdf": 5,
  "rotate-pdf": 4,
  "delete-pdf-pages": 0,
  "reorder-pdf-pages": 3,
  "crop-pdf": 2,
  "resize-pdf": 1,
  "compress-image": 3,
  "image-to-pdf": 4,
  "rotate-images": 2,
};

export function getToolAccent(slug: string, indexInSection = 0): ToolAccent {
  const paletteIndex = BY_SLUG[slug] ?? indexInSection % PALETTE.length;
  return PALETTE[paletteIndex % PALETTE.length];
}
