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
  /** Not necessarily a `Locale` — most entries here have no routes yet. */
  code: string;
  /** The language's own name, in its own script. */
  name: string;
  /** Whether this language has real routes/dictionaries today. */
  supported: boolean;
}

/**
 * Every language the header's language menu displays, supported ones
 * first. Only `supported` entries correspond to an actual `Locale` with
 * routes and a dictionary (today: `locales` above, i.e. English/Arabic) —
 * the rest are shown so the menu matches the product's intended
 * multi-language design, but the menu renders them as inert/disabled so
 * picking one can never lead to a broken page. Add a language for real by
 * adding it to `locales` (and its dictionary/direction/native name) first,
 * then flipping its `supported` flag here — never the other way around.
 */
export const languageMenuOptions: LanguageOption[] = [
  ...locales.map((code) => ({ code, name: localeNativeNames[code], supported: true }) as const),
  { code: "es", name: "Español", supported: false },
  { code: "fr", name: "Français", supported: false },
  { code: "de", name: "Deutsch", supported: false },
  { code: "it", name: "Italiano", supported: false },
  { code: "pt", name: "Português", supported: false },
  { code: "nl", name: "Nederlands", supported: false },
  { code: "tr", name: "Türkçe", supported: false },
  { code: "ru", name: "Русский", supported: false },
  { code: "zh", name: "中文", supported: false },
  { code: "ja", name: "日本語", supported: false },
  { code: "ko", name: "한국어", supported: false },
  { code: "hi", name: "हिन्दी", supported: false },
  { code: "id", name: "Bahasa Indonesia", supported: false },
  { code: "vi", name: "Tiếng Việt", supported: false },
  { code: "th", name: "ไทย", supported: false },
  { code: "pl", name: "Polski", supported: false },
  { code: "sv", name: "Svenska", supported: false },
  { code: "da", name: "Dansk", supported: false },
  { code: "no", name: "Norsk", supported: false },
  { code: "fi", name: "Suomi", supported: false },
  { code: "cs", name: "Čeština", supported: false },
  { code: "el", name: "Ελληνικά", supported: false },
];
