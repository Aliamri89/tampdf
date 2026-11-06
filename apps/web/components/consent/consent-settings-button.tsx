"use client";

import { useDictionary } from "@/i18n/locale-context";
import { openConsentSettings } from "@/lib/consent";

/** Footer link that reopens the consent banner so a choice can be changed or withdrawn. */
export function ConsentSettingsButton({ className }: { className?: string }) {
  const dict = useDictionary();
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      {dict.consent.settings}
    </button>
  );
}
