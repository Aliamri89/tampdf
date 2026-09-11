"use client";

import { useState } from "react";
import { ListOrdered, Loader2 } from "lucide-react";
import {
  ErrorText,
  LoadingLine,
  OptionGroup,
  SelectedFile,
  inputClass,
} from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { usePdfSource } from "@/components/tools/use-pdf-source";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBytes } from "@/lib/download";
import {
  addPageNumbers,
  formatPageNumber,
  type PageNumberFormat,
  type PageNumberPosition,
} from "@/lib/pdf/page-numbers";
import { cn } from "@/lib/utils";

const POSITIONS: PageNumberPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];
const FORMATS: PageNumberFormat[] = ["n", "n-of-total", "page-n", "page-n-of-total", "dash-n"];
const FONT_SIZES = { small: 9, medium: 11, large: 14 } as const;
type FontSize = keyof typeof FONT_SIZES;

export function AddPageNumbersWorkspace() {
  const dict = useDictionary().workspace.addPageNumbers;
  const common = useDictionary().workspace.common;
  const source = usePdfSource("count");
  const [position, setPosition] = useState<PageNumberPosition>("bottom-center");
  const [format, setFormat] = useState<PageNumberFormat>("n");
  const [fontSize, setFontSize] = useState<FontSize>("medium");
  const [startAt, setStartAt] = useState(1);
  const [skipFirst, setSkipFirst] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ bytes: Uint8Array; name: string } | null>(null);

  function reset() {
    source.clear();
    setProcessing(false);
    setError(null);
    setResult(null);
  }

  async function handleNumber() {
    const file = source.file;
    if (!file) return;
    setProcessing(true);
    setError(null);
    try {
      const bytes = await addPageNumbers(file, {
        position,
        format,
        startAt,
        fontSize: FONT_SIZES[fontSize],
        skipFirstPage: skipFirst,
      });
      setResult({ bytes, name: file.name.replace(/\.pdf$/i, dict.resultSuffix) });
      trackToolUsage("add-page-numbers", true);
    } catch (err) {
      setError(dict.error);
      trackToolUsage("add-page-numbers", false, err);
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
  const total = Math.max(1, startAt + source.pageCount - (skipFirst ? 2 : 1));

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
        </SelectedFile>
      )}

      {source.ready && (
        <div className="mt-5 grid gap-6 sm:grid-cols-[auto_1fr]">
          <div>
            <span className="text-sm font-medium text-foreground">{dict.positionLabel}</span>
            {/* Positions are physical page corners, so the picker is always laid out left-to-right. */}
            <div
              dir="ltr"
              role="radiogroup"
              aria-label={dict.positionLabel}
              className="relative mx-auto mt-2 aspect-[3/4] w-40 rounded-lg border border-border bg-surface-muted shadow-inner"
            >
              <div className="absolute inset-x-5 top-10 space-y-2" aria-hidden>
                <div className="h-1.5 w-3/4 rounded bg-foreground/10" />
                <div className="h-1.5 w-full rounded bg-foreground/10" />
                <div className="h-1.5 w-5/6 rounded bg-foreground/10" />
                <div className="h-1.5 w-2/3 rounded bg-foreground/10" />
              </div>
              {POSITIONS.map((spot) => {
                const [vertical, horizontal] = spot.split("-");
                return (
                  <button
                    key={spot}
                    type="button"
                    role="radio"
                    aria-checked={position === spot}
                    aria-label={dict.positions[spot]}
                    title={dict.positions[spot]}
                    onClick={() => setPosition(spot)}
                    className={cn(
                      "absolute flex h-7 w-7 items-center justify-center rounded-md text-[11px] font-semibold transition-colors",
                      vertical === "top" ? "top-1.5" : "bottom-1.5",
                      horizontal === "left"
                        ? "left-1.5"
                        : horizontal === "right"
                          ? "right-1.5"
                          : "left-1/2 -translate-x-1/2",
                      position === spot
                        ? "bg-brand-500 text-white shadow-sm"
                        : "border border-dashed border-foreground/25 text-foreground/40 hover:border-brand-400 hover:text-brand-600",
                    )}
                  >
                    1
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-foreground">{dict.formatLabel}</span>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value as PageNumberFormat)}
                className={cn(inputClass, "mt-1.5")}
                dir="ltr"
              >
                {FORMATS.map((option) => (
                  <option key={option} value={option}>
                    {formatPageNumber(option, startAt, total)}
                  </option>
                ))}
              </select>
              <span className="mt-1 block text-xs text-foreground/50">{dict.formatHint}</span>
            </label>

            <OptionGroup
              label={dict.fontSizeLabel}
              value={fontSize}
              onChange={setFontSize}
              options={[
                { id: "small", label: dict.sizeSmall },
                { id: "medium", label: dict.sizeMedium },
                { id: "large", label: dict.sizeLarge },
              ]}
            />

            <label className="block">
              <span className="text-sm font-medium text-foreground">{dict.startLabel}</span>
              <input
                type="number"
                min={0}
                max={9999}
                dir="ltr"
                value={startAt}
                onChange={(e) => setStartAt(Math.min(9999, Math.max(0, Number(e.target.value) || 0)))}
                className={cn(inputClass, "mt-1.5 w-28")}
              />
            </label>

            <label className="flex items-center gap-2.5 text-sm text-foreground/80">
              <input
                type="checkbox"
                checked={skipFirst}
                onChange={(e) => setSkipFirst(e.target.checked)}
                className="h-4 w-4 accent-brand-500"
              />
              {dict.skipFirst}
            </label>
          </div>
        </div>
      )}

      {error && <ErrorText>{error}</ErrorText>}

      {source.ready && (
        <Button className="mt-6 w-full" size="lg" disabled={processing} onClick={handleNumber}>
          {processing ? <Loader2 size={18} className="animate-spin" /> : <ListOrdered size={18} />}
          {processing ? dict.buttonBusy : dict.button}
        </Button>
      )}
    </Card>
  );
}
