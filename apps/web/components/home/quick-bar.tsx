import Link from "next/link";
import {
  Combine,
  Grip,
  Image as ImageIcon,
  Minimize2,
  RefreshCw,
  RotateCw,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type QuickBarTone = "brand" | "emerald" | "sky" | "orange" | "violet" | "blue";
export type QuickBarIcon = "grid" | "compress" | "convert" | "merge" | "image" | "rotate";

export interface QuickBarItem {
  key: string;
  label: string;
  /** In-page anchor ("#…") or a tool page path. */
  href: string;
  icon: QuickBarIcon;
  tone: QuickBarTone;
}

const ICONS: Record<QuickBarIcon, LucideIcon> = {
  grid: Grip,
  compress: Minimize2,
  convert: RefreshCw,
  merge: Combine,
  image: ImageIcon,
  rotate: RotateCw,
};

const TONES: Record<QuickBarTone, { pill: string; icon: string }> = {
  brand: {
    pill: "border-transparent bg-linear-to-r from-rose-500 to-brand-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30",
    icon: "text-white",
  },
  emerald: {
    pill: "border-emerald-100 bg-emerald-50/80 text-foreground hover:border-emerald-200 hover:bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10",
    icon: "text-emerald-600 dark:text-emerald-400",
  },
  sky: {
    pill: "border-sky-100 bg-sky-50/80 text-foreground hover:border-sky-200 hover:bg-sky-50 dark:border-sky-500/20 dark:bg-sky-500/10",
    icon: "text-sky-600 dark:text-sky-400",
  },
  orange: {
    pill: "border-orange-100 bg-orange-50/80 text-foreground hover:border-orange-200 hover:bg-orange-50 dark:border-orange-500/20 dark:bg-orange-500/10",
    icon: "text-orange-500 dark:text-orange-400",
  },
  violet: {
    pill: "border-violet-100 bg-violet-50/80 text-foreground hover:border-violet-200 hover:bg-violet-50 dark:border-violet-500/20 dark:bg-violet-500/10",
    icon: "text-violet-600 dark:text-violet-400",
  },
  blue: {
    pill: "border-blue-100 bg-blue-50/80 text-foreground hover:border-blue-200 hover:bg-blue-50 dark:border-blue-500/20 dark:bg-blue-500/10",
    icon: "text-blue-600 dark:text-blue-400",
  },
};

/**
 * Six quick-access pills under the hero: one row on desktop, a 3 × 2 grid
 * on tablet and mobile. Anchors rely on the page's smooth scrolling.
 */
export function QuickBar({ items }: { items: QuickBarItem[] }) {
  return (
    <nav className="mx-auto grid max-w-6xl grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
      {items.map((item) => {
        const tone = TONES[item.tone];
        const ItemIcon = ICONS[item.icon];
        const className = cn(
          "flex min-h-[3.25rem] flex-col items-center justify-center gap-1.5 rounded-2xl border px-2 py-2.5 text-center text-xs font-bold transition-all duration-300 ease-out hover:-translate-y-0.5 sm:min-h-14 sm:flex-row sm:gap-2.5 sm:px-4 sm:text-[15px]",
          tone.pill,
        );
        const content = (
          <>
            <ItemIcon className={cn("h-5 w-5 shrink-0 sm:h-6 sm:w-6", tone.icon)} strokeWidth={2.2} />
            <span className="leading-tight">{item.label}</span>
          </>
        );
        return item.href.startsWith("#") ? (
          <a key={item.key} href={item.href} className={className}>
            {content}
          </a>
        ) : (
          <Link key={item.key} href={item.href} className={className}>
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
