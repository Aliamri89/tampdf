import {
  getLocalizedCategories,
  getLocalizedToolsByCategory,
  type Locale,
} from "@tampdf/config";
import { HeaderMenu, type MenuGroup } from "@/components/header-menu";
import { HeaderNav } from "@/components/header-nav";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header({ locale }: { locale: Locale }) {
  const groups: MenuGroup[] = getLocalizedCategories(locale).map((category) => ({
    id: category.id,
    name: category.name,
    icon: category.icon,
    tools: getLocalizedToolsByCategory(category.id, locale).map((tool) => ({
      slug: tool.slug,
      name: tool.name,
    })),
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="flex h-[4.5rem] w-full items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Logo locale={locale} />
          <HeaderNav locale={locale} groups={groups} />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <HeaderMenu locale={locale} groups={groups} />
        </div>
      </div>
    </header>
  );
}
