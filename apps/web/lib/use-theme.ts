"use client";

import { useLayoutEffect, useState } from "react";
import {
  applyTheme,
  getCurrentTheme,
  getStoredTheme,
  subscribeToThemeChange,
  toggleTheme,
  type Theme,
} from "@/lib/theme";

/**
 * Initializes from the DOM attribute the inline init script already set
 * (see theme-init-script.tsx) rather than always defaulting to "light", so
 * the very first client render already reflects a returning user's saved
 * theme with no flash. This does mean the client's first render can differ
 * from the server's (which has no access to localStorage) — expected and
 * safe; callers render the theme-dependent bit with suppressHydrationWarning.
 *
 * React's hydration commit for the root <html> element strips the
 * data-theme attribute the inline script set (it isn't one of React's own
 * props for that node), even with suppressHydrationWarning — observed
 * directly via a MutationObserver during development. The layout effect
 * below re-asserts the saved theme from localStorage synchronously right
 * after mount, before the browser paints, so this is invisible to the user.
 */
export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme);

  useLayoutEffect(() => {
    applyTheme(getStoredTheme());
  }, []);

  useLayoutEffect(() => subscribeToThemeChange(setTheme), []);

  return { theme, toggle: toggleTheme };
}
