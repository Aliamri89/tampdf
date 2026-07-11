import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-accent-500 shadow-sm shadow-brand-500/30">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
            fill="white"
            fillOpacity="0.95"
          />
          <path d="M15 2v5h5" stroke="#6C5CE7" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="12" cy="15" r="2.4" fill="#FF8A5B" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Fileati
      </span>
    </Link>
  );
}
