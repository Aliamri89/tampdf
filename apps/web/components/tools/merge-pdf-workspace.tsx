"use client";

import { useRef, useState } from "react";
import { Combine, Loader2 } from "lucide-react";
import type { DragEvent } from "react";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBytes } from "@/lib/download";
import { mergePdfs } from "@/lib/pdf/merge";
import { renderPdfThumbnail } from "@/lib/pdf/render";

interface FileEntry {
  id: string;
  file: File;
  thumbnail?: string;
}

function createId() {
  return Math.random().toString(36).slice(2);
}

export function MergePdfWorkspace() {
  const dict = useDictionary().workspace.mergePdf;
  const [entries, setEntries] = useState<FileEntry[]>([]);
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Uint8Array | null>(null);
  // A ref (not state) so the drop handler always reads the id that was just
  // dragged, even if it fires before React re-renders with the new state.
  // draggedId (state) mirrors it for use during render, since refs can't be
  // read while rendering.
  const draggedIdRef = useRef<string | null>(null);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  function reset() {
    setEntries([]);
    setStatus("idle");
    setError(null);
    setResult(null);
  }

  function handleFilesAdded(added: File[]) {
    const newEntries: FileEntry[] = added.map((file) => ({ id: createId(), file }));
    setEntries((prev) => [...prev, ...newEntries]);
    for (const entry of newEntries) {
      renderPdfThumbnail(entry.file)
        .then((thumbnail) => {
          setEntries((prev) => prev.map((e) => (e.id === entry.id ? { ...e, thumbnail } : e)));
        })
        .catch(() => {
          // Thumbnail is a nice-to-have preview; leave the fallback icon if it fails.
        });
    }
  }

  function moveEntry(index: number, direction: -1 | 1) {
    setEntries((prev) => {
      const next = [...prev];
      const target = index + direction;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function reorderByDrag(fromId: string, toId: string) {
    if (fromId === toId) return;
    setEntries((prev) => {
      const fromIndex = prev.findIndex((e) => e.id === fromId);
      const toIndex = prev.findIndex((e) => e.id === toId);
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

  async function handleMerge() {
    setStatus("processing");
    setError(null);
    try {
      const bytes = await mergePdfs(entries.map((e) => e.file));
      setResult(bytes);
      setStatus("done");
      trackToolUsage("merge-pdf", true);
    } catch {
      setError(dict.error);
      setStatus("error");
      trackToolUsage("merge-pdf", false);
    }
  }

  if (status === "done" && result) {
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
        accept={[".pdf"]}
        multiple
        disabled={status === "processing"}
        onFilesAdded={handleFilesAdded}
        label={dict.dropLabel}
      />

      {entries.length > 0 && (
        <>
          <ul className="mt-5 space-y-2">
            {entries.map((entry, index) => (
              <FileListItem
                key={entry.id}
                file={entry.file}
                thumbnail={entry.thumbnail}
                onRemove={() => setEntries((prev) => prev.filter((e) => e.id !== entry.id))}
                onMoveUp={index > 0 ? () => moveEntry(index, -1) : undefined}
                onMoveDown={index < entries.length - 1 ? () => moveEntry(index, 1) : undefined}
                draggable
                isDragOver={dragOverId === entry.id && draggedId !== entry.id}
                onDragStart={handleDragStart(entry.id)}
                onDragOver={handleDragOver(entry.id)}
                onDrop={handleDrop(entry.id)}
                onDragEnd={handleDragEnd}
              />
            ))}
          </ul>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          <Button
            className="mt-6 w-full"
            size="lg"
            disabled={entries.length < 2 || status === "processing"}
            onClick={handleMerge}
          >
            {status === "processing" ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Combine size={18} />
            )}
            {status === "processing"
              ? dict.buttonBusy
              : t(dict.button, { count: entries.length })}
          </Button>
          {entries.length === 1 && (
            <p className="mt-2 text-center text-xs text-foreground/50">{dict.hint}</p>
          )}
        </>
      )}
    </Card>
  );
}
