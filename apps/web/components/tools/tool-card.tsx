import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale, ToolDefinition } from "@tampdf/config";
import { Icon } from "@/components/icon";
import { Card } from "@/components/ui/card";
import { categoryStyles } from "@/lib/category-style";

export function ToolCard({ tool, locale }: { tool: ToolDefinition; locale: Locale }) {
  const style = categoryStyles[tool.category];

  return (
    <Link href={`/${locale}/${tool.slug}`}>
      <Card
        className={`group h-full p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl ${style.hoverBorder} ${style.hoverShadow}`}
      >
        <div className="flex items-start justify-between">
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-110 ${style.iconBg} ${style.iconText}`}
          >
            <Icon name={tool.icon} size={24} />
          </span>
          <ArrowRight
            size={18}
            className="mt-1.5 -translate-x-1 rtl:translate-x-1 rtl:rotate-180 text-foreground/30 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 rtl:group-hover:translate-x-0"
          />
        </div>
        <h3 className="mt-5 font-semibold text-foreground">{tool.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-foreground/60">
          {tool.shortDescription}
        </p>
      </Card>
    </Link>
  );
}
