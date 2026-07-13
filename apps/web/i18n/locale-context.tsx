"use client";

import type { Locale } from "@tampdf/config";
import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "./dictionaries";

interface LocaleContextValue {
  locale: Locale;
  dict: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dict,
  children,
}: LocaleContextValue & { children: ReactNode }) {
  return (
    <LocaleContext.Provider value={{ locale, dict }}>{children}</LocaleContext.Provider>
  );
}

function useLocaleContext(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale/useDictionary must be used within a LocaleProvider");
  return ctx;
}

export function useLocale(): Locale {
  return useLocaleContext().locale;
}

export function useDictionary(): Dictionary {
  return useLocaleContext().dict;
}
