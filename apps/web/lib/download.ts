export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadBytes(
  bytes: Uint8Array,
  filename: string,
  mimeType: string = "application/octet-stream",
) {
  downloadBlob(new Blob([new Uint8Array(bytes)], { type: mimeType }), filename);
}
