export type ToolCategoryId = "pdf" | "image";

export type ProcessingMode = "client" | "server";

export interface ToolCategory {
  id: ToolCategoryId;
  name: string;
  description: string;
  icon: string;
}

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface ToolDefinition {
  /** URL slug, e.g. "merge-pdf" -> /merge-pdf */
  slug: string;
  /** Short display name, e.g. "Merge PDF" */
  name: string;
  /** Action verb used in buttons, e.g. "Merge PDFs" */
  actionLabel: string;
  /** One-sentence summary used on cards and as meta description base */
  shortDescription: string;
  /** 2-3 paragraph description shown on the tool page */
  longDescription: string[];
  category: ToolCategoryId;
  /** Where the actual file processing happens */
  processing: ProcessingMode;
  /** lucide-react icon name */
  icon: string;
  /** Accepted input file extensions, e.g. [".pdf"] */
  acceptedExtensions: string[];
  /** Accepted MIME types for the file input / dropzone */
  acceptedMimeTypes: string[];
  /** Whether the tool accepts multiple files at once */
  multipleFiles: boolean;
  /** Output file extension produced by the tool */
  outputExtension: string;
  faq: ToolFaq[];
  /** Slugs of related tools shown at the bottom of the page */
  relatedSlugs: string[];
  /** Extra SEO keywords beyond name/description */
  keywords: string[];
}
