"use client";

import { Languages } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@tampdf/config";
import { useDictionary } from "@/i18n/locale-context";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const dict = useDictionary();
  const targetLocale: Locale = locale === "en" ? "ar" : "en";
  const restOfPath = pathname.replace(/^\/(en|ar)/, "");
  const targetHref = `/${targetLocale}${restOfPath}`;

  return (
    <Link
      href={targetHref}
      className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-3 text-sm font-medium text-foreground/70 transition-colors hover:border-brand-300 hover:text-foreground"
      aria-label="Switch language"
    >
      <Languages size={15} />
      {dict.header.switchLanguageTo}
    </Link>
  );
}
