"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * One responsive display ad. Space is reserved up front (min-height) so the
 * page never shifts when the ad arrives, and the unit is requested exactly
 * once even under React strict mode.
 */
export function AdUnit({ client, slot, label }: { client: string; slot: string; label: string }) {
  const requested = useRef(false);

  useEffect(() => {
    if (requested.current) return;
    requested.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // The AdSense library was blocked or failed to load: leave the slot empty.
    }
  }, []);

  return (
    <aside aria-label={label} className="mx-auto w-full max-w-3xl">
      <p className="mb-1.5 text-center text-xs text-foreground/45">{label}</p>
      <div className="min-h-[280px] overflow-hidden rounded-xl bg-surface-muted/60">
        <ins
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
