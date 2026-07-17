import { ChevronDown } from "lucide-react";
import type { ArticleHeading } from "@/lib/richtext";

export function TableOfContents({
  headings,
  heading,
}: {
  headings: ArticleHeading[];
  heading: string;
}) {
  return (
    <details
      className="group mb-8 rounded-xl border border-border bg-surface open:bg-surface-muted"
      open
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 text-sm font-semibold marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        {heading}
        <ChevronDown
          size={16}
          className="shrink-0 text-foreground/50 transition-transform group-open:rotate-180"
        />
      </summary>
      <nav aria-label={heading} className="px-5 pb-4">
        <ol className="space-y-2 text-sm">
          {headings.map((item) => (
            <li key={item.id} className={item.level === 3 ? "ms-4" : undefined}>
              <a href={`#${item.id}`} className="text-foreground/70 hover:text-brand-600 hover:underline">
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}
