import Link from "next/link";
import { ArrowRight, Infinity as InfinityIcon, MonitorSmartphone, ShieldCheck, Zap } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "@/components/ui/container";

const WHY_ICONS = [ShieldCheck, InfinityIcon, MonitorSmartphone, Zap] as const;

/**
 * The informational sections under the tool grid: what the site is, why it is
 * safe to use, and how it works. They are plain server-rendered markup (no
 * client JavaScript) so they cost nothing on first paint, and they sit *below*
 * the tools so a returning visitor still reaches their tool immediately.
 */
export function WhySection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {dict.home.why.heading}
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.why.items.map((item, index) => {
            const Icon = WHY_ICONS[index] ?? ShieldCheck;
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.3)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10">
                  <Icon size={22} strokeWidth={2.1} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/70">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function HowSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-border bg-surface-muted/40 py-14 sm:py-16">
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {dict.home.how.heading}
        </h2>
        <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {dict.home.how.steps.map((step, index) => (
            <li key={step.title} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-xl font-bold text-white shadow-lg shadow-brand-500/25">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-[15px] leading-relaxed text-foreground/70">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/** Short description of the whole toolkit, for readers and for search engines. */
export function AboutSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-14 sm:py-16">
      <Container maxWidth="3xl" className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {dict.home.about.heading}
        </h2>
        <p className="mt-4 text-base leading-8 text-foreground/75 sm:text-lg">{dict.home.about.text}</p>
      </Container>
    </section>
  );
}

export function SectionLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-600 transition-colors hover:text-brand-700 ${className ?? ""}`}
    >
      {label}
      <ArrowRight size={16} className="rtl:rotate-180" />
    </Link>
  );
}
