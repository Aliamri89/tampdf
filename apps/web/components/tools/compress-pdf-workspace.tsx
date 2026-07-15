"use client";

import { useState } from "react";
import { Loader2, Minimize2 } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { cn } from "@/lib/utils";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBlob } from "@/lib/download";
import { compressPdf, type CompressionLevel } from "@/lib/pdf/compress";
import { zipFiles } from "@/lib/zip";

type Status = "idle" | "processing" | "done" | "error";

const MAX_FILES = 10;

export function CompressPdfWorkspace() {
  const dict = useDictionary().workspace.compressPdf;
  const levels: { id: CompressionLevel; label: string; hint: string }[] = [
    { id: "low", label: dict.levelLow, hint: dict.levelLowHint },
    { id: "medium", label: dict.levelMedium, hint: dict.levelMediumHint },
    { id: "high", label: dict.levelHigh, hint: dict.levelHighHint },
  ];
  const [files, setFiles] = useState<File[]>([]);
  const [level, setLevel] = useState<CompressionLevel>("medium");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    blob: Blob;
    filename: string;
    originalSize: number;
  } | null>(null);

  const resultName = (name: string) => name.replace(/\.pdf$/i, dict.resultSuffix);

  function reset() {
    setFiles([]);
    setStatus("idle");
    setError(null);
    setResult(null);
  }

  async function handleCompress() {
    if (files.length === 0) return;
    setStatus("processing");
    setError(null);
    try {
      const compressed = await Promise.all(
        files.map(async (file) => ({
          name: resultName(file.name),
          bytes: await compressPdf(file, level),
          originalSize: file.size,
        })),
      );
      const originalSize = compressed.reduce((sum, c) => sum + c.originalSize, 0);

      if (compressed.length === 1) {
        setResult({
          blob: new Blob([new Uint8Array(compressed[0].bytes)], { type: "application/pdf" }),
          filename: compressed[0].name,
          originalSize,
        });
      } else {
        const zipBlob = await zipFiles(
          compressed.map((c) => ({ name: c.name, data: c.bytes })),
        );
        setResult({ blob: zipBlob, filename: dict.resultZipName, originalSize });
      }
      setStatus("done");
      trackToolUsage("compress-pdf", true);
    } catch {
      setError(dict.error);
      setStatus("error");
      trackToolUsage("compress-pdf", false);
    }
  }

  if (status === "done" && result) {
    return (
      <Card className="p-6 sm:p-8">
        <ResultPanel
          filename={result.filename}
          size={result.blob.size}
          originalSize={result.originalSize}
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
        maxFiles={MAX_FILES}
        currentCount={files.length}
        disabled={status === "processing"}
        onFilesAdded={(added) => setFiles((prev) => [...prev, ...added])}
        label={dict.dropLabel}
      />

      {files.length > 0 && (
        <>
          <ul className="mt-5 space-y-2">
            {files.map((file, index) => (
              <FileListItem
                key={`${file.name}-${index}`}
                file={file}
                onRemove={() => setFiles((prev) => prev.filter((_, i) => i !== index))}
              />
            ))}
          </ul>

          <div className="mt-5">
            <span className="text-sm font-medium text-foreground">{dict.levelLabel}</span>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {levels.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setLevel(option.id)}
                  className={cn(
                    "rounded-xl border px-3 py-2.5 text-center transition-colors",
                    level === option.id
                      ? "border-brand-400 bg-brand-50"
                      : "border-border bg-surface hover:border-brand-200",
                  )}
                >
                  <span className="block text-sm font-medium text-foreground">
                    {option.label}
                  </span>
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
            onClick={handleCompress}
          >
            {status === "processing" ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Minimize2 size={18} />
            )}
            {status === "processing"
              ? dict.buttonBusy
              : files.length === 1
                ? dict.buttonSingular
                : t(dict.buttonPlural, { count: files.length })}
          </Button>
        </>
      )}
    </Card>
  );
}
