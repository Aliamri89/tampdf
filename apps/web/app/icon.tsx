import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getSettings } from "@/lib/get-settings";
import type { Media } from "@/payload/payload-types";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// Pre-rendered brand favicon (red rounded square, white "T"), generated via
// `sharp` ahead of time rather than `next/og`'s ImageResponse at request
// time — ImageResponse's Satori/resvg pipeline hits a libvips colourspace
// crash in this environment. Reading a static file sidesteps it entirely.
async function defaultIconBuffer(): Promise<Buffer> {
  const filePath = path.resolve(dirname, "../public/favicon-default.png");
  return readFile(filePath);
}

export default async function Icon() {
  try {
    const settings = await getSettings();
    const favicon = settings.favicon as Media | number | null | undefined;

    if (favicon && typeof favicon === "object" && favicon.filename) {
      const filePath = path.resolve(dirname, "../media-uploads", favicon.filename);
      const buffer = await readFile(filePath);
      return new Response(new Uint8Array(buffer), {
        headers: { "Content-Type": favicon.mimeType || "image/png" },
      });
    }
  } catch {
    // CMS/database unavailable or file missing — fall back to the default icon.
  }

  const buffer = await defaultIconBuffer();
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
}
