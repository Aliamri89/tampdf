"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";

function WorkspaceLoading() {
  return (
    <Card className="flex items-center justify-center p-6 py-20 sm:p-8">
      <Loader2 size={22} className="animate-spin text-foreground/40" />
    </Card>
  );
}

/**
 * Each tool's workspace is loaded on demand via `next/dynamic` instead of
 * a static import. Without this, a single shared map file that eagerly
 * imports all 9 workspaces (and the heavy libraries some of them pull in —
 * pdfjs-dist, pdf-lib, jszip) would ship every tool's JavaScript on every
 * tool page, regardless of which one is being viewed.
 */
const workspaceMap: Record<string, ComponentType> = {
  "merge-pdf": dynamic(
    () => import("@/components/tools/merge-pdf-workspace").then((m) => m.MergePdfWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "pdf-to-jpg": dynamic(
    () => import("@/components/tools/pdf-to-jpg-workspace").then((m) => m.PdfToJpgWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "compress-pdf": dynamic(
    () => import("@/components/tools/compress-pdf-workspace").then((m) => m.CompressPdfWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "rotate-pdf": dynamic(
    () => import("@/components/tools/rotate-pdf-workspace").then((m) => m.RotatePdfWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "compress-image": dynamic(
    () =>
      import("@/components/tools/compress-image-workspace").then((m) => m.CompressImageWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "image-to-pdf": dynamic(
    () => import("@/components/tools/image-to-pdf-workspace").then((m) => m.ImageToPdfWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
};

/**
 * Looks up and renders the workspace for `slug`. The lookup itself must
 * happen inside a Client Component: indexing into a plain object exported
 * from a "use client" module from within a Server Component doesn't
 * reliably resolve to the underlying component across the RSC boundary.
 */
export function ToolWorkspace({ slug }: { slug: string }) {
  const Workspace = workspaceMap[slug];
  return Workspace ? <Workspace /> : null;
}
