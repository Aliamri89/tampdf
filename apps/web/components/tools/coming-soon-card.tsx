import type { ComingSoonTool, Locale } from "@tampdf/config";
import { Icon } from "@/components/icon";
import { Card } from "@/components/ui/card";
import { getDictionary } from "@/i18n/get-dictionary";
import { categoryStyles } from "@/lib/category-style";

export function ComingSoonCard({ tool, locale }: { tool: ComingSoonTool; locale: Locale }) {
  const dict = getDictionary(locale);
  const style = categoryStyles[tool.category];

  return (
    <Card className="h-full p-6 opacity-70" aria-disabled="true">
      <div className="flex items-start justify-between">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.iconBg} ${style.iconText}`}
        >
          <Icon name={tool.icon} size={24} />
        </span>
      </div>
      <h3 className="mt-5 font-semibold text-foreground">{tool.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-foreground/60">
        {tool.shortDescription}
      </p>
      <p className="mt-4 inline-flex items-center rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-foreground/50">
        {dict.card.comingSoon}
      </p>
    </Card>
  );
}
