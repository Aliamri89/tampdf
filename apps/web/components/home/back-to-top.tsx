"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() =>
        document.getElementById("tools")?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      className="mx-auto flex flex-col items-center gap-2 text-xs font-medium text-foreground/50 transition-colors hover:text-foreground"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface transition-colors">
        <ArrowUp size={16} />
      </span>
      {label}
    </button>
  );
}
