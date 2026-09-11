"use client";

import { useState } from "react";
import { FlipHorizontal2, Loader2 } from "lucide-react";
import { ErrorText, LoadingLine, OptionGroup, SelectedFile } from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { usePdfSource } from "@/components/tools/use-pdf-source";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBytes } from "@/lib/download";
import { flipPdf, type FlipDirection } from "@/lib/pdf/flip";

export function FlipPdfWorkspace() {
  const dict = useDictionary().workspace.flipPdf;
  const common = useDictionary().workspace.common;
  const source = usePdfSource("preview");
  const [direction, setDirection] = useState<FlipDirection>("horizontal");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ bytes: Uint8Array; name: string } | null>(null);

  function reset() {
    source.clear();
    setProcessing(false);
    setError(null);
    setResult(null);
  }

  async function handleFlip() {
    const file = source.file;
    if (!file) return;
    setProcessing(true);
    setError(null);
    try {
      const bytes = await flipPdf(file, direction);
      setResult({ bytes, name: file.name.replace(/\.pdf$/i, dict.resultSuffix) });
      trackToolUsage("flip-pdf", true);
    } catch (err) {
      setError(dict.error);
      trackToolUsage("flip-pdf", false, err);
    } finally {
      setProcessing(false);
    }
  }

  if (result) {
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

  const file = source.file;

  return (
    <Card className="p-6 sm:p-8">
      {!file && (
        <FileDropzone
          accept={[".pdf"]}
          onFilesAdded={(added) => added[0] && void source.load(added[0])}
          label={dict.dropLabel}
        />
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
          {source.preview && (
            <div className="mt-4">
              <p className="text-xs text-foreground/60">{dict.previewLabel}</p>
              <div className="mt-2 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element -- local canvas-rendered data URL */}
                <img
                  src={source.preview.dataUrl}
                  alt=""
                  className="max-h-[360px] w-auto rounded border border-border transition-transform duration-500 ease-out"
                  style={{ transform: direction === "horizontal" ? "scaleX(-1)" : "scaleY(-1)" }}
                />
              </div>
            </div>
          )}
        </SelectedFile>
      )}

      {source.ready && (
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
      )}

      {error && <ErrorText>{error}</ErrorText>}

      {source.ready && (
        <Button className="mt-6 w-full" size="lg" disabled={processing} onClick={handleFlip}>
          {processing ? <Loader2 size={18} className="animate-spin" /> : <FlipHorizontal2 size={18} />}
          {processing ? dict.buttonBusy : dict.button}
        </Button>
      )}
    </Card>
  );
}
