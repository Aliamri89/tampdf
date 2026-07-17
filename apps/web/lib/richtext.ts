import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import type { SerializedEditorState } from "lexical";

/** Renders a Payload/Lexical rich-text field to an HTML string for display. */
export function richTextToHtml(data: SerializedEditorState | null | undefined): string {
  if (!data) return "";
  return convertLexicalToHTML({ data });
}

export interface ArticleHeading {
  id: string;
  level: 2 | 3;
  text: string;
}

export interface ArticleContent {
  /** Same HTML as `richTextToHtml`, but with `id` attributes injected on H2/H3 tags for anchor links. */
  html: string;
  headings: ArticleHeading[];
  wordCount: number;
}

/**
 * Slugifies heading text into an anchor id. Uses `\p{L}`/`\p{N}` (any
 * script) rather than an ASCII-only pattern so Arabic headings — this site
 * is bilingual — still produce a meaningful, non-empty id instead of
 * collapsing to "section-N" every time.
 */
function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const HEADING_TAG_RE = /<(h[23])>([\s\S]*?)<\/\1>/g;

/**
 * Renders rich text to HTML and, in the same pass, extracts an H2/H3
 * outline for the table of contents. Heading tags come out of
 * `convertLexicalToHTML` as plain `<h2>`/`<h3>` with no attributes, so a
 * non-greedy regex pass is enough to both add anchor ids and collect the
 * outline without a full HTML parser.
 */
export function richTextToArticleContent(
  data: SerializedEditorState | null | undefined,
): ArticleContent {
  const rawHtml = richTextToHtml(data);
  const headings: ArticleHeading[] = [];
  const seenSlugs = new Map<string, number>();

  const html = rawHtml.replace(HEADING_TAG_RE, (match, tag: "h2" | "h3", inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    if (!text) return match;

    const baseSlug = slugifyHeading(text) || "section";
    const occurrence = seenSlugs.get(baseSlug) ?? 0;
    seenSlugs.set(baseSlug, occurrence + 1);
    const id = occurrence === 0 ? baseSlug : `${baseSlug}-${occurrence + 1}`;

    headings.push({ id, level: tag === "h2" ? 2 : 3, text });
    return `<${tag} id="${id}">${inner}</${tag}>`;
  });

  const plainText = rawHtml.replace(/<[^>]+>/g, " ");
  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;

  return { html, headings, wordCount };
}
