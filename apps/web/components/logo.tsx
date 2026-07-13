import Link from "next/link";
import type { Locale } from "@tampdf/config";
import { getSettings } from "@/lib/get-settings";
import type { Media } from "@/payload/payload-types";

export async function Logo({ locale, className }: { locale: Locale; className?: string }) {
  const settings = await getSettings();
  const logoMedia = settings.logo as Media | number | null | undefined;
  const logoUrl = logoMedia && typeof logoMedia === "object" ? logoMedia.url : null;
  const siteName = settings.siteName || "TAMPDF";

  return (
    <Link
      href={`/${locale}`}
      dir="ltr"
      className={`inline-flex shrink-0 items-center dark:rounded-lg dark:bg-white dark:px-2 dark:py-1.5 ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- trusted local static SVG (or CMS-hosted override), no need for next/image optimization */}
      <img
        src={logoUrl || "/logo.svg"}
        alt={siteName}
        width={150}
        height={37.5}
        className="h-7 w-auto sm:h-8"
      />
    </Link>
  );
}
