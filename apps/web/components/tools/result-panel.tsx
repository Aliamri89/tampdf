"use client";

import { CheckCircle2, Download, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDictionary } from "@/i18n/locale-context";
import { formatBytes } from "@/lib/utils";

interface ResultPanelProps {
  filename: string;
  size: number;
  originalSize?: number;
  onDownload: () => void;
  onReset: () => void;
}

export function ResultPanel({
  filename,
  size,
  originalSize,
  onDownload,
  onReset,
}: ResultPanelProps) {
  const dict = useDictionary();
  const hasComparison = Boolean(originalSize && originalSize > 0);
  const savedPercent = hasComparison
    ? Math.max(0, Math.round((1 - size / originalSize!) * 100))
    : null;
  const savedBytes = hasComparison ? Math.max(0, originalSize! - size) : null;

  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface-muted px-6 py-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-600">
        <CheckCircle2 size={28} />
      </span>
      <div>
        <p className="font-medium text-foreground">{dict.result.ready}</p>
        <p className="mt-1 text-sm text-foreground/50" dir="ltr">
          {filename}
          {!hasComparison && <> &middot; {formatBytes(size)}</>}
        </p>
      </div>

      {hasComparison && (
        <div className="grid w-full max-w-sm grid-cols-2 gap-2.5 sm:grid-cols-4">
          <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
            <p className="text-[11px] text-foreground/50">{dict.result.originalSize}</p>
            <p className="mt-0.5 text-sm font-semibold text-foreground" dir="ltr">
              {formatBytes(originalSize!)}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
            <p className="text-[11px] text-foreground/50">{dict.result.newSize}</p>
            <p className="mt-0.5 text-sm font-semibold text-foreground" dir="ltr">
              {formatBytes(size)}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
            <p className="text-[11px] text-foreground/50">{dict.result.reducedBy}</p>
            <p className="mt-0.5 text-sm font-semibold text-green-600" dir="ltr">
              {savedPercent}%
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
            <p className="text-[11px] text-foreground/50">{dict.result.spaceSaved}</p>
            <p className="mt-0.5 text-sm font-semibold text-green-600" dir="ltr">
              {formatBytes(savedBytes!)}
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button onClick={onDownload}>
          <Download size={16} />
          {dict.result.download}
        </Button>
        <Button variant="secondary" onClick={onReset}>
          <RotateCcw size={16} />
          {dict.result.startOver}
        </Button>
      </div>
    </div>
  );
}
