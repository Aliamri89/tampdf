"use client";

import { useRef, useState, type DragEvent } from "react";
import { ChevronLeft, ChevronRight, FileStack, Loader2, X } from "lucide-react";
import { ErrorText, OptionGroup } from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBytes } from "@/lib/download";
import { imagesToPdf, type ImagePdfPageSize } from "@/lib/image/toPdf";
import { cn } from "@/lib/utils";

type Margin = "none" | "small" | "large";
const MARGINS: Record<Margin, number> = { none: 0, small: 18, large: 36 };

interface ImageEntry {
  id: string;
  file: File;
  url: string;
}

function createId() {
  return Math.random().toString(36).slice(2);
}

export function ImagesToPdfWorkspace() {
  const dict = useDictionary().workspace.imagesToPdf;
  const fileListDict = useDictionary().fileList;
  const [entries, setEntries] = useState<ImageEntry[]>([]);
  const [pageSize, setPageSize] = useState<ImagePdfPageSize>("a4");
  const [margin, setMargin] = useState<Margin>("small");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Uint8Array | null>(null);
  const draggedIdRef = useRef<string | null>(null);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  function reset() {
    entries.forEach((entry) => URL.revokeObjectURL(entry.url));
    setEntries([]);
    setProcessing(false);
    setError(null);
    setResult(null);
  }

  function addFiles(added: File[]) {
    setEntries((prev) => [
      ...prev,
      ...added.map((file) => ({ id: createId(), file, url: URL.createObjectURL(file) })),
    ]);
  }

  function remove(id: string) {
    setEntries((prev) => {
      const target = prev.find((entry) => entry.id === id);
      if (target) URL.revokeObjectURL(target.url);
      return prev.filter((entry) => entry.id !== id);
    });
  }

  function move(index: number, direction: -1 | 1) {
    setEntries((prev) => {
      const target = index + direction;
      if (target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function dropOn(targetId: string) {
    const fromId = draggedIdRef.current;
    draggedIdRef.current = null;
    setDraggedId(null);
    setDragOverId(null);
    if (!fromId || fromId === targetId) return;
    setEntries((prev) => {
      const fromIndex = prev.findIndex((entry) => entry.id === fromId);
      const toIndex = prev.findIndex((entry) => entry.id === targetId);
      if (fromIndex === -1 || toIndex === -1) return prev;
      const next = [...prev];
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);
      return next;
    });
  }

  async function handleConvert() {
    setProcessing(true);
    setError(null);
    try {
      const bytes = await imagesToPdf(
        entries.map((entry) => entry.file),
        { whiteBackground: true, pageSize, margin: MARGINS[margin] },
      );
      setResult(bytes);
      trackToolUsage("images-to-pdf", true);
    } catch (err) {
      setError(dict.error);
      trackToolUsage("images-to-pdf", false, err);
    } finally {
      setProcessing(false);
    }
  }

  if (result) {
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
        accept={[".jpg", ".jpeg", ".png", ".webp"]}
        multiple
        maxSizeBytes={25 * 1024 * 1024}
        maxFiles={30}
        currentCount={entries.length}
        disabled={processing}
        onFilesAdded={addFiles}
        label={dict.dropLabel}
      />

      {entries.length > 0 && (
        <>
          <p className="mt-5 text-xs text-foreground/60">{dict.reorderHint}</p>
          <ul className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
            {entries.map((entry, index) => (
              <li
                key={entry.id}
                draggable
                onDragStart={(e: DragEvent<HTMLLIElement>) => {
                  draggedIdRef.current = entry.id;
                  setDraggedId(entry.id);
                  e.dataTransfer.effectAllowed = "move";
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  if (dragOverId !== entry.id) setDragOverId(entry.id);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  dropOn(entry.id);
                }}
                onDragEnd={() => {
                  draggedIdRef.current = null;
                  setDraggedId(null);
                  setDragOverId(null);
                }}
                className={cn(
                  "relative rounded-lg border-2 p-1 transition-colors",
                  dragOverId === entry.id && draggedId !== entry.id
                    ? "border-brand-400 bg-brand-50 dark:bg-brand-500/10"
                    : "border-border",
                  draggedId === entry.id && "opacity-40",
                )}
              >
                <span className="absolute start-1.5 top-1.5 z-10 flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground/75 px-1 text-[10px] font-semibold text-background">
                  {index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => remove(entry.id)}
                  aria-label={t(fileListDict.remove, { name: entry.file.name })}
                  className="absolute end-1.5 top-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface text-foreground/50 shadow-sm hover:text-red-500"
                >
                  <X size={13} />
                </button>
                <div className="flex aspect-square cursor-grab items-center justify-center overflow-hidden rounded bg-surface-muted active:cursor-grabbing">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local object URL, not a static asset */}
                  <img src={entry.url} alt="" className="max-h-[88%] max-w-[88%] object-contain" />
                </div>
                <div className="mt-1 flex items-center justify-between px-0.5">
                  <button
                    type="button"
                    onClick={() => move(index, -1)}
                    disabled={index === 0}
                    aria-label={dict.moveEarlier}
                    className="text-foreground/40 hover:text-foreground disabled:opacity-20 rtl:rotate-180"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(index, 1)}
                    disabled={index === entries.length - 1}
                    aria-label={dict.moveLater}
                    className="text-foreground/40 hover:text-foreground disabled:opacity-20 rtl:rotate-180"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <OptionGroup
            className="mt-5"
            label={dict.pageSizeLabel}
            value={pageSize}
            onChange={setPageSize}
            options={[
              { id: "a4", label: "A4", hint: dict.sizeAutoHint },
              { id: "letter", label: "Letter", hint: dict.sizeAutoHint },
              { id: "image", label: dict.sizeImage, hint: dict.sizeImageHint },
            ]}
          />

          <OptionGroup
            className="mt-5"
            label={dict.marginLabel}
            value={margin}
            onChange={setMargin}
            options={[
              { id: "none", label: dict.marginNone },
              { id: "small", label: dict.marginSmall },
              { id: "large", label: dict.marginLarge },
            ]}
          />

          {error && <ErrorText>{error}</ErrorText>}

          <Button className="mt-6 w-full" size="lg" disabled={processing} onClick={handleConvert}>
            {processing ? <Loader2 size={18} className="animate-spin" /> : <FileStack size={18} />}
            {processing
              ? dict.buttonBusy
              : entries.length === 1
                ? dict.buttonSingular
                : t(dict.buttonPlural, { count: entries.length })}
          </Button>
        </>
      )}
    </Card>
  );
}
