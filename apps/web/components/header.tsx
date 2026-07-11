import Link from "next/link";
import { categories } from "@fileati/config";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 sm:flex">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/#${category.id}`}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {category.name}
            </Link>
          ))}
        </nav>
        <Link
          href="/#tools"
          className="inline-flex h-10 items-center rounded-lg bg-brand-500 px-4 text-sm font-medium text-white transition-colors hover:bg-brand-600 sm:hidden"
        >
          All tools
        </Link>
      </div>
    </header>
  );
}
