import { cn } from "@/lib/utils";

const DEFAULT_LOGO_LIGHT = "/logo.svg";
const DEFAULT_LOGO_DARK = "/logo-white.svg";

interface ThemedLogoImageProps {
  /** CMS-uploaded logo override, if the admin set one — used as-is in both themes (their deliberate choice), skipping the light/dark asset swap. */
  overrideUrl?: string | null;
  alt: string;
  className?: string;
}

/**
 * Both logo variants are in the markup and CSS shows the one that matches the
 * `data-theme` attribute (Tailwind's `dark:` variant), like the theme toggle's
 * icons. The logo therefore switches in the same frame as the theme, and a
 * returning dark-mode visitor never sees the light logo from the server HTML.
 */
export function ThemedLogoImage({ overrideUrl, alt, className }: ThemedLogoImageProps) {
  if (overrideUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- CMS-hosted override, no need for next/image optimization
      <img src={overrideUrl} alt={alt} width={150} height={37.5} className={className} />
    );
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element -- local static SVG, no need for next/image optimization */}
      <img
        src={DEFAULT_LOGO_LIGHT}
        alt={alt}
        width={150}
        height={37.5}
        className={cn(className, "dark:hidden")}
      />
      {/* eslint-disable-next-line @next/next/no-img-element -- local static SVG, no need for next/image optimization */}
      <img
        src={DEFAULT_LOGO_DARK}
        alt={alt}
        width={150}
        height={37.5}
        className={cn(className, "hidden dark:block")}
      />
    </>
  );
}
