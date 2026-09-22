"use client";

import { Check, ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { languageMenuOptions, localeNativeNames, type Locale } from "@tampdf/config";
import { useDictionary } from "@/i18n/locale-context";
import { cn } from "@/lib/utils";

/**
 * Header language control: a button showing the current language, opening a
 * dropdown grid of every language in `languageMenuOptions`. Only the
 * `supported` ones (today: en/ar) are real links with routes/dictionaries —
 * the rest render as inert rows (no `href`, so no navigation is possible)
 * so the menu can show the product's full intended language list without
 * ever leading to a broken page.
 *
 * The trigger button and the dropdown panel are deliberately independent:
 * the button has no width utility, so it always shrinks to fit the current
 * language's name (see `shrink-0`/`whitespace-nowrap` below) regardless of
 * how wide the panel is or how many options it lists.
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

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={dict.header.languageMenu.ariaLabel}
        className="inline-flex h-9 w-fit shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg border border-border px-3 text-sm font-medium text-foreground/70 transition-colors hover:border-brand-300 hover:text-foreground"
      >
        <Globe size={15} className="shrink-0" />
        {localeNativeNames[locale]}
        <ChevronDown size={14} className={cn("shrink-0 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          className="absolute end-0 top-full z-50 mt-2 max-h-[60vh] w-[min(92vw,20rem)] overflow-y-auto rounded-2xl border border-border bg-surface p-2 shadow-xl sm:w-[26rem] lg:max-h-none lg:w-[30rem] lg:overflow-visible"
          role="menu"
        >
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
            {languageMenuOptions.map((option) => {
              const isCurrent = option.code === locale;

              if (!option.supported) {
                return (
                  <span
                    key={option.code}
                    role="menuitem"
                    aria-disabled="true"
                    className="flex cursor-not-allowed items-center rounded-xl px-3 py-2 text-sm text-foreground/35"
                  >
                    {option.name}
                  </span>
                );
              }

              return (
                <Link
                  key={option.code}
                  href={`/${option.code}${restOfPath}`}
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
                  {option.name}
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
