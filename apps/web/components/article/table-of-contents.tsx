"use client";

import { ChevronDown } from "lucide-react";
import type { ArticleHeading } from "@/lib/richtext";

function handleTocClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  history.pushState(null, "", `#${id}`);
}

export function TableOfContents({
  headings,
  heading,
}: {
  /** Expected to already be filtered to top-level (H2) entries by the caller. */
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
        <ul className="list-disc space-y-2 text-sm">
          {headings.map((item) => (
            <li key={item.id} className="ms-5">
              <a
                href={`#${item.id}`}
                onClick={(event) => handleTocClick(event, item.id)}
                className="text-foreground/70 hover:text-brand-600 hover:underline"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
