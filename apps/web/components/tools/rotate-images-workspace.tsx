"use client";

import { useState } from "react";
import { Loader2, RotateCw, X } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBlob } from "@/lib/download";
import { rotateImage } from "@/lib/image/rotate";
import { formatBytes } from "@/lib/utils";
import { zipFiles } from "@/lib/zip";

type Status = "idle" | "processing" | "done" | "error";

interface ImageEntry {
  id: string;
  file: File;
  thumbnail: string;
  rotation: number;
}

function createId() {
  return Math.random().toString(36).slice(2);
}

const BULK_ANGLES = [90, 180, 270] as const;

export function RotateImagesWorkspace() {
  const dict = useDictionary().workspace.rotateImages;
  const [entries, setEntries] = useState<ImageEntry[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; filename: string } | null>(null);

  function reset() {
    entries.forEach((entry) => URL.revokeObjectURL(entry.thumbnail));
    setEntries([]);
    setStatus("idle");
    setError(null);
    setResult(null);
  }

  function handleFilesAdded(added: File[]) {
    const newEntries: ImageEntry[] = added.map((file) => ({
      id: createId(),
      file,
      thumbnail: URL.createObjectURL(file),
      rotation: 0,
    }));
    setEntries((prev) => [...prev, ...newEntries]);
  }

  function removeEntry(id: string) {
    setEntries((prev) => {
      const target = prev.find((e) => e.id === id);
      if (target) URL.revokeObjectURL(target.thumbnail);
      return prev.filter((e) => e.id !== id);
    });
  }

  function rotateSingle(id: string) {
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, rotation: (e.rotation + 90) % 360 } : e)),
    );
  }

  function rotateAll(angle: number) {
    setEntries((prev) => prev.map((e) => ({ ...e, rotation: (e.rotation + angle) % 360 })));
  }

  async function handleRotate() {
    setStatus("processing");
    setError(null);
    try {
      const outputs = await Promise.all(
        entries.map(async (entry) => {
          const blob =
            entry.rotation === 0 ? entry.file : await rotateImage(entry.file, entry.rotation);
          return { name: entry.file.name, blob };
        }),
      );

      if (outputs.length === 1) {
        setResult({ blob: outputs[0].blob, filename: outputs[0].name });
      } else {
        const zipBlob = await zipFiles(outputs.map((o) => ({ name: o.name, data: o.blob })));
        setResult({ blob: zipBlob, filename: dict.resultZipName });
      }
      setStatus("done");
      trackToolUsage("rotate-images", true);
    } catch {
      setError(dict.error);
      setStatus("error");
      trackToolUsage("rotate-images", false);
    }
  }

  const canSubmit = entries.length > 0 && status !== "processing";

  if (status === "done" && result) {
    return (
      <Card className="p-6 sm:p-8">
        <ResultPanel
          filename={result.filename}
          size={result.blob.size}
          onDownload={() => downloadBlob(result.blob, result.filename)}
          onReset={reset}
        />
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <FileDropzone
        accept={[".jpg", ".jpeg", ".png", ".webp"]}
        multiple
        maxFiles={20}
        currentCount={entries.length}
        disabled={status === "processing"}
        onFilesAdded={handleFilesAdded}
        label={dict.dropLabel}
      />

      {entries.length > 0 && (
        <>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-foreground/60">{dict.rotateAllLabel}</span>
            {BULK_ANGLES.map((angle) => (
              <button
                key={angle}
                type="button"
                onClick={() => rotateAll(angle)}
                className="rounded-lg border border-border px-2.5 py-1 text-xs font-medium text-foreground/70 transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                {angle}°
              </button>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
            {entries.map((entry) => (
              <div key={entry.id} className="relative">
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local object URL, not a static asset */}
                  <img
                    src={entry.thumbnail}
                    alt=""
                    style={{ transform: `rotate(${entry.rotation}deg)` }}
                    className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-200"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => rotateSingle(entry.id)}
                  aria-label={t(dict.rotateImageLabel, { name: entry.file.name })}
                  className="absolute -right-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-foreground/70 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-600 rtl:-left-1.5 rtl:right-auto"
                >
                  <RotateCw size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => removeEntry(entry.id)}
                  aria-label={t(dict.removeImageLabel, { name: entry.file.name })}
                  className="absolute -left-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-foreground/50 shadow-sm transition-colors hover:border-red-300 hover:text-red-500 rtl:-right-1.5 rtl:left-auto"
                >
                  <X size={14} />
                </button>
                <p className="mt-1 truncate text-center text-[11px] text-foreground/50">
                  {formatBytes(entry.file.size)}
                  {entry.rotation ? ` · ${entry.rotation}°` : ""}
                </p>
              </div>
            ))}
          </div>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          <Button className="mt-6 w-full" size="lg" disabled={!canSubmit} onClick={handleRotate}>
            {status === "processing" ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <RotateCw size={18} />
            )}
            {status === "processing"
              ? dict.buttonBusy
              : entries.length === 1
                ? dict.buttonSingular
                : t(dict.buttonPlural, { count: entries.length })}
          </Button>
        </>
      )}
    </Card>
  );
}
