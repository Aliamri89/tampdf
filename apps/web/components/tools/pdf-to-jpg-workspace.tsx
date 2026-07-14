"use client";

import { useState } from "react";
import { FileImage, Loader2 } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBlob } from "@/lib/download";
import { isPdfPasswordError, renderPdfToJpegs } from "@/lib/pdf/render";
import { zipFiles } from "@/lib/zip";

type Status = "idle" | "processing" | "done" | "error";
type Level = "low" | "medium" | "high";

const LEVEL_SETTINGS: Record<Level, { scale: number; quality: number }> = {
  low: { scale: 1, quality: 0.7 },
  medium: { scale: 1.5, quality: 0.85 },
  high: { scale: 2, quality: 0.92 },
};

export function PdfToJpgWorkspace() {
  const dict = useDictionary().workspace.pdfToJpg;
  const [file, setFile] = useState<File | null>(null);
  const [level, setLevel] = useState<Level>("medium");
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState<{ current: number; total: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; filename: string } | null>(null);

  const levels: { id: Level; label: string; hint: string }[] = [
    { id: "low", label: dict.levelLow, hint: dict.levelLowHint },
    { id: "medium", label: dict.levelMedium, hint: dict.levelMediumHint },
    { id: "high", label: dict.levelHigh, hint: dict.levelHighHint },
  ];

  function reset() {
    setFile(null);
    setStatus("idle");
    setProgress(null);
    setError(null);
    setResult(null);
  }

  async function handleConvert() {
    if (!file) return;
    setStatus("processing");
    setProgress(null);
    setError(null);
    try {
      const { scale, quality } = LEVEL_SETTINGS[level];
      const pages = await renderPdfToJpegs(file, scale, quality, (current, total) =>
        setProgress({ current, total }),
      );
      const baseName = file.name.replace(/\.pdf$/i, "");

      if (pages.length === 1) {
        setResult({ blob: pages[0].blob, filename: `${baseName}.jpg` });
      } else {
        const zipBlob = await zipFiles(
          pages.map((p) => ({
            name: `${baseName}-page-${p.pageNumber}.jpg`,
            data: p.blob,
          })),
        );
        setResult({ blob: zipBlob, filename: dict.resultZipName });
      }
      setStatus("done");
      trackToolUsage("pdf-to-jpg", true);
    } catch (err) {
      setError(isPdfPasswordError(err) ? dict.passwordError : dict.readError);
      setStatus("error");
      trackToolUsage("pdf-to-jpg", false);
    }
  }

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
      {!file ? (
        <FileDropzone accept={[".pdf"]} onFilesAdded={(added) => setFile(added[0])} label={dict.dropLabel} />
      ) : (
        <>
          <FileListItem file={file} onRemove={reset} />

          <div className="mt-5">
            <span className="text-sm font-medium text-foreground">{dict.qualityLabel}</span>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {levels.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setLevel(option.id)}
                  className={
                    level === option.id
                      ? "rounded-xl border border-brand-400 bg-brand-50 px-3 py-2.5 text-center transition-colors"
                      : "rounded-xl border border-border bg-surface px-3 py-2.5 text-center transition-colors hover:border-brand-200"
                  }
                >
                  <span className="block text-sm font-medium text-foreground">{option.label}</span>
                  <span className="block text-xs text-foreground/50">{option.hint}</span>
                </button>
              ))}
            </div>
          </div>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          <Button
            className="mt-6 w-full"
            size="lg"
            disabled={status === "processing"}
            onClick={handleConvert}
          >
            {status === "processing" ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <FileImage size={18} />
            )}
            {status === "processing"
              ? progress
                ? t(dict.buttonBusy, { current: progress.current, total: progress.total })
                : dict.buttonBusyStart
              : dict.button}
          </Button>
        </>
      )}
    </Card>
  );
}
