import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale } from "@tampdf/config";
import { Card } from "@/components/ui/card";
import type { Post } from "@/payload/payload-types";

export function ArticlePagination({
  previous,
  next,
  locale,
  previousLabel,
  nextLabel,
}: {
  previous: Post | null;
  next: Post | null;
  locale: Locale;
  previousLabel: string;
  nextLabel: string;
}) {
  if (!previous && !next) return null;

  return (
    <nav aria-label={`${previousLabel} / ${nextLabel}`} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {previous && (
        <Link href={`/${locale}/blog/${previous.slug}`} className="group">
          <Card className="flex h-full items-center gap-3 p-4 transition-colors hover:border-brand-300">
            <ChevronLeft size={18} className="shrink-0 text-foreground/40 rtl:rotate-180" />
            <div className="min-w-0">
              <p className="text-xs text-foreground/50">{previousLabel}</p>
              <p className="truncate font-medium text-foreground group-hover:text-brand-600">{previous.title}</p>
            </div>
          </Card>
        </Link>
      )}
      {next && (
        <Link href={`/${locale}/blog/${next.slug}`} className="group sm:col-start-2">
          <Card className="flex h-full items-center gap-3 p-4 transition-colors hover:border-brand-300">
            <ChevronRight size={18} className="shrink-0 text-foreground/40 rtl:rotate-180" />
            <div className="min-w-0">
              <p className="text-xs text-foreground/50">{nextLabel}</p>
              <p className="truncate font-medium text-foreground group-hover:text-brand-600">{next.title}</p>
            </div>
          </Card>
        </Link>
      )}
    </nav>
  );
}
