import type { Media } from "@/payload/payload-types";
import { cn } from "@/lib/utils";

/**
 * Renders a CMS-hosted image responsively via `srcSet`/`sizes` instead of
 * `next/image` — Payload's media URL can be relative or point at an
 * arbitrary configured origin (see featuredImage usages elsewhere), which
 * `next/image` would require a `remotePatterns` entry for per deployment.
 * Explicit `width`/`height` still reserve layout space to avoid CLS.
 */
export function ArticleImage({
  image,
  className,
  sizes = "(min-width: 672px) 672px, 100vw",
  priority = false,
}: {
  image: Media;
  className?: string;
  sizes?: string;
  /** Set for the above-the-fold featured image so it isn't lazy-loaded and hurts LCP. */
  priority?: boolean;
}) {
  if (!image.url) return null;

  const srcSet = [
    image.sizes?.medium?.url && image.sizes.medium.width
      ? `${image.sizes.medium.url} ${image.sizes.medium.width}w`
      : null,
    image.sizes?.large?.url && image.sizes.large.width
      ? `${image.sizes.large.url} ${image.sizes.large.width}w`
      : null,
    image.width ? `${image.url} ${image.width}w` : null,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    // eslint-disable-next-line @next/next/no-img-element -- CMS-hosted image, arbitrary origin
    <img
      src={image.url}
      srcSet={srcSet || undefined}
      sizes={srcSet ? sizes : undefined}
      alt={image.alt}
      width={image.width ?? undefined}
      height={image.height ?? undefined}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={cn("object-cover", className)}
    />
  );
}
