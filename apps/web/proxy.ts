import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@tampdf/config";

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

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

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

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}${search}`, request.url));
}

export const config = {
  matcher: ["/((?!icon|_next|.*\\..*).*)"],
};
