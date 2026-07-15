"use client";

import { useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBytes } from "@/lib/download";
import { imagesToPdf } from "@/lib/image/toPdf";

type Status = "idle" | "processing" | "done" | "error";

export function ImageToPdfWorkspace() {
  const dict = useDictionary().workspace.imageToPdf;
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Uint8Array | null>(null);

  function reset() {
    setFiles([]);
    setStatus("idle");
    setError(null);
    setResult(null);
  }

  function moveFile(index: number, direction: -1 | 1) {
    setFiles((prev) => {
      const next = [...prev];
      const target = index + direction;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  async function handleConvert() {
    setStatus("processing");
    setError(null);
    try {
      const bytes = await imagesToPdf(files);
      setResult(bytes);
      setStatus("done");
      trackToolUsage("image-to-pdf", true);
    } catch (err) {
      setError(dict.error);
      setStatus("error");
      trackToolUsage("image-to-pdf", false, err);
    }
  }

  if (status === "done" && result) {
    return (
      <Card className="p-6 sm:p-8">
        <ResultPanel
          filename={dict.resultName}
          size={result.byteLength}
          onDownload={() => downloadBytes(result, dict.resultName, "application/pdf")}
          onReset={reset}
        />
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <FileDropzone
        accept={[".jpg", ".jpeg", ".png"]}
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
                onMoveUp={index > 0 ? () => moveFile(index, -1) : undefined}
                onMoveDown={index < files.length - 1 ? () => moveFile(index, 1) : undefined}
              />
            ))}
          </ul>

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
              <ImagePlus size={18} />
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
