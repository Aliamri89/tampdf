"use client";

import { useState } from "react";
import { Crop, Loader2, X } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { releaseCanvas } from "@/lib/canvas-limits";
import { downloadBytes } from "@/lib/download";
import { cropPdf, type CropMargins } from "@/lib/pdf/crop";
import { isPdfPasswordError, loadPdfDocument, renderPageToCanvas } from "@/lib/pdf/render";
import { formatBytes } from "@/lib/utils";

type Status = "idle" | "loading" | "ready" | "processing" | "done";
type ReadError = "password" | "generic" | null;
type Edge = keyof CropMargins;

const EDGES: Edge[] = ["top", "right", "bottom", "left"];
const PREVIEW_MAX = 520;

export function CropPdfWorkspace() {
  const dict = useDictionary().workspace.cropPdf;
  const fileListDict = useDictionary().fileList;
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [percent, setPercent] = useState<Record<Edge, number>>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [readError, setReadError] = useState<ReadError>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ bytes: Uint8Array; name: string } | null>(null);

  function reset() {
    setFile(null);
    setPreview(null);
    setPercent({ top: 0, right: 0, bottom: 0, left: 0 });
    setStatus("idle");
    setReadError(null);
    setError(null);
    setResult(null);
  }

  function handleFile(added: File[]) {
    const next = added[0];
    if (!next) return;
    setFile(next);
    setPreview(null);
    setPercent({ top: 0, right: 0, bottom: 0, left: 0 });
    setReadError(null);
    setError(null);
    setStatus("loading");

    loadPdfDocument(next)
      .then(async (pdf) => {
        try {
          const page = await pdf.getPage(1);
          const base = page.getViewport({ scale: 1 });
          const scale = PREVIEW_MAX / Math.max(base.width, base.height);
          const canvas = await renderPageToCanvas(pdf, 1, scale);
          const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
          releaseCanvas(canvas);
          setPreview(dataUrl);
          setStatus("ready");
        } finally {
          await pdf.cleanup();
        }
      })
      .catch((err) => {
        setReadError(isPdfPasswordError(err) ? "password" : "generic");
        setStatus("ready");
      });
  }

  async function handleCrop() {
    if (!file) return;
    setStatus("processing");
    setError(null);
    try {
      const margins: CropMargins = {
        top: percent.top / 100,
        right: percent.right / 100,
        bottom: percent.bottom / 100,
        left: percent.left / 100,
      };
      const bytes = await cropPdf(file, margins);
      const name = file.name.replace(/\.pdf$/i, dict.resultSuffix);
      setResult({ bytes, name });
      setStatus("done");
      trackToolUsage("crop-pdf", true);
    } catch (err) {
      setError(dict.error);
      setStatus("ready");
      trackToolUsage("crop-pdf", false, err);
    }
  }

  if (status === "done" && result) {
    return (
      <Card className="p-6 sm:p-8">
        <ResultPanel
          filename={result.name}
          size={result.bytes.byteLength}
          onDownload={() => downloadBytes(result.bytes, result.name, "application/pdf")}
          onReset={reset}
        />
      </Card>
    );
  }

  const anyMargin = EDGES.some((edge) => percent[edge] > 0);
  const overlay = {
    top: `${percent.top}%`,
    right: `${percent.right}%`,
    bottom: `${percent.bottom}%`,
    left: `${percent.left}%`,
  };

  return (
    <Card className="p-6 sm:p-8">
      {!file && <FileDropzone accept={[".pdf"]} onFilesAdded={handleFile} label={dict.dropLabel} />}

      {file && (
        <div className="rounded-xl border border-border p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
              <p className="text-xs text-foreground/50">{formatBytes(file.size)}</p>
            </div>
            <button
              type="button"
              onClick={reset}
              aria-label={t(fileListDict.remove, { name: file.name })}
              className="shrink-0 text-foreground/40 hover:text-red-500"
            >
              <X size={18} />
            </button>
          </div>

          {status === "loading" && (
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground/50">
              <Loader2 size={16} className="animate-spin" />
              {dict.loadingPreview}
            </div>
          )}

          {readError && (
            <p className="mt-4 text-sm text-red-600">
              {readError === "password" ? dict.passwordError : dict.readError}
            </p>
          )}

          {preview && (
            <div className="mt-4">
              <p className="text-xs text-foreground/60">{dict.previewLabel}</p>
              <div className="mt-2 flex justify-center">
                <div className="relative inline-block">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local canvas-rendered data URL */}
                  <img
                    src={preview}
                    alt=""
                    className="max-h-[420px] w-auto rounded border border-border"
                  />
                  <div
                    className="pointer-events-none absolute border-2 border-dashed border-brand-500 bg-brand-500/5"
                    style={overlay}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {preview && (
        <div className="mt-5">
          <span className="text-sm font-medium text-foreground">{dict.marginsLabel}</span>
          <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {EDGES.map((edge) => (
              <label key={edge} className="block">
                <span className="text-xs font-medium text-foreground/70">{dict[edge]}</span>
                <div className="mt-1.5 flex items-center gap-2">
                  <input
                    type="range"
                    min={0}
                    max={45}
                    value={percent[edge]}
                    onChange={(e) =>
                      setPercent((prev) => ({ ...prev, [edge]: Number(e.target.value) }))
                    }
                    className="w-full accent-brand-500"
                  />
                  <span className="w-9 shrink-0 text-right text-xs tabular-nums text-foreground/60">
                    {percent[edge]}%
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      {preview && !anyMargin && status !== "processing" && (
        <p className="mt-4 text-xs text-foreground/50">{dict.noMargins}</p>
      )}

      {preview && (
        <Button
          className="mt-6 w-full"
          size="lg"
          disabled={!anyMargin || status === "processing"}
          onClick={handleCrop}
        >
          {status === "processing" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Crop size={18} />
          )}
          {status === "processing" ? dict.buttonBusy : dict.button}
        </Button>
      )}
    </Card>
  );
}
