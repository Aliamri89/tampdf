import type { Metadata } from "next";
import { Geist_Mono, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";
import {
  getLocalizedSiteConfig,
  isValidLocale,
  localeDirection,
  locales,
  type Locale,
} from "@tampdf/config";
import { AnalyticsBeacon } from "@/components/analytics-beacon";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeInitScript } from "@/components/theme-init-script";
import { getDictionary } from "@/i18n/get-dictionary";
import { LocaleProvider } from "@/i18n/locale-context";
import { getSettings } from "@/lib/get-settings";
import "../globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Pages under this layout are prerendered at build time (SSG). Without
// this, CMS edits made after deployment (Settings, Posts, static pages)
// would never appear on the live site until the next rebuild — this makes
// Next.js revalidate them in the background at most every 60s instead.
export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const siteConfig = getLocalizedSiteConfig(locale);
  const settings = await getSettings();
  const siteName = settings.siteName || siteConfig.name;
  const title = `${siteName} — ${siteConfig.tagline}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s | ${siteName}` },
    description: siteConfig.description,
    alternates: {
      canonical: locale === "en" ? "/en" : "/ar",
      languages: { en: "/en", ar: "/ar", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      siteName,
      title,
      description: siteConfig.description,
      url: locale === "en" ? "/en" : "/ar",
      locale: locale === "ar" ? "ar_SA" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: siteConfig.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dir = localeDirection[locale];
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${geistMono.variable} ${tajawal.variable} h-full antialiased ${locale === "ar" ? "font-arabic" : "font-sans"}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeInitScript />
        <LocaleProvider locale={locale} dict={dict}>
          <AnalyticsBeacon locale={locale} />
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </LocaleProvider>
      </body>
    </html>
  );
}
