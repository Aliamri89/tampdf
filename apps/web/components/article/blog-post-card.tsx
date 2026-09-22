import Link from "next/link";
import type { Locale } from "@tampdf/config";
import { ArticleImage } from "@/components/article/article-image";
import { formatArticleDate, getPostImage } from "@/lib/article";
import type { Post } from "@/payload/payload-types";

/**
 * Homepage blog-grid card: image, title, date — nothing else. Deliberately
 * separate from `PostCard` (used by the article page's "related articles"
 * section, which is out of scope for this redesign) so that page's design
 * stays untouched.
 */
export function BlogPostCard({ post, locale }: { post: Post; locale: Locale }) {
  const image = getPostImage(post);

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group overflow-hidden rounded-2xl border border-white/80 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-border dark:bg-surface/80"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-surface-muted">
        {image && (
          <ArticleImage
            image={image}
            className="h-full w-full transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-4">
        <h2 className="line-clamp-2 font-semibold text-foreground group-hover:text-brand-600">
          {post.title}
        </h2>
        {post.publishedDate && (
          <p className="mt-2 text-xs text-foreground/50">
            {formatArticleDate(post.publishedDate, locale)}
          </p>
        )}
      </div>
    </Link>
  );
}
