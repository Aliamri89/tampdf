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

// Tolerates an attribute list (e.g. `style="text-align: center;"`, which
// `convertLexicalToHTML` adds for non-default alignment/indent) between the
// tag name and `>` — a bare `<h2>` match would silently drop such headings
// from the outline entirely, id-less and unlinkable.
const HEADING_TAG_RE = /<(h[23])((?:\s[^>]*)?)>([\s\S]*?)<\/\1>/g;

const HTML_ENTITIES: Record<string, string> = {
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&amp;": "&", // must decode last so a literal "&amp;" typed by an editor round-trips correctly
};

function decodeHtmlEntities(text: string): string {
  return Object.entries(HTML_ENTITIES).reduce(
    (result, [entity, char]) => result.split(entity).join(char),
    text,
  );
}

/**
 * Strips tags for plain-text extraction. Replaces with a space rather than
 * an empty string — otherwise `<br>` between two lines of a heading (a soft
 * line break) would concatenate the words on either side of it.
 */
function stripTagsToText(html: string): string {
  return decodeHtmlEntities(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

/**
 * Renders rich text to HTML and, in the same pass, extracts an H2/H3
 * outline for the table of contents.
 */
export function richTextToArticleContent(
  data: SerializedEditorState | null | undefined,
): ArticleContent {
  const rawHtml = richTextToHtml(data);
  const headings: ArticleHeading[] = [];
  const seenSlugs = new Map<string, number>();

  const html = rawHtml.replace(
    HEADING_TAG_RE,
    (match, tag: "h2" | "h3", attrs: string, inner: string) => {
      const text = stripTagsToText(inner);
      if (!text) return match;

      const baseSlug = slugifyHeading(text) || "section";
      const occurrence = seenSlugs.get(baseSlug) ?? 0;
      seenSlugs.set(baseSlug, occurrence + 1);
      const id = occurrence === 0 ? baseSlug : `${baseSlug}-${occurrence + 1}`;

      headings.push({ id, level: tag === "h2" ? 2 : 3, text });
      return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
    },
  );

  const wordCount = stripTagsToText(rawHtml).split(" ").filter(Boolean).length;

  return { html, headings, wordCount };
}
