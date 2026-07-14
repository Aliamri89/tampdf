"use client";

import { useTheme } from "@/lib/use-theme";

const DEFAULT_LOGO_LIGHT = "/logo.svg";
const DEFAULT_LOGO_DARK = "/logo-white.svg";

interface ThemedLogoImageProps {
  /** CMS-uploaded logo override, if the admin set one — used as-is in both themes (their deliberate choice), skipping the light/dark asset swap. */
  overrideUrl?: string | null;
  alt: string;
  className?: string;
}

export function ThemedLogoImage({ overrideUrl, alt, className }: ThemedLogoImageProps) {
  const { theme } = useTheme();
  const src = overrideUrl || (theme === "dark" ? DEFAULT_LOGO_DARK : DEFAULT_LOGO_LIGHT);

  return (
    // eslint-disable-next-line @next/next/no-img-element -- local static SVG (or CMS-hosted override), no need for next/image optimization
    <img
      src={src}
      alt={alt}
      width={150}
      height={37.5}
      className={className}
      suppressHydrationWarning
    />
  );
}
