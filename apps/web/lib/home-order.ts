/**
 * Display order of tools on the homepage (most-used first, so the first
 * rows of each section show the essentials). Tools not listed here keep
 * their registry order and appear after the listed ones.
 */
const HOME_ORDER = [
  // PDF
  "compress-pdf",
  "merge-pdf",
  "split-pdf",
  "pdf-to-jpg",
  "images-to-pdf",
  "crop-pdf",
  "resize-pdf",
  "delete-pdf-pages",
  "reorder-pdf-pages",
  "rotate-pdf",
  "extract-pdf-pages",
  "add-page-numbers",
  "add-watermark",
  "remove-watermark",
  "pdf-to-images",
  "flip-pdf",
  "edit-pdf-metadata",
  "remove-pdf-metadata",
  "pdf-info",
  // Images
  "crop-image",
  "resize-image",
  "compress-image",
  "rotate-images",
  "flip-image",
  "image-to-pdf",
  "png-to-pdf",
  "png-to-jpg",
  "jpg-to-png",
  "webp-to-jpg",
  "jpg-to-webp",
  "webp-to-png",
  "png-to-webp",
];

export function sortForHome<T extends { slug: string }>(tools: T[]): T[] {
  const rank = (slug: string) => {
    const index = HOME_ORDER.indexOf(slug);
    return index === -1 ? HOME_ORDER.length : index;
  };
  return [...tools].sort((a, b) => rank(a.slug) - rank(b.slug));
}
