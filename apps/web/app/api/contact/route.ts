import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { CONTACT_SUBJECT_VALUES } from "@/lib/contact-form-text";

// Always runs on the server per request (it sends mail); never cached.
export const dynamic = "force-dynamic";

const RECIPIENT = process.env.CONTACT_TO || "support@tampdf.com";
const SUBJECT_LABELS: Record<string, string> = {
  question: "General question",
  problem: "Problem with a tool",
  suggestion: "Suggestion",
  business: "Advertising / partnership",
  privacy: "Privacy request",
  other: "Other",
};

// Small in-memory limits (single instance): a few messages per address, and a
// shared cap so rotating addresses cannot flood the mailbox.
const WINDOW_MS = 10 * 60_000;
const PER_IP = 3;
const GLOBAL = 40;
const hits = new Map<string, { count: number; resetAt: number }>();

function limited(key: string, max: number, now: number): boolean {
  const entry = hits.get(key);
  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > max;
}

/** Same rule as proxy.ts: only the address the CDN saw, never the forgeable first entry. */
function clientIp(req: Request): string {
  const real = req.headers.get("x-real-ip")?.trim();
  if (real) return real;
  const forwarded = req.headers.get("x-forwarded-for")?.split(",");
  return forwarded?.[forwarded.length - 1]?.trim() || "unknown";
}

/** Header values must be single-line: strip CR/LF so nothing can inject extra headers. */
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function POST(req: Request) {
  const host = process.env.CONTACT_SMTP_HOST;
  const user = process.env.CONTACT_SMTP_USER;
  const pass = process.env.CONTACT_SMTP_PASS;
  if (!host || !user || !pass) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  const str = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max) : "");
  const name = oneLine(str(body.name, 100));
  const email = oneLine(str(body.email, 200));
  const subject = str(body.subject, 30);
  const message = str(body.message, 4000).trim();
  const elapsed = typeof body.elapsedMs === "number" ? body.elapsedMs : 0;

  // Bots: a filled honeypot or an impossibly fast submit. Answer "ok" so they learn nothing.
  if (str(body.website, 200) || elapsed < 3000) return NextResponse.json({ ok: true });

  if (
    !name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ||
    !CONTACT_SUBJECT_VALUES.includes(subject) ||
    message.length < 10
  ) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const now = Date.now();
  if (hits.size > 2000) for (const [key, entry] of hits) if (entry.resetAt <= now) hits.delete(key);
  if (limited(`ip:${clientIp(req)}`, PER_IP, now) || limited("*", GLOBAL, now)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  try {
    const port = Number(process.env.CONTACT_SMTP_PORT || 465);
    const transport = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
    await transport.sendMail({
      from: `"TAMPDF contact form" <${process.env.CONTACT_FROM || user}>`,
      to: RECIPIENT,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `[TAMPDF] ${SUBJECT_LABELS[subject]} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${SUBJECT_LABELS[subject]}\nLanguage: ${str(body.locale, 10)}\n\n${message}\n`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    // Log only the error type: SMTP errors can echo host or user details.
    console.error("contact form: sending failed", error instanceof Error ? error.name : "unknown");
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
