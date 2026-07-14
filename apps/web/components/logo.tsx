import Link from "next/link";
import type { Locale } from "@tampdf/config";
import { ThemedLogoImage } from "@/components/themed-logo-image";
import { getSettings } from "@/lib/get-settings";
import type { Media } from "@/payload/payload-types";

export async function Logo({ locale, className }: { locale: Locale; className?: string }) {
  const settings = await getSettings();
  const logoMedia = settings.logo as Media | number | null | undefined;
  const logoUrl = logoMedia && typeof logoMedia === "object" ? logoMedia.url : null;
  const siteName = settings.siteName || "TAMPDF";

  return (
    <Link href={`/${locale}`} dir="ltr" className={`inline-flex shrink-0 items-center ${className ?? ""}`}>
      <ThemedLogoImage overrideUrl={logoUrl} alt={siteName} className="h-7 w-auto sm:h-8" />
    </Link>
  );
}
