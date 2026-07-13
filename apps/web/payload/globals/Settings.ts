import type { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
  slug: "settings",
  label: { en: "Settings", ar: "الإعدادات" },
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "siteName",
      type: "text",
      label: { en: "Site Name", ar: "اسم الموقع" },
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: { en: "Logo", ar: "الشعار" },
    },
    {
      name: "favicon",
      type: "upload",
      relationTo: "media",
      label: { en: "Favicon", ar: "أيقونة الموقع" },
    },
    {
      name: "contactEmail",
      type: "email",
      label: { en: "Contact Email", ar: "البريد الإلكتروني للتواصل" },
    },
    {
      name: "socialLinks",
      type: "array",
      label: { en: "Social Links", ar: "روابط التواصل الاجتماعي" },
      labels: {
        singular: { en: "Social Link", ar: "رابط تواصل اجتماعي" },
        plural: { en: "Social Links", ar: "روابط التواصل الاجتماعي" },
      },
      fields: [
        {
          name: "platform",
          type: "select",
          required: true,
          label: { en: "Platform", ar: "المنصة" },
          options: [
            { label: { en: "Facebook", ar: "فيسبوك" }, value: "facebook" },
            { label: { en: "X (Twitter)", ar: "إكس (تويتر)" }, value: "twitter" },
            { label: { en: "Instagram", ar: "إنستغرام" }, value: "instagram" },
            { label: { en: "LinkedIn", ar: "لينكد إن" }, value: "linkedin" },
            { label: { en: "YouTube", ar: "يوتيوب" }, value: "youtube" },
            { label: { en: "TikTok", ar: "تيك توك" }, value: "tiktok" },
          ],
        },
        {
          name: "url",
          type: "text",
          required: true,
          label: { en: "URL", ar: "الرابط" },
        },
      ],
    },
    {
      name: "analytics",
      type: "group",
      label: { en: "Analytics", ar: "التحليلات" },
      admin: {
        description: {
          en: "Enter these after deployment to enable Google Analytics 4 and Microsoft Clarity. Leaving them blank keeps both disabled.",
          ar: "أدخل هذه القيم بعد نشر الموقع لتفعيل Google Analytics 4 و Microsoft Clarity. تركها فارغة يُبقي الخدمتين معطّلتين.",
        },
      },
      fields: [
        {
          name: "ga4MeasurementId",
          type: "text",
          label: { en: "Google Analytics 4 Measurement ID", ar: "معرّف قياس Google Analytics 4" },
          admin: { placeholder: "G-XXXXXXXXXX" },
        },
        {
          name: "clarityProjectId",
          type: "text",
          label: { en: "Microsoft Clarity Project ID", ar: "معرّف مشروع Microsoft Clarity" },
        },
      ],
    },
  ],
};
