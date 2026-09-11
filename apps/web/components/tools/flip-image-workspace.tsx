"use client";

import { useState } from "react";
import { FlipHorizontal, Loader2, X } from "lucide-react";
import { ErrorText, OptionGroup } from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBlob } from "@/lib/download";
import { IMAGE_EXTENSION, renameFile } from "@/lib/image/canvas";
import { flipImage, type ImageFlip } from "@/lib/image/transform";
import { zipFiles } from "@/lib/zip";

interface Entry {
  id: string;
  file: File;
  url: string;
}

function createId() {
  return Math.random().toString(36).slice(2);
}

export function FlipImageWorkspace() {
  const dict = useDictionary().workspace.flipImage;
  const fileListDict = useDictionary().fileList;
  const [entries, setEntries] = useState<Entry[]>([]);
  const [direction, setDirection] = useState<ImageFlip>("horizontal");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; filename: string } | null>(null);

  function reset() {
    entries.forEach((entry) => URL.revokeObjectURL(entry.url));
    setEntries([]);
    setProcessing(false);
    setError(null);
    setResult(null);
  }

  function remove(id: string) {
    setEntries((prev) => {
      const target = prev.find((entry) => entry.id === id);
      if (target) URL.revokeObjectURL(target.url);
      return prev.filter((entry) => entry.id !== id);
    });
  }

  async function handleFlip() {
    setProcessing(true);
    setError(null);
    try {
      const outputs = [];
      for (const entry of entries) {
        const flipped = await flipImage(entry.file, direction);
        outputs.push({
          name: renameFile(entry.file.name, IMAGE_EXTENSION[flipped.mime], "-flipped"),
          data: flipped.blob,
        });
      }
      if (outputs.length === 1) setResult({ blob: outputs[0].data, filename: outputs[0].name });
      else setResult({ blob: await zipFiles(outputs), filename: dict.resultZipName });
      trackToolUsage("flip-image", true);
    } catch (err) {
      setError(dict.error);
      trackToolUsage("flip-image", false, err);
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
      <FileDropzone
        accept={[".jpg", ".jpeg", ".png", ".webp"]}
        multiple
        maxSizeBytes={30 * 1024 * 1024}
        maxFiles={20}
        currentCount={entries.length}
        disabled={processing}
        onFilesAdded={(added) =>
          setEntries((prev) => [
            ...prev,
            ...added.map((file) => ({ id: createId(), file, url: URL.createObjectURL(file) })),
          ])
        }
        label={dict.dropLabel}
      />

      {entries.length > 0 && (
        <>
          <OptionGroup
            className="mt-5"
            label={dict.directionLabel}
            value={direction}
            onChange={setDirection}
            options={[
              { id: "horizontal", label: dict.horizontal, hint: dict.horizontalHint },
              { id: "vertical", label: dict.vertical, hint: dict.verticalHint },
            ]}
          />

          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
            {entries.map((entry) => (
              <div key={entry.id} className="relative">
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local object URL, not a static asset */}
                  <img
                    src={entry.url}
                    alt=""
                    className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-500 ease-out"
                    style={{ transform: direction === "horizontal" ? "scaleX(-1)" : "scaleY(-1)" }}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => remove(entry.id)}
                  aria-label={t(fileListDict.remove, { name: entry.file.name })}
                  className="absolute -top-1.5 end-[-6px] flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-foreground/50 shadow-sm transition-colors hover:border-red-300 hover:text-red-500"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>

          {error && <ErrorText>{error}</ErrorText>}

          <Button className="mt-6 w-full" size="lg" disabled={processing} onClick={handleFlip}>
            {processing ? <Loader2 size={18} className="animate-spin" /> : <FlipHorizontal size={18} />}
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
