"use client";

import { useEffect, useState } from "react";
import { Loader2, Stamp } from "lucide-react";
import {
  ErrorText,
  LoadingLine,
  OptionGroup,
  RangeField,
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
  addImageWatermark,
  watermarkPlacements,
  type WatermarkLayout,
} from "@/lib/pdf/watermark";
import { renderWatermarkText, type WatermarkImage } from "@/lib/pdf/watermark-image";
import { cn } from "@/lib/utils";

const COLORS = {
  gray: "#6b7280",
  red: "#dc2626",
  blue: "#2563eb",
  black: "#111111",
} as const;
type ColorKey = keyof typeof COLORS;

const ANGLES = { diagonalUp: 45, horizontal: 0, diagonalDown: -45 } as const;
type AngleKey = keyof typeof ANGLES;

const MAX_TEXT = 60;

export function AddWatermarkWorkspace() {
  const dict = useDictionary().workspace.addWatermark;
  const common = useDictionary().workspace.common;
  const source = usePdfSource("preview");
  const [text, setText] = useState("");
  const [color, setColor] = useState<ColorKey>("gray");
  const [opacity, setOpacity] = useState(30);
  const [size, setSize] = useState(60);
  const [angle, setAngle] = useState<AngleKey>("diagonalUp");
  const [layout, setLayout] = useState<WatermarkLayout>("single");
  const [image, setImage] = useState<WatermarkImage | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ bytes: Uint8Array; name: string } | null>(null);

  const trimmed = text.trim();

  // Re-render the watermark bitmap (debounced) whenever its look changes;
  // the same bitmap drives both the live preview and the final PDF.
  useEffect(() => {
    if (!trimmed) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      renderWatermarkText(trimmed, COLORS[color], getComputedStyle(document.body).fontFamily)
        .then((rendered) => !cancelled && setImage(rendered))
        .catch(() => !cancelled && setImage(null));
    }, 200);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [trimmed, color]);

  function reset() {
    source.clear();
    setProcessing(false);
    setError(null);
    setResult(null);
  }

  function changeLayout(next: WatermarkLayout) {
    setLayout(next);
    setSize(next === "tiled" ? 30 : 60);
  }

  async function handleApply() {
    const file = source.file;
    if (!file || !image || !trimmed) return;
    setProcessing(true);
    setError(null);
    try {
      const bytes = await addImageWatermark(file, image, {
        opacity: opacity / 100,
        angle: ANGLES[angle],
        size: size / 100,
        layout,
      });
      setResult({ bytes, name: file.name.replace(/\.pdf$/i, dict.resultSuffix) });
      trackToolUsage("add-watermark", true);
    } catch (err) {
      setError(dict.error);
      trackToolUsage("add-watermark", false, err);
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
  const preview = source.preview;
  const activeImage = trimmed ? image : null;
  const placements =
    preview && activeImage
      ? watermarkPlacements(preview.pageWidth, preview.pageHeight, activeImage.height / activeImage.width, {
          size: size / 100,
          layout,
        })
      : [];

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
          {preview && (
            <div className="mt-4">
              <p className="text-xs text-foreground/60">{dict.previewLabel}</p>
              <div className="mt-2 flex justify-center">
                <div className="relative inline-block overflow-hidden rounded border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local canvas-rendered data URL */}
                  <img src={preview.dataUrl} alt="" className="block max-h-[420px] w-auto" />
                  {activeImage &&
                    placements.map((placement, index) => (
                      // eslint-disable-next-line @next/next/no-img-element -- local canvas-rendered data URL
                      <img
                        key={index}
                        src={activeImage.dataUrl}
                        alt=""
                        aria-hidden
                        className="pointer-events-none absolute max-w-none"
                        style={{
                          left: `${((placement.cx - placement.width / 2) / preview.pageWidth) * 100}%`,
                          top: `${((preview.pageHeight - placement.cy - placement.height / 2) / preview.pageHeight) * 100}%`,
                          width: `${(placement.width / preview.pageWidth) * 100}%`,
                          transform: `rotate(${-ANGLES[angle]}deg)`,
                          opacity: opacity / 100,
                        }}
                      />
                    ))}
                </div>
              </div>
            </div>
          )}
        </SelectedFile>
      )}

      {source.ready && (
        <div className="mt-5 space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-foreground">{dict.textLabel}</span>
            <input
              type="text"
              value={text}
              maxLength={MAX_TEXT}
              onChange={(e) => setText(e.target.value)}
              placeholder={dict.textPlaceholder}
              className={cn(inputClass, "mt-1.5")}
            />
          </label>

          <div>
            <span className="text-sm font-medium text-foreground">{dict.colorLabel}</span>
            <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label={dict.colorLabel}>
              {(Object.keys(COLORS) as ColorKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="radio"
                  aria-checked={color === key}
                  onClick={() => setColor(key)}
                  className={cn(
                    "flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors",
                    color === key
                      ? "border-brand-400 bg-brand-50 text-foreground dark:bg-brand-500/10"
                      : "border-border bg-surface text-foreground/70 hover:border-brand-200",
                  )}
                >
                  <span className="h-4 w-4 rounded-full" style={{ backgroundColor: COLORS[key] }} />
                  {dict.colors[key]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <RangeField
              label={dict.opacityLabel}
              value={opacity}
              min={10}
              max={90}
              step={5}
              display={`${opacity}%`}
              onChange={setOpacity}
            />
            <RangeField
              label={dict.sizeLabel}
              value={size}
              min={15}
              max={95}
              step={5}
              display={`${size}%`}
              onChange={setSize}
            />
          </div>

          <OptionGroup
            label={dict.angleLabel}
            value={angle}
            onChange={setAngle}
            options={[
              { id: "diagonalUp", label: dict.angleDiagonalUp },
              { id: "horizontal", label: dict.angleHorizontal },
              { id: "diagonalDown", label: dict.angleDiagonalDown },
            ]}
          />

          <OptionGroup
            label={dict.layoutLabel}
            value={layout}
            onChange={changeLayout}
            options={[
              { id: "single", label: dict.layoutSingle },
              { id: "tiled", label: dict.layoutTiled },
            ]}
          />
        </div>
      )}

      {error && <ErrorText>{error}</ErrorText>}
      {source.ready && !trimmed && (
        <p className="mt-4 text-xs text-foreground/50">{dict.emptyText}</p>
      )}

      {source.ready && (
        <Button
          className="mt-6 w-full"
          size="lg"
          disabled={!trimmed || !image || processing}
          onClick={handleApply}
        >
          {processing ? <Loader2 size={18} className="animate-spin" /> : <Stamp size={18} />}
          {processing ? dict.buttonBusy : dict.button}
        </Button>
      )}
    </Card>
  );
}
