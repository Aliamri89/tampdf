"use client";

import { ChevronDown, ChevronUp, FileText, X } from "lucide-react";
import { formatBytes } from "@/lib/utils";

interface FileListItemProps {
  file: File;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
}

export function FileListItem({ file, onRemove, onMoveUp, onMoveDown }: FileListItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3.5 py-2.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <FileText size={16} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
        <p className="text-xs text-foreground/50">{formatBytes(file.size)}</p>
      </div>
      {(onMoveUp || onMoveDown) && (
        <div className="flex shrink-0 flex-col">
          <button
            type="button"
            onClick={onMoveUp}
            disabled={!onMoveUp}
            aria-label="Move up"
            className="text-foreground/40 hover:text-foreground disabled:opacity-20"
          >
            <ChevronUp size={16} />
          </button>
          <button
            type="button"
            onClick={onMoveDown}
            disabled={!onMoveDown}
            aria-label="Move down"
            className="text-foreground/40 hover:text-foreground disabled:opacity-20"
          >
            <ChevronDown size={16} />
          </button>
        </div>
      )}
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${file.name}`}
        className="shrink-0 text-foreground/40 hover:text-red-500"
      >
        <X size={18} />
      </button>
    </li>
  );
}
