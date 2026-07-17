import type { CollectionConfig } from "payload";
import { TOOL_SLUGS, TOOL_SLUG_LABELS } from "./ToolUsageEvents";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: { en: "Post", ar: "مقالة" },
    plural: { en: "Posts", ar: "المقالات" },
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "publishedDate"],
  },
  access: {
    // Admins (any authenticated user — there is only ever one) see everything;
    // anonymous frontend requests only ever see published posts.
    read: ({ req }) => {
      if (req.user) return true;
      return { status: { equals: "published" } };
    },
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
      label: { en: "Title", ar: "العنوان" },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: { en: "Slug", ar: "الرابط المختصر" },
      admin: {
        description: {
          en: "Used in the article's URL. Not translated.",
          ar: "يُستخدم في رابط المقالة. لا يُترجم.",
        },
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return slugify(value);
            if (data?.title) return slugify(data.title);
            return value;
          },
        ],
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      localized: true,
      label: { en: "Excerpt", ar: "مقتطف" },
      admin: {
        description: {
          en: "Short summary shown on the blog list, related-article cards, and as the fallback meta/OG description.",
          ar: "ملخص قصير يظهر في قائمة المدونة وبطاقات المقالات ذات الصلة، ويُستخدم كوصف احتياطي لميتا ومشاركة الروابط.",
        },
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      localized: true,
      label: { en: "Content", ar: "المحتوى" },
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      label: { en: "Featured Image", ar: "الصورة البارزة" },
    },
    {
      name: "relatedTool",
      type: "select",
      required: false,
      label: { en: "Related Tool", ar: "الأداة ذات الصلة" },
      options: TOOL_SLUGS.map((slug) => ({ label: TOOL_SLUG_LABELS[slug], value: slug })),
      admin: {
        description: {
          en: "Powers the call-to-action button at the end of the article. Leave empty to hide the CTA.",
          ar: "يُستخدم لزر الدعوة لاتخاذ إجراء في نهاية المقالة. اتركه فارغاً لإخفاء هذا القسم.",
        },
      },
    },
    {
      name: "cta",
      type: "group",
      label: { en: "Call to Action", ar: "الدعوة لاتخاذ إجراء" },
      admin: {
        condition: (_data, siblingData) => Boolean(siblingData?.relatedTool),
        description: {
          en: "Optional overrides for the CTA section. Leave blank to auto-generate copy from the related tool.",
          ar: "نصوص اختيارية لتخصيص قسم الدعوة لاتخاذ إجراء. اتركها فارغة لتوليد النص تلقائياً من الأداة المرتبطة.",
        },
      },
      fields: [
        {
          name: "heading",
          type: "text",
          localized: true,
          label: { en: "Heading", ar: "العنوان" },
        },
        {
          name: "body",
          type: "textarea",
          localized: true,
          label: { en: "Body", ar: "النص" },
        },
        {
          name: "buttonLabel",
          type: "text",
          localized: true,
          label: { en: "Button Label", ar: "نص الزر" },
        },
      ],
    },
    {
      name: "relatedPosts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
      label: { en: "Related Articles", ar: "مقالات ذات صلة" },
      filterOptions: ({ id }) => (id ? { id: { not_equals: id } } : true),
      admin: {
        description: {
          en: "Optional manual picks for the \"Related articles\" section. Leave empty to auto-select recent posts.",
          ar: "اختيار يدوي واختياري لقسم \"مقالات ذات صلة\". اتركه فارغاً للاختيار التلقائي لأحدث المقالات.",
        },
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      label: { en: "Status", ar: "الحالة" },
      options: [
        { label: { en: "Draft", ar: "مسودة" }, value: "draft" },
        { label: { en: "Published", ar: "منشور" }, value: "published" },
      ],
    },
    {
      name: "publishedDate",
      type: "date",
      label: { en: "Published Date", ar: "تاريخ النشر" },
      admin: {
        date: { pickerAppearance: "dayAndTime" },
      },
    },
    {
      name: "seo",
      type: "group",
      label: { en: "SEO", ar: "تحسين محركات البحث" },
      fields: [
        {
          name: "metaTitle",
          type: "text",
          localized: true,
          label: { en: "Meta Title", ar: "عنوان ميتا" },
        },
        {
          name: "metaDescription",
          type: "textarea",
          localized: true,
          label: { en: "Meta Description", ar: "وصف ميتا" },
        },
        {
          name: "ogImage",
          type: "upload",
          relationTo: "media",
          label: { en: "OG Image", ar: "صورة المشاركة" },
          admin: {
            description: {
              en: "Falls back to the featured image if left empty.",
              ar: "تُستخدم الصورة البارزة تلقائياً إذا تُركت فارغة.",
            },
          },
        },
      ],
    },
  ],
};
