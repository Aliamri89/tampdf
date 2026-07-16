import type { CollectionConfig, SelectFieldSingleValidation } from "payload";

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
    // `_status` (added by `versions.drafts` below) isn't filtered
    // automatically — Payload only excludes drafts from a plain `find()`
    // when access control says to. Admin users always see everything;
    // anonymous frontend requests only ever see published content.
    read: ({ req }) => {
      if (req.user) return true;
      return { _status: { equals: "published" } };
    },
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  // Autosaves in-progress edits to a separate draft version every 2s of
  // inactivity, independent of the "Save"/"Publish" click. Combined with
  // the `_status` filter above, autosaved drafts never touch what the
  // public site (see lib/static-pages.ts) shows until an editor explicitly
  // publishes.
  versions: {
    // Payload defaults to keeping 100 versions per document. Autosave
    // updates the same in-progress draft row rather than inserting a new
    // one, but every explicit "Publish" does create a new version row —
    // for a 6-document collection that's edited often, 100 is far more
    // history than anyone needs and just means more rows for every
    // versions-table query (list view, publish, version history) to
    // consider over time. Capping it keeps that bounded.
    maxPerDoc: 20,
    drafts: {
      autosave: {
        interval: 2000,
      },
    },
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
      // `key` is deliberately shared (not localized) so one document holds
      // every language's content for a page. Editors add a second language
      // by opening the existing document and switching the locale selector
      // — NOT by creating a new document with the same key. Catch that
      // mistake here with a clear message instead of letting it surface as
      // the raw Postgres unique-constraint error ("value must be unique").
      validate: (async (value, { operation, req }) => {
        if (operation !== "create" || !value) return true;
        const { totalDocs } = await req.payload.find({
          collection: "static-pages",
          where: { key: { equals: value } },
          limit: 0,
          req,
        });
        if (totalDocs > 0) {
          return req.i18n?.language === "ar"
            ? "توجد صفحة بهذا المفتاح مسبقًا. افتح الصفحة الحالية من القائمة واستخدم مبدّل اللغة (أعلى يمين الشاشة) لإضافة المحتوى بلغة أخرى، بدلاً من إنشاء صفحة جديدة."
            : "A page with this key already exists. Open the existing page from the list and use the locale switcher (top-right of the screen) to add content in another language, instead of creating a new page.";
        }
        return true;
      }) satisfies SelectFieldSingleValidation,
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
