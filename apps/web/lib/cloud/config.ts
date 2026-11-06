/**
 * Cloud-save integrations are real OAuth flows, so each needs a client id
 * registered by the site owner. They are read at build time (NEXT_PUBLIC_*)
 * and the matching button is simply not rendered when its id is missing —
 * there are no decorative buttons that cannot work.
 */
export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "";
export const DROPBOX_APP_KEY = process.env.NEXT_PUBLIC_DROPBOX_APP_KEY ?? "";

/** Thrown when the user closes or denies the sign-in window; not an error to show. */
export class CloudCancelledError extends Error {
  constructor() {
    super("Cloud sign-in was cancelled");
    this.name = "CloudCancelledError";
  }
}

export function safeFileName(name: string): string {
  return name.replace(/[\\/]/g, "_").trim() || "file";
}
