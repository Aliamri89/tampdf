/**
 * `JSON.stringify` does not escape `<`, so a value containing `</script>`
 * would prematurely close a `<script type="application/ld+json">` tag when
 * injected via `dangerouslySetInnerHTML`, allowing HTML/script injection.
 * All current JSON-LD content is static (from packages/config), not user
 * input, but this keeps the pattern safe if that ever changes.
 */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
