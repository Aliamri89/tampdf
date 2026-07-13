import type { Locale } from "@tampdf/config";
import { dictionaries, type Dictionary } from "./dictionaries";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
