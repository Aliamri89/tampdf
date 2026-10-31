/** zlib (RFC 1950) helpers — the format of PDF's FlateDecode and PNG's IDAT. */

async function pipe(data: Uint8Array, transform: CompressionStream | DecompressionStream): Promise<Uint8Array> {
  const stream = new Blob([new Uint8Array(data)]).stream().pipeThrough(transform);
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

export function deflate(data: Uint8Array): Promise<Uint8Array> {
  return pipe(data, new CompressionStream("deflate"));
}

export function inflate(data: Uint8Array): Promise<Uint8Array> {
  return pipe(data, new DecompressionStream("deflate"));
}
