/**
 * Every key optional, recursively — but arrays stay whole (never merged
 * element-by-element), matching how `deepMerge` below treats them.
 */
export type DeepPartial<T> = T extends (infer U)[]
  ? U[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

/**
 * Merges a locale's partial translations onto the full English dictionary:
 * only the individual keys a locale actually provides override the base —
 * everything else, down to a single untranslated string deep inside an
 * otherwise-translated section, quietly keeps its English value instead of
 * the whole dictionary (or whole section) falling back.
 */
export function deepMerge<T>(base: T, override?: DeepPartial<T>): T {
  if (override === undefined) return base;
  if (Array.isArray(base)) return override as unknown as T;
  if (typeof base === "object" && base !== null) {
    const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const key of Object.keys(override as Record<string, unknown>)) {
      result[key] = deepMerge(
        (base as Record<string, unknown>)[key],
        (override as Record<string, unknown>)[key] as DeepPartial<unknown>,
      );
    }
    return result as T;
  }
  return override as unknown as T;
}
