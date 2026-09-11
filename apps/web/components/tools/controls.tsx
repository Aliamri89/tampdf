"use client";

import { Loader2, X } from "lucide-react";
import type { ReactNode } from "react";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { cn, formatBytes } from "@/lib/utils";

/** Shared building blocks for tool workspaces, matching the existing workspace styling. */

export const inputClass =
  "w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground focus-visible:border-brand-400 focus-visible:outline-none";

const GRID_BY_COUNT: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
};

export function OptionGroup<T extends string>({
  label,
  value,
  options,
  onChange,
  className,
}: {
  label?: string;
  value: T;
  options: { id: T; label: string; hint?: string }[];
  onChange: (value: T) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      <div
        role="radiogroup"
        aria-label={label}
        className={cn("mt-2 grid gap-2", GRID_BY_COUNT[options.length] ?? "grid-cols-3")}
      >
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={value === option.id}
            onClick={() => onChange(option.id)}
            className={cn(
              "rounded-xl border px-3 py-2.5 text-center transition-colors",
              value === option.id
                ? "border-brand-400 bg-brand-50 dark:bg-brand-500/10"
                : "border-border bg-surface hover:border-brand-200",
            )}
          >
            <span className="block text-sm font-medium text-foreground">{option.label}</span>
            {option.hint && (
              <span className="block text-xs text-foreground/50">{option.hint}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export function RangeField({
  label,
  value,
  min,
  max,
  step = 1,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  display: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="mt-1.5 flex items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-brand-500"
        />
        <span className="w-14 shrink-0 text-end text-sm tabular-nums text-foreground/70" dir="ltr">
          {display}
        </span>
      </div>
    </label>
  );
}

/** The "selected file" row shown once a single-file tool has its input. */
export function SelectedFile({
  file,
  detail,
  onRemove,
  children,
}: {
  file: File;
  detail?: string;
  onRemove: () => void;
  children?: ReactNode;
}) {
  const dict = useDictionary();
  return (
    <div className="rounded-xl border border-border p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
          <p className="text-xs text-foreground/50">
            {formatBytes(file.size)}
            {detail ? ` · ${detail}` : ""}
          </p>
        </div>
        <button
          type="button"
          onClick={onRemove}
          aria-label={t(dict.fileList.remove, { name: file.name })}
          className="shrink-0 text-foreground/40 hover:text-red-500"
        >
          <X size={18} />
        </button>
      </div>
      {children}
    </div>
  );
}

export function LoadingLine({ label }: { label: string }) {
  return (
    <div className="mt-4 flex items-center gap-2 text-sm text-foreground/50">
      <Loader2 size={16} className="animate-spin" />
      {label}
    </div>
  );
}

export function ErrorText({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-sm text-red-600">{children}</p>;
}
