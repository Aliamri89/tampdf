import { LinkifiedText } from "@/components/linkified-text";
import type { Dictionary } from "@/i18n/dictionaries";
import { ADSENSE_CLIENT } from "@/lib/ads";

/**
 * The advertising section Google requires publishers to disclose (third-party
 * vendors, cookies, opt-out). Shown inside the privacy and cookie pages, and
 * only once AdSense is configured, so the policy never mentions ads the site
 * doesn't show.
 */
export function AdsDisclosure({ dict }: { dict: Dictionary }) {
  if (!ADSENSE_CLIENT) return null;
  const { heading, paragraphs } = dict.staticPages.adsDisclosure;
  return (
    <section>
      <h2 className="mt-6 text-xl font-semibold text-foreground">{heading}</h2>
      <div className="mt-3 space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>
            <LinkifiedText text={paragraph} />
          </p>
        ))}
      </div>
    </section>
  );
}
