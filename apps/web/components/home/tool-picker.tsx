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
 * "Choose a PDF Tool" trigger that expands a panel listing every
 * PDF-producing tool from the shared registry (see
 * `sortForPicker`/`TOOL_PICKER_ESSENTIALS_COUNT` in `lib/home-order.ts` for
 * the ordering), split into an "essentials" group and a "more tools" group
 * below a divider. Every row is a real link, so the tools are crawlable and
 * reachable without JS.
 *
 * The panel is laid out in-flow (a `max-height: 0 -> 2000px` transition on
 * an always-mounted wrapper — comfortably above any real panel height, so
 * the wrapper always ends up sized to the panel's own intrinsic height),
 * not as a `position: absolute` overlay — opening it grows the page and
 * pushes everything below it (the features row) down, rather than
 * floating on top and covering them. This also sidesteps the homepage's
 * `overflow-hidden` wrapper (there to clip the decorative hero shapes),
 * which would otherwise clip an absolutely-positioned panel taller than
 * the space left under it.
 *
 * (An earlier version animated `grid-template-rows: 0fr -> 1fr` instead,
 * the more commonly-cited version of this trick — it animated correctly
 * in dev, but the production build's minified CSS resolved `1fr` to `0px`
 * on the live site, so the panel never actually visually opened there.
 * `max-height` has no such edge case.)
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
          animate both ways instead of the panel just popping in/out. */}
      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 ease-out motion-reduce:transition-none",
          open ? "max-h-[2000px]" : "max-h-0",
        )}
      >
        <div
          role="menu"
          inert={!open}
          className="mt-3 max-h-[65vh] overflow-y-auto rounded-3xl border border-border bg-surface p-2.5 shadow-2xl shadow-slate-900/15 sm:p-3 lg:max-h-[70vh]"
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
      </div>
    </div>
  );
}
