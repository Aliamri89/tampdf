"use client";

import { ChevronDown, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale, ToolDefinition } from "@tampdf/config";
import { Icon } from "@/components/icon";
import { useDictionary } from "@/i18n/locale-context";
import { getToolAccent } from "@/lib/tool-accent";
import { cn } from "@/lib/utils";

/**
 * The homepage's single entry point into every PDF tool: one big red
 * "Choose a PDF Tool" trigger that opens a scrollable dropdown listing
 * every PDF-producing tool from the shared registry (see
 * `sortForPicker`/`TOOL_PICKER_ESSENTIALS_COUNT` in `lib/home-order.ts` for
 * the ordering), split into an "essentials" group and a "more tools" group
 * below a divider. Every row is a real link, so the tools are crawlable and
 * reachable without JS.
 */
export function ToolPicker({
  locale,
  tools,
  essentialsCount,
}: {
  locale: Locale;
  tools: ToolDefinition[];
  essentialsCount: number;
}) {
  const dict = useDictionary().home.toolPicker;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const essentials = tools.slice(0, essentialsCount);
  const rest = tools.slice(essentialsCount);

  function Row({ tool, index }: { tool: ToolDefinition; index: number }) {
    const accent = getToolAccent(tool.slug, index);
    return (
      <Link
        href={`/${locale}/${tool.slug}`}
        role="menuitem"
        onClick={() => setOpen(false)}
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted"
      >
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
            accent.iconBg,
            accent.iconText,
          )}
        >
          <Icon name={tool.icon} size={19} strokeWidth={2.1} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[15px] font-semibold text-foreground">
            {tool.name}
          </span>
          {tool.shortDescription && (
            <span className="block truncate text-xs text-foreground/50">
              {tool.shortDescription}
            </span>
          )}
        </span>
      </Link>
    );
  }

  return (
    <div ref={rootRef} className="relative mx-auto w-full max-w-md sm:max-w-lg">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={dict.ariaLabel}
        className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-brand-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/30 sm:text-lg"
      >
        <LayoutGrid size={20} />
        {dict.trigger}
        <ChevronDown size={18} className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute inset-x-0 top-full z-50 mt-3 max-h-[70vh] overflow-y-auto rounded-3xl border border-border bg-surface p-2.5 shadow-2xl shadow-slate-900/15 sm:p-3"
        >
          <div className="space-y-0.5">
            {essentials.map((tool, index) => (
              <Row key={tool.slug} tool={tool} index={index} />
            ))}
          </div>

          {rest.length > 0 && (
            <>
              <p className="mt-2 px-3 pb-1.5 pt-3 text-xs font-bold uppercase tracking-wide text-foreground/40">
                {dict.moreHeading}
              </p>
              <div className="space-y-0.5">
                {rest.map((tool, index) => (
                  <Row key={tool.slug} tool={tool} index={essentials.length + index} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
