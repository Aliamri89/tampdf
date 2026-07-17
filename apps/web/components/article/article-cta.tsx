import { ArrowRight } from "lucide-react";
import type { Locale } from "@tampdf/config";
import { Icon } from "@/components/icon";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { categoryStyles } from "@/lib/category-style";
import type { ArticleCta as ArticleCtaData } from "@/lib/article";

export function ArticleCta({ cta, locale }: { cta: ArticleCtaData; locale: Locale }) {
  const style = categoryStyles[cta.tool.category];

  return (
    <Card className="flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.iconBg} ${style.iconText}`}
        >
          <Icon name={cta.tool.icon} size={22} />
        </span>
        <div>
          <h2 className="font-semibold text-foreground">{cta.heading}</h2>
          <p className="mt-1 text-sm text-foreground/60">{cta.body}</p>
        </div>
      </div>
      <LinkButton href={`/${locale}/${cta.tool.slug}`} className="w-full shrink-0 sm:w-auto">
        {cta.buttonLabel}
        <ArrowRight size={16} className="rtl:rotate-180" />
      </LinkButton>
    </Card>
  );
}
