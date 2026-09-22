export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

/**
 * Each language's own name, in its own script — always shown as-is
 * regardless of the site's current UI language (an Arabic reader picking
 * English from the switcher should see "English", not a translated label,
 * and vice versa). Used by the header's language menu.
 */
export const localeNativeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
