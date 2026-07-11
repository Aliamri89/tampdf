export interface ServerConversionResult {
  blob: Blob;
  filename: string;
}

export async function convertOnServer(
  type: "pdf-to-word" | "word-to-pdf",
  file: File,
): Promise<ServerConversionResult> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`/api/convert/${type}`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.error || `Conversion failed (${response.status})`);
  }

  const disposition = response.headers.get("Content-Disposition") || "";
  const match = disposition.match(/filename="?([^";]+)"?/);
  const filename = match?.[1] || "converted-file";

  const blob = await response.blob();
  return { blob, filename };
}
