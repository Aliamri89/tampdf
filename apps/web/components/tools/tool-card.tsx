import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import type { ToolDefinition } from "@fileati/config";
import { Icon } from "@/components/icon";
import { Card } from "@/components/ui/card";

export function ToolCard({ tool }: { tool: ToolDefinition }) {
  return (
    <Link href={`/${tool.slug}`}>
      <Card className="group h-full p-5 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5">
        <div className="flex items-start justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-100">
            <Icon name={tool.icon} size={22} />
          </span>
          <ArrowRight
            size={18}
            className="mt-1 -translate-x-1 text-foreground/30 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
          />
        </div>
        <h3 className="mt-4 font-semibold text-foreground">{tool.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">
          {tool.shortDescription}
        </p>
        {tool.processing === "client" && (
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand-600">
            <ShieldCheck size={14} />
            Processed in your browser
          </p>
        )}
      </Card>
    </Link>
  );
}
