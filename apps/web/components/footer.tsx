import Link from "next/link";
import { categories, getToolsByCategory, siteConfig } from "@fileati/config";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-muted/50">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/60">
              {siteConfig.description}
            </p>
          </div>
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-sm font-semibold text-foreground">{category.name}</h3>
              <ul className="mt-4 space-y-2.5">
                {getToolsByCategory(category.id).map((tool) => (
                  <li key={tool.slug}>
                    <Link
                      href={`/${tool.slug}`}
                      className="text-sm text-foreground/60 transition-colors hover:text-brand-500"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-foreground/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Files are processed securely and never stored longer than necessary.</p>
        </div>
      </Container>
    </footer>
  );
}
