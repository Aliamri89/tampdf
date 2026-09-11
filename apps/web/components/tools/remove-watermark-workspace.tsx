"use client";

import { useState } from "react";
import { Eraser, Info, Loader2, SearchX } from "lucide-react";
import { ErrorText, LoadingLine, SelectedFile } from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { usePdfSource } from "@/components/tools/use-pdf-source";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBytes } from "@/lib/download";
import { removeWatermarks } from "@/lib/pdf/remove-watermark";

export function RemoveWatermarkWorkspace() {
  const dict = useDictionary().workspace.removeWatermark;
  const common = useDictionary().workspace.common;
  const source = usePdfSource("count");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [noneFound, setNoneFound] = useState(false);
  const [result, setResult] = useState<{ bytes: Uint8Array; name: string; removed: number } | null>(
    null,
  );

  function reset() {
    source.clear();
    setProcessing(false);
    setError(null);
    setNoneFound(false);
    setResult(null);
  }

  async function handleRemove() {
    const file = source.file;
    if (!file) return;
    setProcessing(true);
    setError(null);
    setNoneFound(false);
    try {
      const { bytes, removed } = await removeWatermarks(file);
      if (removed === 0) setNoneFound(true);
      else setResult({ bytes, removed, name: file.name.replace(/\.pdf$/i, dict.resultSuffix) });
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
      <Card className="p-6 sm:p-8">
        <p className="mb-4 text-center text-sm font-medium text-foreground/70">
          {result.removed === 1 ? dict.removedOne : t(dict.removedCount, { count: result.removed })}
        </p>
        <ResultPanel
          filename={result.name}
          size={result.bytes.byteLength}
          onDownload={() => downloadBytes(result.bytes, result.name, "application/pdf")}
          onReset={reset}
        />
      </Card>
    );
  }

  const file = source.file;

  return (
    <Card className="p-6 sm:p-8">
      {!file && (
        <>
          <FileDropzone
            accept={[".pdf"]}
            onFilesAdded={(added) => added[0] && void source.load(added[0])}
            label={dict.dropLabel}
          />
          <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-foreground/55">
            <Info size={14} className="mt-0.5 shrink-0" />
            {dict.intro}
          </p>
        </>
      )}

      {file && (
        <SelectedFile
          file={file}
          detail={source.pageCount ? t(common.pageCount, { count: source.pageCount }) : undefined}
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
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
          <SearchX size={18} className="mt-0.5 shrink-0" />
          <p>{dict.noneFound}</p>
        </div>
      )}

      {error && <ErrorText>{error}</ErrorText>}

      {source.ready && !noneFound && (
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
    </Card>
  );
}
