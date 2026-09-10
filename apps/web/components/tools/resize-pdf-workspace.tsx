"use client";

import { useState } from "react";
import { Loader2, Scaling, X } from "lucide-react";
import { PDFDocument } from "pdf-lib";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBytes } from "@/lib/download";
import { resizePdfToPreset, scalePdf, type ResizePreset } from "@/lib/pdf/resize";
import { formatBytes } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "ready" | "processing" | "done";
type Mode = "preset" | "scale";

export function ResizePdfWorkspace() {
  const dict = useDictionary().workspace.resizePdf;
  const fileListDict = useDictionary().fileList;
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [mode, setMode] = useState<Mode>("preset");
  const [preset, setPreset] = useState<ResizePreset>("a4-portrait");
  const [scale, setScale] = useState(100);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [readError, setReadError] = useState(false);
  const [result, setResult] = useState<{ bytes: Uint8Array; name: string } | null>(null);

  const presets: { id: ResizePreset; label: string }[] = [
    { id: "a4-portrait", label: dict.a4Portrait },
    { id: "a4-landscape", label: dict.a4Landscape },
    { id: "letter-portrait", label: dict.letterPortrait },
    { id: "letter-landscape", label: dict.letterLandscape },
    { id: "a3-portrait", label: dict.a3Portrait },
    { id: "a5-portrait", label: dict.a5Portrait },
  ];

  function reset() {
    setFile(null);
    setPageCount(0);
    setMode("preset");
    setPreset("a4-portrait");
    setScale(100);
    setStatus("idle");
    setError(null);
    setReadError(false);
    setResult(null);
  }

  function handleFile(added: File[]) {
    const next = added[0];
    if (!next) return;
    setFile(next);
    setPageCount(0);
    setError(null);
    setReadError(false);
    setStatus("loading");
    next
      .arrayBuffer()
      .then((bytes) => PDFDocument.load(bytes, { ignoreEncryption: true }))
      .then((pdf) => {
        setPageCount(pdf.getPageCount());
        setStatus("ready");
      })
      .catch(() => {
        setReadError(true);
        setStatus("ready");
      });
  }

  async function handleResize() {
    if (!file) return;
    setStatus("processing");
    setError(null);
    try {
      const bytes =
        mode === "preset"
          ? await resizePdfToPreset(file, preset)
          : await scalePdf(file, scale / 100);
      const name = file.name.replace(/\.pdf$/i, dict.resultSuffix);
      setResult({ bytes, name });
      setStatus("done");
      trackToolUsage("resize-pdf", true);
    } catch (err) {
      setError(dict.error);
      setStatus("ready");
      trackToolUsage("resize-pdf", false, err);
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
          {readError && <p className="mt-4 text-sm text-red-600">{dict.readError}</p>}
        </div>
      )}

      {file && !readError && status !== "loading" && (
        <div className="mt-5 space-y-4">
          <div>
            <span className="text-sm font-medium text-foreground">{dict.modeLabel}</span>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {(
                [
                  { id: "preset", label: dict.modePreset },
                  { id: "scale", label: dict.modeScale },
                ] as { id: Mode; label: string }[]
              ).map((option) => (
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

          {mode === "preset" ? (
            <label className="block">
              <span className="text-sm font-medium text-foreground">{dict.sizeLabel}</span>
              <select
                value={preset}
                onChange={(e) => setPreset(e.target.value as ResizePreset)}
                className="mt-1.5 w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground focus-visible:border-brand-400 focus-visible:outline-none"
              >
                {presets.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <label className="block">
              <span className="text-sm font-medium text-foreground">{dict.scaleLabel}</span>
              <div className="mt-1.5 flex items-center gap-3">
                <input
                  type="range"
                  min={10}
                  max={300}
                  step={5}
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  className="w-full accent-brand-500"
                />
                <span className="w-12 shrink-0 text-right text-sm tabular-nums text-foreground/70">
                  {scale}%
                </span>
              </div>
            </label>
          )}
        </div>
      )}

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {file && !readError && status !== "loading" && (
        <Button
          className="mt-6 w-full"
          size="lg"
          disabled={status === "processing"}
          onClick={handleResize}
        >
          {status === "processing" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Scaling size={18} />
          )}
          {status === "processing" ? dict.buttonBusy : dict.button}
        </Button>
      )}
    </Card>
  );
}
