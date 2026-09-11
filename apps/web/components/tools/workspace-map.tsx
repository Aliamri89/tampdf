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

const ImageConvertWorkspace = dynamic(
  () => import("@/components/tools/image-convert-workspace").then((m) => m.ImageConvertWorkspace),
  { loading: WorkspaceLoading, ssr: false },
);

function PngToJpgWorkspace() {
  return <ImageConvertWorkspace slug="png-to-jpg" from="png" to="jpg" />;
}
function JpgToPngWorkspace() {
  return <ImageConvertWorkspace slug="jpg-to-png" from="jpg" to="png" />;
}
function WebpToJpgWorkspace() {
  return <ImageConvertWorkspace slug="webp-to-jpg" from="webp" to="jpg" />;
}
function JpgToWebpWorkspace() {
  return <ImageConvertWorkspace slug="jpg-to-webp" from="jpg" to="webp" />;
}
function WebpToPngWorkspace() {
  return <ImageConvertWorkspace slug="webp-to-png" from="webp" to="png" />;
}
function PngToWebpWorkspace() {
  return <ImageConvertWorkspace slug="png-to-webp" from="png" to="webp" />;
}

/**
 * Each tool's workspace is loaded on demand via `next/dynamic` instead of
 * a static import. Without this, a single shared map file that eagerly
 * imports every workspace (and the heavy libraries some of them pull in —
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
  "rotate-images": dynamic(
    () =>
      import("@/components/tools/rotate-images-workspace").then((m) => m.RotateImagesWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "split-pdf": dynamic(
    () => import("@/components/tools/split-pdf-workspace").then((m) => m.SplitPdfWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "delete-pdf-pages": dynamic(
    () =>
      import("@/components/tools/delete-pdf-pages-workspace").then(
        (m) => m.DeletePdfPagesWorkspace,
      ),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "reorder-pdf-pages": dynamic(
    () =>
      import("@/components/tools/reorder-pdf-pages-workspace").then(
        (m) => m.ReorderPdfPagesWorkspace,
      ),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "crop-pdf": dynamic(
    () => import("@/components/tools/crop-pdf-workspace").then((m) => m.CropPdfWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "resize-pdf": dynamic(
    () => import("@/components/tools/resize-pdf-workspace").then((m) => m.ResizePdfWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "png-to-pdf": dynamic(
    () => import("@/components/tools/png-to-pdf-workspace").then((m) => m.PngToPdfWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "extract-pdf-pages": dynamic(
    () =>
      import("@/components/tools/extract-pdf-pages-workspace").then(
        (m) => m.ExtractPdfPagesWorkspace,
      ),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "add-page-numbers": dynamic(
    () =>
      import("@/components/tools/add-page-numbers-workspace").then(
        (m) => m.AddPageNumbersWorkspace,
      ),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "add-watermark": dynamic(
    () => import("@/components/tools/add-watermark-workspace").then((m) => m.AddWatermarkWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "remove-watermark": dynamic(
    () =>
      import("@/components/tools/remove-watermark-workspace").then(
        (m) => m.RemoveWatermarkWorkspace,
      ),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "pdf-info": dynamic(
    () => import("@/components/tools/pdf-info-workspace").then((m) => m.PdfInfoWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "edit-pdf-metadata": dynamic(
    () =>
      import("@/components/tools/edit-pdf-metadata-workspace").then(
        (m) => m.EditPdfMetadataWorkspace,
      ),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "remove-pdf-metadata": dynamic(
    () =>
      import("@/components/tools/remove-pdf-metadata-workspace").then(
        (m) => m.RemovePdfMetadataWorkspace,
      ),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "flip-pdf": dynamic(
    () => import("@/components/tools/flip-pdf-workspace").then((m) => m.FlipPdfWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "pdf-to-images": dynamic(
    () => import("@/components/tools/pdf-to-images-workspace").then((m) => m.PdfToImagesWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "images-to-pdf": dynamic(
    () => import("@/components/tools/images-to-pdf-workspace").then((m) => m.ImagesToPdfWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "png-to-jpg": PngToJpgWorkspace,
  "jpg-to-png": JpgToPngWorkspace,
  "webp-to-jpg": WebpToJpgWorkspace,
  "jpg-to-webp": JpgToWebpWorkspace,
  "webp-to-png": WebpToPngWorkspace,
  "png-to-webp": PngToWebpWorkspace,
  "resize-image": dynamic(
    () => import("@/components/tools/resize-image-workspace").then((m) => m.ResizeImageWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "flip-image": dynamic(
    () => import("@/components/tools/flip-image-workspace").then((m) => m.FlipImageWorkspace),
    { loading: WorkspaceLoading, ssr: false },
  ),
  "crop-image": dynamic(
    () => import("@/components/tools/crop-image-workspace").then((m) => m.CropImageWorkspace),
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
