"use client";

import { useState } from "react";
import { ImageDown, Loader2 } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBlob } from "@/lib/download";
import { compressImage, type CompressionLevel } from "@/lib/image/compress";
import { zipFiles } from "@/lib/zip";

type Status = "idle" | "processing" | "done" | "error";

export function CompressImageWorkspace() {
  const dict = useDictionary().workspace.compressImage;
  const [files, setFiles] = useState<File[]>([]);
  const [level, setLevel] = useState<CompressionLevel>("medium");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    blob: Blob;
    filename: string;
    originalSize: number;
  } | null>(null);

  const levels: { id: CompressionLevel; label: string; hint: string }[] = [
    { id: "low", label: dict.levelLow, hint: dict.levelLowHint },
    { id: "medium", label: dict.levelMedium, hint: dict.levelMediumHint },
    { id: "high", label: dict.levelHigh, hint: dict.levelHighHint },
  ];

  function reset() {
    setFiles([]);
    setStatus("idle");
    setError(null);
    setResult(null);
  }

  async function handleCompress() {
    setStatus("processing");
    setError(null);
    try {
      const compressed = await Promise.all(files.map((file) => compressImage(file, level)));
      const originalSize = compressed.reduce((sum, c) => sum + c.originalSize, 0);

      if (compressed.length === 1) {
        setResult({
          blob: compressed[0].blob,
          filename: compressed[0].name,
          originalSize,
        });
      } else {
        const zipBlob = await zipFiles(
          compressed.map((c) => ({ name: c.name, data: c.blob })),
        );
        setResult({ blob: zipBlob, filename: dict.resultZipName, originalSize });
      }
      setStatus("done");
      trackToolUsage("compress-image", true);
    } catch {
      setError(dict.error);
      setStatus("error");
      trackToolUsage("compress-image", false);
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
        accept={[".jpg", ".jpeg", ".png", ".webp"]}
        multiple
        maxSizeBytes={25 * 1024 * 1024}
        maxFiles={20}
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
            onClick={handleCompress}
          >
            {status === "processing" ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <ImageDown size={18} />
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
