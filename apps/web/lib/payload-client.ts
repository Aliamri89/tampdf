import config from "@payload-config";
import { getPayload } from "payload";

/**
 * Payload memoizes its own instance internally, so calling this from
 * multiple Server Components in the same request tree is cheap — it does
 * not open a new database connection each time.
 */
export function getPayloadClient() {
  return getPayload({ config });
}
