"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
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
 * Header menu button plus a side panel with exactly one entry per tool
 * category (PDF tools, image tools), each expanding to that category's real
 * tools. The panel is `position: fixed` and rendered through a portal into
 * <body>: the header uses `backdrop-filter`, which would otherwise make it
 * the containing block of any fixed descendant. Opening it never changes the
 * page layout.
 */
export function HeaderMenu({ locale, groups }: { locale: string; groups: MenuGroup[] }) {
  const dict = useDictionary().header.menu;
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  // False on the server and during hydration, true afterwards: the portal target (<body>) only exists on the client.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    const button = buttonRef.current;
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      button?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={dict.open}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-foreground/70 transition-colors hover:border-brand-300 hover:text-foreground"
      >
        <Menu size={18} />
      </button>

      {mounted &&
        createPortal(
          <div className={cn("fixed inset-0 z-50", !open && "pointer-events-none")}>
            <div
              aria-hidden
              onClick={() => setOpen(false)}
              className={cn(
                "absolute inset-0 bg-black/55 transition-opacity duration-300 motion-reduce:transition-none",
                open ? "opacity-100" : "opacity-0",
              )}
            />
            <aside
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label={dict.open}
              inert={!open}
              className={cn(
                "absolute inset-y-0 end-0 flex w-[min(88vw,22rem)] flex-col border-s border-border bg-surface shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none",
                open ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full",
              )}
            >
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4">
                <span className="text-base font-bold text-foreground">{dict.open}</span>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={dict.close}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/70 transition-colors hover:text-foreground"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-3">
                {groups.map((group) => {
                  const isOpen = expanded === group.id;
                  const listId = `${panelId}-${group.id}`;
                  return (
                    <div key={group.id} className="mb-1">
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : group.id)}
                        aria-expanded={isOpen}
                        aria-controls={listId}
                        className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-start text-[15px] font-bold text-foreground transition-colors hover:bg-surface-muted"
                      >
                        <span className="flex items-center gap-3">
                          <Icon name={group.icon} size={18} className="text-brand-500" />
                          {group.name}
                        </span>
                        <ChevronDown
                          size={18}
                          className={cn("shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
                        />
                      </button>
                      <ul id={listId} hidden={!isOpen} className="mb-2 mt-0.5 space-y-0.5 ps-9 pe-1">
                        {group.tools.map((tool) => (
                          <li key={tool.slug}>
                            <Link
                              href={`/${locale}/${tool.slug}`}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-foreground/75 transition-colors hover:bg-surface-muted hover:text-foreground"
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
            </aside>
          </div>,
          document.body,
        )}
    </>
  );
}
