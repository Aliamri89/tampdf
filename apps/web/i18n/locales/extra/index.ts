import type { Locale } from "@tampdf/config";
import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";
import { extra as cs } from "./cs";
import { extra as da } from "./da";
import { extra as de } from "./de";
import { extra as el } from "./el";
import { extra as es } from "./es";
import { extra as fi } from "./fi";
import { extra as fr } from "./fr";
import { extra as hi } from "./hi";
import { extra as id } from "./id";
import { extra as it } from "./it";
import { extra as ja } from "./ja";
import { extra as ko } from "./ko";
import { extra as nl } from "./nl";
import { extra as no } from "./no";
import { extra as pl } from "./pl";
import { extra as pt } from "./pt";
import { extra as ru } from "./ru";
import { extra as sv } from "./sv";
import { extra as th } from "./th";
import { extra as tr } from "./tr";
import { extra as vi } from "./vi";
import { extra as zh } from "./zh";

/**
 * Translations of the cookie-consent banner, the legal pages (privacy, cookies,
 * terms), the advertising disclosure and the watermark tools' new copy. Merged
 * over each locale's main translation in `i18n/dictionaries.ts`.
 */
export const extraTranslations: Partial<Record<Locale, DeepPartial<Dictionary>>> = {
  cs, da, de, el, es, fi, fr, hi, id, it, ja, ko, nl, no, pl, pt, ru, sv, th, tr, vi, zh,
};
