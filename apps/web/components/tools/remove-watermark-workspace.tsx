"use client";

import { useState } from "react";
import { Eraser, Info, Loader2, SearchX } from "lucide-react";
import { ErrorText, LoadingLine, SelectedFile } from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { usePdfSource } from "@/components/tools/use-pdf-source";
import { Button } from "@/components/ui/button";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { isDocx, removeDocxWatermarks } from "@/lib/docx/remove-watermark";
import { downloadBlob } from "@/lib/download";
import { removeWatermarks } from "@/lib/pdf/remove-watermark";

export function RemoveWatermarkWorkspace() {
  const dict = useDictionary().workspace.removeWatermark;
  const common = useDictionary().workspace.common;
  const source = usePdfSource("count");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [noneFound, setNoneFound] = useState(false);
  const [docxFile, setDocxFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ blob: Blob; name: string; removed: number } | null>(null);

  function handleFileAdded(added: File) {
    setError(null);
    setNoneFound(false);
    if (isDocx(added)) {
      source.clear();
      setDocxFile(added);
    } else {
      setDocxFile(null);
      void source.load(added);
    }
  }

  function reset() {
    source.clear();
    setDocxFile(null);
    setProcessing(false);
    setError(null);
    setNoneFound(false);
    setResult(null);
  }

  async function handleRemove() {
    const file = docxFile ?? source.file;
    if (!file) return;
    setProcessing(true);
    setError(null);
    setNoneFound(false);
    try {
      if (docxFile) {
        const { blob, removed } = await removeDocxWatermarks(docxFile);
        const suffix = dict.resultSuffix.replace(/\.pdf$/i, "");
        if (removed === 0) setNoneFound(true);
        else setResult({ blob, removed, name: docxFile.name.replace(/\.docx$/i, `${suffix}.docx`) });
      } else {
        const { bytes, removed } = await removeWatermarks(file);
        if (removed === 0) setNoneFound(true);
        else {
          setResult({
            blob: new Blob([new Uint8Array(bytes)], { type: "application/pdf" }),
            removed,
            name: file.name.replace(/\.pdf$/i, dict.resultSuffix),
          });
        }
      }
      trackToolUsage("remove-watermark", true);
    } catch (err) {
      setError(dict.error);
      trackToolUsage("remove-watermark", false, err);
    } finally {
      setProcessing(false);
    }
  }

  if (result) {
    return (
      <div>
        <p className="mb-4 text-center text-base font-medium text-foreground/70">
          {result.removed === 1 ? dict.removedOne : t(dict.removedCount, { count: result.removed })}
        </p>
        <ResultPanel
          filename={result.name}
          size={result.blob.size}
          onDownload={() => downloadBlob(result.blob, result.name)}
          getBlob={() => result.blob}
          onReset={reset}
        />
      </div>
    );
  }

  const file = docxFile ?? source.file;
  const ready = docxFile !== null || source.ready;

  return (
    <div>
      {!file && (
        <>
          <FileDropzone
            accept={[".pdf", ".docx"]}
            onFilesAdded={(added) => added[0] && handleFileAdded(added[0])}
            label={dict.dropLabel}
          />
          <p className="mt-3 text-center text-sm text-foreground/55">{dict.formatsNote}</p>
          <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-foreground/55">
            <Info size={14} className="mt-0.5 shrink-0" />
            {dict.intro}
          </p>
        </>
      )}

      {file && (
        <SelectedFile
          file={file}
          detail={
            !docxFile && source.pageCount ? t(common.pageCount, { count: source.pageCount }) : undefined
          }
          onRemove={reset}
        >
          {source.loading && <LoadingLine label={common.loadingDocument} />}
          {source.readError && (
            <ErrorText>
              {source.readError === "password" ? common.passwordError : common.readError}
            </ErrorText>
          )}
        </SelectedFile>
      )}

      {noneFound && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-base text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
          <SearchX size={18} className="mt-0.5 shrink-0" />
          <p>{docxFile ? dict.noneFoundWord : dict.noneFound}</p>
        </div>
      )}

      {error && <ErrorText>{error}</ErrorText>}

      {ready && !noneFound && (
        <Button className="mt-6 w-full" size="lg" disabled={processing} onClick={handleRemove}>
          {processing ? <Loader2 size={18} className="animate-spin" /> : <Eraser size={18} />}
          {processing ? dict.buttonBusy : dict.button}
        </Button>
      )}
      {noneFound && (
        <Button variant="secondary" className="mt-5 w-full" size="lg" onClick={reset}>
          {dict.tryAnother}
        </Button>
      )}
    </div>
  );
}
