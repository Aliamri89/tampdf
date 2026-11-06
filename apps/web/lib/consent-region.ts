/**
 * Server-safe consent constants shared by lib/consent.ts (the React store)
 * and the pre-hydration Consent Mode script, so both always agree.
 *
 * Where consent is "required" is decided in the browser from two independent
 * signals, and either one is enough:
 *   1. the time zone (Europe/Atlantic/Arctic, EU overseas regions, UTC/unknown);
 *   2. the region of any language the browser lists (e.g. de-DE, en-GB, fr-CH).
 * Neither is a real location: the hosting (Hostinger CDN) passes no country
 * header to the app, and looking visitors up by IP would mean sending their
 * addresses to a third party. The check errs on the side of showing the banner.
 */
export const CONSENT_STORAGE_KEY = "tampdf-consent";

export const CONSENT_REQUIRED_ZONES_SOURCE =
  "^(Europe|Atlantic|Arctic)\\/|^(Africa\\/Ceuta|Asia\\/Nicosia|Asia\\/Famagusta|Indian\\/Reunion|Indian\\/Mayotte|America\\/Martinique|America\\/Guadeloupe|America\\/Cayenne)$";

/**
 * Country codes (upper case) where consent is required: EU 27, Iceland,
 * Liechtenstein, Norway, the UK and its crown dependencies/Gibraltar,
 * Switzerland, and EU overseas territories.
 */
export const CONSENT_REQUIRED_COUNTRIES_SOURCE =
  "^(AT|BE|BG|HR|CY|CZ|DK|EE|FI|FR|DE|GR|HU|IE|IT|LV|LT|LU|MT|NL|PL|PT|RO|SK|SI|ES|SE|IS|LI|NO|GB|GG|JE|IM|GI|CH|AX|GF|GP|MQ|RE|YT|BL|MF|PM)$";
