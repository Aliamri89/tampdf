"use client";

import dynamic from "next/dynamic";
import { FileDropzone } from "@/components/tools/file-dropzone";
import { useDictionary } from "@/i18n/locale-context";

/** Same-sized stand-in shown while the real tool loads, so the hero doesn't shift. */
function HeroUploaderPlaceholder() {
  const dict = useDictionary();
  return (
    <FileDropzone
      variant="hero"
      accept={[".pdf"]}
      disabled
      onFilesAdded={() => {}}
      label={dict.home.hero.dropLabel}
    />
  );
}

// pdf-lib and the compressor are only needed once a file is chosen, so they
// stay out of the homepage's initial JavaScript (same approach as the tool pages).
const CompressPdfWorkspace = dynamic(
  () => import("@/components/tools/compress-pdf-workspace").then((m) => m.CompressPdfWorkspace),
  { loading: HeroUploaderPlaceholder, ssr: false },
);

/** The real Compress PDF tool, embedded at the top of the homepage. */
export function HeroUploader() {
  return <CompressPdfWorkspace variant="hero" />;
}
