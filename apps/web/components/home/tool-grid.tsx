"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const GRID_CLASS = "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";

/**
 * Renders the first rows of a section's cards, plus a collapsible panel for
 * the rest. Every card is always in the DOM (crawlable) — collapse is a CSS
 * `grid-template-rows` transition, not conditional rendering.
 */
export function ToolGrid({
  visible,
  rest,
  hasRest,
  moreLabel,
  lessLabel,
}: {
  visible: ReactNode;
  rest: ReactNode;
  hasRest: boolean;
  moreLabel: string;
  lessLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <div>
      <div className={GRID_CLASS}>{visible}</div>

      {hasRest && (
        <>
          <div
            id={panelId}
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
              expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <div className={cn(GRID_CLASS, "pt-3")}>{rest}</div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls={panelId}
            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-surface-muted/60 py-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-surface-muted hover:text-foreground"
          >
            {expanded ? lessLabel : moreLabel}
            <ChevronDown
              size={16}
              className={cn("transition-transform duration-300", expanded && "rotate-180")}
            />
          </button>
        </>
      )}
    </div>
  );
}
