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
import { t } from "@/i18n/format";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBlob } from "@/lib/download";
import {
  WATERMARK_IMAGE_EXTENSIONS,
  addWatermarkToImage,
  isWatermarkableImage,
} from "@/lib/image/watermark";
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
  const [imageSource, setImageSource] = useState<{
    file: File;
    url: string;
    width: number;
    height: number;
  } | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; name: string } | null>(null);

  const imageUrl = imageSource?.url;
  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

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

  async function handleFileAdded(added: File) {
    setError(null);
    if (!isWatermarkableImage(added)) {
      setImageSource(null);
      void source.load(added);
      return;
    }
    try {
      const bitmap = await createImageBitmap(added);
      const { width, height } = bitmap;
      bitmap.close();
      source.clear();
      setImageSource({ file: added, url: URL.createObjectURL(added), width, height });
    } catch {
      setError(common.imageReadError);
    }
  }

  function reset() {
    source.clear();
    setImageSource(null);
    setProcessing(false);
    setError(null);
    setResult(null);
  }

  function changeLayout(next: WatermarkLayout) {
    setLayout(next);
    setSize(next === "tiled" ? 30 : 60);
  }

  async function handleApply() {
    const file = imageSource?.file ?? source.file;
    if (!file || !image || !trimmed) return;
    setProcessing(true);
    setError(null);
    try {
      const options = {
        opacity: opacity / 100,
        angle: ANGLES[angle],
        size: size / 100,
        layout,
      };
      if (imageSource) {
        const out = await addWatermarkToImage(file, image, options);
        const suffix = dict.resultSuffix.replace(/\.pdf$/i, "");
        setResult({
          blob: out.blob,
          name: `${file.name.replace(/\.[^.]+$/, "")}${suffix}${out.extension}`,
        });
      } else {
        const bytes = await addImageWatermark(file, image, options);
        setResult({
          blob: new Blob([new Uint8Array(bytes)], { type: "application/pdf" }),
          name: file.name.replace(/\.pdf$/i, dict.resultSuffix),
        });
      }
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
      <div>
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

  const file = imageSource?.file ?? source.file;
  const ready = imageSource !== null || source.ready;
  const preview = imageSource
    ? { dataUrl: imageSource.url, pageWidth: imageSource.width, pageHeight: imageSource.height }
    : source.preview;
  const activeImage = trimmed ? image : null;
  const placements =
    preview && activeImage
      ? watermarkPlacements(preview.pageWidth, preview.pageHeight, activeImage.height / activeImage.width, {
          size: size / 100,
          layout,
        })
      : [];

  return (
    <div>
      {!file && (
        <>
          <FileDropzone
            accept={[".pdf", ...WATERMARK_IMAGE_EXTENSIONS]}
            onFilesAdded={(added) => added[0] && void handleFileAdded(added[0])}
            label={dict.dropLabel}
          />
          <p className="mt-3 text-center text-sm text-foreground/55">{dict.formatsNote}</p>
        </>
      )}

      {file && (
        <SelectedFile
          file={file}
          detail={
            imageSource
              ? `${imageSource.width}×${imageSource.height}`
              : source.pageCount
                ? t(common.pageCount, { count: source.pageCount })
                : undefined
          }
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
              <p className="text-sm text-foreground/60">
                {imageSource ? dict.previewLabelImage : dict.previewLabel}
              </p>
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

      {ready && (
        <div className="mt-5 space-y-5">
          <label className="block">
            <span className="text-base font-medium text-foreground">{dict.textLabel}</span>
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
            <span className="text-base font-medium text-foreground">{dict.colorLabel}</span>
            <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label={dict.colorLabel}>
              {(Object.keys(COLORS) as ColorKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="radio"
                  aria-checked={color === key}
                  onClick={() => setColor(key)}
                  className={cn(
                    "flex items-center gap-2 rounded-xl border px-3 py-2 text-base transition-colors",
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
      {ready && !trimmed && (
        <p className="mt-4 text-sm text-foreground/50">{dict.emptyText}</p>
      )}

      {ready && (
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
    </div>
  );
}
