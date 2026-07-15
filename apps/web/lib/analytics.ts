import type { Locale } from "@tampdf/config";

/**
 * Fire-and-forget usage reporting to the Payload CMS collections that back
 * the admin dashboard. Failures are swallowed — analytics must never affect
 * the tool or page the visitor is actually using.
 */
function post(path: string, body: unknown) {
  try {
    fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // ignore — analytics is best-effort
  }
}

export function trackPageVisit(locale: Locale) {
  post("/api/page-visit-events", { locale });
}

/**
 * `error` should be the raw caught value (unknown) — only its name/message
 * are extracted, truncated, and sent, so a failure is never silently
 * recorded as just `success: false` with no way to find out why after the
 * fact (this is exactly what happened before: the dashboard showed failed
 * runs but had no record of which exception caused them).
 */
export function trackToolUsage(tool: string, success: boolean, error?: unknown) {
  const errorName = error instanceof Error ? error.name : undefined;
  const errorMessage = error instanceof Error ? error.message.slice(0, 500) : undefined;
  post("/api/tool-usage-events", { tool, success, errorName, errorMessage });
}
