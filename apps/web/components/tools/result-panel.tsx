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
  const savedPercent =
    originalSize && originalSize > 0
      ? Math.max(0, Math.round((1 - size / originalSize) * 100))
      : null;

  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface-muted px-6 py-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-600">
        <CheckCircle2 size={28} />
      </span>
      <div>
        <p className="font-medium text-foreground">{dict.result.ready}</p>
        <p className="mt-1 text-sm text-foreground/50" dir="ltr">
          {filename} &middot; {formatBytes(size)}
          {savedPercent !== null && savedPercent > 0 && (
            <span className="text-green-600">
              {" "}
              &middot; {savedPercent}% {dict.result.smaller}
            </span>
          )}
        </p>
      </div>
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
