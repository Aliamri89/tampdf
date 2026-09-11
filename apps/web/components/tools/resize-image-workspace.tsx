"use client";

import { useState } from "react";
import { Expand, Loader2 } from "lucide-react";
import { ErrorText, OptionGroup, RangeField, inputClass } from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBlob } from "@/lib/download";
import { IMAGE_EXTENSION, renameFile } from "@/lib/image/canvas";
import { readImageSize, resizeImage } from "@/lib/image/transform";
import { cn } from "@/lib/utils";
import { zipFiles } from "@/lib/zip";

type Mode = "percent" | "dimensions";

interface Entry {
  file: File;
  width: number;
  height: number;
}

const MAX_SIDE = 10000;

export function ResizeImageWorkspace() {
  const dict = useDictionary().workspace.resizeImage;
  const common = useDictionary().workspace.common;
  const [entries, setEntries] = useState<Entry[]>([]);
  const [mode, setMode] = useState<Mode>("percent");
  const [percent, setPercent] = useState(50);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [keepRatio, setKeepRatio] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; filename: string } | null>(null);

  const first = entries[0];

  function reset() {
    setEntries([]);
    setProcessing(false);
    setError(null);
    setResult(null);
  }

  async function addFiles(added: File[]) {
    setError(null);
    try {
      const measured = await Promise.all(
        added.map(async (file) => ({ file, ...(await readImageSize(file)) })),
      );
      if (entries.length === 0 && measured[0]) {
        setWidth(measured[0].width);
        setHeight(measured[0].height);
      }
      setEntries((prev) => [...prev, ...measured]);
    } catch {
      setError(common.imageReadError);
    }
  }

  function targetSize(entry: Entry): { width: number; height: number } {
    if (mode === "percent") {
      return {
        width: Math.max(1, Math.round((entry.width * percent) / 100)),
        height: Math.max(1, Math.round((entry.height * percent) / 100)),
      };
    }
    if (keepRatio) {
      return { width, height: Math.max(1, Math.round((width * entry.height) / entry.width)) };
    }
    return { width, height };
  }

  function changeWidth(value: number) {
    setWidth(value);
    if (keepRatio && first) setHeight(Math.max(1, Math.round((value * first.height) / first.width)));
  }

  function changeHeight(value: number) {
    setHeight(value);
    if (keepRatio && first) setWidth(Math.max(1, Math.round((value * first.width) / first.height)));
  }

  const validDimensions =
    mode === "percent" ||
    (width >= 1 && width <= MAX_SIDE && height >= 1 && height <= MAX_SIDE);

  async function handleResize() {
    if (!validDimensions) return;
    setProcessing(true);
    setError(null);
    try {
      const outputs = [];
      for (const entry of entries) {
        const size = targetSize(entry);
        const resized = await resizeImage(entry.file, size.width, size.height);
        outputs.push({
          name: renameFile(entry.file.name, IMAGE_EXTENSION[resized.mime], `-${resized.width}x${resized.height}`),
          data: resized.blob,
        });
      }
      if (outputs.length === 1) setResult({ blob: outputs[0].data, filename: outputs[0].name });
      else setResult({ blob: await zipFiles(outputs), filename: dict.resultZipName });
      trackToolUsage("resize-image", true);
    } catch (err) {
      setError(dict.error);
      trackToolUsage("resize-image", false, err);
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

  const preview = first ? targetSize(first) : null;

  return (
    <Card className="p-6 sm:p-8">
      <FileDropzone
        accept={[".jpg", ".jpeg", ".png", ".webp"]}
        multiple
        maxSizeBytes={30 * 1024 * 1024}
        maxFiles={20}
        currentCount={entries.length}
        disabled={processing}
        onFilesAdded={(added) => void addFiles(added)}
        label={dict.dropLabel}
      />

      {entries.length > 0 && first && (
        <>
          <ul className="mt-5 space-y-2">
            {entries.map((entry, index) => (
              <FileListItem
                key={`${entry.file.name}-${index}`}
                file={entry.file}
                onRemove={() => setEntries((prev) => prev.filter((_, i) => i !== index))}
              />
            ))}
          </ul>

          <OptionGroup
            className="mt-5"
            label={dict.modeLabel}
            value={mode}
            onChange={setMode}
            options={[
              { id: "percent", label: dict.modePercent },
              { id: "dimensions", label: dict.modeDimensions },
            ]}
          />

          <div className="mt-5">
            {mode === "percent" ? (
              <RangeField
                label={dict.percentLabel}
                value={percent}
                min={5}
                max={200}
                step={5}
                display={`${percent}%`}
                onChange={setPercent}
              />
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-sm font-medium text-foreground">{dict.widthLabel}</span>
                    <input
                      type="number"
                      min={1}
                      max={MAX_SIDE}
                      dir="ltr"
                      value={width || ""}
                      onChange={(e) => changeWidth(Math.round(Number(e.target.value) || 0))}
                      className={cn(inputClass, "mt-1.5")}
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-foreground">{dict.heightLabel}</span>
                    <input
                      type="number"
                      min={1}
                      max={MAX_SIDE}
                      dir="ltr"
                      value={height || ""}
                      onChange={(e) => changeHeight(Math.round(Number(e.target.value) || 0))}
                      className={cn(inputClass, "mt-1.5")}
                    />
                  </label>
                </div>
                <label className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <input
                    type="checkbox"
                    checked={keepRatio}
                    onChange={(e) => {
                      setKeepRatio(e.target.checked);
                      if (e.target.checked) changeWidth(width);
                    }}
                    className="h-4 w-4 accent-brand-500"
                  />
                  {dict.keepRatio}
                </label>
                {entries.length > 1 && keepRatio && (
                  <p className="text-xs text-foreground/50">{dict.multiNote}</p>
                )}
                {!validDimensions && <p className="text-xs text-red-600">{dict.invalidSize}</p>}
              </div>
            )}
          </div>

          <p className="mt-4 text-xs text-foreground/60" dir="auto">
            {t(dict.originalSize, { width: first.width, height: first.height })}
            {preview && validDimensions && (
              <> · {t(dict.newSize, { width: preview.width, height: preview.height })}</>
            )}
          </p>

          {error && <ErrorText>{error}</ErrorText>}

          <Button
            className="mt-6 w-full"
            size="lg"
            disabled={processing || !validDimensions}
            onClick={handleResize}
          >
            {processing ? <Loader2 size={18} className="animate-spin" /> : <Expand size={18} />}
            {processing
              ? dict.buttonBusy
              : entries.length === 1
                ? dict.buttonSingular
                : t(dict.buttonPlural, { count: entries.length })}
          </Button>
        </>
      )}

      {entries.length === 0 && error && <ErrorText>{error}</ErrorText>}
    </Card>
  );
}
