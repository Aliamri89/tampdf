/**
 * Like `Promise.all(items.map(fn))` but runs at most `limit` calls at once, so
 * decoding many large images does not hold them all in memory together.
 * Results keep the order of `items`; the first rejection rejects the whole call.
 */
export async function mapWithConcurrency<T, R>(
  items: readonly T[],
  limit: number,
  fn: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const index = next++;
      results[index] = await fn(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

/**
 * Returns a wrapper that lets at most `limit` wrapped calls run at once; the
 * rest wait their turn in order. Used for previews, so adding many files at
 * once does not start dozens of decodes together (slow, and heavy on memory).
 */
export function createLimiter(limit: number) {
  let active = 0;
  const waiting: (() => void)[] = [];
  return async function run<T>(task: () => Promise<T>): Promise<T> {
    if (active >= limit) await new Promise<void>((resolve) => waiting.push(resolve));
    active++;
    try {
      return await task();
    } finally {
      active--;
      waiting.shift()?.();
    }
  };
}
