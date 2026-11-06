import JSZip from "jszip";

export const DOCX_MIME = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

export function isDocx(file: File): boolean {
  return file.type === DOCX_MIME || /\.docx$/i.test(file.name);
}

export interface RemoveDocxWatermarkResult {
  blob: Blob;
  /** Watermarks removed across all headers/footers. */
  removed: number;
}

/** Word names its watermark shapes like this (text and picture watermarks, Insert ▸ Watermark). */
const WATERMARK_NAME = /^(PowerPlusWaterMarkObject|WordPictureWatermark)/i;

function ancestor(node: Element, localName: string): Element | null {
  for (let parent = node.parentElement; parent; parent = parent.parentElement) {
    if (parent.localName === localName) return parent;
  }
  return null;
}

/** Removes `run` when nothing but its properties is left in it. */
function dropRunIfEmpty(run: Element | null): void {
  if (!run || run.localName !== "r") return;
  const hasContent = Array.from(run.children).some((child) => child.localName !== "rPr");
  if (!hasContent) run.remove();
}

/**
 * Removes Word's built-in watermarks (VML `PowerPlusWaterMarkObject` /
 * `WordPictureWatermark` shapes, plus the DrawingML equivalent) from one
 * header/footer part. Returns the new XML and how many were removed; the XML
 * is returned untouched when it can't be parsed or has none.
 */
export function stripDocxWatermarks(xml: string): { xml: string; count: number } {
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  if (doc.getElementsByTagName("parsererror").length > 0) return { xml, count: 0 };

  let count = 0;
  const all = Array.from(doc.getElementsByTagName("*"));

  for (const element of all) {
    if (!element.isConnected && !doc.contains(element)) continue;
    const isVml = element.localName === "shape" && WATERMARK_NAME.test(element.getAttribute("id") ?? "");
    const isDrawing =
      element.localName === "docPr" && WATERMARK_NAME.test(element.getAttribute("name") ?? "");
    if (!isVml && !isDrawing) continue;

    const container = isVml
      ? ancestor(element, "pict")
      : (ancestor(element, "AlternateContent") ?? ancestor(element, "drawing"));
    if (!container) continue;
    const run = container.parentElement;
    container.remove();
    dropRunIfEmpty(run);
    count++;
  }

  if (count === 0) return { xml, count: 0 };
  return { xml: new XMLSerializer().serializeToString(doc), count };
}

/** Removes every Word watermark from a .docx (a ZIP of XML parts) entirely in the browser. */
export async function removeDocxWatermarks(file: File): Promise<RemoveDocxWatermarkResult> {
  const zip = await JSZip.loadAsync(await file.arrayBuffer());
  let removed = 0;

  const parts = Object.keys(zip.files).filter((name) => /^word\/(header|footer)\d*\.xml$/i.test(name));
  for (const name of parts) {
    const entry = zip.file(name);
    if (!entry) continue;
    const result = stripDocxWatermarks(await entry.async("string"));
    if (result.count > 0) {
      zip.file(name, result.xml);
      removed += result.count;
    }
  }

  if (removed === 0) return { blob: file, removed: 0 };
  const blob = await zip.generateAsync({
    type: "blob",
    mimeType: DOCX_MIME,
    compression: "DEFLATE",
  });
  return { blob, removed };
}
