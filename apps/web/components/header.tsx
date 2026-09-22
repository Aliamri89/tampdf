import Link from "next/link";
import type { Locale } from "@tampdf/config";
import { LanguageMenu } from "@/components/language-menu";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { getDictionary } from "@/i18n/get-dictionary";

export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const navLinks = [
    { href: `/${locale}/about`, label: dict.footer.aboutUs },
    { href: `/${locale}/contact`, label: dict.footer.contactUs },
    { href: `/${locale}/blog`, label: dict.footer.blog },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo locale={locale} />
        <nav className="hidden items-center gap-7 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/65 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageMenu locale={locale} />
        </div>
      </div>
    </header>
  );
}
