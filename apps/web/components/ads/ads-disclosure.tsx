import { LinkifiedText } from "@/components/linkified-text";
import type { Dictionary } from "@/i18n/dictionaries";
import { getServices } from "@/lib/services";

/**
 * The advertising section Google requires publishers to disclose (third-party
 * vendors, cookies, opt-out). Shown inside the privacy and cookie pages, and
 * only while AdSense is active, so the policy never mentions ads the site
 * doesn't show.
 */
export async function AdsDisclosure({ dict }: { dict: Dictionary }) {
  const { adsense } = await getServices();
  if (!adsense.client) return null;
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
