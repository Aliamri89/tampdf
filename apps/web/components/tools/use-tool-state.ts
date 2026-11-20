"use client";

import { useCallback, useState, type Dispatch, type SetStateAction } from "react";

/**
 * Tool state that survives moving around the site.
 *
 * Works like `useState`, but every value is also kept in a module-level store
 * under `key`, so when the visitor leaves a tool page (a link, the back
 * button) and comes back, the workspace starts again from where they left
 * it: the same files, options, selections and results. Work that finishes
 * while the page is closed (e.g. a conversion still running) is stored too.
 *
 * The store lives only in this browser tab's memory: nothing is written to
 * disk or sent anywhere, and a reload or closing the tab clears it. A tool's
 * state ends when the visitor resets it or removes the files themselves,
 * which simply stores the empty values again.
 */
const store = new Map<string, unknown>();

function resolve<T>(initial: T | (() => T)): T {
  return typeof initial === "function" ? (initial as () => T)() : initial;
}

export function useToolState<T>(
  key: string,
  initial: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (store.has(key)) return store.get(key) as T;
    const first = resolve(initial);
    store.set(key, first);
    return first;
  });

  // Computed from the store (not React's queue) so updates made after the
  // page was left are still kept, and sequential functional updates chain.
  const set = useCallback<Dispatch<SetStateAction<T>>>(
    (next) => {
      const previous = store.get(key) as T;
      const resolved =
        typeof next === "function" ? (next as (prev: T) => T)(previous) : next;
      store.set(key, resolved);
      setValue(resolved);
    },
    [key],
  );

  return [value, set];
}

const refs = new Map<string, { current: unknown }>();

/**
 * A `useRef` that is shared across visits, for "latest load wins" tokens: a
 * load still running from before the visitor left must not overwrite a newer
 * one started after they came back.
 */
export function useToolRef<T>(key: string, initial: T): { current: T } {
  const [ref] = useState(() => {
    if (!refs.has(key)) refs.set(key, { current: initial });
    return refs.get(key) as { current: T };
  });
  return ref;
}
