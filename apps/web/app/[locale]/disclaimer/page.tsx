import type { Metadata } from "next";
import { isValidLocale, type Locale } from "@tampdf/config";
import { notFound } from "next/navigation";
import { StaticPage } from "@/components/static-page";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildStaticPageMetadata } from "@/lib/static-page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const dict = getDictionary(isValidLocale(rawLocale) ? rawLocale : "en");
  return buildStaticPageMetadata(
    rawLocale,
    "/disclaimer",
    dict.staticPages.disclaimer.title,
    dict.staticPages.disclaimer.intro,
  );
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <StaticPage locale={locale} title={dict.staticPages.disclaimer.title}>
      <p>{dict.staticPages.disclaimer.intro}</p>
    </StaticPage>
  );
}
