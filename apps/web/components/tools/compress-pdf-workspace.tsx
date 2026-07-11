"use client";

import { useState } from "react";
import { Loader2, Minimize2 } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { downloadBytes } from "@/lib/download";
import { compressPdf, type CompressionLevel } from "@/lib/pdf/compress";

type Status = "idle" | "processing" | "done" | "error";

const LEVELS: { id: CompressionLevel; label: string; hint: string }[] = [
  { id: "low", label: "Low", hint: "Best quality" },
  { id: "medium", label: "Medium", hint: "Recommended" },
  { id: "high", label: "High", hint: "Smallest size" },
];

export function CompressPdfWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [level, setLevel] = useState<CompressionLevel>("medium");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Uint8Array | null>(null);

  function reset() {
    setFile(null);
    setStatus("idle");
    setError(null);
    setResult(null);
  }

  async function handleCompress() {
    if (!file) return;
    setStatus("processing");
    setError(null);
    try {
      const bytes = await compressPdf(file, level);
      setResult(bytes);
      setStatus("done");
    } catch {
      setError("Something went wrong while compressing your PDF. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done" && result && file) {
    return (
      <Card className="p-6 sm:p-8">
        <ResultPanel
          filename={file.name.replace(/\.pdf$/i, "-compressed.pdf")}
          size={result.byteLength}
          originalSize={file.size}
          onDownload={() =>
            downloadBytes(
              result,
              file.name.replace(/\.pdf$/i, "-compressed.pdf"),
              "application/pdf",
            )
          }
          onReset={reset}
        />
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      {!file ? (
        <FileDropzone
          accept={[".pdf"]}
          onFilesAdded={(added) => setFile(added[0])}
          label="Drag & drop a PDF file here"
        />
      ) : (
        <>
          <FileListItem file={file} onRemove={reset} />

          <div className="mt-5">
            <span className="text-sm font-medium text-foreground">Compression level</span>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {LEVELS.map((option) => (
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
            {status === "processing" ? "Compressing…" : "Compress PDF"}
          </Button>
        </>
      )}
    </Card>
  );
}
