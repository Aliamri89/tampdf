/**
 * Purely decorative shapes around the hero — a floating "PDF" document card,
 * a plain document card, soft blobs, and a few abstract dots/squares. No
 * text lives in here (translated or not), so nothing here needs a locale.
 * Hidden below `lg` to keep the hero calm on tablet/mobile, and non-interactive
 * everywhere (`pointer-events-none`, `aria-hidden`).
 */
export function HeroVisuals() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
      {/* Soft mint/sky blobs */}
      <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-teal-200/40 blur-2xl dark:bg-teal-500/10" />
      <div className="absolute -right-4 top-24 h-48 w-48 rounded-full bg-sky-200/40 blur-2xl dark:bg-sky-500/10" />
      <div className="absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-brand-100/50 blur-2xl dark:bg-brand-500/10" />

      {/* Floating "PDF" card, upper-left */}
      <div className="absolute left-[6%] top-8 w-28 -rotate-[10deg] rounded-2xl border border-white/80 bg-white p-3 shadow-xl shadow-slate-900/10 dark:border-border dark:bg-surface">
        <div className="mb-2 flex h-7 w-16 items-center justify-center rounded-md bg-brand-500 text-[11px] font-bold text-white">
          PDF
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-white/10" />
          <div className="h-1.5 w-4/5 rounded-full bg-slate-200 dark:bg-white/10" />
          <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-white/10" />
        </div>
      </div>

      {/* Floating plain document card, upper-right */}
      <div className="absolute right-[8%] top-4 w-24 rotate-[8deg] rounded-2xl border border-white/80 bg-white p-3 shadow-xl shadow-slate-900/10 dark:border-border dark:bg-surface">
        <div className="mb-2 h-14 w-full rounded-lg bg-linear-to-br from-sky-100 to-teal-100 dark:from-sky-500/15 dark:to-teal-500/15" />
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-white/10" />
          <div className="h-1.5 w-3/5 rounded-full bg-slate-200 dark:bg-white/10" />
        </div>
      </div>

      {/* Abstract accents */}
      <div className="absolute left-[16%] bottom-6 h-10 w-10 rounded-2xl bg-teal-400/70 shadow-lg shadow-teal-500/20" />
      <div className="absolute right-[18%] bottom-2 h-7 w-7 rounded-full border-4 border-brand-300" />
      <div className="absolute right-[4%] top-1/2 h-4 w-4 rounded-full bg-sky-400/70" />
      <div className="absolute left-[2%] top-1/2 h-3 w-3 rounded-full bg-brand-400/70" />
    </div>
  );
}
