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
      className={cn(
        "group flex h-full items-center justify-between gap-2 rounded-xl border p-3 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md",
        accent.card,
        accent.border,
      )}
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 ease-out group-hover:scale-105 sm:h-10 sm:w-10",
            accent.iconBg,
            accent.iconText,
          )}
        >
          <Icon name={tool.icon} size={19} />
        </span>
        <span className="min-w-0 text-[13px] font-semibold leading-tight text-foreground line-clamp-2 sm:text-sm">
          {tool.name}
        </span>
      </span>
      <span
        className={cn(
          "hidden h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface/70 text-foreground/40 transition-colors duration-300 ease-out lg:flex",
          accent.arrowHover,
        )}
      >
        <ArrowRight
          size={14}
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 rtl:rotate-180"
        />
      </span>
    </Link>
  );
}
