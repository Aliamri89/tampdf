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

export interface LanguageOption {
  /** Not necessarily a `Locale` — most entries here have no dedicated dictionary yet. */
  code: string;
  /** The language's own name, in its own script. */
  name: string;
}

/**
 * Every language the header's language menu displays and every one of
 * them is a real, clickable route (see `isSiteLocale`/`resolveContentLocale`
 * below) — picking one always navigates and always renders a full page,
 * never a 404. Only `locales` above (English/Arabic) have their own
 * dictionary; every other entry here falls back to rendering the English
 * dictionary/content until it gets a real translation, which keeps every
 * page honest (it never claims to be in a language it isn't) while still
 * being a genuine, navigable page rather than a dead end.
 */
export const languageMenuOptions: LanguageOption[] = [
  ...locales.map((code) => ({ code, name: localeNativeNames[code] }) as const),
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
  { code: "nl", name: "Nederlands" },
  { code: "tr", name: "Türkçe" },
  { code: "ru", name: "Русский" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "hi", name: "हिन्दी" },
  { code: "id", name: "Bahasa Indonesia" },
  { code: "vi", name: "Tiếng Việt" },
  { code: "th", name: "ไทย" },
  { code: "pl", name: "Polski" },
  { code: "sv", name: "Svenska" },
  { code: "da", name: "Dansk" },
  { code: "no", name: "Norsk" },
  { code: "fi", name: "Suomi" },
  { code: "cs", name: "Čeština" },
  { code: "el", name: "Ελληνικά" },
];

/** Every URL locale segment the site accepts — the two real locales above, plus every language menu entry. */
export const siteLocaleCodes: readonly string[] = [
  ...new Set([...locales, ...languageMenuOptions.map((option) => option.code)]),
];

export function isSiteLocale(value: string): boolean {
  return siteLocaleCodes.includes(value);
}

/**
 * Maps any accepted URL locale segment to the real `Locale` whose
 * dictionary/content actually renders it: itself when it's "en"/"ar",
 * otherwise the safe English fallback. Route guards should check
 * `isSiteLocale` (404 only outside the full menu) and then resolve with
 * this before touching a dictionary or any `getLocalized*` helper — those
 * only know "en"/"ar" and would otherwise treat anything non-English as
 * Arabic.
 */
export function resolveContentLocale(siteLocale: string): Locale {
  return isValidLocale(siteLocale) ? siteLocale : defaultLocale;
}
