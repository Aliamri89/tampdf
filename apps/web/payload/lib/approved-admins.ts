/**
 * Who may CHANGE the privacy/consent-related services (global "services").
 *
 * Allowed: signed-in users whose e-mail is in the APPROVED_ADMIN_EMAILS
 * environment variable (comma-separated, case-insensitive). Deny by default:
 * if the variable is missing, empty, or contains only separators, nobody may
 * edit — the global stays read-only and the site keeps running on its
 * environment-variable fallback. There is deliberately no "first/oldest
 * account" fallback.
 */
function approvedEmails(): string[] {
  return (process.env.APPROVED_ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isApprovedAdmin(user: { email?: unknown } | null | undefined): boolean {
  if (!user || typeof user.email !== "string") return false;
  const email = user.email.trim().toLowerCase();
  if (!email) return false;
  const approved = approvedEmails();
  if (approved.length === 0) return false;
  return approved.includes(email);
}
