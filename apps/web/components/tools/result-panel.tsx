"use client";

import { CheckCircle2, Download, Loader2, RotateCcw, Share2, Trash2 } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { DropboxIcon, GoogleDriveIcon } from "@/components/tools/cloud-icons";
import { Button } from "@/components/ui/button";
import { useDictionary } from "@/i18n/locale-context";
import { CloudCancelledError, DROPBOX_APP_KEY, GOOGLE_CLIENT_ID } from "@/lib/cloud/config";
import { saveToDropbox } from "@/lib/cloud/dropbox";
import { loadGoogleIdentity, saveToGoogleDrive } from "@/lib/cloud/google-drive";
import { formatBytes } from "@/lib/utils";

interface ResultPanelProps {
  filename: string;
  size: number;
  originalSize?: number;
  onDownload: () => void;
  onReset: () => void;
  /** The result file's bytes, used by Share and the cloud-save buttons. */
  getBlob: () => Blob | Promise<Blob>;
}

type Busy = "drive" | "dropbox" | "share" | null;
type Notice = { kind: "ok" | "error"; text: string } | null;

function subscribeNothing() {
  return () => {};
}

/** True when this browser can share files (Web Share API level 2: mobile browsers, Safari, Edge/Chrome on Windows & ChromeOS). */
function canShareFilesNow(): boolean {
  try {
    return (
      typeof navigator !== "undefined" &&
      typeof navigator.share === "function" &&
      typeof navigator.canShare === "function" &&
      navigator.canShare({ files: [new File([""], "file.pdf", { type: "application/pdf" })] })
    );
  } catch {
    return false;
  }
}

export function ResultPanel({
  filename,
  size,
  originalSize,
  onDownload,
  onReset,
  getBlob,
}: ResultPanelProps) {
  const dict = useDictionary();
  const rootRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState<Busy>(null);
  const [notice, setNotice] = useState<Notice>(null);
  const canShare = useSyncExternalStore(subscribeNothing, canShareFilesNow, () => false);
  const hasDrive = GOOGLE_CLIENT_ID !== "";
  const hasDropbox = DROPBOX_APP_KEY !== "";

  // The tool's form is replaced by this panel, which shortens the page. If the
  // visitor had scrolled down to the action button, the browser would keep that
  // scroll offset and show content far below the result. Bring the panel into
  // view (instantly, no smooth-scroll animation) only when it is off screen.
  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    const { top } = el.getBoundingClientRect();
    if (top < headerHeight || top > window.innerHeight - 80) {
      el.scrollIntoView({ block: "start", behavior: "instant" });
    }
  }, []);

  // Load Google's sign-in script ahead of time so the popup opens straight from the click.
  useEffect(() => {
    if (hasDrive) loadGoogleIdentity().catch(() => {});
  }, [hasDrive]);

  const hasComparison = Boolean(originalSize && originalSize > 0);
  const savedPercent = hasComparison
    ? Math.max(0, Math.round((1 - size / originalSize!) * 100))
    : null;
  const savedBytes = hasComparison ? Math.max(0, originalSize! - size) : null;

  async function run(kind: Exclude<Busy, null>, okText: string, action: (blob: Blob) => Promise<void>) {
    if (busy) return;
    setBusy(kind);
    setNotice(null);
    try {
      await action(await getBlob());
      if (okText) setNotice({ kind: "ok", text: okText });
    } catch (error) {
      const dismissed =
        error instanceof CloudCancelledError || (error instanceof DOMException && error.name === "AbortError");
      if (!dismissed) setNotice({ kind: "error", text: dict.result.saveFailed });
    } finally {
      setBusy(null);
    }
  }

  function share() {
    return run("share", "", async (blob) => {
      const file = new File([blob], filename, { type: blob.type || "application/octet-stream" });
      await navigator.share({ files: [file], title: filename });
    });
  }

  const showCloud = hasDrive || hasDropbox;

  return (
    <div
      ref={rootRef}
      className="flex scroll-mt-24 flex-col items-center gap-4 rounded-2xl border border-border bg-surface-muted px-6 py-10 text-center"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-600">
        <CheckCircle2 size={28} />
      </span>
      <div>
        <p className="font-medium text-foreground">{dict.result.ready}</p>
        <p className="mt-1 text-base text-foreground/50" dir="ltr">
          {filename}
          {!hasComparison && <> &middot; {formatBytes(size)}</>}
        </p>
      </div>

      {hasComparison && (
        <div className="grid w-full max-w-xl grid-cols-2 gap-2.5 sm:grid-cols-4">
          <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
            <p className="text-xs text-foreground/50">{dict.result.originalSize}</p>
            <p className="mt-0.5 text-base font-semibold text-foreground" dir="ltr">
              {formatBytes(originalSize!)}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
            <p className="text-xs text-foreground/50">{dict.result.newSize}</p>
            <p className="mt-0.5 text-base font-semibold text-foreground" dir="ltr">
              {formatBytes(size)}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
            <p className="text-xs text-foreground/50">{dict.result.reducedBy}</p>
            <p className="mt-0.5 text-base font-semibold text-green-600" dir="ltr">
              {savedPercent}%
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
            <p className="text-xs text-foreground/50">{dict.result.spaceSaved}</p>
            <p className="mt-0.5 text-base font-semibold text-green-600" dir="ltr">
              {formatBytes(savedBytes!)}
            </p>
          </div>
        </div>
      )}

      {hasComparison && savedPercent! < 5 && (
        <p className="max-w-sm text-base text-foreground/60">{dict.result.alreadyOptimized}</p>
      )}

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button onClick={onDownload}>
          <Download size={16} />
          {dict.result.download}
        </Button>
        <Button variant="secondary" onClick={onReset}>
          <RotateCcw size={16} />
          {dict.result.startOver}
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {canShare && (
          <Button variant="secondary" size="sm" disabled={busy !== null} onClick={share}>
            {busy === "share" ? <Loader2 size={15} className="animate-spin" /> : <Share2 size={15} />}
            {dict.result.share}
          </Button>
        )}
        {showCloud && hasDrive && (
          <Button
            variant="secondary"
            size="sm"
            disabled={busy !== null}
            onClick={() => run("drive", dict.result.savedToDrive, (blob) => saveToGoogleDrive(blob, filename))}
          >
            {busy === "drive" ? <Loader2 size={15} className="animate-spin" /> : <GoogleDriveIcon size={15} />}
            {busy === "drive" ? dict.result.saving : dict.result.saveToDrive}
          </Button>
        )}
        {showCloud && hasDropbox && (
          <Button
            variant="secondary"
            size="sm"
            disabled={busy !== null}
            onClick={() => run("dropbox", dict.result.savedToDropbox, (blob) => saveToDropbox(blob, filename))}
          >
            {busy === "dropbox" ? <Loader2 size={15} className="animate-spin" /> : <DropboxIcon size={15} />}
            {busy === "dropbox" ? dict.result.saving : dict.result.saveToDropbox}
          </Button>
        )}
        <Button
          variant="secondary"
          size="sm"
          disabled={busy !== null}
          onClick={onReset}
          className="text-red-600 hover:border-red-300 hover:bg-red-500/10"
        >
          <Trash2 size={15} />
          {dict.result.delete}
        </Button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={
          notice
            ? notice.kind === "ok"
              ? "text-base text-green-600"
              : "text-base text-red-600"
            : "sr-only"
        }
      >
        {notice?.text}
      </p>
    </div>
  );
}
