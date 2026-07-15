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
