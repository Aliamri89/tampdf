"use client";

import { useState } from "react";
import { FileOutput, Loader2 } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { convertOnServer } from "@/lib/convert-on-server";
import { downloadBlob } from "@/lib/download";

type Status = "idle" | "processing" | "done" | "error";

export function PdfToWordWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; filename: string } | null>(null);

  function reset() {
    setFile(null);
    setStatus("idle");
    setError(null);
    setResult(null);
  }

  async function handleConvert() {
    if (!file) return;
    setStatus("processing");
    setError(null);
    try {
      const converted = await convertOnServer("pdf-to-word", file);
      setResult(converted);
      setStatus("done");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while converting your file. Please try again.",
      );
      setStatus("error");
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
        <FileDropzone accept={[".pdf"]} onFilesAdded={(added) => setFile(added[0])} />
      ) : (
        <>
          <FileListItem file={file} onRemove={reset} />

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
              <FileOutput size={18} />
            )}
            {status === "processing" ? "Converting…" : "Convert to Word"}
          </Button>
          <p className="mt-3 text-center text-xs text-foreground/50">
            Your file is processed securely and deleted immediately after conversion.
          </p>
        </>
      )}
    </Card>
  );
}
