"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Cards visible while collapsed, per breakpoint (always whole rows):
 * mobile 2×3, tablet 3×3, small desktop 4×2, desktop 5×2.
 */
const LIMITS = { base: 6, sm: 9, lg: 8, xl: 10 };
const DURATION_MS = 450;
const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Hides a card while collapsed at every breakpoint where it falls past the limit. */
function collapsedClass(index: number) {
  return cn(
    index >= LIMITS.base && "max-sm:hidden",
    index >= LIMITS.sm && "sm:max-lg:hidden",
    index >= LIMITS.lg && "lg:max-xl:hidden",
    index >= LIMITS.xl && "xl:hidden",
  );
}

/** Shows the toggle only at breakpoints where some cards are actually hidden. */
function toggleVisibility(count: number) {
  return cn(
    "hidden",
    count > LIMITS.base && "max-sm:flex",
    count > LIMITS.sm && "sm:max-lg:flex",
    count > LIMITS.lg && "lg:max-xl:flex",
    count > LIMITS.xl && "xl:flex",
  );
}

function currentLimit() {
  if (window.matchMedia("(min-width: 80rem)").matches) return LIMITS.xl;
  if (window.matchMedia("(min-width: 64rem)").matches) return LIMITS.lg;
  if (window.matchMedia("(min-width: 40rem)").matches) return LIMITS.sm;
  return LIMITS.base;
}

/**
 * One grid holding every card of a section. While collapsed, cards past
 * the per-breakpoint limit are hidden with CSS only — they stay in the
 * server-rendered DOM, so every tool link remains crawlable. Expanding and
 * collapsing animate the wrapper's height.
 */
export function ToolGrid({
  cards,
  moreLabel,
  lessLabel,
}: {
  cards: ReactNode[];
  moreLabel: string;
  lessLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const gridId = useId();

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function animateTo(el: HTMLDivElement, height: number, done?: () => void) {
    el.style.transition = `height ${DURATION_MS}ms ${EASING}`;
    void el.offsetHeight; // commit the start height before transitioning
    el.style.height = `${height}px`;
    timerRef.current = window.setTimeout(() => {
      done?.();
      el.style.height = "";
      el.style.overflow = "";
      el.style.transition = "";
    }, DURATION_MS + 20);
  }

  function toggle() {
    const el = wrapRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setExpanded((value) => !value);
      return;
    }
    window.clearTimeout(timerRef.current);
    el.style.height = `${el.offsetHeight}px`;
    el.style.overflow = "hidden";

    if (!expanded) {
      flushSync(() => setExpanded(true));
      animateTo(el, el.scrollHeight);
      return;
    }

    // Keep every card visible while shrinking; hide the extras only once
    // the wrapper has closed down to the last visible row.
    const items = el.querySelectorAll<HTMLElement>("[data-grid-item]");
    const lastVisible = items[Math.min(items.length, currentLimit()) - 1];
    const target = lastVisible ? lastVisible.offsetTop + lastVisible.offsetHeight : 0;
    animateTo(el, target, () => setExpanded(false));

    const section = el.closest("section");
    if (section && section.getBoundingClientRect().top < 0) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div>
      <div ref={wrapRef} className="relative">
        <div
          id={gridId}
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {cards.map((card, index) => (
            <div key={index} data-grid-item className={expanded ? undefined : collapsedClass(index)}>
              {card}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={toggle}
        aria-expanded={expanded}
        aria-controls={gridId}
        className={cn(
          toggleVisibility(cards.length),
          "mt-3 w-full items-center justify-center gap-2 rounded-2xl border border-slate-200/70 bg-slate-100/70 py-3.5 text-sm font-semibold text-foreground/75 transition-colors hover:bg-slate-200/60 hover:text-foreground dark:border-border dark:bg-surface-muted/70 dark:hover:bg-surface-muted",
        )}
      >
        {expanded ? lessLabel : moreLabel}
        <ChevronDown
          size={18}
          className={cn("transition-transform duration-300", expanded && "rotate-180")}
        />
      </button>
    </div>
  );
}
