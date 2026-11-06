import { ADSENSE_CLIENT } from "@/lib/ads";
import type { Dictionary } from "@/i18n/dictionaries";

const URL_PATTERN = /(https?:\/\/[^\s)،]+)/g;

/** Turns bare URLs in a policy paragraph into links. */
function linkify(text: string) {
  return text.split(URL_PATTERN).map((part, index) => {
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
  });
}

/**
 * The advertising section Google requires publishers to disclose (third-party
 * vendors, cookies, opt-out). Appended to the privacy and cookie pages —
 * whether their text comes from the CMS or the built-in copy — and only once
 * AdSense is configured, so the policy never mentions ads the site doesn't show.
 */
export function AdsDisclosure({ dict }: { dict: Dictionary }) {
  if (!ADSENSE_CLIENT) return null;
  const { heading, paragraphs } = dict.staticPages.adsDisclosure;
  return (
    <section>
      <h2 className="mt-6 text-xl font-semibold text-foreground">{heading}</h2>
      <div className="mt-3 space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{linkify(paragraph)}</p>
        ))}
      </div>
    </section>
  );
}
