export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "tampdf-theme";
const THEME_CHANGE_EVENT = "tampdf-theme-change";

/**
 * Source of truth is the `data-theme` attribute on <html>, which the inline
 * init script (see theme-init-script.tsx) sets synchronously before first
 * paint from localStorage — never from `prefers-color-scheme`. Reading it
 * here (rather than localStorage directly) keeps every consumer in sync
 * with what's actually applied, including during the first client render.
 */
export function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

/** Reads the saved choice directly from localStorage, bypassing the DOM attribute. */
export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage unavailable (private mode, disabled cookies, etc.) — the
    // choice just won't persist across visits, which is a safe fallback.
  }
  window.dispatchEvent(new CustomEvent<Theme>(THEME_CHANGE_EVENT, { detail: theme }));
}

export function toggleTheme(): Theme {
  const next: Theme = getCurrentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  return next;
}

/** Subscribes to theme changes made anywhere (any header/footer instance, any tab-local toggle). Returns an unsubscribe function. */
export function subscribeToThemeChange(listener: (theme: Theme) => void): () => void {
  const handler = (event: Event) => listener((event as CustomEvent<Theme>).detail);
  window.addEventListener(THEME_CHANGE_EVENT, handler);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, handler);
}
