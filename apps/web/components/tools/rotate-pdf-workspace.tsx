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
import { isPdfPasswordError, renderAllPageThumbnails } from "@/lib/pdf/render";
import { rotatePdfPages } from "@/lib/pdf/rotate";
import { formatBytes } from "@/lib/utils";
import { zipFiles } from "@/lib/zip";

type Status = "idle" | "processing" | "done" | "error";

interface PageState {
  pageNumber: number;
  thumbnail: string;
  rotation: number;
}

type ReadErrorKind = "password" | "generic" | null;

interface FileEntry {
  id: string;
  file: File;
  pages: PageState[];
  loading: boolean;
  readError: ReadErrorKind;
}

function createId() {
  return Math.random().toString(36).slice(2);
}

const BULK_ANGLES = [90, 180, 270] as const;

export function RotatePdfWorkspace() {
  const dict = useDictionary().workspace.rotatePdf;
  const [entries, setEntries] = useState<FileEntry[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; filename: string } | null>(null);

  function reset() {
    setEntries([]);
    setStatus("idle");
    setError(null);
    setResult(null);
  }

  function handleFilesAdded(added: File[]) {
    const newEntries: FileEntry[] = added.map((file) => ({
      id: createId(),
      file,
      pages: [],
      loading: true,
      readError: null,
    }));
    setEntries((prev) => [...prev, ...newEntries]);

    for (const entry of newEntries) {
      renderAllPageThumbnails(entry.file)
        .then((thumbnails) => {
          setEntries((prev) =>
            prev.map((e) =>
              e.id === entry.id
                ? {
                    ...e,
                    loading: false,
                    pages: thumbnails.map((thumb) => ({
                      pageNumber: thumb.pageNumber,
                      thumbnail: thumb.dataUrl,
                      rotation: 0,
                    })),
                  }
                : e,
            ),
          );
        })
        .catch((err) => {
          const kind: ReadErrorKind = isPdfPasswordError(err) ? "password" : "generic";
          setEntries((prev) =>
            prev.map((e) => (e.id === entry.id ? { ...e, loading: false, readError: kind } : e)),
          );
        });
    }
  }

  function removeEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  function rotateSinglePage(fileId: string, pageNumber: number) {
    setEntries((prev) =>
      prev.map((e) =>
        e.id === fileId
          ? {
              ...e,
              pages: e.pages.map((p) =>
                p.pageNumber === pageNumber ? { ...p, rotation: (p.rotation + 90) % 360 } : p,
              ),
            }
          : e,
      ),
    );
  }

  function rotateAllPages(fileId: string, angle: number) {
    setEntries((prev) =>
      prev.map((e) =>
        e.id === fileId
          ? { ...e, pages: e.pages.map((p) => ({ ...p, rotation: (p.rotation + angle) % 360 })) }
          : e,
      ),
    );
  }

  async function handleRotate() {
    setStatus("processing");
    setError(null);
    try {
      const outputs = await Promise.all(
        entries.map(async (entry) => {
          const rotations: Record<number, number> = {};
          entry.pages.forEach((p) => {
            if (p.rotation) rotations[p.pageNumber] = p.rotation;
          });
          const bytes = await rotatePdfPages(entry.file, rotations);
          const name = entry.file.name.replace(/\.pdf$/i, dict.resultSuffix);
          return { name, bytes };
        }),
      );

      if (outputs.length === 1) {
        setResult({
          blob: new Blob([new Uint8Array(outputs[0].bytes)], { type: "application/pdf" }),
          filename: outputs[0].name,
        });
      } else {
        const zipBlob = await zipFiles(outputs.map((o) => ({ name: o.name, data: o.bytes })));
        setResult({ blob: zipBlob, filename: dict.resultZipName });
      }
      setStatus("done");
      trackToolUsage("rotate-pdf", true);
    } catch (err) {
      setError(dict.error);
      setStatus("error");
      trackToolUsage("rotate-pdf", false, err);
    }
  }

  const canSubmit =
    entries.length > 0 && entries.every((e) => !e.loading && !e.readError) && status !== "processing";

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
        accept={[".pdf"]}
        multiple
        disabled={status === "processing"}
        onFilesAdded={handleFilesAdded}
        label={dict.dropLabel}
      />

      {entries.length > 0 && (
        <div className="mt-5 space-y-5">
          {entries.map((entry) => (
            <div key={entry.id} className="rounded-xl border border-border p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{entry.file.name}</p>
                  <p className="text-xs text-foreground/50">
                    {formatBytes(entry.file.size)}
                    {entry.pages.length > 0
                      ? ` · ${t(dict.pageCountLabel, { count: entry.pages.length })}`
                      : ""}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeEntry(entry.id)}
                  aria-label={t(dict.removeFileLabel, { name: entry.file.name })}
                  className="shrink-0 text-foreground/40 hover:text-red-500"
                >
                  <X size={18} />
                </button>
              </div>

              {entry.loading && (
                <div className="mt-4 flex items-center gap-2 text-sm text-foreground/50">
                  <Loader2 size={16} className="animate-spin" />
                  {dict.loadingPages}
                </div>
              )}

              {entry.readError && (
                <p className="mt-4 text-sm text-red-600">
                  {entry.readError === "password" ? dict.passwordError : dict.readError}
                </p>
              )}

              {!entry.loading && !entry.readError && entry.pages.length > 0 && (
                <>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-foreground/60">
                      {dict.rotateAllLabel}
                    </span>
                    {BULK_ANGLES.map((angle) => (
                      <button
                        key={angle}
                        type="button"
                        onClick={() => rotateAllPages(entry.id, angle)}
                        className="rounded-lg border border-border px-2.5 py-1 text-xs font-medium text-foreground/70 transition-colors hover:border-brand-300 hover:text-brand-600"
                      >
                        {angle}°
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                    {entry.pages.map((page) => (
                      <div key={page.pageNumber} className="relative">
                        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-muted">
                          {/* eslint-disable-next-line @next/next/no-img-element -- local canvas-rendered data URL, not a static asset */}
                          <img
                            src={page.thumbnail}
                            alt=""
                            style={{ transform: `rotate(${page.rotation}deg)` }}
                            className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-200"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => rotateSinglePage(entry.id, page.pageNumber)}
                          aria-label={t(dict.rotatePageLabel, { page: page.pageNumber })}
                          className="absolute -right-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-foreground/70 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-600 rtl:-left-1.5 rtl:right-auto"
                        >
                          <RotateCw size={14} />
                        </button>
                        <p className="mt-1 text-center text-[11px] text-foreground/50">
                          {page.pageNumber}
                          {page.rotation ? ` · ${page.rotation}°` : ""}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {entries.length > 0 && (
        <Button className="mt-6 w-full" size="lg" disabled={!canSubmit} onClick={handleRotate}>
          {status === "processing" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <RotateCw size={18} />
          )}
          {status === "processing" ? dict.buttonBusy : dict.button}
        </Button>
      )}
    </Card>
  );
}
