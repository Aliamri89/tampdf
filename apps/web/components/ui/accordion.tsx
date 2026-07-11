import { ChevronDown } from "lucide-react";

export function AccordionItem({
  question,
  children,
  defaultOpen,
}: {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="group rounded-xl border border-border bg-surface open:bg-surface-muted"
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium marker:content-none">
        {question}
        <ChevronDown
          size={18}
          className="shrink-0 text-foreground/50 transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="px-5 pb-4 text-sm leading-relaxed text-foreground/70">
        {children}
      </div>
    </details>
  );
}
