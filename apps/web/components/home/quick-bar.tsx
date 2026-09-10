"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface QuickBarItem {
  key: string;
  label: string;
  /** "scroll" jumps to a section id on the page; "link" navigates to a tool. */
  kind: "scroll" | "link";
  /** section id for "scroll", tool slug for "link". */
  target: string;
}

const SCROLL_STEP = 220;

export function QuickBar({ locale, items }: { locale: string; items: QuickBarItem[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startScroll: number; moved: boolean } | null>(null);
  const [overflowing, setOverflowing] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const pos = Math.abs(el.scrollLeft);
    setOverflowing(maxScroll > 4);
    setAtStart(pos <= 2);
    setAtEnd(pos >= maxScroll - 2);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    sync();
    const raf = requestAnimationFrame(sync);
    document.fonts?.ready.then(sync).catch(() => {});
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    if (el.parentElement) observer.observe(el.parentElement);
    window.addEventListener("resize", sync);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  function step(direction: -1 | 1) {
    const el = railRef.current;
    if (!el) return;
    const isRtl = getComputedStyle(el).direction === "rtl";
    el.scrollBy({ left: (isRtl ? -1 : 1) * direction * SCROLL_STEP, behavior: "smooth" });
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    const el = railRef.current;
    if (!el || e.pointerType === "touch") return;
    dragRef.current = { startX: e.clientX, startScroll: el.scrollLeft, moved: false };
  }
  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const el = railRef.current;
    const drag = dragRef.current;
    if (!el || !drag) return;
    const dx = e.clientX - drag.startX;
    if (Math.abs(dx) > 4) drag.moved = true;
    el.scrollLeft = drag.startScroll - dx;
    sync();
  }
  function endDrag() {
    window.setTimeout(() => {
      dragRef.current = null;
    }, 0);
  }

  function onItemClick(item: QuickBarItem, e: MouseEvent) {
    if (dragRef.current?.moved) {
      e.preventDefault();
      return;
    }
    if (item.kind === "scroll") {
      e.preventDefault();
      document
        .getElementById(item.target)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const arrowClass =
    "absolute top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground/60 shadow-sm transition-colors hover:border-brand-300 hover:text-foreground disabled:pointer-events-none disabled:opacity-0 sm:flex";

  return (
    <div className="relative">
      <div
        ref={railRef}
        onScroll={sync}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="grid grid-cols-3 gap-2 select-none sm:mx-auto sm:flex sm:w-max sm:max-w-full sm:snap-x sm:overflow-x-auto sm:[scrollbar-width:none] sm:[&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => {
          const className = cn(
            "flex items-center justify-center rounded-full border px-3.5 py-2 text-center text-sm font-medium transition-colors sm:shrink-0 sm:snap-start",
            index === 0
              ? "border-brand-500 bg-brand-500 text-white hover:bg-brand-600"
              : "border-border bg-surface text-foreground/70 hover:border-brand-300 hover:text-foreground",
          );
          return item.kind === "link" ? (
            <Link
              key={item.key}
              href={`/${locale}/${item.target}`}
              draggable={false}
              onClick={(e) => onItemClick(item, e)}
              className={className}
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.key}
              href={`#${item.target}`}
              onClick={(e) => onItemClick(item, e)}
              className={className}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {overflowing && (
        <>
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={atStart}
            aria-label="Scroll back"
            className={cn(arrowClass, "start-0")}
          >
            <ChevronLeft size={16} className="rtl:rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={atEnd}
            aria-label="Scroll forward"
            className={cn(arrowClass, "end-0")}
          >
            <ChevronRight size={16} className="rtl:rotate-180" />
          </button>
        </>
      )}
    </div>
  );
}
