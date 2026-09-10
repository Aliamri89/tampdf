"use client";

import { useState } from "react";
import { Loader2, Scissors, X } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBlob } from "@/lib/download";
import { isPdfPasswordError, renderAllPageThumbnails } from "@/lib/pdf/render";
import { chunkParts, parsePageRanges, splitPdf } from "@/lib/pdf/split";
import { cn, formatBytes } from "@/lib/utils";
import { zipFiles } from "@/lib/zip";

type Status = "idle" | "loading" | "ready" | "processing" | "done";
type ReadError = "password" | "generic" | null;
type Mode = "ranges" | "every";

interface Thumb {
  pageNumber: number;
  dataUrl: string;
}

export function SplitPdfWorkspace() {
  const dict = useDictionary().workspace.splitPdf;
  const fileListDict = useDictionary().fileList;
  const [file, setFile] = useState<File | null>(null);
  const [thumbs, setThumbs] = useState<Thumb[]>([]);
  const [mode, setMode] = useState<Mode>("ranges");
  const [ranges, setRanges] = useState("");
  const [everyN, setEveryN] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [readError, setReadError] = useState<ReadError>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; name: string } | null>(null);

  const pageCount = thumbs.length;

  function reset() {
    setFile(null);
    setThumbs([]);
    setMode("ranges");
    setRanges("");
    setEveryN(1);
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

  async function handleSplit() {
    if (!file || pageCount === 0) return;
    setError(null);

    let parts;
    try {
      parts =
        mode === "ranges"
          ? parsePageRanges(ranges, pageCount)
          : chunkParts(pageCount, everyN);
      if (parts.length === 0) throw new Error("no-ranges");
    } catch {
      setError(t(dict.invalidRanges, { total: pageCount }));
      return;
    }

    setStatus("processing");
    try {
      const outputs = await splitPdf(file, parts);
      const base = file.name.replace(/\.pdf$/i, "");

      if (outputs.length === 1) {
        const name = `${base}${t(dict.resultSuffix, { label: outputs[0].label })}`;
        setResult({
          blob: new Blob([new Uint8Array(outputs[0].bytes)], { type: "application/pdf" }),
          name,
        });
      } else {
        const zipBlob = await zipFiles(
          outputs.map((out) => ({
            name: `${base}${t(dict.resultSuffix, { label: out.label })}`,
            data: out.bytes,
          })),
        );
        setResult({ blob: zipBlob, name: dict.resultZipName });
      }
      setStatus("done");
      trackToolUsage("split-pdf", true);
    } catch (err) {
      setError(dict.error);
      setStatus("ready");
      trackToolUsage("split-pdf", false, err);
    }
  }

  if (status === "done" && result) {
    return (
      <Card className="p-6 sm:p-8">
        <ResultPanel
          filename={result.name}
          size={result.blob.size}
          onDownload={() => downloadBlob(result.blob, result.name)}
          onReset={reset}
        />
      </Card>
    );
  }

  const modes: { id: Mode; label: string }[] = [
    { id: "ranges", label: dict.modeRanges },
    { id: "every", label: dict.modeEvery },
  ];

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
                {pageCount > 0 ? ` · ${t(dict.pageCountLabel, { count: pageCount })}` : ""}
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

          {pageCount > 0 && (
            <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
              {thumbs.map((page) => (
                <div key={page.pageNumber} className="text-center">
                  <div className="flex aspect-square items-center justify-center overflow-hidden rounded border border-border bg-surface-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element -- local canvas-rendered data URL */}
                    <img
                      src={page.dataUrl}
                      alt=""
                      className="max-h-[85%] max-w-[85%] object-contain"
                    />
                  </div>
                  <p className="mt-0.5 text-[10px] text-foreground/50">{page.pageNumber}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {pageCount > 0 && (
        <div className="mt-5 space-y-4">
          <div>
            <span className="text-sm font-medium text-foreground">{dict.modeLabel}</span>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {modes.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setMode(option.id)}
                  className={cn(
                    "rounded-xl border px-3 py-2.5 text-center text-sm font-medium transition-colors",
                    mode === option.id
                      ? "border-brand-400 bg-brand-50 text-foreground dark:bg-brand-500/10"
                      : "border-border bg-surface text-foreground/70 hover:border-brand-200",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {mode === "ranges" ? (
            <label className="block">
              <span className="text-sm font-medium text-foreground">{dict.rangesLabel}</span>
              <input
                type="text"
                inputMode="numeric"
                dir="ltr"
                value={ranges}
                onChange={(e) => setRanges(e.target.value)}
                placeholder={dict.rangesPlaceholder}
                className="mt-1.5 w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground focus-visible:border-brand-400 focus-visible:outline-none"
              />
              <span className="mt-1 block text-xs text-foreground/50">{dict.rangesHint}</span>
            </label>
          ) : (
            <label className="block">
              <span className="text-sm font-medium text-foreground">{dict.everyLabel}</span>
              <input
                type="number"
                min={1}
                max={pageCount}
                dir="ltr"
                value={everyN}
                onChange={(e) => setEveryN(Math.max(1, Number(e.target.value) || 1))}
                className="mt-1.5 w-28 rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground focus-visible:border-brand-400 focus-visible:outline-none"
              />
            </label>
          )}
        </div>
      )}

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {pageCount > 0 && (
        <Button
          className="mt-6 w-full"
          size="lg"
          disabled={
            status === "processing" || (mode === "ranges" && ranges.trim().length === 0)
          }
          onClick={handleSplit}
        >
          {status === "processing" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Scissors size={18} />
          )}
          {status === "processing" ? dict.buttonBusy : dict.button}
        </Button>
      )}
    </Card>
  );
}
