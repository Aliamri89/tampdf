"use client";

import { ChevronDown, ChevronUp, FileText, GripVertical, X } from "lucide-react";
import type { DragEvent } from "react";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { cn } from "@/lib/utils";
import { formatBytes } from "@/lib/utils";

interface FileListItemProps {
  file: File;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  thumbnail?: string;
  draggable?: boolean;
  isDragOver?: boolean;
  onDragStart?: (e: DragEvent<HTMLLIElement>) => void;
  onDragOver?: (e: DragEvent<HTMLLIElement>) => void;
  onDragLeave?: (e: DragEvent<HTMLLIElement>) => void;
  onDrop?: (e: DragEvent<HTMLLIElement>) => void;
  onDragEnd?: (e: DragEvent<HTMLLIElement>) => void;
}

export function FileListItem({
  file,
  onRemove,
  onMoveUp,
  onMoveDown,
  thumbnail,
  draggable,
  isDragOver,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  onDragEnd,
}: FileListItemProps) {
  const dict = useDictionary();
  return (
    <li
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      className={cn(
        "flex items-center gap-3 rounded-xl border bg-surface px-3.5 py-2.5 transition-colors",
        isDragOver ? "border-brand-400 bg-brand-50 dark:bg-brand-500/10" : "border-border",
        draggable && "cursor-grab active:cursor-grabbing",
      )}
    >
      {draggable && <GripVertical size={16} className="shrink-0 text-foreground/30" />}
      {thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element -- local blob/data URL thumbnail, not a static asset
        <img
          src={thumbnail}
          alt=""
          className="h-9 w-9 shrink-0 rounded-lg border border-border object-cover"
        />
      ) : (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10">
          <FileText size={16} />
        </span>
      )}
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
            aria-label={dict.fileList.moveUp}
            className="text-foreground/40 hover:text-foreground disabled:opacity-20"
          >
            <ChevronUp size={16} />
          </button>
          <button
            type="button"
            onClick={onMoveDown}
            disabled={!onMoveDown}
            aria-label={dict.fileList.moveDown}
            className="text-foreground/40 hover:text-foreground disabled:opacity-20"
          >
            <ChevronDown size={16} />
          </button>
        </div>
      )}
      <button
        type="button"
        onClick={onRemove}
        aria-label={t(dict.fileList.remove, { name: file.name })}
        className="shrink-0 text-foreground/40 hover:text-red-500"
      >
        <X size={18} />
      </button>
    </li>
  );
}
