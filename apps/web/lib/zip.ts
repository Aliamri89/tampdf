import JSZip from "jszip";

export async function zipFiles(
  files: { name: string; data: Uint8Array | Blob }[],
): Promise<Blob> {
  const zip = new JSZip();
  for (const file of files) {
    zip.file(file.name, file.data);
  }
  return zip.generateAsync({ type: "blob" });
}
