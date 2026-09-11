"use client";

import { useState } from "react";
import { GalleryHorizontalEnd, Loader2 } from "lucide-react";
import { ErrorText, OptionGroup } from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { FileListItem } from "@/components/tools/file-list-item";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBlob } from "@/lib/download";
import {
  PageImageEncodingError,
  isPdfPasswordError,
  renderPdfToImages,
  type PageImageType,
} from "@/lib/pdf/render";
import { zipFiles } from "@/lib/zip";

type Format = "jpg" | "png" | "webp";
type Resolution = "standard" | "high" | "max";

const FORMATS: Record<Format, { type: PageImageType; extension: string }> = {
  jpg: { type: "image/jpeg", extension: ".jpg" },
  png: { type: "image/png", extension: ".png" },
  webp: { type: "image/webp", extension: ".webp" },
};

/** Render scale relative to 72 dpi. */
const SCALES: Record<Resolution, number> = { standard: 1.5, high: 2, max: 3 };

const MAX_FILES = 10;

export function PdfToImagesWorkspace() {
  const dict = useDictionary().workspace.pdfToImages;
  const common = useDictionary().workspace.common;
  const [files, setFiles] = useState<File[]>([]);
  const [format, setFormat] = useState<Format>("png");
  const [resolution, setResolution] = useState<Resolution>("high");
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState<{
    currentFile: number;
    totalFiles: number;
    current: number;
    total: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; filename: string } | null>(null);

  function reset() {
    setFiles([]);
    setProcessing(false);
    setProgress(null);
    setError(null);
    setResult(null);
  }

  async function handleConvert() {
    if (files.length === 0) return;
    setProcessing(true);
    setProgress(null);
    setError(null);
    try {
      const { type, extension } = FORMATS[format];
      const outputs: { name: string; data: Blob }[] = [];
      for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
        const file = files[fileIndex];
        const base = file.name.replace(/\.pdf$/i, "");
        const pages = await renderPdfToImages(
          file,
          { scale: SCALES[resolution], type, quality: 0.9 },
          (current, total) =>
            setProgress({ currentFile: fileIndex + 1, totalFiles: files.length, current, total }),
        );
        for (const page of pages) {
          outputs.push({ name: `${base}-page-${page.pageNumber}${extension}`, data: page.blob });
        }
      }

      if (outputs.length === 1) {
        setResult({ blob: outputs[0].data, filename: outputs[0].name });
      } else {
        setResult({ blob: await zipFiles(outputs), filename: dict.resultZipName });
      }
      trackToolUsage("pdf-to-images", true);
    } catch (err) {
      setError(
        err instanceof PageImageEncodingError
          ? common.webpUnsupported
          : isPdfPasswordError(err)
            ? common.passwordError
            : common.readError,
      );
      trackToolUsage("pdf-to-images", false, err);
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
        accept={[".pdf"]}
        multiple
        maxFiles={MAX_FILES}
        currentCount={files.length}
        disabled={processing}
        onFilesAdded={(added) => setFiles((prev) => [...prev, ...added])}
        label={dict.dropLabel}
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

          <OptionGroup
            className="mt-5"
            label={dict.formatLabel}
            value={format}
            onChange={setFormat}
            options={[
              { id: "png", label: "PNG", hint: dict.formatPngHint },
              { id: "jpg", label: "JPG", hint: dict.formatJpgHint },
              { id: "webp", label: "WEBP", hint: dict.formatWebpHint },
            ]}
          />

          <OptionGroup
            className="mt-5"
            label={dict.resolutionLabel}
            value={resolution}
            onChange={setResolution}
            options={[
              { id: "standard", label: dict.resolutionStandard, hint: "108 dpi" },
              { id: "high", label: dict.resolutionHigh, hint: "144 dpi" },
              { id: "max", label: dict.resolutionMax, hint: "216 dpi" },
            ]}
          />

          {error && <ErrorText>{error}</ErrorText>}

          <Button className="mt-6 w-full" size="lg" disabled={processing} onClick={handleConvert}>
            {processing ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <GalleryHorizontalEnd size={18} />
            )}
            {processing
              ? progress
                ? t(dict.buttonBusy, {
                    currentFile: progress.currentFile,
                    totalFiles: progress.totalFiles,
                    current: progress.current,
                    total: progress.total,
                  })
                : dict.buttonBusyStart
              : files.length === 1
                ? dict.buttonSingular
                : t(dict.buttonPlural, { count: files.length })}
          </Button>
        </>
      )}
    </Card>
  );
}
