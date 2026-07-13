import path from "node:path";
import { fileURLToPath } from "node:url";
import type { CollectionConfig } from "payload";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: { en: "Media", ar: "وسيط" },
    plural: { en: "Media", ar: "الوسائط" },
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  upload: {
    staticDir: path.resolve(dirname, "../../media-uploads"),
    mimeTypes: ["image/*"],
    imageSizes: [
      { name: "thumbnail", width: 300, height: 300, position: "centre" },
      { name: "og", width: 1200, height: 630, position: "centre" },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: { en: "Alt Text", ar: "النص البديل" },
      admin: {
        description: {
          en: "Describes the image for screen readers and SEO.",
          ar: "يصف الصورة لقارئات الشاشة ولتحسين محركات البحث.",
        },
      },
    },
  ],
};
