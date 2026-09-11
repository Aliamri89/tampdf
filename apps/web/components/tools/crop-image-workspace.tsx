"use client";

import { useRef, useState, type PointerEvent } from "react";
import { Crop, Loader2, RotateCcw } from "lucide-react";
import { ErrorText, SelectedFile } from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBlob } from "@/lib/download";
import { IMAGE_EXTENSION, renameFile } from "@/lib/image/canvas";
import { cropImage, readImageSize } from "@/lib/image/transform";

type Edge = "top" | "right" | "bottom" | "left";
type Margins = Record<Edge, number>;
type DragMode = "move" | "nw" | "ne" | "sw" | "se";

const EDGES: Edge[] = ["top", "right", "bottom", "left"];
const NO_MARGINS: Margins = { top: 0, right: 0, bottom: 0, left: 0 };
/** Smallest crop, as a percentage of each side. */
const MIN_SIZE = 5;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const round = (value: number) => Math.round(value * 10) / 10;

const HANDLES: { mode: Exclude<DragMode, "move">; className: string }[] = [
  { mode: "nw", className: "-left-1.5 -top-1.5 cursor-nwse-resize" },
  { mode: "ne", className: "-right-1.5 -top-1.5 cursor-nesw-resize" },
  { mode: "sw", className: "-bottom-1.5 -left-1.5 cursor-nesw-resize" },
  { mode: "se", className: "-bottom-1.5 -right-1.5 cursor-nwse-resize" },
];

