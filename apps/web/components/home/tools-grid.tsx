"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/icon";
import { useDictionary } from "@/i18n/locale-context";
import { HOME_GROUP_ORDER, homeGroupOf, type HomeGroupId } from "@/lib/home-groups";
import { cn } from "@/lib/utils";

export interface GridTool {
  slug: string;
  name: string;
  icon: string;
  category: "pdf" | "image";
}

type Filter = "all" | HomeGroupId;

/**
 * Square tool cards with a filter-chip bar. Every card is a real link and all
 * of them are in the server-rendered HTML (the default filter is "All"), so
 * the tools stay crawlable; filtering only hides the rest afterwards.
 *
 * Icon colour is fixed per category (PDF tools red, image tools blue) and
 * does not depend on the theme.
 */
export function ToolsGrid({ locale, tools }: { locale: string; tools: GridTool[] }) {
  const dict = useDictionary().home;
  const [filter, setFilter] = useState<Filter>("all");

  const filters: Filter[] = ["all", ...HOME_GROUP_ORDER];
  const visible = tools.filter((tool) => filter === "all" || homeGroupOf(tool.slug) === filter);

  return (
    <div>
      <div
        role="tablist"
        aria-label={dict.moreTools}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {filters.map((id) => {
          const active = filter === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(id)}
              className={cn(
                "rounded-full border px-5 py-2 text-[15px] font-medium transition-colors",
                active
                  ? "border-brand-500 bg-brand-500 text-white"
                  : "border-home-border bg-home-card text-foreground/70 hover:border-brand-400 hover:text-foreground",
              )}
            >
              {dict.groups[id]}
            </button>
          );
        })}
      </div>

      <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
        {visible.map((tool) => {
          const isImageTool = tool.category === "image";
          return (
          <li key={tool.slug}>
            <Link
              href={`/${locale}/${tool.slug}`}
              className={cn(
                "group flex aspect-square flex-col items-center justify-center gap-3 rounded-xl border border-home-border bg-home-card p-3 text-center shadow-sm outline-none transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl focus-visible:-translate-y-1.5 focus-visible:shadow-xl",
                isImageTool
                  ? "hover:border-[#2563eb] hover:bg-[#2563eb]/10 hover:shadow-[#2563eb]/25 focus-visible:border-[#2563eb]"
                  : "hover:border-[#ed0a0a] hover:bg-[#ed0a0a]/10 hover:shadow-[#ed0a0a]/25 focus-visible:border-[#ed0a0a]",
              )}
            >
              <span
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-md text-white shadow-md transition-transform duration-200 group-hover:scale-110 group-focus-visible:scale-110 sm:h-16 sm:w-16",
                  isImageTool
                    ? "bg-[#2563eb] shadow-[#2563eb]/25"
                    : "bg-[#ed0a0a] shadow-[#ed0a0a]/25",
                )}
              >
                <Icon name={tool.icon} size={28} strokeWidth={2} />
              </span>
              <span className="line-clamp-2 text-balance text-[15px] font-semibold leading-snug text-foreground sm:text-base">
                {tool.name}
              </span>
            </Link>
          </li>
          );
        })}
      </ul>
    </div>
  );
}
