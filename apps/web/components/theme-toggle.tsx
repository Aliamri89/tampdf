"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/use-theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-foreground/70 transition-colors hover:border-brand-300 hover:text-foreground"
      suppressHydrationWarning
    >
      {/* Both icons are always rendered and CSS picks one from the data-theme
          attribute, so server and client markup match even when a returning
          visitor's saved theme differs from the server's default. */}
      <Sun size={16} className="hidden dark:block" />
      <Moon size={16} className="dark:hidden" />
    </button>
  );
}
