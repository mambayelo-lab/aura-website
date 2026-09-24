"use client";

import { ArrowRight, CircleCheck, LoaderCircle } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/content/dictionary";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

export function ContactForm({ labels, email }: { labels: Dictionary["contact"]["form"]; email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        form.reset();
        setStatus("sent");
        return;
      }
      if (response.status === 503) {
        // Direct delivery is not configured: hand the message to the visitor's email app.
        const signature = `${data.name}${data.company ? ` — ${data.company}` : ""}`;
        const body = [data.message, "", signature, data.email].join("\n");
        const subject = `AURA — ${data.interest || "Contact"}`;
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus("fallback");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-card form-success" role="status">
        <CircleCheck size={32} aria-hidden />
        <p className="form-success-title">{labels.successTitle}</p>
        <p>{labels.successText}</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="form-row">
        <label className="field">
          <span>
            {labels.name} <abbr title={labels.required}>*</abbr>
          </span>
          <input name="name" type="text" autoComplete="name" required maxLength={120} />
        </label>
        <label className="field">
          <span>
            {labels.email} <abbr title={labels.required}>*</abbr>
          </span>
          <input name="email" type="email" autoComplete="email" required maxLength={200} />
        </label>
      </div>
      <label className="field">
        <span>{labels.company}</span>
        <input name="company" type="text" autoComplete="organization" maxLength={160} />
      </label>
      <fieldset className="field">
        <legend>{labels.interest}</legend>
        <div className="choice-group">
          {labels.interests.map((option, index) => (
            <label key={option} className="choice">
              <input type="radio" name="interest" value={option} defaultChecked={index === 0} />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="field">
        <span>
          {labels.message} <abbr title={labels.required}>*</abbr>
        </span>
        <textarea name="message" rows={5} required maxLength={5000} placeholder={labels.placeholder} />
      </label>
      {/* Honeypot: hidden from people, filled by bots. */}
      <label className="hp" aria-hidden>
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <LoaderCircle size={17} className="spin" aria-hidden /> {labels.sending}
          </>
        ) : (
          <>
            {labels.submit} <ArrowRight size={17} aria-hidden />
          </>
        )}
      </button>

      <p className="form-note" aria-live="polite">
        {status === "fallback" && labels.fallback}
        {status === "error" && (
          <>
            {labels.error} <a href={`mailto:${email}`}>{email}</a>.
          </>
        )}
        {(status === "idle" || status === "sending") && labels.privacy}
      </p>
    </form>
  );
}
