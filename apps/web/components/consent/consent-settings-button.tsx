"use client";

import { useDictionary } from "@/i18n/locale-context";
import { openConsentSettings, useConsent } from "@/lib/consent";

/** Footer link that reopens the consent banner so a choice can be changed or withdrawn. */
export function ConsentSettingsButton({ className }: { className?: string }) {
  const dict = useDictionary();
  const { ready, settingsAvailable } = useConsent();
  // The server only renders this when some service is active; once the browser knows
  // better (e.g. only AdSense, and Google's message does not apply here) it hides itself.
  if (ready && !settingsAvailable) return null;
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      {dict.consent.settings}
    </button>
  );
}
