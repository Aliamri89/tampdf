import Script from "next/script";
import { THEME_STORAGE_KEY } from "@/lib/theme";

// Best-effort pre-hydration theme application, so a returning user's saved
// choice is visible as early as possible — no OS `prefers-color-scheme` is
// ever consulted, only a previously saved choice (default: light).
//
// `next/script`'s `beforeInteractive` (rather than a raw JSX <script>) is
// required here: a raw <script dangerouslySetInnerHTML> tag makes React log
// "Encountered a script tag while rendering React component" on every
// hydration/re-render, since React treats inline scripts in JSX as an
// anti-pattern regardless of whether the browser actually executes them.
//
// This is genuinely best-effort, not a guarantee: React's hydration commit
// for the root <html> element can strip whatever attribute this script (or
// beforeInteractive's own __next_f queue) set, before the user ever sees a
// flash — confirmed via a MutationObserver during development. The real
// guarantee is lib/use-theme.ts's useLayoutEffect, which re-asserts the
// saved theme from localStorage synchronously right after mount, before the
// browser paints.
const script = `
(function () {
  try {
    var stored = window.localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    document.documentElement.dataset.theme = stored === "dark" ? "dark" : "light";
  } catch (e) {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export function ThemeInitScript() {
  // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document -- this rule predates App Router: Next's own docs (docs/01-app/03-api-reference/02-components/script.md) say beforeInteractive scripts belong in the App Router root layout, which is exactly where this is rendered.
  return <Script id="theme-init" strategy="beforeInteractive">{script}</Script>;
}
