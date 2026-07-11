"use client";

import { useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { downloadBytes } from "@/lib/download";
import { imagesToPdf } from "@/lib/image/toPdf";

type Status = "idle" | "processing" | "done" | "error";

export function ImageToPdfWorkspace() {
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
    } catch {
      setError("Something went wrong while converting your images. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done" && result) {
    return (
      <Card className="p-6 sm:p-8">
        <ResultPanel
          filename="images.pdf"
          size={result.byteLength}
          onDownload={() => downloadBytes(result, "images.pdf", "application/pdf")}
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
        disabled={status === "processing"}
        onFilesAdded={(added) => setFiles((prev) => [...prev, ...added])}
        label="Drag & drop images here"
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
            {status === "processing" ? "Converting…" : `Convert ${files.length} image${files.length > 1 ? "s" : ""} to PDF`}
          </Button>
        </>
      )}
    </Card>
  );
}
