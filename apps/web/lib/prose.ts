/**
 * Rich-text typography via Tailwind arbitrary variants rather than
 * `@tailwindcss/typography` — matches the existing convention in
 * cms-static-page-route.tsx and keeps this a zero-dependency addition.
 */
export const articleProseClassName =
  "leading-relaxed text-foreground/80 " +
  "[&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground " +
  "[&_h3]:mt-8 [&_h3]:scroll-mt-24 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground " +
  "[&_p]:mt-4 [&_p]:leading-relaxed [&_p:first-child]:mt-0 " +
  "[&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-brand-700 " +
  "[&_strong]:font-semibold [&_strong]:text-foreground [&_em]:italic " +
  "[&_ul]:mt-4 [&_ul]:list-disc [&_ol]:mt-4 [&_ol]:list-decimal [&_li]:ms-5 [&_li+li]:mt-1.5 " +
  "[&_blockquote]:mt-6 [&_blockquote]:border-s-4 [&_blockquote]:border-brand-300 [&_blockquote]:ps-4 [&_blockquote]:text-foreground/70 [&_blockquote]:italic " +
  "[&_code]:rounded [&_code]:bg-surface-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.875em] " +
  "[&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-surface-muted [&_pre]:p-4 [&_pre]:text-sm [&_pre_code]:bg-transparent [&_pre_code]:p-0 " +
  "[&_img]:mt-6 [&_img]:w-full [&_img]:rounded-xl [&_img]:border [&_img]:border-border " +
  "[&_hr]:my-8 [&_hr]:border-border " +
  "[&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm " +
  "[&_th]:border [&_th]:border-border [&_th]:bg-surface-muted [&_th]:px-3 [&_th]:py-2 [&_th]:text-start [&_th]:font-medium " +
  "[&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2";
