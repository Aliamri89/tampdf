"use client";

import { useState } from "react";
import { Loader2, Trash2, X } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBytes } from "@/lib/download";
import { deletePdfPages } from "@/lib/pdf/delete-pages";
import { isPdfPasswordError, renderAllPageThumbnails } from "@/lib/pdf/render";
import { cn, formatBytes } from "@/lib/utils";

type Status = "idle" | "loading" | "ready" | "processing" | "done";
type ReadError = "password" | "generic" | null;

interface Thumb {
  pageNumber: number;
  dataUrl: string;
}

export function DeletePdfPagesWorkspace() {
  const dict = useDictionary().workspace.deletePdfPages;
  const fileListDict = useDictionary().fileList;
  const [file, setFile] = useState<File | null>(null);
  const [thumbs, setThumbs] = useState<Thumb[]>([]);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [status, setStatus] = useState<Status>("idle");
  const [readError, setReadError] = useState<ReadError>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ bytes: Uint8Array; name: string } | null>(null);

  function reset() {
    setFile(null);
    setThumbs([]);
    setSelected(new Set());
    setStatus("idle");
    setReadError(null);
    setError(null);
    setResult(null);
  }

  function handleFile(added: File[]) {
    const next = added[0];
    if (!next) return;
    setFile(next);
    setThumbs([]);
    setSelected(new Set());
    setReadError(null);
    setError(null);
    setStatus("loading");
    renderAllPageThumbnails(next)
      .then((pages) => {
        setThumbs(pages.map((p) => ({ pageNumber: p.pageNumber, dataUrl: p.dataUrl })));
        setStatus("ready");
      })
      .catch((err) => {
        setReadError(isPdfPasswordError(err) ? "password" : "generic");
        setStatus("ready");
      });
  }

  function toggle(pageNumber: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(pageNumber)) next.delete(pageNumber);
      else next.add(pageNumber);
      return next;
    });
  }

  async function handleDelete() {
    if (!file) return;
    setStatus("processing");
    setError(null);
    try {
      const toDelete = new Set([...selected].map((page) => page - 1));
      const bytes = await deletePdfPages(file, toDelete);
      const name = file.name.replace(/\.pdf$/i, dict.resultSuffix);
      setResult({ bytes, name });
      setStatus("done");
      trackToolUsage("delete-pdf-pages", true);
    } catch (err) {
      setError(dict.error);
      setStatus("ready");
      trackToolUsage("delete-pdf-pages", false, err);
    }
  }

  if (status === "done" && result) {
    return (
      <Card className="p-6 sm:p-8">
        <ResultPanel
          filename={result.name}
          size={result.bytes.byteLength}
          onDownload={() => downloadBytes(result.bytes, result.name, "application/pdf")}
          onReset={reset}
        />
      </Card>
    );
  }

  const allSelected = thumbs.length > 0 && selected.size === thumbs.length;
  const canSubmit = status === "ready" && selected.size > 0 && !allSelected;

  return (
    <Card className="p-6 sm:p-8">
      {!file && <FileDropzone accept={[".pdf"]} onFilesAdded={handleFile} label={dict.dropLabel} />}

      {file && (
        <div className="rounded-xl border border-border p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
              <p className="text-xs text-foreground/50">
                {formatBytes(file.size)}
                {thumbs.length > 0 ? ` · ${t(dict.pageCountLabel, { count: thumbs.length })}` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={reset}
              aria-label={t(fileListDict.remove, { name: file.name })}
              className="shrink-0 text-foreground/40 hover:text-red-500"
            >
              <X size={18} />
            </button>
          </div>

          {status === "loading" && (
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground/50">
              <Loader2 size={16} className="animate-spin" />
              {dict.loadingPages}
            </div>
          )}

          {readError && (
            <p className="mt-4 text-sm text-red-600">
              {readError === "password" ? dict.passwordError : dict.readError}
            </p>
          )}

          {thumbs.length > 0 && (
            <>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-xs text-foreground/60">
                  {selected.size > 0
                    ? t(dict.selectedLabel, { count: selected.size })
                    : dict.selectHint}
                </p>
                {selected.size > 0 && (
                  <button
                    type="button"
                    onClick={() => setSelected(new Set())}
                    className="shrink-0 text-xs font-medium text-brand-600 hover:text-brand-700"
                  >
                    {dict.clearSelection}
                  </button>
                )}
              </div>
              {allSelected && (
                <p className="mt-2 text-xs text-red-600">{dict.allSelectedError}</p>
              )}
              <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                {thumbs.map((page) => {
                  const isSelected = selected.has(page.pageNumber);
                  return (
                    <button
                      key={page.pageNumber}
                      type="button"
                      onClick={() => toggle(page.pageNumber)}
                      aria-pressed={isSelected}
                      className={cn(
                        "group relative rounded-lg border-2 p-1 transition-colors",
                        isSelected
                          ? "border-red-500 bg-red-50 dark:bg-red-500/10"
                          : "border-border hover:border-brand-300",
                      )}
                    >
                      <div className="flex aspect-square items-center justify-center overflow-hidden rounded bg-surface-muted">
                        {/* eslint-disable-next-line @next/next/no-img-element -- local canvas-rendered data URL */}
                        <img
                          src={page.dataUrl}
                          alt=""
                          className={cn(
                            "max-h-[85%] max-w-[85%] object-contain transition-opacity",
                            isSelected && "opacity-40",
                          )}
                        />
                      </div>
                      {isSelected && (
                        <span className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
                          <Trash2 size={18} className="text-red-600" />
                        </span>
                      )}
                      <p className="mt-1 text-center text-[11px] text-foreground/50">
                        {page.pageNumber}
                      </p>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {thumbs.length > 0 && (
        <Button
          className="mt-6 w-full"
          size="lg"
          disabled={!canSubmit}
          onClick={handleDelete}
        >
          {status === "processing" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Trash2 size={18} />
          )}
          {status === "processing"
            ? dict.buttonBusy
            : selected.size === 1
              ? dict.buttonOne
              : t(dict.button, { count: selected.size })}
        </Button>
      )}
    </Card>
  );
}
