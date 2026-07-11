"use client";

import { UploadCloud } from "lucide-react";
import { useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FileDropzoneProps {
  accept: string[];
  multiple?: boolean;
  disabled?: boolean;
  onFilesAdded: (files: File[]) => void;
  label?: string;
}

export function FileDropzone({
  accept,
  multiple = false,
  disabled = false,
  onFilesAdded,
  label,
}: FileDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  function handleFiles(fileList: FileList | null) {
    if (!fileList || disabled) return;
    const accepted = Array.from(fileList).filter((file) =>
      accept.some((ext) => file.name.toLowerCase().endsWith(ext)),
    );
    if (accepted.length > 0) onFilesAdded(accepted);
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-disabled={disabled}
      onClick={() => !disabled && inputRef.current?.click()}
      onKeyDown={(e) => {
        if (!disabled && (e.key === "Enter" || e.key === " ")) inputRef.current?.click();
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (!disabled) setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-14 text-center transition-colors",
        isDragging
          ? "border-brand-400 bg-brand-50"
          : "border-border bg-surface-muted hover:border-brand-300 hover:bg-brand-50/40",
        disabled && "pointer-events-none opacity-50",
      )}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
        <UploadCloud size={26} />
      </span>
      <div>
        <p className="font-medium text-foreground">
          {label ?? "Drag & drop your file here"}
        </p>
        <p className="mt-1 text-sm text-foreground/50">
          or click to browse &middot; {accept.join(", ").toUpperCase()}
        </p>
      </div>
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        className="hidden"
        accept={accept.join(",")}
        multiple={multiple}
        disabled={disabled}
        onChange={(e) => {
          handleFiles(e.target.files);
          e.target.value = "";
        }}
      />
    </div>
  );
}
