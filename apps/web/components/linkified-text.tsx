import Link from "next/link";

// Splits on bare URLs and on `[label](/path)` links to our own pages. The
// capture groups keep both kinds in the split result, which is why the parts
// are walked in groups of three below.
const PATTERN = /(https?:\/\/[^\s)،]+)|\[([^\]]+)\]\((\/[^)]*)\)/g;

/**
 * Renders plain policy/legal text with links: bare URLs become external
 * links, and `[Contact page](/contact)` becomes an internal link. The locale
 * is prefixed for internal paths, so a visitor reading the Arabic policy
 * stays in Arabic.
 */
export function LinkifiedText({ text, locale }: { text: string; locale?: string }) {
  const parts = text.split(PATTERN);

  return (
    <>
      {parts.map((part, index) => {
        if (part === undefined) return null;
        const kind = index % 4;
        if (kind === 0) return part;
        if (kind === 1) {
          // Sentence punctuation right after a URL belongs to the sentence, not the link.
          const url = part.replace(/[.,;:!?]+$/, "");
          return (
            <span key={index}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-brand-600 underline"
                dir="ltr"
              >
                {url}
              </a>
              {part.slice(url.length)}
            </span>
          );
        }
        if (kind === 2) {
          const href = parts[index + 1];
          return (
            <Link
              key={index}
              href={locale ? `/${locale}${href}` : href}
              className="text-brand-600 underline underline-offset-2 hover:text-brand-700"
            >
              {part}
            </Link>
          );
        }
        // kind === 3: the href of the link rendered just above.
        return null;
      })}
    </>
  );
}
