import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isValidLocale, type Locale } from "@tampdf/config";

// Payload reads this cookie to pick the admin UI language, checking it
// before the browser's Accept-Language header. Stamping it on first visit
// is what makes Arabic the true default admin language regardless of the
// visitor's browser locale, while leaving it untouched once Payload's own
// language switcher (Account settings) has set a preference.
const ADMIN_LANGUAGE_COOKIE = "payload-lng";
const DEFAULT_ADMIN_LANGUAGE = "ar";

function detectLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  return acceptLanguage.toLowerCase().startsWith("ar") ? "ar" : defaultLocale;
}

// The two analytics endpoints accept anonymous POSTs (the browser reports a
// page view / tool run). Without a cap, a script could fill the database with
// junk rows, so each client IP may send only a handful per minute. Counters
// live in this server process's memory — enough for a single-instance host.
const RATE_LIMITED_PATHS = new Set(["/api/page-visit-events", "/api/tool-usage-events"]);
const RATE_LIMIT_PER_MINUTE = 60;
const RATE_WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(request: NextRequest, pathname: string): boolean {
  if (request.method !== "POST" || !RATE_LIMITED_PATHS.has(pathname)) return false;
  const now = Date.now();
  if (hits.size > 5000) {
    for (const [key, entry] of hits) if (entry.resetAt <= now) hits.delete(key);
  }
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const key = `${ip}${pathname}`;
  const entry = hits.get(key);
  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_PER_MINUTE;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (isRateLimited(request, pathname)) {
    return new NextResponse("Too many requests", { status: 429, headers: { "Retry-After": "60" } });
  }

  if (pathname.startsWith("/amriadmin") || pathname.startsWith("/api")) {
    const hasLanguageCookie = request.cookies.has(ADMIN_LANGUAGE_COOKIE);
    if (!hasLanguageCookie) {
      request.cookies.set(ADMIN_LANGUAGE_COOKIE, DEFAULT_ADMIN_LANGUAGE);
    }
    const response = NextResponse.next({ request });
    if (!hasLanguageCookie) {
      response.cookies.set(ADMIN_LANGUAGE_COOKIE, DEFAULT_ADMIN_LANGUAGE, { path: "/" });
    }
    return response;
  }

  // OAuth redirect pages (e.g. /oauth/dropbox) must keep their exact path.
  if (pathname.startsWith("/oauth/")) return NextResponse.next();

  // Every language in the header's language menu is a real, dictionaried
  // locale (see `locales`/`isValidLocale` in `@tampdf/config`) — only a
  // path with no recognized locale segment at all needs one added.
  const firstSegment = pathname.split("/")[1] ?? "";
  if (isValidLocale(firstSegment)) return NextResponse.next();

  const locale = detectLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}${search}`, request.url));
}

export const config = {
  matcher: ["/((?!icon|_next|.*\\..*).*)"],
};
