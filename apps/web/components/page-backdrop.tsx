/**
 * Fixed, decorative soft-gradient background for the homepage and tool
 * pages. Sits behind all content (-z-10) and never intercepts clicks.
 */
export function PageBackdrop() {
  return <div aria-hidden className="page-backdrop pointer-events-none fixed inset-0 -z-10" />;
}
