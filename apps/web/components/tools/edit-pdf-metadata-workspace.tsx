"use client";

import { useRef, useState } from "react";
import { FilePen, Loader2 } from "lucide-react";
import { ErrorText, LoadingLine, SelectedFile, inputClass } from "@/components/tools/controls";
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
  writePdfMetadata,
  type PdfMetadata,
} from "@/lib/pdf/metadata";
import { cn } from "@/lib/utils";

export function EditPdfMetadataWorkspace() {
  const dict = useDictionary().workspace.editPdfMetadata;
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

  async function handleSave() {
    if (!file || !values) return;
    setProcessing(true);
    setError(null);
    try {
      const bytes = await writePdfMetadata(file, values);
      setResult({ bytes, name: file.name.replace(/\.pdf$/i, dict.resultSuffix) });
      trackToolUsage("edit-pdf-metadata", true);
    } catch (err) {
      setError(dict.error);
      trackToolUsage("edit-pdf-metadata", false, err);
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
          <p className="text-sm text-foreground/60">{dict.intro}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {METADATA_FIELDS.map((field) => (
              <label key={field} className={cn("block", field === "subject" && "sm:col-span-2")}>
                <span className="text-sm font-medium text-foreground">
                  {common.metadataFields[field]}
                </span>
                <input
                  type="text"
                  dir="auto"
                  value={values[field]}
                  maxLength={500}
                  onChange={(e) =>
                    setValues((prev) => (prev ? { ...prev, [field]: e.target.value } : prev))
                  }
                  className={cn(inputClass, "mt-1.5")}
                />
                {field === "keywords" && (
                  <span className="mt-1 block text-xs text-foreground/50">{dict.keywordsHint}</span>
                )}
              </label>
            ))}
          </div>
        </div>
      )}

      {error && <ErrorText>{error}</ErrorText>}

      {values && (
        <Button className="mt-6 w-full" size="lg" disabled={processing} onClick={handleSave}>
          {processing ? <Loader2 size={18} className="animate-spin" /> : <FilePen size={18} />}
          {processing ? dict.buttonBusy : dict.button}
        </Button>
      )}
    </Card>
  );
}
