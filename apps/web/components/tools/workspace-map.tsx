import type { ComponentType } from "react";
import { CompressImageWorkspace } from "@/components/tools/compress-image-workspace";
import { CompressPdfWorkspace } from "@/components/tools/compress-pdf-workspace";
import { ImageToPdfWorkspace } from "@/components/tools/image-to-pdf-workspace";
import { MergePdfWorkspace } from "@/components/tools/merge-pdf-workspace";
import { PdfToWordWorkspace } from "@/components/tools/pdf-to-word-workspace";
import { SplitPdfWorkspace } from "@/components/tools/split-pdf-workspace";
import { WordToPdfWorkspace } from "@/components/tools/word-to-pdf-workspace";

export const workspaceMap: Record<string, ComponentType> = {
  "merge-pdf": MergePdfWorkspace,
  "split-pdf": SplitPdfWorkspace,
  "compress-pdf": CompressPdfWorkspace,
  "pdf-to-word": PdfToWordWorkspace,
  "word-to-pdf": WordToPdfWorkspace,
  "compress-image": CompressImageWorkspace,
  "image-to-pdf": ImageToPdfWorkspace,
};
