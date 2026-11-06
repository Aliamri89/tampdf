import { cache } from "react";
import {
  ADSENSE_CLIENT_PATTERN,
  ADSENSE_SLOT_PATTERN,
  ENV_ADSENSE_CLIENT,
  ENV_AD_SLOTS,
  validAdsenseValue,
  type AdPlacement,
} from "@/lib/ads";
import { getSettings } from "@/lib/get-settings";
import { getPayloadClient } from "@/lib/payload-client";

/** Google's documented GA4 Measurement ID format, e.g. "G-ABC1234DEF". */
export const GA4_ID_PATTERN = /^G-[A-Z0-9]+$/;
/** Clarity project ids are short alphanumeric strings, e.g. "abc1d2efgh". */
export const CLARITY_ID_PATTERN = /^[a-zA-Z0-9]+$/;

/**
 * What is switched on, merged from the admin panel (global "services" plus the
 * GA4/Clarity ids in "settings") and the environment-variable fallback.
 * A service the switch turns off (or that has no valid id) is simply null —
 * callers only check for null.
 *
 * A switch only ever REMOVES a service. It never grants or forces consent:
 * visitor consent (lib/consent.ts) is applied on top of this.
 */
export interface ResolvedServices {
  adsense: {
    /** Publisher id, or null when AdSense is off / not configured. */
    client: string | null;
    slots: Record<AdPlacement, string | null>;
  };
  ga4Id: string | null;
  clarityId: string | null;
  /** GA4 or Clarity is active: something our own consent banner governs. */
  analytics: boolean;
  /** Any service that may need the visitor's consent is active. */
  anyService: boolean;
}

interface ServicesDoc {
  adsense?: {
    enabled?: boolean | null;
    publisherId?: string | null;
    slotTool?: string | null;
    slotBlog?: string | null;
  } | null;
  tracking?: {
    ga4Enabled?: boolean | null;
    clarityEnabled?: boolean | null;
  } | null;
}

/**
 * Read with the server's own privileges (Payload's Local API skips access
 * rules, like getSettings()), so visitors never need read access to the global
 * itself — it is not exposed over REST to anonymous requests (see Services.ts).
 * Never pass `overrideAccess: false` here: that would make every page fail for
 * visitors.
 *
 * A missing document, an unset switch, or an unreachable/unmigrated database
 * all fall back to the pre-existing behaviour: services on, values from the
 * environment variables and Settings.
 */
export const getServices = cache(async (): Promise<ResolvedServices> => {
  let doc: ServicesDoc = {};
  try {
    const payload = await getPayloadClient();
    doc = (await payload.findGlobal({ slug: "services" })) as unknown as ServicesDoc;
  } catch (error) {
    console.error("getServices failed, using the environment fallback:", error);
  }

  const settings = await getSettings();
  const { ga4MeasurementId, clarityProjectId } = settings.analytics ?? {};

  // `!== false`: only an explicit "off" in the admin turns a service off.
  const adsenseOn = doc.adsense?.enabled !== false;
  const client =
    validAdsenseValue(doc.adsense?.publisherId, ADSENSE_CLIENT_PATTERN) ?? ENV_ADSENSE_CLIENT;
  const slotTool = validAdsenseValue(doc.adsense?.slotTool, ADSENSE_SLOT_PATTERN) ?? ENV_AD_SLOTS.tool;
  const slotBlog = validAdsenseValue(doc.adsense?.slotBlog, ADSENSE_SLOT_PATTERN) ?? ENV_AD_SLOTS.blog;

  const ga4Id =
    doc.tracking?.ga4Enabled !== false && ga4MeasurementId && GA4_ID_PATTERN.test(ga4MeasurementId)
      ? ga4MeasurementId
      : null;
  const clarityId =
    doc.tracking?.clarityEnabled !== false &&
    clarityProjectId &&
    CLARITY_ID_PATTERN.test(clarityProjectId)
      ? clarityProjectId
      : null;

  const adsenseClient = adsenseOn ? client : null;
  return {
    adsense: {
      client: adsenseClient,
      slots: { tool: adsenseOn ? slotTool : null, blog: adsenseOn ? slotBlog : null },
    },
    ga4Id,
    clarityId,
    analytics: Boolean(ga4Id || clarityId),
    anyService: Boolean(adsenseClient || ga4Id || clarityId),
  };
});
