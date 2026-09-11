import { Image as ImageIcon, LayoutGrid, type LucideIcon } from "lucide-react";
import type { Locale, ToolCategory, ToolDefinition } from "@tampdf/config";
import { ToolGrid } from "@/components/home/tool-grid";
import { ToolCard } from "@/components/tools/tool-card";
import { t } from "@/i18n/format";
import { getDictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

interface SectionStyle {
  bar: string;
  badge: string;
  icon: LucideIcon;
}

const SECTION_STYLES: Record<string, SectionStyle> = {
  pdf: {
    bar: "bg-brand-500",
    badge: "bg-brand-50 text-brand-600 ring-brand-100 dark:bg-brand-500/10 dark:text-brand-400 dark:ring-brand-500/20",
    icon: LayoutGrid,
  },
  image: {
    bar: "bg-blue-500",
    badge: "bg-blue-50 text-blue-600 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20",
    icon: ImageIcon,
  },
};

/** Any future category gets this neutral-violet look automatically. */
const FALLBACK_STYLE: SectionStyle = {
  bar: "bg-violet-500",
  badge: "bg-violet-50 text-violet-600 ring-violet-100 dark:bg-violet-500/10 dark:text-violet-400 dark:ring-violet-500/20",
  icon: LayoutGrid,
};

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
  const style = SECTION_STYLES[category.id] ?? FALLBACK_STYLE;
  const BadgeIcon = style.icon;

  return (
    <section id={category.id} className="scroll-mt-20">
      <div className="rounded-3xl border border-white/80 bg-white/75 p-2.5 shadow-[0_10px_40px_-12px_rgba(15,23,42,0.10)] backdrop-blur-sm sm:p-5 xl:p-4 dark:border-border dark:bg-surface/80">
        <div className="flex items-center justify-between gap-3 px-1 pb-4 pt-1 sm:pb-5">
          <h2 className="flex items-center gap-3 text-lg font-bold text-foreground sm:text-xl">
            <span className={cn("h-6 w-1.5 shrink-0 rounded-full", style.bar)} />
            {category.name}
          </h2>
          <span
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ring-1",
              style.badge,
            )}
          >
            <BadgeIcon size={14} />
            {t(dict.home.section.toolCount, { count: tools.length })}
          </span>
        </div>

        <ToolGrid
          cards={tools.map((tool, index) => (
            <ToolCard key={tool.slug} tool={tool} locale={locale} indexInSection={index} />
          ))}
          moreLabel={t(dict.home.section.showMore, { name: category.name })}
          lessLabel={dict.home.section.showLess}
        />
      </div>
    </section>
  );
}
