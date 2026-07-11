import { timingSafeEqual } from "node:crypto";
import multipart from "@fastify/multipart";
import Fastify from "fastify";
import { CONVERSIONS, ConversionError, convertFile, type ConversionType } from "./convert.js";

const PORT = Number(process.env.PORT || 8787);
const HOST = process.env.HOST || "0.0.0.0";
const API_KEY = process.env.WORKER_API_KEY;
const MAX_FILE_SIZE_BYTES = Number(process.env.MAX_FILE_SIZE_BYTES || 25 * 1024 * 1024);

function isValidApiKey(provided: unknown): boolean {
  if (!API_KEY) return true;
  if (typeof provided !== "string" || provided.length !== API_KEY.length) return false;
  return timingSafeEqual(Buffer.from(provided), Buffer.from(API_KEY));
}

const app = Fastify({ logger: true });

await app.register(multipart, {
  limits: {
    fileSize: MAX_FILE_SIZE_BYTES,
    files: 1,
  },
});

app.get("/health", async () => ({ status: "ok" }));

app.post<{ Params: { type: string } }>("/convert/:type", async (request, reply) => {
  if (!isValidApiKey(request.headers["x-api-key"])) {
    return reply.code(401).send({ error: "Unauthorized" });
  }

  const { type } = request.params;
  if (!(type in CONVERSIONS)) {
    return reply.code(400).send({ error: `Unknown conversion type "${type}"` });
  }

  const file = await request.file();
  if (!file) {
    return reply.code(400).send({ error: "No file provided" });
  }

  const inputBuffer = await file.toBuffer();

  try {
    const result = await convertFile(type as ConversionType, file.filename, inputBuffer);
    reply.header("Content-Type", result.contentType);
    reply.header(
      "Content-Disposition",
      `attachment; filename="${result.filename}"`,
    );
    return reply.send(result.buffer);
  } catch (err) {
    if (err instanceof ConversionError) {
      request.log.error(err);
      return reply.code(err.statusCode).send({ error: err.message });
    }
    throw err;
  }
});

app
  .listen({ port: PORT, host: HOST })
  .then(() => app.log.info(`Fileati worker listening on ${HOST}:${PORT}`))
  .catch((err) => {
    app.log.error(err);
    process.exit(1);
  });

for (const signal of ["SIGTERM", "SIGINT"] as const) {
  process.on(signal, async () => {
    app.log.info(`${signal} received, shutting down`);
    await app.close();
    process.exit(0);
  });
}
