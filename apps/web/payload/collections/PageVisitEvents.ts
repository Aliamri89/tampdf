import type { CollectionConfig } from "payload";

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
      options: [
        { label: { en: "English", ar: "الإنجليزية" }, value: "en" },
        { label: { en: "Arabic", ar: "العربية" }, value: "ar" },
      ],
    },
  ],
};
