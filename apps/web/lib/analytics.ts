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

export function trackToolUsage(tool: string, success: boolean) {
  post("/api/tool-usage-events", { tool, success });
}
