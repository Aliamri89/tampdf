import Script from "next/script";
import { THEME_STORAGE_KEY } from "@/lib/theme";

// Runs synchronously, before hydration and before first paint, so the
// correct theme is applied immediately — no OS `prefers-color-scheme` is
// ever consulted, only a previously saved choice (default: light).
// `beforeInteractive` (rather than a plain <script> tag) is required here:
// Next.js's App Router only guarantees this "runs before hydration, on
// every navigation" contract through next/script — a raw <script> rendered
// via JSX doesn't execute during client-side rendering at all.
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
