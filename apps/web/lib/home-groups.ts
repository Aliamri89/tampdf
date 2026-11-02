export type HomeGroupId = "toPdf" | "fromPdf" | "organize" | "optimize" | "edit";

/**
 * Which filter chip on the homepage each tool appears under. This only
 * assigns existing tool slugs to chips — names, icons and links still come
 * from the shared tool registry. A tool missing here (e.g. the image format
 * converters) shows under "All" only.
 */
const GROUP_OF: Record<string, HomeGroupId> = {
  "image-to-pdf": "toPdf",
  "png-to-pdf": "toPdf",
  "images-to-pdf": "toPdf",

  "pdf-to-jpg": "fromPdf",
  "pdf-to-images": "fromPdf",

  "merge-pdf": "organize",
  "split-pdf": "organize",
  "delete-pdf-pages": "organize",
  "reorder-pdf-pages": "organize",
  "extract-pdf-pages": "organize",
  "rotate-pdf": "organize",

  "compress-pdf": "optimize",
  "compress-image": "optimize",
  "resize-pdf": "optimize",
  "resize-image": "optimize",
  "remove-pdf-metadata": "optimize",

  "crop-pdf": "edit",
  "flip-pdf": "edit",
  "add-page-numbers": "edit",
  "add-watermark": "edit",
  "remove-watermark": "edit",
  "edit-pdf-metadata": "edit",
  "pdf-info": "edit",
  "rotate-images": "edit",
  "crop-image": "edit",
  "flip-image": "edit",
};

export function homeGroupOf(slug: string): HomeGroupId | null {
  return GROUP_OF[slug] ?? null;
}

export const HOME_GROUP_ORDER: HomeGroupId[] = ["toPdf", "fromPdf", "organize", "optimize", "edit"];
