"use client";

import { UploadCloud } from "lucide-react";
import { useId, useRef, useState } from "react";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { cn, formatBytes } from "@/lib/utils";

const DEFAULT_MAX_SIZE_BYTES = 100 * 1024 * 1024;

interface FileDropzoneProps {
  accept: string[];
  multiple?: boolean;
  disabled?: boolean;
  onFilesAdded: (files: File[]) => void;
  label: string;
  /** Per-file size cap. Defaults to 100 MB. */
  maxSizeBytes?: number;
}

export function FileDropzone({
  accept,
  multiple = false,
  disabled = false,
  onFilesAdded,
  label,
  maxSizeBytes = DEFAULT_MAX_SIZE_BYTES,
}: FileDropzoneProps) {
  const dict = useDictionary();
  const [isDragging, setIsDragging] = useState(false);
  const [rejectionMessage, setRejectionMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  function handleFiles(fileList: FileList | null) {
    if (!fileList || disabled) return;

    const files = Array.from(fileList);
    const wrongType: File[] = [];
    const tooLarge: File[] = [];
    const accepted: File[] = [];

    for (const file of files) {
      if (!accept.some((ext) => file.name.toLowerCase().endsWith(ext))) {
        wrongType.push(file);
      } else if (file.size > maxSizeBytes) {
        tooLarge.push(file);
      } else {
        accepted.push(file);
      }
    }

    const messages: string[] = [];
    if (wrongType.length === 1) {
      messages.push(t(dict.dropzone.unsupportedType, { name: wrongType[0].name }));
    } else if (wrongType.length > 1) {
      messages.push(t(dict.dropzone.unsupportedTypePlural, { count: wrongType.length }));
    }
    if (tooLarge.length === 1) {
      messages.push(
        t(dict.dropzone.tooLarge, { name: tooLarge[0].name, max: formatBytes(maxSizeBytes) }),
      );
    } else if (tooLarge.length > 1) {
      messages.push(
        t(dict.dropzone.tooLargePlural, { count: tooLarge.length, max: formatBytes(maxSizeBytes) }),
      );
    }
    setRejectionMessage(messages.length > 0 ? messages.join(" ") : null);

    if (accepted.length > 0) onFilesAdded(accepted);
  }

  return (
    <div>
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={(e) => {
          if (!disabled && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            inputRef.current?.click();
          }
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
          "group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-14 text-center transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isDragging
            ? "scale-[1.01] border-brand-400 bg-brand-50"
            : "border-border bg-surface-muted hover:border-brand-300 hover:bg-brand-50/40",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 transition-transform duration-300 ease-out group-hover:scale-110">
          <UploadCloud size={26} />
        </span>
        <div>
          <p className="font-medium text-foreground">{label}</p>
          <p className="mt-1 text-sm text-foreground/50">
            {dict.dropzone.browse} &middot; {accept.join(", ").toUpperCase()}
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
          tabIndex={-1}
          onChange={(e) => {
            handleFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </div>
      {rejectionMessage && (
        <p role="alert" className="mt-2 text-sm text-red-600">
          {rejectionMessage}
        </p>
      )}
    </div>
  );
}
