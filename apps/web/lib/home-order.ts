/**
 * Display order for the homepage's PDF tool picker (most-used/most-useful
 * first). Tools not listed here keep their registry order from
 * `packages/config/src/tools.ts` and appear after every listed tool.
 */
const TOOL_PICKER_ORDER = [
  "compress-pdf",
  "merge-pdf",
  "split-pdf",
  "image-to-pdf",
  "pdf-to-jpg",
  "rotate-pdf",
  "add-page-numbers",
  "delete-pdf-pages",
  "reorder-pdf-pages",
  "crop-pdf",
  "resize-pdf",
];

export function sortForPicker<T extends { slug: string }>(tools: T[]): T[] {
  const rank = (slug: string) => {
    const index = TOOL_PICKER_ORDER.indexOf(slug);
    return index === -1 ? TOOL_PICKER_ORDER.length : index;
  };
  return [...tools].sort((a, b) => rank(a.slug) - rank(b.slug));
}
