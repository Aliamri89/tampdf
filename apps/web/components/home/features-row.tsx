import { Monitor, ShieldCheck, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@tampdf/config";

interface Feature {
  icon: LucideIcon;
  label: string;
}

/** Three short feature callouts under the tool picker: devices, speed, security. */
export function FeaturesRow({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale).home.features;

  const features: Feature[] = [
    { icon: Monitor, label: dict.devices },
    { icon: Zap, label: dict.fast },
    { icon: ShieldCheck, label: dict.secure },
  ];

  return (
    <div className="mx-auto grid max-w-xl grid-cols-3 gap-4 sm:gap-8">
      {features.map(({ icon: FeatureIcon, label }) => (
        <div key={label} className="flex flex-col items-center gap-2 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-md shadow-slate-900/5 dark:bg-surface">
            <FeatureIcon size={20} strokeWidth={2.2} />
          </span>
          <span className="text-xs font-semibold text-foreground/80 sm:text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
