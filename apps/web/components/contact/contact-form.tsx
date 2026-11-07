"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { ContactFormText } from "@/lib/contact-form-text";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const fieldClass =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-base text-foreground placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400";
const errorClass = "mt-1 text-sm text-red-600";
const primaryButton =
  "rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

/** Two steps (who you are and the topic, then the message). Posts to /api/contact; nothing is stored in the browser. */
export function ContactForm({ text, locale }: { text: ContactFormText; locale: string }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "", website: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorText, setErrorText] = useState("");
  // Set on mount (not during render) so the render stays pure.
  const openedAt = useRef(0);
  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const set =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  function validateStep1(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = text.required;
    if (!values.email.trim()) next.email = text.required;
    else if (!EMAIL_RE.test(values.email.trim())) next.email = text.invalidEmail;
    if (!values.subject) next.subject = text.required;
    return next;
  }

  function goNext() {
    const next = validateStep1();
    setErrors(next);
    if (Object.keys(next).length === 0) setStep(2);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (step === 1) return goNext();
    const next: Errors = {};
    if (values.message.trim().length < 10) next.message = text.tooShort;
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale, elapsedMs: Date.now() - openedAt.current }),
      });
      if (res.ok) return setStatus("sent");
      setErrorText(
        res.status === 429 ? text.errorRateLimited : res.status === 503 ? text.errorNotConfigured : text.errorGeneric,
      );
    } catch {
      setErrorText(text.errorGeneric);
    }
    setStatus("error");
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-border bg-surface p-8 text-center shadow-[0_10px_30px_-8px_rgba(0,0,0,0.18)]"
      >
        <CheckCircle2 className="mx-auto text-green-600" size={44} aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-semibold text-foreground">{text.successTitle}</h2>
        <p className="mt-2 text-foreground/70">{text.successText}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="not-prose relative rounded-2xl border border-border bg-surface p-6 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.18)] sm:p-8"
    >
      <p className="text-sm font-medium text-foreground/55">{text.stepOf.replace("{current}", String(step)).replace("{total}", "2")}</p>

      {/* Honeypot: real visitors never see or fill this. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
        </label>
      </div>

      {step === 1 && (
        <div className="mt-4 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="cf-name" className="text-sm font-medium text-foreground">
                {text.name} *
              </label>
              <input
                id="cf-name"
                className={fieldClass}
                value={values.name}
                onChange={set("name")}
                placeholder={text.namePlaceholder}
                maxLength={100}
                autoComplete="name"
              />
              {errors.name && <p className={errorClass}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="cf-email" className="text-sm font-medium text-foreground">
                {text.email} *
              </label>
              <input
                id="cf-email"
                type="email"
                dir="ltr"
                className={fieldClass}
                value={values.email}
                onChange={set("email")}
                placeholder={text.emailPlaceholder}
                maxLength={200}
                autoComplete="email"
              />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="cf-subject" className="text-sm font-medium text-foreground">
              {text.subject} *
            </label>
            <select id="cf-subject" className={fieldClass} value={values.subject} onChange={set("subject")}>
              <option value="">{text.subjectPlaceholder}</option>
              {text.subjects.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            {errors.subject && <p className={errorClass}>{errors.subject}</p>}
          </div>
          <button type="button" onClick={goNext} className={primaryButton}>
            {text.next}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="mt-4 space-y-5">
          <div>
            <label htmlFor="cf-message" className="text-sm font-medium text-foreground">
              {text.message} *
            </label>
            <textarea
              id="cf-message"
              className={`${fieldClass} min-h-40 resize-y`}
              value={values.message}
              onChange={set("message")}
              placeholder={text.messagePlaceholder}
              maxLength={4000}
              rows={6}
            />
            {errors.message && <p className={errorClass}>{errors.message}</p>}
          </div>
          {status === "error" && (
            <p role="alert" className="text-sm text-red-600">
              {errorText}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3">
            <button type="submit" disabled={status === "sending"} className={primaryButton}>
              {status === "sending" ? text.sending : text.send}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              disabled={status === "sending"}
              className="rounded-lg border border-border px-5 py-2.5 font-medium text-foreground/80 hover:bg-surface-muted"
            >
              {text.back}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
