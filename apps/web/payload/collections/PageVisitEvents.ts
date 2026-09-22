import type { CollectionConfig } from "payload";

// Kept as a plain literal list (not imported from `@tampdf/config`) --
// Payload's own CLI tooling (`payload migrate`) fails to resolve that
// workspace package's TS source when it's imported from a collection
// config, even though Next's bundler handles it fine everywhere else in
// the app. Keep this in sync with `languageMenuOptions` in
// `packages/config/src/locale.ts` by hand.
const LOCALE_OPTIONS = [
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
] as const;

/** Append-only page-view log, one document per page load, reported by a client-side beacon. */
export const PageVisitEvents: CollectionConfig = {
  slug: "page-visit-events",
  labels: {
    singular: { en: "Page Visit Event", ar: "حدث زيارة صفحة" },
    plural: { en: "Page Visit Events", ar: "سجلّ زيارات الصفحات" },
  },
  admin: {
    useAsTitle: "locale",
    defaultColumns: ["locale", "createdAt"],
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: () => false,
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "locale",
      type: "select",
      required: true,
      label: { en: "Locale", ar: "اللغة" },
      // Every site language, not just English/Arabic -- the language's own
      // name (in its own script) doubles as the admin label here too.
      options: LOCALE_OPTIONS.map((option) => ({
        label: { en: option.name, ar: option.name },
        value: option.code,
      })),
    },
  ],
};
