"use client";

import { useState } from "react";
import { Check, FileOutput, Loader2 } from "lucide-react";
import { ErrorText, LoadingLine, OptionGroup, SelectedFile } from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { usePdfSource } from "@/components/tools/use-pdf-source";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBlob } from "@/lib/download";
import { splitPdf } from "@/lib/pdf/split";
import { cn } from "@/lib/utils";
import { zipFiles } from "@/lib/zip";

type Output = "single" | "separate";

export function ExtractPdfPagesWorkspace() {
  const dict = useDictionary().workspace.extractPdfPages;
  const common = useDictionary().workspace.common;
  const source = usePdfSource("thumbnails");
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [output, setOutput] = useState<Output>("single");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; name: string } | null>(null);

  function reset() {
    source.clear();
    setSelected(new Set());
    setOutput("single");
    setProcessing(false);
    setError(null);
    setResult(null);
  }

  function handleFile(added: File[]) {
    const next = added[0];
    if (!next) return;
    setSelected(new Set());
    setError(null);
    void source.load(next);
  }

  function toggle(pageNumber: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(pageNumber)) next.delete(pageNumber);
      else next.add(pageNumber);
      return next;
    });
  }

  async function handleExtract() {
    const file = source.file;
    if (!file || selected.size === 0) return;
    setProcessing(true);
    setError(null);
    try {
      const pages = [...selected].sort((a, b) => a - b);
      const base = file.name.replace(/\.pdf$/i, "");
      if (output === "single" || pages.length === 1) {
        const [out] = await splitPdf(file, [{ label: "", indices: pages.map((p) => p - 1) }]);
        const name =
          output === "separate"
            ? `${base}${t(dict.resultPageSuffix, { page: pages[0] })}`
            : `${base}${dict.resultSuffix}`;
        setResult({ blob: new Blob([new Uint8Array(out.bytes)], { type: "application/pdf" }), name });
      } else {
        const outputs = await splitPdf(
          file,
          pages.map((page) => ({ label: String(page), indices: [page - 1] })),
        );
        const zip = await zipFiles(
          outputs.map((out) => ({
            name: `${base}${t(dict.resultPageSuffix, { page: out.label })}`,
            data: out.bytes,
          })),
        );
        setResult({ blob: zip, name: dict.resultZipName });
      }
      trackToolUsage("extract-pdf-pages", true);
    } catch (err) {
      setError(dict.error);
      trackToolUsage("extract-pdf-pages", false, err);
    } finally {
      setProcessing(false);
    }
  }

  if (result) {
    return (
      <Card className="p-6 sm:p-8">
        <ResultPanel
          filename={result.name}
          size={result.blob.size}
          onDownload={() => downloadBlob(result.blob, result.name)}
          onReset={reset}
        />
      </Card>
    );
  }

  const file = source.file;
  const count = selected.size;
  const allSelected = source.pageCount > 0 && count === source.pageCount;

  return (
    <Card className="p-6 sm:p-8">
      {!file && <FileDropzone accept={[".pdf"]} onFilesAdded={handleFile} label={dict.dropLabel} />}

      {file && (
        <SelectedFile
          file={file}
          detail={source.pageCount ? t(common.pageCount, { count: source.pageCount }) : undefined}
          onRemove={reset}
        >
          {source.loading && <LoadingLine label={common.loadingPages} />}
          {source.readError && (
            <ErrorText>
              {source.readError === "password" ? common.passwordError : common.readError}
            </ErrorText>
          )}
          {source.thumbs.length > 0 && (
            <>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-xs text-foreground/60">
                  {count > 0 ? t(dict.selectedLabel, { count }) : dict.selectHint}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setSelected(
                      allSelected ? new Set() : new Set(source.thumbs.map((p) => p.pageNumber)),
                    )
                  }
                  className="text-xs font-medium text-brand-600 hover:text-brand-700"
                >
                  {allSelected ? common.clearSelection : common.selectAll}
                </button>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                {source.thumbs.map((page) => {
                  const isSelected = selected.has(page.pageNumber);
                  return (
                    <button
                      key={page.pageNumber}
                      type="button"
                      onClick={() => toggle(page.pageNumber)}
                      aria-pressed={isSelected}
                      className={cn(
                        "relative rounded-lg border-2 p-1 text-center transition-colors",
                        isSelected
                          ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10"
                          : "border-border hover:border-brand-200",
                      )}
                    >
                      <span className="flex aspect-square items-center justify-center overflow-hidden rounded bg-surface-muted">
                        {/* eslint-disable-next-line @next/next/no-img-element -- local canvas-rendered data URL */}
                        <img src={page.dataUrl} alt="" className="max-h-[85%] max-w-[85%] object-contain" />
                      </span>
                      <span className="mt-1 block text-[11px] text-foreground/60">{page.pageNumber}</span>
                      {isSelected && (
                        <span className="absolute end-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-white">
                          <Check size={12} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </SelectedFile>
      )}

      {source.ready && (
        <OptionGroup
          className="mt-5"
          label={dict.outputLabel}
          value={output}
          onChange={setOutput}
          options={[
            { id: "single", label: dict.outputSingle, hint: dict.outputSingleHint },
            { id: "separate", label: dict.outputSeparate, hint: dict.outputSeparateHint },
          ]}
        />
      )}

      {error && <ErrorText>{error}</ErrorText>}

      {source.ready && (
        <Button
          className="mt-6 w-full"
          size="lg"
          disabled={count === 0 || processing}
          onClick={handleExtract}
        >
          {processing ? <Loader2 size={18} className="animate-spin" /> : <FileOutput size={18} />}
          {processing
            ? dict.buttonBusy
            : count === 0
              ? dict.buttonNone
              : count === 1
                ? dict.buttonOne
                : t(dict.buttonPlural, { count })}
        </Button>
      )}
    </Card>
  );
}
