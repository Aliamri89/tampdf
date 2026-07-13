import type { CollectionConfig } from "payload";

export const STATIC_PAGE_KEYS = [
  "about-us",
  "contact-us",
  "privacy-policy",
  "terms-of-service",
  "cookie-policy",
  "faq",
] as const;

export type StaticPageKey = (typeof STATIC_PAGE_KEYS)[number];

/**
 * A fixed set of editable informational pages (About Us, Contact Us, etc.)
 * that already have dedicated routes on the frontend. `key` identifies
 * which route a document feeds; it's deliberately a closed list rather
 * than a free-form slug so editors can't create pages the site has no
 * route for.
 */
const STATIC_PAGE_KEY_LABELS: Record<StaticPageKey, { en: string; ar: string }> = {
  "about-us": { en: "About Us", ar: "من نحن" },
  "contact-us": { en: "Contact Us", ar: "اتصل بنا" },
  "privacy-policy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "terms-of-service": { en: "Terms of Service", ar: "شروط الخدمة" },
  "cookie-policy": { en: "Cookie Policy", ar: "سياسة ملفات الارتباط" },
  faq: { en: "FAQ", ar: "الأسئلة الشائعة" },
};

export const StaticPages: CollectionConfig = {
  slug: "static-pages",
  labels: {
    singular: { en: "Static Page", ar: "صفحة ثابتة" },
    plural: { en: "Static Pages", ar: "الصفحات الثابتة" },
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "key",
      type: "select",
      required: true,
      unique: true,
      label: { en: "Page", ar: "الصفحة" },
      options: STATIC_PAGE_KEYS.map((key) => ({ label: STATIC_PAGE_KEY_LABELS[key], value: key })),
      admin: {
        description: {
          en: "Which page on the site this content belongs to.",
          ar: "الصفحة على الموقع التي ينتمي إليها هذا المحتوى.",
        },
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
      label: { en: "Title", ar: "العنوان" },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      localized: true,
      label: { en: "Content", ar: "المحتوى" },
    },
    {
      name: "slug",
      type: "text",
      label: { en: "Slug", ar: "الرابط المختصر" },
      admin: {
        description: {
          en: "Reference only — the page's URL is fixed by its key.",
          ar: "للعرض فقط — رابط الصفحة يُحدَّد حسب حقل الصفحة أعلاه.",
        },
      },
    },
    {
      name: "seo",
      type: "group",
      label: { en: "SEO", ar: "تحسين محركات البحث" },
      fields: [
        {
          name: "seoTitle",
          type: "text",
          localized: true,
          label: { en: "SEO Title", ar: "عنوان السيو" },
        },
        {
          name: "seoDescription",
          type: "textarea",
          localized: true,
          label: { en: "SEO Description", ar: "وصف السيو" },
        },
      ],
    },
  ],
};
