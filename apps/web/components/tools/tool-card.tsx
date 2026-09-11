import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale, ToolDefinition } from "@tampdf/config";
import { Icon } from "@/components/icon";
import { getToolAccent } from "@/lib/tool-accent";
import { cn } from "@/lib/utils";

export function ToolCard({
  tool,
  locale,
  indexInSection = 0,
}: {
  tool: ToolDefinition;
  locale: Locale;
  /** Position within its section, used to rotate the accent palette for tools without a fixed colour. */
  indexInSection?: number;
}) {
  const accent = getToolAccent(tool.slug, indexInSection);

  return (
    <Link
      href={`/${locale}/${tool.slug}`}
      title={tool.name}
      className={cn(
        "group flex h-full min-h-[4.5rem] items-center gap-2.5 rounded-2xl border px-2.5 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:min-h-[5.25rem] sm:gap-3.5 sm:px-4 xl:gap-2.5 xl:px-3.5",
        accent.card,
        accent.border,
        accent.shadow,
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-105 sm:h-12 sm:w-12",
          accent.iconBg,
          accent.iconText,
        )}
      >
        <Icon name={tool.icon} strokeWidth={2.1} className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" />
      </span>
      <span className="min-w-0 flex-1 text-[13.5px] font-bold leading-snug text-foreground line-clamp-2 sm:text-[15px] xl:text-[14.5px]">
        {tool.shortName ?? tool.name}
      </span>
      <span
        className={cn(
          "hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/80 bg-white/90 text-foreground/55 shadow-sm transition-colors duration-300 ease-out md:flex xl:h-7 xl:w-7 dark:bg-surface",
          accent.arrowHover,
        )}
      >
        <ArrowRight
          size={15}
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
        />
      </span>
    </Link>
  );
}
