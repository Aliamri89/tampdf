import { getPayloadClient } from "@/lib/payload-client";
import type { Setting } from "@/payload/payload-types";

/** Site-wide settings edited in the admin panel. Not locale-specific. */
export async function getSettings(): Promise<Setting> {
  const payload = await getPayloadClient();
  return payload.findGlobal({ slug: "settings" });
}
