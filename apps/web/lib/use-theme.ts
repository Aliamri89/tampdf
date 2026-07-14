"use client";

import { useEffect, useState } from "react";
import { getCurrentTheme, subscribeToThemeChange, toggleTheme, type Theme } from "@/lib/theme";

/**
 * Initializes from the DOM attribute the inline init script already set
 * (see theme-init-script.tsx) rather than always defaulting to "light", so
 * the very first client render already reflects a returning user's saved
 * theme with no flash. This does mean the client's first render can differ
 * from the server's (which has no access to localStorage) — expected and
 * safe; callers render the theme-dependent bit with suppressHydrationWarning.
 */
export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme);

  useEffect(() => subscribeToThemeChange(setTheme), []);

  return { theme, toggle: toggleTheme };
}
