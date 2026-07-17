import { Clock } from "lucide-react";
import type { Locale } from "@tampdf/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/format";
import { formatArticleDate, formatReadingTime } from "@/lib/article";

export function ArticleMeta({
  locale,
  dict,
  publishedDate,
  updatedDate,
  readingMinutes,
}: {
  locale: Locale;
  dict: Dictionary;
  publishedDate: string | null;
  updatedDate: string | null;
  readingMinutes: number;
}) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground/50">
      {publishedDate && <span>{t(dict.article.published, { date: formatArticleDate(publishedDate, locale) })}</span>}
      {updatedDate && <span>{t(dict.article.updated, { date: formatArticleDate(updatedDate, locale) })}</span>}
      <span className="inline-flex items-center gap-1">
        <Clock size={13} />
        {formatReadingTime(dict, readingMinutes)}
      </span>
    </div>
  );
}
