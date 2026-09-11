import type { CollectionConfig } from "payload";

/**
 * Mirrors the tool slugs in packages/config/src/tools.ts. Kept as a plain
 * literal list (rather than importing the shared config package) because
 * Payload's standalone CLI (generate:importmap, generate:types, build)
 * uses its own module loader that can't reliably resolve cross-workspace
 * TypeScript source the way Next's Turbopack build does. Update this list
 * when tools are added, renamed, or removed.
 */
export const TOOL_SLUGS = [
  "merge-pdf",
  "compress-pdf",
  "pdf-to-jpg",
  "rotate-pdf",
  "compress-image",
  "image-to-pdf",
  "rotate-images",
  "split-pdf",
  "delete-pdf-pages",
  "reorder-pdf-pages",
  "crop-pdf",
  "resize-pdf",
  "png-to-pdf",
  "extract-pdf-pages",
  "add-page-numbers",
  "add-watermark",
  "remove-watermark",
  "pdf-to-images",
  "images-to-pdf",
  "flip-pdf",
  "edit-pdf-metadata",
  "remove-pdf-metadata",
  "pdf-info",
  "resize-image",
  "crop-image",
  "flip-image",
  "png-to-jpg",
  "jpg-to-png",
  "webp-to-jpg",
  "jpg-to-webp",
  "webp-to-png",
  "png-to-webp",
] as const;

/** Bilingual display names, also reused by tool-labels.ts for the Dashboard. */
export const TOOL_SLUG_LABELS: Record<(typeof TOOL_SLUGS)[number], { en: string; ar: string }> = {
  "merge-pdf": { en: "Merge PDF", ar: "دمج ملفات PDF" },
  "compress-pdf": { en: "Compress PDF", ar: "ضغط PDF" },
  "pdf-to-jpg": { en: "PDF to JPG", ar: "تحويل PDF إلى JPG" },
  "rotate-pdf": { en: "Rotate PDF", ar: "تدوير PDF" },
  "compress-image": { en: "Compress Image", ar: "ضغط الصور" },
  "image-to-pdf": { en: "JPG to PDF", ar: "تحويل JPG إلى PDF" },
  "rotate-images": { en: "Rotate Images", ar: "تدوير الصور" },
  "split-pdf": { en: "Split PDF", ar: "تقسيم PDF" },
  "delete-pdf-pages": { en: "Delete PDF Pages", ar: "حذف صفحات PDF" },
  "reorder-pdf-pages": { en: "Reorder PDF Pages", ar: "إعادة ترتيب صفحات PDF" },
  "crop-pdf": { en: "Crop PDF", ar: "قص صفحات PDF" },
  "resize-pdf": { en: "Resize PDF", ar: "تغيير حجم صفحات PDF" },
  "png-to-pdf": { en: "PNG to PDF", ar: "PNG إلى PDF" },
  "extract-pdf-pages": { en: "Extract PDF Pages", ar: "استخراج صفحات PDF" },
  "add-page-numbers": { en: "Add Page Numbers", ar: "إضافة أرقام الصفحات" },
  "add-watermark": { en: "Add Watermark", ar: "إضافة علامة مائية" },
  "remove-watermark": { en: "Remove Watermark", ar: "إزالة العلامة المائية" },
  "pdf-to-images": { en: "PDF to Images", ar: "تحويل PDF إلى صور" },
  "images-to-pdf": { en: "Images to PDF", ar: "تحويل الصور إلى PDF" },
  "flip-pdf": { en: "Flip PDF", ar: "قلب صفحات PDF" },
  "edit-pdf-metadata": { en: "Edit PDF Metadata", ar: "تغيير بيانات PDF" },
  "remove-pdf-metadata": { en: "Remove PDF Metadata", ar: "إزالة بيانات PDF" },
  "pdf-info": { en: "PDF Info", ar: "معلومات PDF" },
  "resize-image": { en: "Resize Image", ar: "تغيير أبعاد الصورة" },
  "crop-image": { en: "Crop Image", ar: "قص الصورة" },
  "flip-image": { en: "Flip Image", ar: "قلب الصورة" },
  "png-to-jpg": { en: "PNG to JPG", ar: "تحويل PNG إلى JPG" },
  "jpg-to-png": { en: "JPG to PNG", ar: "تحويل JPG إلى PNG" },
  "webp-to-jpg": { en: "WEBP to JPG", ar: "تحويل WEBP إلى JPG" },
  "jpg-to-webp": { en: "JPG to WEBP", ar: "تحويل JPG إلى WEBP" },
  "webp-to-png": { en: "WEBP to PNG", ar: "تحويل WEBP إلى PNG" },
  "png-to-webp": { en: "PNG to WEBP", ar: "تحويل PNG إلى WEBP" },
};

/**
 * Append-only usage log: one document per tool run. Dashboard and
 * per-tool stats are computed on read (counts, last-used, success/fail)
 * rather than maintained as separately-updated counters, which avoids any
 * risk of the aggregate drifting from the underlying events.
 */
export const ToolUsageEvents: CollectionConfig = {
  slug: "tool-usage-events",
  labels: {
    singular: { en: "Tool Usage Event", ar: "حدث استخدام أداة" },
    plural: { en: "Tool Usage Events", ar: "سجلّ استخدام الأدوات" },
  },
  admin: {
    useAsTitle: "tool",
    defaultColumns: ["tool", "success", "errorMessage", "createdAt"],
  },
  access: {
    // The frontend reports usage anonymously as tools are used.
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: () => false,
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "tool",
      type: "select",
      required: true,
      label: { en: "Tool", ar: "الأداة" },
      options: TOOL_SLUGS.map((slug) => ({ label: TOOL_SLUG_LABELS[slug], value: slug })),
    },
    {
      name: "success",
      type: "checkbox",
      required: true,
      defaultValue: true,
      label: { en: "Success", ar: "نجاح" },
    },
    {
      name: "errorName",
      type: "text",
      label: { en: "Error Type", ar: "نوع الخطأ" },
      admin: {
        description: {
          en: "The JS exception's name (e.g. PasswordException), when success is false.",
          ar: "اسم الاستثناء البرمجي (مثل PasswordException)، عند فشل العملية.",
        },
      },
    },
    {
      name: "errorMessage",
      type: "text",
      label: { en: "Error Message", ar: "رسالة الخطأ" },
      admin: {
        description: {
          en: "The raw exception message, when success is false — this is what actually caused the failure.",
          ar: "نص رسالة الاستثناء الفعلية عند فشل العملية — هذا هو السبب الحقيقي للفشل.",
        },
      },
    },
  ],
};
