"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { MenuGroup } from "@/components/header-menu";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

/**
 * Desktop-only header navigation: one button per tool category ("PDF tools",
 * "Image tools"), each with an arrow and a dropdown of that category's tools.
 * A mouse opens a dropdown just by hovering its button (it closes shortly
 * after the pointer leaves the button and the dropdown); the tools then fade
 * in one after another. Touch and keyboard use the button as a toggle. Only
 * one is open at a time; an outside click, Escape or choosing a tool closes
 * it. Hidden below `lg`, where the compact menu button (`HeaderMenu`) is used.
 */
export function HeaderNav({ locale, groups }: { locale: string; groups: MenuGroup[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const rootRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPointer = useRef<string>("");
  const baseId = useId();

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function scheduleClose() {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenId(null), 160);
  }

  useEffect(() => cancelClose, []);

  useEffect(() => {
    if (!openId) return;
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpenId(null);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenId(null);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openId]);

  return (
    <nav ref={rootRef} className="hidden items-center gap-2 lg:flex">
      {groups.map((group) => {
        const isOpen = openId === group.id;
        const panelId = `${baseId}-${group.id}`;
        const accent = group.id === "image" ? "text-[#2563eb]" : "text-brand-500";
        return (
          <div
            key={group.id}
            className="relative"
            onPointerEnter={(e) => {
              if (e.pointerType !== "mouse") return;
              cancelClose();
              setOpenId(group.id);
            }}
            onPointerLeave={(e) => {
              if (e.pointerType === "mouse") scheduleClose();
            }}
          >
            <button
              type="button"
              onPointerDown={(e) => {
                lastPointer.current = e.pointerType;
              }}
              onClick={() => {
                // A mouse already opened it by hovering: a click must not close it again.
                if (lastPointer.current === "mouse" && isOpen) return;
                setOpenId(isOpen ? null : group.id);
              }}
              aria-expanded={isOpen}
              aria-controls={panelId}
              aria-haspopup="true"
              className={cn(
                "inline-flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-base font-bold text-foreground transition-colors hover:bg-surface-muted",
                isOpen ? "bg-surface-muted" : "bg-background",
              )}
            >
              <Icon name={group.icon} size={18} className={accent} />
              <span className="whitespace-nowrap">{group.name}</span>
              <ChevronDown
                size={18}
                className={cn("shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
              />
            </button>

            <div
              id={panelId}
              inert={!isOpen}
              className={cn(
                "absolute start-0 top-full z-50 pt-2 transition-all duration-200 ease-out motion-reduce:transition-none",
                isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
              )}
            >
              <ul className="max-h-[70vh] w-max min-w-[14rem] max-w-[20rem] space-y-0.5 overflow-y-auto overscroll-contain rounded-xl border border-border bg-surface p-1.5 shadow-2xl">
                {group.tools.map((tool, index) => (
                  <li
                    key={tool.slug}
                    // Staggered entrance: each tool fades in a little after the one above.
                    style={{ transitionDelay: isOpen ? `${Math.min(index * 22, 330)}ms` : "0ms" }}
                    className={cn(
                      "transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none",
                      isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
                    )}
                  >
                    <Link
                      href={`/${locale}/${tool.slug}`}
                      onClick={() => setOpenId(null)}
                      className="block whitespace-nowrap rounded-lg px-3 py-2 text-[15px] text-foreground/85 transition-colors hover:bg-surface-muted hover:text-foreground"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
