import Link from "next/link";
import type { Locale } from "@tampdf/config";
import { getDictionary } from "@/i18n/get-dictionary";

const PAGES = [
  { path: "/about", key: "aboutUs" },
  { path: "/contact", key: "contactUs" },
  { path: "/blog", key: "blog" },
  { path: "/faq", key: "faq" },
  { path: "/privacy-policy", key: "privacyPolicy" },
  { path: "/terms-of-service", key: "termsOfService" },
  { path: "/cookie-policy", key: "cookiePolicy" },
] as const;

/**
 * Links to the site's other informational pages, shown at the end of each of
 * them. Labels come from the footer dictionary, so this works in every
 * language without touching the translated page text itself.
 */
export function PageLinks({ locale, current }: { locale: Locale; current: string }) {
  const dict = getDictionary(locale);
  const links = PAGES.filter((page) => page.path !== current);

  return (
    <nav aria-label={dict.footer.company} className="not-prose mt-12 border-t border-border pt-5">
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map((page) => (
          <li key={page.path}>
            <Link
              href={`/${locale}${page.path}`}
              className="text-[15px] text-foreground/70 underline-offset-2 transition-colors hover:text-brand-600 hover:underline"
            >
              {dict.footer[page.key]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
