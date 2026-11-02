/**
 * Fixed, decorative background shared by every page. Sits behind all content (-z-10) and never intercepts clicks.
 */
export function PageBackdrop() {
  return <div aria-hidden className="home-backdrop pointer-events-none fixed inset-0 -z-10" />;
}
