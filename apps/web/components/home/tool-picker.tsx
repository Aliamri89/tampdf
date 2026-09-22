"use client";

import { ChevronDown, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale, ToolDefinition } from "@tampdf/config";
import { Icon } from "@/components/icon";
import { useDictionary } from "@/i18n/locale-context";
import { getToolAccent } from "@/lib/tool-accent";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 5;

/**
 * The homepage's single entry point into every tool: one big red
 * "Choose a PDF Tool" trigger that expands a panel listing every tool from
 * the shared registry, most-used first (see `sortForPicker` in
 * `lib/home-order.ts`). Every row is a real link, so the tools are
 * crawlable and reachable without JS.
 *
 * Progressive disclosure, not scroll: only the first `PAGE_SIZE` tools
 * render initially, with a "load more" button revealing `PAGE_SIZE` more
 * per click until every tool is shown — no tool is ever reachable only by
 * scrolling a clipped sub-panel.
 *
 * The panel is laid out in-flow (a `max-height: 0 -> large` transition on
 * an always-mounted wrapper, sized comfortably above the panel's own
 * intrinsic height even with all tools revealed), not as a
 * `position: absolute` overlay — opening it (and revealing more tools)
 * grows the page and pushes everything below it (the features row) down,
 * rather than floating on top and covering them. This also sidesteps the
 * homepage's `overflow-hidden` wrapper (there to clip the decorative hero
 * shapes), which would otherwise clip an absolutely-positioned panel taller
 * than the space left under it.
 *
 * (An earlier version animated `grid-template-rows: 0fr -> 1fr` instead,
 * the more commonly-cited version of this trick — it animated correctly
 * in dev, but the production build's minified CSS resolved `1fr` to `0px`
 * on the live site, so the panel never actually visually opened there.
 * `max-height` has no such edge case.)
 */
export function ToolPicker({ locale, tools }: { locale: Locale; tools: ToolDefinition[] }) {
  const dict = useDictionary().home.toolPicker;
  const [open, setOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
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

  const visibleTools = tools.slice(0, visibleCount);
  const allShown = visibleCount >= tools.length;

  function Row({ tool, index }: { tool: ToolDefinition; index: number }) {
    const accent = getToolAccent(tool.slug, index);
    return (
      <Link
        href={`/${locale}/${tool.slug}`}
        role="menuitem"
        onClick={() => setOpen(false)}
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-start transition-colors hover:bg-surface-muted"
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
        <span className="min-w-0 flex-1 text-start">
          <span className="block truncate text-start text-[15px] font-semibold text-foreground">
            {tool.name}
          </span>
          {tool.shortDescription && (
            <span className="block truncate text-start text-xs text-foreground/50">
              {tool.shortDescription}
            </span>
          )}
        </span>
      </Link>
    );
  }

  return (
    <div ref={rootRef} className="mx-auto w-full max-w-md sm:max-w-lg">
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

      {/* Always mounted (not `{open && ...}`) so the height transition can
          animate both ways instead of the panel just popping in/out. The
          cap is generous enough to fit every tool revealed (no internal
          scroll sub-panel — see the module doc above) without clipping. */}
      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 ease-out motion-reduce:transition-none",
          open ? "max-h-[3000px]" : "max-h-0",
        )}
      >
        <div
          role="menu"
          inert={!open}
          className="mt-3 rounded-3xl border border-border bg-surface p-2.5 shadow-2xl shadow-slate-900/15 sm:p-3"
        >
          <div className="space-y-0.5">
            {visibleTools.map((tool, index) => (
              <Row key={tool.slug} tool={tool} index={index} />
            ))}
          </div>

          {allShown ? (
            <p className="mt-2 px-3 py-2.5 text-center text-xs font-semibold text-foreground/40">
              {dict.allShown}
            </p>
          ) : (
            <button
              type="button"
              onClick={() => setVisibleCount((v) => Math.min(v + PAGE_SIZE, tools.length))}
              className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-surface-muted px-3 py-2.5 text-sm font-semibold text-foreground/70 transition-colors hover:bg-surface-muted/70 hover:text-foreground"
            >
              {dict.loadMore}
              <ChevronDown size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
