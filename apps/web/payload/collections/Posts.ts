import type { CollectionConfig } from "payload";

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
