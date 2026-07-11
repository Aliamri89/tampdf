import { NextResponse } from "next/server";

export const runtime = "nodejs";

const ALLOWED_TYPES = new Set(["pdf-to-word", "word-to-pdf"]);
const MAX_FILE_SIZE_BYTES = 25 * 1024 * 1024;

export async function POST(
  request: Request,
  context: { params: Promise<{ type: string }> },
) {
  const { type } = await context.params;

  if (!ALLOWED_TYPES.has(type)) {
    return NextResponse.json({ error: `Unknown conversion type "${type}"` }, { status: 400 });
  }

  const workerUrl = process.env.WORKER_URL;
  if (!workerUrl) {
    return NextResponse.json(
      { error: "Document conversion is temporarily unavailable." },
      { status: 503 },
    );
  }

  const incomingFormData = await request.formData();
  const file = incomingFormData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return NextResponse.json({ error: "File is too large (max 25 MB)" }, { status: 413 });
  }

  const outgoingFormData = new FormData();
  outgoingFormData.append("file", file, file.name);

  let workerResponse: Response;
  try {
    workerResponse = await fetch(`${workerUrl}/convert/${type}`, {
      method: "POST",
      body: outgoingFormData,
      headers: process.env.WORKER_API_KEY
        ? { "x-api-key": process.env.WORKER_API_KEY }
        : undefined,
      signal: AbortSignal.timeout(100_000),
    });
  } catch {
    return NextResponse.json(
      { error: "Conversion service is unreachable. Please try again shortly." },
      { status: 502 },
    );
  }

  if (!workerResponse.ok) {
    const body = await workerResponse.json().catch(() => null);
    return NextResponse.json(
      { error: body?.error || "Conversion failed" },
      { status: workerResponse.status },
    );
  }

  const resultBuffer = await workerResponse.arrayBuffer();

  return new NextResponse(resultBuffer, {
    status: 200,
    headers: {
      "Content-Type":
        workerResponse.headers.get("Content-Type") || "application/octet-stream",
      "Content-Disposition":
        workerResponse.headers.get("Content-Disposition") || "attachment",
    },
  });
}
