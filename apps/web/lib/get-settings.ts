import { getPayloadClient } from "@/lib/payload-client";
import type { Setting } from "@/payload/payload-types";

/** Site-wide settings edited in the admin panel. Not locale-specific. */
export async function getSettings(): Promise<Setting> {
  try {
    const payload = await getPayloadClient();
    return await payload.findGlobal({ slug: "settings" });
  } catch (error) {
    // Database unreachable or not yet migrated (e.g. mid-deploy). Every
    // field here is optional and every caller already falls back to a
    // default when unset, so an empty object keeps pages rendering.
    console.error("getSettings failed, falling back to defaults:", error);
    return { id: 0 };
  }
}
