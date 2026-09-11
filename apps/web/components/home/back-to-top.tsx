"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group mx-auto flex flex-col items-center gap-2 text-sm font-medium text-foreground/55 transition-colors hover:text-foreground"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/90 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md dark:bg-surface">
        <ArrowUp size={18} />
      </span>
      {label}
    </button>
  );
}
