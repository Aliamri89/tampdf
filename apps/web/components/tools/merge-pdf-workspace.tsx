"use client";

import { useState } from "react";
import { Combine, Loader2 } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { downloadBytes } from "@/lib/download";
import { mergePdfs } from "@/lib/pdf/merge";

export function MergePdfWorkspace() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
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

  async function handleMerge() {
    setStatus("processing");
    setError(null);
    try {
      const bytes = await mergePdfs(files);
      setResult(bytes);
      setStatus("done");
    } catch {
      setError("Something went wrong while merging your PDFs. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done" && result) {
    return (
      <Card className="p-6 sm:p-8">
        <ResultPanel
          filename="merged.pdf"
          size={result.byteLength}
          onDownload={() => downloadBytes(result, "merged.pdf", "application/pdf")}
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
        onFilesAdded={(added) => setFiles((prev) => [...prev, ...added])}
        label="Drag & drop PDF files here"
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
            disabled={files.length < 2 || status === "processing"}
            onClick={handleMerge}
          >
            {status === "processing" ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Combine size={18} />
            )}
            {status === "processing" ? "Merging…" : `Merge ${files.length} PDFs`}
          </Button>
          {files.length === 1 && (
            <p className="mt-2 text-center text-xs text-foreground/50">
              Add at least one more PDF to merge.
            </p>
          )}
        </>
      )}
    </Card>
  );
}
