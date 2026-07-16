import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@tampdf/config";
import { Container } from "@/components/ui/container";
import { getDictionary } from "@/i18n/get-dictionary";

export function StaticPage({
  locale,
  title,
  children,
  isPlaceholder = false,
}: {
  locale: Locale;
  title: string;
  children: React.ReactNode;
  /** Shows the "full content is on its way" note. Only set this when `children` is the fallback copy, not real CMS content. */
  isPlaceholder?: boolean;
}) {
  const dict = getDictionary(locale);

  return (
    <>
      <Container className="pt-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-foreground/50"
        >
          <Link href={`/${locale}`} className="shrink-0 hover:text-foreground">
            {dict.breadcrumb.home}
          </Link>
          <ChevronRight size={14} className="shrink-0 rtl:rotate-180" />
          <span className="min-w-0 truncate text-foreground/80">{title}</span>
        </nav>
      </Container>

      <Container maxWidth="2xl" className="py-10">
        <h1 className="break-words text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <div className="mt-6 space-y-4 leading-relaxed text-foreground/70">{children}</div>
        {isPlaceholder && (
          <p className="mt-8 rounded-xl border border-dashed border-border bg-surface-muted px-4 py-3 text-sm text-foreground/50">
            {dict.staticPages.note}
          </p>
        )}
      </Container>
    </>
  );
}
