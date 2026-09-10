"use client";

import { useRef, useState } from "react";
import type { DragEvent } from "react";
import { ArrowUpDown, ChevronLeft, ChevronRight, Loader2, X } from "lucide-react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBytes } from "@/lib/download";
import { isPdfPasswordError, renderAllPageThumbnails } from "@/lib/pdf/render";
import { reorderPdfPages } from "@/lib/pdf/reorder-pages";
import { cn, formatBytes } from "@/lib/utils";

type Status = "idle" | "loading" | "ready" | "processing" | "done";
type ReadError = "password" | "generic" | null;

interface PageItem {
  id: string;
  sourceIndex: number;
  pageNumber: number;
  dataUrl: string;
}

function createId() {
  return Math.random().toString(36).slice(2);
}

export function ReorderPdfPagesWorkspace() {
  const dict = useDictionary().workspace.reorderPdfPages;
  const fileListDict = useDictionary().fileList;
  const [file, setFile] = useState<File | null>(null);
  const [items, setItems] = useState<PageItem[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [readError, setReadError] = useState<ReadError>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ bytes: Uint8Array; name: string } | null>(null);
  const draggedIdRef = useRef<string | null>(null);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  function reset() {
    setFile(null);
    setItems([]);
    setStatus("idle");
    setReadError(null);
    setError(null);
    setResult(null);
  }

  function handleFile(added: File[]) {
    const next = added[0];
    if (!next) return;
    setFile(next);
    setItems([]);
    setReadError(null);
    setError(null);
    setStatus("loading");
    renderAllPageThumbnails(next)
      .then((pages) => {
        setItems(
          pages.map((p) => ({
            id: createId(),
            sourceIndex: p.pageNumber - 1,
            pageNumber: p.pageNumber,
            dataUrl: p.dataUrl,
          })),
        );
        setStatus("ready");
      })
      .catch((err) => {
        setReadError(isPdfPasswordError(err) ? "password" : "generic");
        setStatus("ready");
      });
  }

  function move(index: number, direction: -1 | 1) {
    setItems((prev) => {
      const target = index + direction;
      if (target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function reorderByDrag(fromId: string, toId: string) {
    if (fromId === toId) return;
    setItems((prev) => {
      const fromIndex = prev.findIndex((i) => i.id === fromId);
      const toIndex = prev.findIndex((i) => i.id === toId);
      if (fromIndex === -1 || toIndex === -1) return prev;
      const next = [...prev];
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);
      return next;
    });
  }

  function handleDragStart(id: string) {
    return (e: DragEvent<HTMLLIElement>) => {
      draggedIdRef.current = id;
      setDraggedId(id);
      e.dataTransfer.effectAllowed = "move";
    };
  }
  function handleDragOver(id: string) {
    return (e: DragEvent<HTMLLIElement>) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      if (id !== dragOverId) setDragOverId(id);
    };
  }
  function handleDrop(id: string) {
    return (e: DragEvent<HTMLLIElement>) => {
      e.preventDefault();
      if (draggedIdRef.current) reorderByDrag(draggedIdRef.current, id);
      draggedIdRef.current = null;
      setDraggedId(null);
      setDragOverId(null);
    };
  }
  function handleDragEnd() {
    draggedIdRef.current = null;
    setDraggedId(null);
    setDragOverId(null);
  }

  async function handleSave() {
    if (!file) return;
    setStatus("processing");
    setError(null);
    try {
      const order = items.map((i) => i.sourceIndex);
      const bytes = await reorderPdfPages(file, order);
      const name = file.name.replace(/\.pdf$/i, dict.resultSuffix);
      setResult({ bytes, name });
      setStatus("done");
      trackToolUsage("reorder-pdf-pages", true);
    } catch (err) {
      setError(dict.error);
      setStatus("ready");
      trackToolUsage("reorder-pdf-pages", false, err);
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

  const changed = items.some((item, index) => item.sourceIndex !== index);

  return (
    <Card className="p-6 sm:p-8">
      {!file && <FileDropzone accept={[".pdf"]} onFilesAdded={handleFile} label={dict.dropLabel} />}

      {file && (
        <div className="rounded-xl border border-border p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
              <p className="text-xs text-foreground/50">
                {formatBytes(file.size)}
                {items.length > 0 ? ` · ${t(dict.pageCountLabel, { count: items.length })}` : ""}
              </p>
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
              {dict.loadingPages}
            </div>
          )}

          {readError && (
            <p className="mt-4 text-sm text-red-600">
              {readError === "password" ? dict.passwordError : dict.readError}
            </p>
          )}

          {items.length > 0 && (
            <>
              <p className="mt-4 text-xs text-foreground/60">{dict.reorderHint}</p>
              <ul className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                {items.map((item, index) => (
                  <li
                    key={item.id}
                    draggable
                    onDragStart={handleDragStart(item.id)}
                    onDragOver={handleDragOver(item.id)}
                    onDrop={handleDrop(item.id)}
                    onDragEnd={handleDragEnd}
                    className={cn(
                      "rounded-lg border-2 p-1 transition-colors",
                      dragOverId === item.id && draggedId !== item.id
                        ? "border-brand-400 bg-brand-50 dark:bg-brand-500/10"
                        : "border-border",
                      draggedId === item.id && "opacity-40",
                    )}
                  >
                    <div className="flex aspect-square cursor-grab items-center justify-center overflow-hidden rounded bg-surface-muted active:cursor-grabbing">
                      {/* eslint-disable-next-line @next/next/no-img-element -- local canvas-rendered data URL */}
                      <img
                        src={item.dataUrl}
                        alt=""
                        className="max-h-[85%] max-w-[85%] object-contain"
                      />
                    </div>
                    <div className="mt-1 flex items-center justify-between px-0.5">
                      <button
                        type="button"
                        onClick={() => move(index, -1)}
                        disabled={index === 0}
                        aria-label={dict.moveBackLabel}
                        className="text-foreground/40 hover:text-foreground disabled:opacity-20 rtl:rotate-180"
                      >
                        <ChevronLeft size={15} />
                      </button>
                      <span className="text-[11px] text-foreground/50">{item.pageNumber}</span>
                      <button
                        type="button"
                        onClick={() => move(index, 1)}
                        disabled={index === items.length - 1}
                        aria-label={dict.moveForwardLabel}
                        className="text-foreground/40 hover:text-foreground disabled:opacity-20 rtl:rotate-180"
                      >
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {items.length > 0 && (
        <Button
          className="mt-6 w-full"
          size="lg"
          disabled={!changed || status === "processing"}
          onClick={handleSave}
        >
          {status === "processing" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <ArrowUpDown size={18} />
          )}
          {status === "processing" ? dict.buttonBusy : dict.button}
        </Button>
      )}
      {items.length > 0 && !changed && status !== "processing" && (
        <p className="mt-2 text-center text-xs text-foreground/50">{dict.notChanged}</p>
      )}
    </Card>
  );
}
