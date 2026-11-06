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

/** Shown at the very end of the image tools, side by side. */
const TOOL_PICKER_LAST = ["image-to-pdf", "png-to-pdf"];

/**
 * PDF-category tools first (most-used first), then every image-category tool
 * together at the bottom, so the blue squares sit next to each other.
 */
export function sortForPicker<T extends { slug: string; category?: string }>(tools: T[]): T[] {
  const rank = (tool: T) => {
    const imageOffset = tool.category === "image" ? 1000 : 0;
    const last = TOOL_PICKER_LAST.indexOf(tool.slug);
    if (last !== -1) return imageOffset + TOOL_PICKER_ORDER.length + 1 + last;
    const index = TOOL_PICKER_ORDER.indexOf(tool.slug);
    return imageOffset + (index === -1 ? TOOL_PICKER_ORDER.length : index);
  };
  return [...tools].sort((a, b) => rank(a) - rank(b));
}
