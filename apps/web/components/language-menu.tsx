"use client";

import { Check, ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, localeNativeNames, type Locale } from "@tampdf/config";
import { useDictionary } from "@/i18n/locale-context";
import { cn } from "@/lib/utils";

/**
 * Header language control: a button showing the current language, opening a
 * dropdown grid of every supported locale (each in its own native name/
 * script, with a checkmark on the active one). Built for any number of
 * locales — today that's just `en`/`ar`, but the grid layout and column
 * count scale automatically as more are added to `packages/config`.
 */
export function LanguageMenu({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const dict = useDictionary();
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

  const restOfPath = pathname.replace(/^\/(en|ar)/, "");
  // Grid width flexes with locale count: 2 locales sit in one tidy column,
  // more locales (as the site gains languages) spread into 2-3 columns
  // instead of one long list.
  const columns = locales.length <= 3 ? 1 : locales.length <= 8 ? 2 : 3;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={dict.header.languageMenu.ariaLabel}
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-3 text-sm font-medium text-foreground/70 transition-colors hover:border-brand-300 hover:text-foreground"
      >
        <Globe size={15} />
        {localeNativeNames[locale]}
        <ChevronDown size={14} className={cn("transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          className="absolute end-0 top-full z-50 mt-2 w-[min(90vw,20rem)] rounded-2xl border border-border bg-surface p-2 shadow-xl"
          role="menu"
        >
          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {locales.map((option) => {
              const isCurrent = option === locale;
              return (
                <Link
                  key={option}
                  href={`/${option}${restOfPath}`}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent ? "true" : undefined}
                  className={cn(
                    "flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm transition-colors",
                    isCurrent
                      ? "bg-brand-50 font-semibold text-brand-600 dark:bg-brand-500/10 dark:text-brand-400"
                      : "text-foreground/75 hover:bg-surface-muted hover:text-foreground",
                  )}
                >
                  {localeNativeNames[option]}
                  {isCurrent && <Check size={15} className="shrink-0" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
