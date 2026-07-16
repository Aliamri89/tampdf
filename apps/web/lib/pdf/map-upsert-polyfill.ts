/**
 * pdfjs-dist 6.1.200 calls Map/WeakMap.prototype.getOrInsert(Computed)
 * directly, with no feature check or fallback — these are TC39 "Upsert"
 * proposal methods that only shipped in Safari 18.4 (March 2025). Any
 * iPhone on an older iOS throws "X.getOrInsertComputed is not a function"
 * the moment pdf.js touches one of its internal caches — confirmed by
 * capturing the real production exception, then finding the exact call
 * site (WorkerTransport#cacheSimpleMethod) in node_modules/pdfjs-dist.
 *
 * Spec-compliant per https://tc39.es/proposal-upsert/: getOrInsert(key,
 * value) sets `value` for `key` only if absent; getOrInsertComputed(key,
 * fn) does the same but computes the value lazily via `fn(key)`. Guarded
 * per-method so this is a no-op on browsers that already support them.
 */
export function installMapUpsertPolyfill(target: typeof Map | typeof WeakMap): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- patching methods pre-dating this codebase's TS lib version
  const proto = target.prototype as any;
  if (typeof proto.getOrInsert !== "function") {
    proto.getOrInsert = function (key: unknown, value: unknown) {
      if (!this.has(key)) this.set(key, value);
      return this.get(key);
    };
  }
  if (typeof proto.getOrInsertComputed !== "function") {
    proto.getOrInsertComputed = function (key: unknown, callbackfn: (key: unknown) => unknown) {
      if (!this.has(key)) this.set(key, callbackfn(key));
      return this.get(key);
    };
  }
}
