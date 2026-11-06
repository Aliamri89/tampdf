"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[] & { loaded?: boolean };
  }
}

/** How long to wait for Google's library before giving up and removing the empty slot. */
const LIBRARY_TIMEOUT_MS = 8000;

/**
 * One responsive display ad. Space is reserved up front so the page doesn't
 * shift when the ad arrives, and the whole block (label included) disappears
 * when there is nothing to show — Google reports "unfilled", or its library
 * never loaded (ad blocker, offline) — so visitors never see an empty
 * "Advertisement" box. The unit is requested exactly once even under React
 * strict mode.
 */
export function AdUnit({ client, slot, label }: { client: string; slot: string; label: string }) {
  const requested = useRef(false);
  const insRef = useRef<HTMLModElement>(null);
  const [gone, setGone] = useState(false);

  // Ask Google for an ad once (guarded so React strict mode can't request twice).
  useEffect(() => {
    if (requested.current) return;
    requested.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // The AdSense library was blocked or failed to load.
    }
  }, []);

  // Watch for "nothing to show". Separate from the request above so strict
  // mode's cleanup/re-run keeps the observer attached.
  useEffect(() => {
    const ins = insRef.current;
    const observer = new MutationObserver(() => {
      if (ins?.getAttribute("data-ad-status") === "unfilled") setGone(true);
    });
    if (ins) {
      observer.observe(ins, { attributes: true, attributeFilter: ["data-ad-status"] });
      if (ins.getAttribute("data-ad-status") === "unfilled") setGone(true);
    }
    const timer = window.setTimeout(() => {
      if (!window.adsbygoogle?.loaded) setGone(true);
    }, LIBRARY_TIMEOUT_MS);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  if (gone) return null;

  return (
    <aside aria-label={label} className="mx-auto w-full max-w-3xl">
      <p className="mb-1.5 text-center text-xs text-foreground/45">{label}</p>
      <div className="min-h-[250px] overflow-hidden rounded-xl bg-surface-muted/60">
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
