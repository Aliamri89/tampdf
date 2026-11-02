"use client";

import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/icon";
import { useDictionary } from "@/i18n/locale-context";
import { cn } from "@/lib/utils";

export interface MenuGroup {
  id: string;
  name: string;
  icon: string;
  tools: { slug: string; name: string }[];
}

/**
 * Menu button with a dropdown that pops open under it. A mouse opens it by
 * hovering the button (and closes it when the pointer leaves the button and
 * the dropdown); touch and keyboard use the button as a normal toggle. The
 * dropdown is only as wide as its text and is absolutely positioned, so
 * opening it never moves the page. It has one entry per tool category (PDF
 * tools, image tools), each expanding to that category's real tools.
 */
export function HeaderMenu({ locale, groups }: { locale: string; groups: MenuGroup[] }) {
  const dict = useDictionary().header.menu;
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function scheduleClose() {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 180);
  }

  useEffect(() => cancelClose, []);

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

  return (
    <div
      ref={rootRef}
      className="relative shrink-0"
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        cancelClose();
        setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") scheduleClose();
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={dict.open}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-foreground/75 transition-colors hover:border-brand-400 hover:text-foreground"
      >
        <Menu size={20} />
      </button>

      <div
        id={panelId}
        inert={!open}
        className={cn(
          "absolute end-0 top-full z-50 pt-2 transition-all duration-150 motion-reduce:transition-none",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <nav
          aria-label={dict.open}
          className="max-h-[75vh] w-max min-w-[11rem] max-w-[min(90vw,18rem)] overflow-y-auto rounded-xl border border-border bg-surface p-1.5 shadow-2xl"
        >
          {groups.map((group) => {
            const isOpen = expanded === group.id;
            const listId = `${panelId}-${group.id}`;
            return (
              <div key={group.id}>
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : group.id)}
                  aria-expanded={isOpen}
                  aria-controls={listId}
                  className="flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-start text-base font-bold text-foreground transition-colors hover:bg-surface-muted"
                >
                  <span className="flex items-center gap-2.5 whitespace-nowrap">
                    <Icon name={group.icon} size={18} className="text-brand-500" />
                    {group.name}
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn("shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
                  />
                </button>
                <ul id={listId} hidden={!isOpen} className="mb-1 space-y-0.5">
                  {group.tools.map((tool) => (
                    <li key={tool.slug}>
                      <Link
                        href={`/${locale}/${tool.slug}`}
                        onClick={() => setOpen(false)}
                        className="block whitespace-nowrap rounded-lg px-3 py-1.5 ps-10 text-[15px] text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground"
                      >
                        {tool.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
