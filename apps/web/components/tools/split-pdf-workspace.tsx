"use client";

import { useState } from "react";
import { Loader2, Scissors } from "lucide-react";
import { PDFDocument } from "pdf-lib";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { downloadBlob } from "@/lib/download";
import { everyPageIndividually, parsePageRanges, splitPdf } from "@/lib/pdf/split";
import { zipFiles } from "@/lib/zip";

type Status = "idle" | "processing" | "done" | "error";

export function SplitPdfWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [rangeInput, setRangeInput] = useState("");
  const [splitEvery, setSplitEvery] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; filename: string } | null>(null);

  async function handleFileAdded(added: File[]) {
    const selected = added[0];
    setFile(selected);
    setError(null);
    try {
      const bytes = await selected.arrayBuffer();
      const doc = await PDFDocument.load(bytes, { ignoreEncryption: true });
      setPageCount(doc.getPageCount());
      setRangeInput(`1-${doc.getPageCount()}`);
    } catch {
      setError("Couldn't read that PDF. It may be corrupted or password-protected.");
    }
  }

  function reset() {
    setFile(null);
    setPageCount(null);
    setRangeInput("");
    setSplitEvery(false);
    setStatus("idle");
    setError(null);
    setResult(null);
  }

  async function handleSplit() {
    if (!file || !pageCount) return;
    setStatus("processing");
    setError(null);
    try {
      const groups = splitEvery
        ? everyPageIndividually(pageCount)
        : parsePageRanges(rangeInput, pageCount);

      if (groups.length === 0) {
        setError("Enter a valid page range, e.g. 1-3, 5.");
        setStatus("idle");
        return;
      }

      const outputs = await splitPdf(file, groups);

      if (outputs.length === 1) {
        setResult({
          blob: new Blob([new Uint8Array(outputs[0].bytes)], { type: "application/pdf" }),
          filename: outputs[0].name,
        });
      } else {
        const zipBlob = await zipFiles(
          outputs.map((o) => ({ name: o.name, data: o.bytes })),
        );
        const baseName = file.name.replace(/\.pdf$/i, "");
        setResult({ blob: zipBlob, filename: `${baseName}-split.zip` });
      }
      setStatus("done");
    } catch {
      setError("Something went wrong while splitting your PDF. Please try again.");
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
        <FileDropzone
          accept={[".pdf"]}
          onFilesAdded={handleFileAdded}
          label="Drag & drop a PDF file here"
        />
      ) : (
        <>
          <FileListItem file={file} onRemove={reset} />

          {pageCount && (
            <div className="mt-5 space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-foreground">
                  Pages to extract ({pageCount} page{pageCount > 1 ? "s" : ""} total)
                </span>
                <input
                  type="text"
                  value={rangeInput}
                  onChange={(e) => setRangeInput(e.target.value)}
                  disabled={splitEvery}
                  placeholder="e.g. 1-3, 5"
                  className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm outline-none focus:border-brand-400 disabled:opacity-50"
                />
              </label>

              <label className="flex items-center gap-2.5 text-sm text-foreground/80">
                <input
                  type="checkbox"
                  checked={splitEvery}
                  onChange={(e) => setSplitEvery(e.target.checked)}
                  className="h-4 w-4 rounded border-border accent-brand-500"
                />
                Split into individual pages (one PDF per page)
              </label>
            </div>
          )}

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          <Button
            className="mt-6 w-full"
            size="lg"
            disabled={!pageCount || status === "processing"}
            onClick={handleSplit}
          >
            {status === "processing" ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Scissors size={18} />
            )}
            {status === "processing" ? "Splitting…" : "Split PDF"}
          </Button>
        </>
      )}
    </Card>
  );
}
