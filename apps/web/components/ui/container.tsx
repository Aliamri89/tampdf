import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const MAX_WIDTHS = {
  "2xl": "max-w-2xl",
  "6xl": "max-w-6xl",
} as const;

/**
 * `maxWidth` picks a single width class instead of letting callers pass
 * `max-w-*` through `className` — two conflicting `max-w-*` utilities in
 * one class string don't reliably resolve in authoring order (Tailwind's
 * generated stylesheet order decides, not the string order), so mixing
 * them silently produces the wrong width.
 */
export function Container({
  className,
  maxWidth = "6xl",
  ...props
}: ComponentPropsWithoutRef<"div"> & { maxWidth?: keyof typeof MAX_WIDTHS }) {
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", MAX_WIDTHS[maxWidth], className)}
      {...props}
    />
  );
}
