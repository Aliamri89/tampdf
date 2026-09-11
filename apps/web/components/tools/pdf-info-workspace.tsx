"use client";

import { useRef, useState } from "react";
import { FileSearch, RotateCcw } from "lucide-react";
import { ErrorText, LoadingLine } from "@/components/tools/controls";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t } from "@/i18n/format";
import { useDictionary, useLocale } from "@/i18n/locale-context";
import { trackToolUsage } from "@/lib/analytics";
import { getPdfInfo, type PdfInfo } from "@/lib/pdf/info";
import { isPdfPasswordError } from "@/lib/pdf/render";
import { formatBytes } from "@/lib/utils";

const POINTS_TO_MM = 25.4 / 72;

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-3 border-b border-border px-4 py-2.5 last:border-b-0">
      <dt className="text-sm text-foreground/55">{label}</dt>
      <dd className="break-words text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-5">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <dl className="mt-2 overflow-hidden rounded-xl border border-border bg-surface">{children}</dl>
    </section>
  );
}

export function PdfInfoWorkspace() {
  const dict = useDictionary().workspace.pdfInfo;
  const common = useDictionary().workspace.common;
  const locale = useLocale();
  const [file, setFile] = useState<File | null>(null);
  const [info, setInfo] = useState<PdfInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const token = useRef(0);

  function reset() {
    token.current++;
    setFile(null);
    setInfo(null);
    setLoading(false);
    setError(null);
  }

  async function handleFile(added: File[]) {
    const next = added[0];
    if (!next) return;
    const current = ++token.current;
    setFile(next);
    setInfo(null);
    setError(null);
    setLoading(true);
    try {
      const result = await getPdfInfo(next);
      if (current !== token.current) return;
      setInfo(result);
      trackToolUsage("pdf-info", true);
    } catch (err) {
      if (current !== token.current) return;
      setError(isPdfPasswordError(err) ? common.passwordError : common.readError);
      trackToolUsage("pdf-info", false, err);
    } finally {
      if (current === token.current) setLoading(false);
    }
  }

  const dateFormat = new Intl.DateTimeFormat(locale === "ar" ? "ar" : "en", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const text = (value: string) => value || dict.notSet;
  const date = (value: Date | null) => (value ? dateFormat.format(value) : dict.notSet);
  const yesNo = (value: boolean) => (value ? dict.yes : dict.no);

  if (!file) {
    return (
      <Card className="p-6 sm:p-8">
        <FileDropzone accept={[".pdf"]} onFilesAdded={handleFile} label={dict.dropLabel} />
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface-muted p-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10">
          <FileSearch size={20} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground" dir="auto">
            {file.name}
          </p>
          <p className="text-xs text-foreground/50" dir="ltr">
            {formatBytes(file.size)}
          </p>
        </div>
      </div>

      {loading && <LoadingLine label={dict.reading} />}
      {error && <ErrorText>{error}</ErrorText>}

      {info && (
        <>
          <Section title={dict.sectionDocument}>
            <Row label={dict.pages} value={String(info.pageCount)} />
            <Row label={dict.version} value={info.version ? `PDF ${info.version}` : dict.notSet} />
            <Row label={dict.fileSize} value={formatBytes(file.size)} />
            <Row label={dict.encrypted} value={yesNo(info.encrypted)} />
            <Row label={dict.forms} value={yesNo(info.hasForms)} />
            <Row label={dict.linearized} value={yesNo(info.linearized)} />
          </Section>

          <Section title={dict.sectionMetadata}>
            <Row label={common.metadataFields.title} value={text(info.title)} />
            <Row label={common.metadataFields.author} value={text(info.author)} />
            <Row label={common.metadataFields.subject} value={text(info.subject)} />
            <Row label={common.metadataFields.keywords} value={text(info.keywords)} />
            <Row label={common.metadataFields.creator} value={text(info.creator)} />
            <Row label={common.metadataFields.producer} value={text(info.producer)} />
            <Row label={dict.created} value={date(info.created)} />
            <Row label={dict.modified} value={date(info.modified)} />
          </Section>

          <Section title={dict.sectionPages}>
            {info.pageSizes.map((group) => {
              const mm = `${Math.round(group.width * POINTS_TO_MM)} × ${Math.round(group.height * POINTS_TO_MM)} mm`;
              return (
                <Row
                  key={`${group.width}x${group.height}`}
                  label={group.paper ? `${group.paper} · ${mm}` : mm}
                  value={t(dict.pagesCount, { count: group.count })}
                />
              );
            })}
          </Section>
          {info.sampledPages < info.pageCount && (
            <p className="mt-2 text-xs text-foreground/50">
              {t(dict.sampledNote, { count: info.sampledPages })}
            </p>
          )}
        </>
      )}

      <Button variant="secondary" className="mt-6 w-full" size="lg" onClick={reset}>
        <RotateCcw size={16} />
        {dict.checkAnother}
      </Button>
    </Card>
  );
}
