"use client";

import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { useDictionary, useLocale } from "@/i18n/locale-context";
import { closeConsentSettings, setConsent, useConsent } from "@/lib/consent";

/**
 * Cookie/analytics consent banner. Shown on first visit where consent is
 * required, and whenever the footer's "Cookie settings" is used (then it also
 * has a close button and says what is currently on). Fixed to the bottom of
 * the screen so it never shifts the page.
 */
export function ConsentBanner() {
  const dict = useDictionary();
  const locale = useLocale();
  const { bannerVisible, analyticsAllowed, decided, fromSettings } = useConsent();
  if (!bannerVisible) return null;
  const c = dict.consent;
  // Closable (and showing the current state) once it was opened from the footer or a choice exists.
  const closable = fromSettings || decided;

  return (
    <div
      role="dialog"
      aria-label={c.title}
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-xl border border-border bg-surface p-4 shadow-2xl sm:inset-x-auto sm:bottom-5 sm:start-5 sm:mx-0"
    >
      {closable && (
        <button
          type="button"
          onClick={closeConsentSettings}
          aria-label={c.close}
          className="absolute end-2 top-2 flex h-8 w-8 items-center justify-center rounded-md text-foreground/50 hover:bg-surface-muted hover:text-foreground"
        >
          <X size={16} />
        </button>
      )}
      <p className="flex items-center gap-2 text-base font-bold text-foreground">
        <Cookie size={18} className="text-brand-500" />
        {c.title}
      </p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-foreground/70">
        {c.description}{" "}
        <Link href={`/${locale}/cookie-policy`} className="text-brand-600 underline">
          {dict.footer.cookiePolicy}
        </Link>
      </p>
      {closable && (
        <p className="mt-1.5 text-sm font-medium text-foreground/60">
          {analyticsAllowed ? c.statusOn : c.statusOff}
        </p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setConsent(true)}
          className="h-10 rounded-md bg-brand-500 px-5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600"
        >
          {c.accept}
        </button>
        <button
          type="button"
          onClick={() => setConsent(false)}
          className="h-10 rounded-md border border-border bg-surface px-5 text-[15px] font-semibold text-foreground transition-colors hover:bg-surface-muted"
        >
          {c.reject}
        </button>
      </div>
    </div>
  );
}