export function CropImageWorkspace() {
  const dict = useDictionary().workspace.cropImage;
  const common = useDictionary().workspace.common;
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [natural, setNatural] = useState<{ width: number; height: number } | null>(null);
  const [margins, setMargins] = useState<Margins>(NO_MARGINS);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; filename: string } | null>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ mode: DragMode; x: number; y: number; start: Margins } | null>(null);

  function reset() {
    if (url) URL.revokeObjectURL(url);
    setFile(null);
    setUrl(null);
    setNatural(null);
    setMargins(NO_MARGINS);
    setProcessing(false);
    setError(null);
    setResult(null);
  }

  async function handleFile(added: File[]) {
    const next = added[0];
    if (!next) return;
    if (url) URL.revokeObjectURL(url);
    setError(null);
    setMargins(NO_MARGINS);
    try {
      setNatural(await readImageSize(next));
      setFile(next);
      setUrl(URL.createObjectURL(next));
    } catch {
      setError(common.imageReadError);
    }
  }

  /** Shared by the frame and its corner handles; each carries its drag mode in `data-mode`. */
  function startDrag(e: PointerEvent<HTMLElement>) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    const mode = (e.currentTarget.dataset.mode ?? "move") as DragMode;
    dragRef.current = { mode, x: e.clientX, y: e.clientY, start: margins };
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const frame = frameRef.current;
    if (!drag || !frame) return;
    const rect = frame.getBoundingClientRect();
    const dx = ((e.clientX - drag.x) / rect.width) * 100;
    const dy = ((e.clientY - drag.y) / rect.height) * 100;
    const s = drag.start;
    const next = { ...s };

    if (drag.mode === "move") {
      const width = 100 - s.left - s.right;
      const height = 100 - s.top - s.bottom;
      next.left = clamp(s.left + dx, 0, 100 - width);
      next.right = 100 - width - next.left;
      next.top = clamp(s.top + dy, 0, 100 - height);
      next.bottom = 100 - height - next.top;
    } else {
      if (drag.mode.includes("w")) next.left = clamp(s.left + dx, 0, 100 - s.right - MIN_SIZE);
      if (drag.mode.includes("e")) next.right = clamp(s.right - dx, 0, 100 - s.left - MIN_SIZE);
      if (drag.mode.includes("n")) next.top = clamp(s.top + dy, 0, 100 - s.bottom - MIN_SIZE);
      if (drag.mode.includes("s")) next.bottom = clamp(s.bottom - dy, 0, 100 - s.top - MIN_SIZE);
    }
    setMargins({
      top: round(next.top),
      right: round(next.right),
      bottom: round(next.bottom),
      left: round(next.left),
    });
  }

  function setEdge(edge: Edge, value: number) {
    const opposite: Record<Edge, Edge> = { top: "bottom", bottom: "top", left: "right", right: "left" };
    setMargins((prev) => ({ ...prev, [edge]: clamp(value, 0, 100 - prev[opposite[edge]] - MIN_SIZE) }));
  }

  const cropRect = natural
    ? {
        x: Math.round((natural.width * margins.left) / 100),
        y: Math.round((natural.height * margins.top) / 100),
        width: Math.max(1, Math.round((natural.width * (100 - margins.left - margins.right)) / 100)),
        height: Math.max(1, Math.round((natural.height * (100 - margins.top - margins.bottom)) / 100)),
      }
    : null;
  const anyCrop = EDGES.some((edge) => margins[edge] > 0);

  async function handleCrop() {
    if (!file || !cropRect) return;
    setProcessing(true);
    setError(null);
    try {
      const cropped = await cropImage(file, cropRect);
      setResult({
        blob: cropped.blob,
        filename: renameFile(file.name, IMAGE_EXTENSION[cropped.mime], dict.resultSuffix),
      });
      trackToolUsage("crop-image", true);
    } catch (err) {
      setError(dict.error);
      trackToolUsage("crop-image", false, err);
    } finally {
      setProcessing(false);
    }
  }

  if (result) {
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
      {!file && (
        <>
          <FileDropzone
            accept={[".jpg", ".jpeg", ".png", ".webp"]}
            maxSizeBytes={30 * 1024 * 1024}
            onFilesAdded={(added) => void handleFile(added)}
            label={dict.dropLabel}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </>
      )}

      {file && url && natural && cropRect && (
        <>
          <SelectedFile
            file={file}
            detail={`${natural.width} × ${natural.height} px`}
            onRemove={reset}
          >
            <p className="mt-4 text-xs text-foreground/60">{dict.hint}</p>
            <div className="mt-2 flex justify-center">
              {/* The frame uses physical left/right, so keep it left-to-right in RTL too. */}
              <div
                ref={frameRef}
                dir="ltr"
                onPointerMove={onPointerMove}
                onPointerUp={() => (dragRef.current = null)}
                onPointerCancel={() => (dragRef.current = null)}
                className="relative inline-block touch-none select-none overflow-hidden rounded border border-border"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- local object URL, not a static asset */}
                <img src={url} alt="" draggable={false} className="block max-h-[440px] w-auto" />
                <div
                  data-mode="move"
                  onPointerDown={startDrag}
                  className="absolute cursor-move border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.45)] outline outline-1 outline-black/30"
                  style={{
                    top: `${margins.top}%`,
                    right: `${margins.right}%`,
                    bottom: `${margins.bottom}%`,
                    left: `${margins.left}%`,
                  }}
                >
                  {HANDLES.map((handle) => (
                    <span
                      key={handle.mode}
                      data-mode={handle.mode}
                      onPointerDown={startDrag}
                      className={`absolute h-3.5 w-3.5 rounded-sm border border-black/40 bg-white shadow ${handle.className}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SelectedFile>

          <div className="mt-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-foreground">{dict.marginsLabel}</span>
              <button
                type="button"
                onClick={() => setMargins(NO_MARGINS)}
                disabled={!anyCrop}
                className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700 disabled:opacity-40"
              >
                <RotateCcw size={12} />
                {dict.reset}
              </button>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {EDGES.map((edge) => (
                <label key={edge} className="block">
                  <span className="text-xs font-medium text-foreground/70">{dict[edge]}</span>
                  <div className="mt-1.5 flex items-center gap-2">
                    <input
                      type="range"
                      min={0}
                      max={90}
                      step={0.5}
                      value={margins[edge]}
                      onChange={(e) => setEdge(edge, Number(e.target.value))}
                      className="w-full accent-brand-500"
                    />
                    <span className="w-10 shrink-0 text-end text-xs tabular-nums text-foreground/60" dir="ltr">
                      {Math.round(margins[edge])}%
                    </span>
                  </div>
                </label>
              ))}
            </div>
            <p className="mt-3 text-xs text-foreground/60" dir="auto">
              {t(dict.resultSize, { width: cropRect.width, height: cropRect.height })}
            </p>
          </div>

          {error && <ErrorText>{error}</ErrorText>}
          {!anyCrop && <p className="mt-4 text-xs text-foreground/50">{dict.noCrop}</p>}

          <Button
            className="mt-6 w-full"
            size="lg"
            disabled={!anyCrop || processing}
            onClick={handleCrop}
          >
            {processing ? <Loader2 size={18} className="animate-spin" /> : <Crop size={18} />}
            {processing ? dict.buttonBusy : dict.button}
          </Button>
        </>
      )}
    </Card>
  );
}
