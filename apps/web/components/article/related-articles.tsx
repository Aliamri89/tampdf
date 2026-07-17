import type { Locale } from "@tampdf/config";
import { PostCard } from "@/components/article/post-card";
import type { Post } from "@/payload/payload-types";

export function RelatedArticles({
  posts,
  locale,
  heading,
}: {
  posts: Post[];
  locale: Locale;
  heading: string;
}) {
  if (posts.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-semibold">{heading}</h2>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} locale={locale} headingLevel="h3" />
        ))}
      </div>
    </section>
  );
}
