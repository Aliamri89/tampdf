import Link from "next/link";
import { getLocalizedCategories, type Locale } from "@tampdf/config";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";

export function Header({ locale }: { locale: Locale }) {
  const categories = getLocalizedCategories(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo locale={locale} />
        <nav className="hidden items-center gap-7 sm:flex">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/${locale}#${category.id}`}
              className="text-sm font-medium text-foreground/65 transition-colors hover:text-foreground"
            >
              {category.name}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
