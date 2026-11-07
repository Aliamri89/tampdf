import { toArticleLocale, type Locale } from "@tampdf/config";

export interface ContactFormText {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  subject: string;
  subjectPlaceholder: string;
  subjects: { value: string; label: string }[];
  message: string;
  messagePlaceholder: string;
  next: string;
  back: string;
  send: string;
  sending: string;
  /** Template with {current} and {total} (a plain string: functions cannot be passed to client components). */
  stepOf: string;
  required: string;
  invalidEmail: string;
  tooShort: string;
  successTitle: string;
  successText: string;
  errorGeneric: string;
  errorNotConfigured: string;
  errorRateLimited: string;
}

const en: ContactFormText = {
  name: "Your name",
  namePlaceholder: "Name",
  email: "Email address",
  emailPlaceholder: "you@example.com",
  subject: "Subject",
  subjectPlaceholder: "Choose a subject…",
  subjects: [
    { value: "question", label: "General question" },
    { value: "problem", label: "Report a problem with a tool" },
    { value: "suggestion", label: "Suggest a new tool or feature" },
    { value: "business", label: "Advertising and partnerships" },
    { value: "privacy", label: "Privacy request" },
    { value: "other", label: "Something else" },
  ],
  message: "Your message",
  messagePlaceholder:
    "Tell us how we can help. If it is about a tool, include its name, your device and browser.",
  next: "Next step",
  back: "Back",
  send: "Send message",
  sending: "Sending…",
  stepOf: "Step {current} of {total}",
  required: "This field is required.",
  invalidEmail: "Enter a valid email address.",
  tooShort: "Please write at least 10 characters.",
  successTitle: "Message sent",
  successText: "Thank you. We have received your message and will reply to your email address.",
  errorGeneric: "Your message could not be sent. Please try again, or email us directly.",
  errorNotConfigured: "The contact form is not available right now. Please email us directly.",
  errorRateLimited: "Too many messages in a short time. Please try again in a few minutes.",
};

const ar: ContactFormText = {
  name: "اسمك",
  namePlaceholder: "الاسم",
  email: "البريد الإلكتروني",
  emailPlaceholder: "you@example.com",
  subject: "الموضوع",
  subjectPlaceholder: "اختر موضوعًا…",
  subjects: [
    { value: "question", label: "سؤال عام" },
    { value: "problem", label: "الإبلاغ عن مشكلة في أداة" },
    { value: "suggestion", label: "اقتراح أداة أو ميزة جديدة" },
    { value: "business", label: "الإعلانات والشراكات" },
    { value: "privacy", label: "طلب يتعلق بالخصوصية" },
    { value: "other", label: "موضوع آخر" },
  ],
  message: "رسالتك",
  messagePlaceholder: "أخبرنا كيف نستطيع مساعدتك. وإن كانت عن أداة فاذكر اسمها ونوع جهازك والمتصفح.",
  next: "الخطوة التالية",
  back: "رجوع",
  send: "إرسال الرسالة",
  sending: "جارٍ الإرسال…",
  stepOf: "الخطوة {current} من {total}",
  required: "هذا الحقل مطلوب.",
  invalidEmail: "أدخل بريدًا إلكترونيًا صحيحًا.",
  tooShort: "اكتب 10 أحرف على الأقل.",
  successTitle: "تم إرسال الرسالة",
  successText: "شكرًا لك. وصلتنا رسالتك وسنرد على بريدك الإلكتروني.",
  errorGeneric: "تعذّر إرسال رسالتك. حاول مرة أخرى أو راسلنا مباشرة بالبريد.",
  errorNotConfigured: "نموذج التواصل غير متاح حاليًا. راسلنا مباشرة بالبريد.",
  errorRateLimited: "رسائل كثيرة في وقت قصير. حاول مرة أخرى بعد دقائق.",
};

/** Like articles, the form is written in English/Arabic; other languages show the English form. */
export function getContactFormText(locale: Locale): ContactFormText {
  return toArticleLocale(locale) === "ar" ? ar : en;
}

export const CONTACT_SUBJECT_VALUES = en.subjects.map((s) => s.value);
