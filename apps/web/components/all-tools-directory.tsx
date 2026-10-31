import Link from "next/link";
import { getLocalizedCategories, getLocalizedToolsByCategory, type Locale } from "@tampdf/config";

/** Every tool, grouped by category, each name linking to its page — generated from the tool registry so it never goes stale. */
export function AllToolsDirectory({ locale, heading }: { locale: Locale; heading: string }) {
  return (
    <section aria-labelledby="all-tools-heading">
      <h2 id="all-tools-heading" className="mt-6 text-xl font-semibold text-foreground">
        {heading}
      </h2>
      {getLocalizedCategories(locale).map((category) => (
        <div key={category.id}>
          <h3 className="mt-5 text-lg font-semibold text-foreground">{category.name}</h3>
          <ul className="mt-2 list-disc space-y-1.5 ps-5">
            {getLocalizedToolsByCategory(category.id, locale).map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/${locale}/${tool.slug}`}
                  className="font-medium text-brand-600 underline-offset-2 hover:underline"
                >
                  {tool.name}
                </Link>
                {" — "}
                {tool.shortDescription}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
