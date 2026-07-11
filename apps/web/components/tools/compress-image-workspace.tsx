"use client";

import { useState } from "react";
import { ImageDown, Loader2 } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { downloadBlob } from "@/lib/download";
import { compressImage } from "@/lib/image/compress";
import { zipFiles } from "@/lib/zip";

type Status = "idle" | "processing" | "done" | "error";

export function CompressImageWorkspace() {
  const [files, setFiles] = useState<File[]>([]);
  const [quality, setQuality] = useState(0.7);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    blob: Blob;
    filename: string;
    originalSize: number;
  } | null>(null);

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
      const compressed = await Promise.all(files.map((file) => compressImage(file, quality)));
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
        setResult({ blob: zipBlob, filename: "compressed-images.zip", originalSize });
      }
      setStatus("done");
    } catch {
      setError("Something went wrong while compressing your images. Please try again.");
      setStatus("error");
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
              />
            ))}
          </ul>

          <label className="mt-5 block">
            <span className="flex items-center justify-between text-sm font-medium text-foreground">
              <span>Quality</span>
              <span className="text-foreground/50">{Math.round(quality * 100)}%</span>
            </span>
            <input
              type="range"
              min={0.2}
              max={0.95}
              step={0.05}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="mt-2 w-full accent-brand-500"
            />
          </label>

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
              ? "Compressing…"
              : `Compress ${files.length} image${files.length > 1 ? "s" : ""}`}
          </Button>
        </>
      )}
    </Card>
  );
}
