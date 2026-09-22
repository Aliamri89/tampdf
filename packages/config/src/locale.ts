export interface LanguageOption {
  code: string;
  /** The language's own name, in its own script. */
  name: string;
}

/**
 * Every language the site supports, in the order the header's language
 * menu displays them — each one is a real `Locale` with its own dictionary
 * and routes (see `i18n/get-dictionary.ts`; untranslated individual keys
 * fall back to English at the key level, never the whole dictionary).
 */
export const languageMenuOptions: LanguageOption[] = [
  { code: "en", name: "English" },
  { code: "ar", name: "العربية" },
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

export const locales = languageMenuOptions.map((option) => option.code) as [string, ...string[]];

export type Locale = (typeof languageMenuOptions)[number]["code"];

export const defaultLocale: Locale = "en";

const RTL_LOCALES = new Set(["ar"]);

export const localeDirection: Record<Locale, "ltr" | "rtl"> = Object.fromEntries(
  locales.map((code) => [code, RTL_LOCALES.has(code) ? "rtl" : "ltr"]),
) as Record<Locale, "ltr" | "rtl">;

/**
 * Each language's own name, in its own script — always shown as-is
 * regardless of the site's current UI language (an Arabic reader picking
 * English from the switcher should see "English", not a translated label,
 * and vice versa). Used by the header's language menu.
 */
export const localeNativeNames: Record<Locale, string> = Object.fromEntries(
  languageMenuOptions.map((option) => [option.code, option.name]),
) as Record<Locale, string>;

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Payload's Posts collection is only localized in English/Arabic (see
 * `payload.config.ts`) — articles are deliberately not translated into the
 * other 22 site languages yet. Any other locale reads articles in English,
 * their closest real translation being none, so this is the locale to pass
 * to `payload.find({ locale })` for post queries regardless of the site's
 * current UI language.
 */
export function toArticleLocale(locale: Locale): "en" | "ar" {
  return locale === "ar" ? "ar" : "en";
}
