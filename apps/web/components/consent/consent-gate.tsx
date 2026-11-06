"use client";

import type { ReactNode } from "react";
import { useConsent } from "@/lib/consent";

/** Mounts its children (the analytics scripts) only once consent allows it. */
export function ConsentGate({ children }: { children: ReactNode }) {
  const { analyticsAllowed } = useConsent();
  return analyticsAllowed ? <>{children}</> : null;
}
