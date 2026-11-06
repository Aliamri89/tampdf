const URL_PATTERN = /(https?:\/\/[^\s)،]+)/g;

/** Renders text with bare URLs turned into external links. */
export function LinkifiedText({ text }: { text: string }) {
  return (
    <>
      {text.split(URL_PATTERN).map((part, index) => {
        if (index % 2 === 0) return part;
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
      })}
    </>
  );
}
