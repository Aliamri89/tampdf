import Link from "next/link";
import type { Locale } from "@tampdf/config";
import { ArticleImage } from "@/components/article/article-image";
import { getPostImage } from "@/lib/article";
import type { Post } from "@/payload/payload-types";

function formatDate(value: string, locale: Locale): string {
  return new Date(value).toLocaleDateString(locale === "ar" ? "ar" : "en-US", {
    dateStyle: "medium",
  });
}

/** Shared card used by the blog list, and the article page's related-articles section. */
export function PostCard({
  post,
  locale,
  headingLevel: Heading = "h2",
}: {
  post: Post;
  locale: Locale;
  /** Use "h3" when nesting under a "Related articles" h2 so the outline stays properly nested. */
  headingLevel?: "h2" | "h3";
}) {
  const image = getPostImage(post);

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-brand-300"
    >
      {image && <ArticleImage image={image} className="h-40 w-full" />}
      <div className="p-4">
        <Heading className="font-semibold text-foreground group-hover:text-brand-600">{post.title}</Heading>
        {post.excerpt && (
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-foreground/60">{post.excerpt}</p>
        )}
        {post.publishedDate && (
          <p className="mt-2 text-xs text-foreground/50">{formatDate(post.publishedDate, locale)}</p>
        )}
      </div>
    </Link>
  );
}
