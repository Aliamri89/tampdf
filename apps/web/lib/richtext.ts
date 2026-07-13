import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import type { SerializedEditorState } from "lexical";

/** Renders a Payload/Lexical rich-text field to an HTML string for display. */
export function richTextToHtml(data: SerializedEditorState | null | undefined): string {
  if (!data) return "";
  return convertLexicalToHTML({ data });
}
