import { revalidatePath } from "next/cache";
import type { GlobalConfig } from "payload";
import { isApprovedAdmin } from "../lib/approved-admins";

const SLOT_MESSAGE = {
  en: "Digits only (6–20), e.g. 1234567890",
  ar: "أرقام فقط (من 6 إلى 20 رقمًا)، مثل 1234567890",
};

/**
 * On/off switches and ids for the third-party services (AdSense, Google
 * Analytics 4, Microsoft Clarity).
 *
 * A switch only ever REMOVES a service from the site. It never grants or
 * forces visitor consent — that stays with Google's message / the cookie
 * banner. The site reads this with server privileges (lib/services.ts), so it
 * is not readable by anonymous REST/GraphQL requests, and only e-mails listed
 * in APPROVED_ADMIN_EMAILS may change it (nobody, if the variable is empty).
 */
export const Services: GlobalConfig = {
  slug: "services",
  label: { en: "Services & Privacy", ar: "الخدمات والخصوصية" },
  admin: {
    description: {
      en: "Turn AdSense, Google Analytics 4 and Microsoft Clarity on or off. A switch only removes a service; visitor consent is still required where it applies. Only e-mails listed in the server's APPROVED_ADMIN_EMAILS can change this page. Turning AdSense off also removes Google's consent message.",
      ar: "تشغيل أو إيقاف AdSense وGoogle Analytics 4 وMicrosoft Clarity. المفتاح يُزيل الخدمة فقط، وتبقى موافقة الزائر مطلوبة حيث تنطبق. لا يستطيع تعديل هذه الصفحة إلا البريد المدرج في متغير الخادم APPROVED_ADMIN_EMAILS. إيقاف AdSense يزيل أيضًا رسالة الموافقة من Google.",
    },
  },
  access: {
    // The site reads this through Payload's Local API (server privileges), so
    // anonymous visitors do not need — and do not get — read access.
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => isApprovedAdmin(req.user),
  },
  hooks: {
    afterChange: [
      () => {
        // Make a saved change show up now instead of after the 60 s page cache.
        try {
          revalidatePath("/", "layout");
        } catch {
          // Outside a Next.js request (scripts): the 60 s revalidation still applies.
        }
      },
    ],
  },
  fields: [
    {
      name: "adsense",
      type: "group",
      label: { en: "Google AdSense", ar: "Google AdSense" },
      fields: [
        {
          name: "enabled",
          type: "checkbox",
          defaultValue: true,
          label: { en: "AdSense enabled", ar: "تفعيل AdSense" },
          admin: {
            description: {
              en: "Off removes the AdSense code, the ad spaces, the ads.txt line and Google's consent message.",
              ar: "الإيقاف يزيل كود AdSense ومساحات الإعلانات وسطر ads.txt ورسالة الموافقة من Google.",
            },
          },
        },
        {
          name: "publisherId",
          type: "text",
          label: { en: "Publisher ID", ar: "معرّف الناشر" },
          admin: {
            placeholder: "ca-pub-XXXXXXXXXXXXXXXX",
            description: {
              en: "Leave blank to use NEXT_PUBLIC_ADSENSE_CLIENT from the server environment.",
              ar: "اتركه فارغًا لاستخدام NEXT_PUBLIC_ADSENSE_CLIENT من بيئة الخادم.",
            },
          },
          validate: (value: string | null | undefined) => {
            const v = value?.trim();
            if (!v || /^ca-pub-\d{10,20}$/.test(v)) return true;
            return "Expected ca-pub- followed by digits, e.g. ca-pub-1234567890123456";
          },
        },
        {
          name: "slotTool",
          type: "text",
          label: { en: "Ad unit — tool pages", ar: "وحدة الإعلان — صفحات الأدوات" },
          admin: {
            description: {
              en: "Leave blank to use NEXT_PUBLIC_ADSENSE_SLOT_TOOL.",
              ar: "اتركه فارغًا لاستخدام NEXT_PUBLIC_ADSENSE_SLOT_TOOL.",
            },
          },
          validate: (value: string | null | undefined) => {
            const v = value?.trim();
            return !v || /^\d{6,20}$/.test(v) ? true : SLOT_MESSAGE.en;
          },
        },
        {
          name: "slotBlog",
          type: "text",
          label: { en: "Ad unit — blog articles", ar: "وحدة الإعلان — مقالات المدونة" },
          admin: {
            description: {
              en: "Leave blank to use NEXT_PUBLIC_ADSENSE_SLOT_BLOG.",
              ar: "اتركه فارغًا لاستخدام NEXT_PUBLIC_ADSENSE_SLOT_BLOG.",
            },
          },
          validate: (value: string | null | undefined) => {
            const v = value?.trim();
            return !v || /^\d{6,20}$/.test(v) ? true : SLOT_MESSAGE.en;
          },
        },
      ],
    },
    {
      name: "tracking",
      type: "group",
      label: { en: "Analytics", ar: "التحليلات" },
      admin: {
        description: {
          en: "The ids stay in Settings ▸ Analytics. These switches turn each service off without deleting its id.",
          ar: "تبقى المعرّفات في الإعدادات ◂ التحليلات. هذه المفاتيح توقف كل خدمة دون حذف معرّفها.",
        },
      },
      fields: [
        {
          name: "ga4Enabled",
          type: "checkbox",
          defaultValue: true,
          label: { en: "Google Analytics 4 enabled", ar: "تفعيل Google Analytics 4" },
        },
        {
          name: "clarityEnabled",
          type: "checkbox",
          defaultValue: true,
          label: { en: "Microsoft Clarity enabled", ar: "تفعيل Microsoft Clarity" },
        },
      ],
    },
  ],
};
