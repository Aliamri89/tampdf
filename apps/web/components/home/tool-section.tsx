import { LayoutGrid } from "lucide-react";
import type { Locale, ToolCategory, ToolDefinition } from "@tampdf/config";
import { ToolGrid } from "@/components/home/tool-grid";
import { ToolCard } from "@/components/tools/tool-card";
import { t } from "@/i18n/format";
import { getDictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

const VISIBLE_LIMIT = 10;

export function ToolSection({
  category,
  tools,
  locale,
}: {
  category: ToolCategory;
  tools: ToolDefinition[];
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const cards = tools.map((tool, index) => (
    <ToolCard key={tool.slug} tool={tool} locale={locale} indexInSection={index} />
  ));
  const rest = cards.slice(VISIBLE_LIMIT);

  return (
    <section id={category.id} className="scroll-mt-20">
      <div className="rounded-2xl border border-border bg-surface p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="flex items-center gap-2.5 text-base font-semibold text-foreground sm:text-lg">
            <span
              className={cn(
                "h-5 w-1 shrink-0 rounded-full",
                category.id === "pdf" ? "bg-brand-500" : "bg-sky-500",
              )}
            />
            {category.name}
          </h2>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-foreground/60">
            <LayoutGrid size={12} />
            {t(dict.home.section.toolCount, { count: tools.length })}
          </span>
        </div>

        <div className="mt-4">
          <ToolGrid
            visible={cards.slice(0, VISIBLE_LIMIT)}
            rest={rest}
            hasRest={rest.length > 0}
            moreLabel={t(dict.home.section.showMore, { name: category.name })}
            lessLabel={dict.home.section.showLess}
          />
        </div>
      </div>
    </section>
  );
}
