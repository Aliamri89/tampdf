import type { Metadata } from "next";
import { Geist_Mono, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";
import { getLocalizedSiteConfig, isValidLocale, localeDirection, locales } from "@tampdf/config";
import { AnalyticsBeacon } from "@/components/analytics-beacon";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
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

// Every locale in `locales` is a real, fully-dictionaried page (see
// i18n/get-dictionary.ts), but only English/Arabic are pre-rendered at
// build time -- pre-rendering all 24 would multiply build time/output for
// languages that get a fraction of the traffic. The other 22 render
// on-demand on first visit and are cached afterwards via `revalidate`
// below, same as any other dynamic param; nothing about them is a stub.
const PRERENDERED_LOCALES = ["en", "ar"] as const;

export function generateStaticParams() {
  return PRERENDERED_LOCALES.map((locale) => ({ locale }));
}

// Pages under this layout are prerendered at build time (SSG). Without
// this, CMS edits made after deployment (Settings, Posts, static pages)
// would never appear on the live site until the next rebuild -- this makes
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
      canonical: `/${locale}`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `/${l}`]),
        ["x-default", "/en"],
      ]),
    },
    openGraph: {
      type: "website",
      siteName,
      title,
      description: siteConfig.description,
      url: `/${locale}`,
      locale,
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
  const locale = rawLocale;
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
        <AnalyticsScripts />
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
