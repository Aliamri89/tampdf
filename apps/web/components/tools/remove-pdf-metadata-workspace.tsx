"use client";

import { useRef, useState } from "react";
import { Loader2, ShieldOff } from "lucide-react";
import { ErrorText, LoadingLine, SelectedFile } from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { ResultPanel } from "@/components/tools/result-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDictionary } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { downloadBytes } from "@/lib/download";
import {
  METADATA_FIELDS,
  readPdfMetadata,
  stripPdfMetadata,
  type PdfMetadata,
} from "@/lib/pdf/metadata";

export function RemovePdfMetadataWorkspace() {
  const dict = useDictionary().workspace.removePdfMetadata;
  const common = useDictionary().workspace.common;
  const [file, setFile] = useState<File | null>(null);
  const [values, setValues] = useState<PdfMetadata | null>(null);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ bytes: Uint8Array; name: string } | null>(null);
  const token = useRef(0);

  function reset() {
    token.current++;
    setFile(null);
    setValues(null);
    setLoading(false);
    setProcessing(false);
    setError(null);
    setResult(null);
  }

  async function handleFile(added: File[]) {
    const next = added[0];
    if (!next) return;
    const current = ++token.current;
    setFile(next);
    setValues(null);
    setError(null);
    setLoading(true);
    try {
      const metadata = await readPdfMetadata(next);
      if (current === token.current) setValues(metadata);
    } catch {
      if (current === token.current) setError(common.readError);
    } finally {
      if (current === token.current) setLoading(false);
    }
  }

  async function handleStrip() {
    if (!file) return;
    setProcessing(true);
    setError(null);
    try {
      const bytes = await stripPdfMetadata(file);
      setResult({ bytes, name: file.name.replace(/\.pdf$/i, dict.resultSuffix) });
      trackToolUsage("remove-pdf-metadata", true);
    } catch (err) {
      setError(dict.error);
      trackToolUsage("remove-pdf-metadata", false, err);
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

  const found = values ? METADATA_FIELDS.filter((field) => values[field]) : [];

  return (
    <Card className="p-6 sm:p-8">
      {!file && <FileDropzone accept={[".pdf"]} onFilesAdded={handleFile} label={dict.dropLabel} />}

      {file && (
        <SelectedFile file={file} onRemove={reset}>
          {loading && <LoadingLine label={dict.loading} />}
        </SelectedFile>
      )}

      {values && (
        <div className="mt-5">
          {found.length > 0 ? (
            <>
              <span className="text-sm font-medium text-foreground">{dict.currentLabel}</span>
              <dl className="mt-2 overflow-hidden rounded-xl border border-border">
                {found.map((field) => (
                  <div
                    key={field}
                    className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-3 border-b border-border px-4 py-2.5 last:border-b-0"
                  >
                    <dt className="text-sm text-foreground/55">{common.metadataFields[field]}</dt>
                    <dd className="break-words text-sm font-medium text-foreground" dir="auto">
                      {values[field]}
                    </dd>
                  </div>
                ))}
              </dl>
            </>
          ) : (
            <p className="rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-foreground/60">
              {dict.noneFound}
            </p>
          )}
        </div>
      )}

      {error && <ErrorText>{error}</ErrorText>}

      {values && (
        <Button className="mt-6 w-full" size="lg" disabled={processing} onClick={handleStrip}>
          {processing ? <Loader2 size={18} className="animate-spin" /> : <ShieldOff size={18} />}
          {processing ? dict.buttonBusy : dict.button}
        </Button>
      )}
    </Card>
  );
}
