"use client";

import { useState } from "react";
import { Info, Loader2, RefreshCw } from "lucide-react";
import { ErrorText, RangeField } from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBlob } from "@/lib/download";
import { EncodingUnsupportedError, renameFile, type ImageMime } from "@/lib/image/canvas";
import { convertImage } from "@/lib/image/convert";
import { zipFiles } from "@/lib/zip";

export type ImageFormatId = "jpg" | "png" | "webp";

const FORMATS: Record<
  ImageFormatId,
  { mime: ImageMime; extension: string; accept: string[]; label: string }
> = {
  jpg: { mime: "image/jpeg", extension: ".jpg", accept: [".jpg", ".jpeg"], label: "JPG" },
  png: { mime: "image/png", extension: ".png", accept: [".png"], label: "PNG" },
  webp: { mime: "image/webp", extension: ".webp", accept: [".webp"], label: "WEBP" },
};

/** One workspace behind all six format converters (PNG→JPG, JPG→WEBP, …). */
export function ImageConvertWorkspace({
  slug,
  from,
  to,
}: {
  slug: string;
  from: ImageFormatId;
  to: ImageFormatId;
}) {
  const dict = useDictionary().workspace.imageConvert;
  const common = useDictionary().workspace.common;
  const source = FORMATS[from];
  const target = FORMATS[to];
  const [files, setFiles] = useState<File[]>([]);
  const [quality, setQuality] = useState(92);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; filename: string; originalSize: number } | null>(
    null,
  );

  function reset() {
    setFiles([]);
    setProcessing(false);
    setError(null);
    setResult(null);
  }

  async function handleConvert() {
    setProcessing(true);
    setError(null);
    try {
      const outputs = [];
      for (const file of files) {
        const blob = await convertImage(file, target.mime, quality / 100);
        outputs.push({ name: renameFile(file.name, target.extension), data: blob });
      }
      const originalSize = files.reduce((sum, file) => sum + file.size, 0);
      if (outputs.length === 1) {
        setResult({ blob: outputs[0].data, filename: outputs[0].name, originalSize });
      } else {
        setResult({
          blob: await zipFiles(outputs),
          filename: t(dict.resultZipName, { format: to }),
          originalSize,
        });
      }
      trackToolUsage(slug, true);
    } catch (err) {
      setError(err instanceof EncodingUnsupportedError ? common.webpUnsupported : dict.error);
      trackToolUsage(slug, false, err);
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

  const labels = { from: source.label, to: target.label };

  return (
    <Card className="p-6 sm:p-8">
      <FileDropzone
        accept={source.accept}
        multiple
        maxSizeBytes={30 * 1024 * 1024}
        maxFiles={30}
        currentCount={files.length}
        disabled={processing}
        onFilesAdded={(added) => setFiles((prev) => [...prev, ...added])}
        label={t(dict.dropLabel, labels)}
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

          {to !== "png" && (
            <div className="mt-5">
              <RangeField
                label={dict.qualityLabel}
                value={quality}
                min={50}
                max={100}
                display={`${quality}%`}
                onChange={setQuality}
              />
            </div>
          )}

          {to === "jpg" && from !== "jpg" && (
            <p className="mt-4 flex items-start gap-2 text-xs text-foreground/55">
              <Info size={14} className="mt-0.5 shrink-0" />
              {dict.transparencyNote}
            </p>
          )}

          {error && <ErrorText>{error}</ErrorText>}

          <Button className="mt-6 w-full" size="lg" disabled={processing} onClick={handleConvert}>
            {processing ? <Loader2 size={18} className="animate-spin" /> : <RefreshCw size={18} />}
            {processing
              ? dict.buttonBusy
              : files.length === 1
                ? t(dict.buttonSingular, labels)
                : t(dict.buttonPlural, { ...labels, count: files.length })}
          </Button>
        </>
      )}
    </Card>
  );
}
