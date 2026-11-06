import { AdUnit } from "@/components/ads/ad-unit";
import { Container } from "@/components/ui/container";
import { AD_SLOTS, ADSENSE_CLIENT, type AdPlacement } from "@/lib/ads";

/**
 * A labelled ad between two blocks of page content. Renders nothing at all
 * (not even spacing) until AdSense and this placement's unit id are
 * configured. Place it only between substantial content — never beside the
 * upload area, the action button or the download buttons, and never on a
 * page without publisher content.
 *
 * `inline` puts it inside an existing container (e.g. the article column);
 * otherwise it brings its own centred section container.
 */
export function AdSlot({
  placement,
  label,
  inline = false,
}: {
  placement: AdPlacement;
  label: string;
  inline?: boolean;
}) {
  const slot = AD_SLOTS[placement];
  if (!ADSENSE_CLIENT || !slot) return null;
  const unit = <AdUnit client={ADSENSE_CLIENT} slot={slot} label={label} />;
  if (inline) return <div className="mt-12">{unit}</div>;
  return (
    <Container maxWidth="3xl" className="pb-14">
      {unit}
    </Container>
  );
}
