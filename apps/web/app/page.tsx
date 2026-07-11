import { Lock, Sparkles, Zap } from "lucide-react";
import { categories, getToolsByCategory, siteConfig } from "@fileati/config";
import { Icon } from "@/components/icon";
import { ToolCard } from "@/components/tools/tool-card";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-brand-50 via-background to-background"
          aria-hidden="true"
        />
        <Container className="pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground/70">
            <Sparkles size={14} className="text-accent-500" />
            Free file tools, no signup required
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Every file tool you need,{" "}
            <span className="bg-linear-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              in one place
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/60 text-balance">
            {siteConfig.description}
          </p>
          <div className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-foreground/60">
            <span className="inline-flex items-center gap-1.5">
              <Zap size={15} className="text-brand-500" />
              Fast, in-browser processing
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Lock size={15} className="text-brand-500" />
              Private by default
            </span>
          </div>
        </Container>
      </section>

      <div id="tools" className="scroll-mt-16">
        {categories.map((category) => {
          const categoryTools = getToolsByCategory(category.id);
          if (categoryTools.length === 0) return null;

          return (
            <section key={category.id} id={category.id} className="scroll-mt-16 py-10">
              <Container>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
                    <Icon name={category.icon} size={20} />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold">{category.name}</h2>
                    <p className="text-sm text-foreground/60">{category.description}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryTools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} />
                  ))}
                </div>
              </Container>
            </section>
          );
        })}
      </div>
    </>
  );
}
