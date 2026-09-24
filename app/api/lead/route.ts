import { NextResponse } from "next/server";

type Lead = { name: string; email: string; company: string; interest: string; message: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/**
 * Receives contact-form submissions and forwards them by email through Resend.
 * Requires RESEND_API_KEY and LEAD_TO_EMAIL; LEAD_FROM_EMAIL is optional.
 * Without them it answers 503 so the form falls back to the visitor's email app.
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot filled: pretend success so bots do not retry.
  if (field(payload.website, 200)) return NextResponse.json({ ok: true });

  const lead: Lead = {
    name: field(payload.name, 120),
    email: field(payload.email, 200),
    company: field(payload.company, 160),
    interest: field(payload.interest, 120),
    message: field(payload.message, 5000),
  };
  if (!lead.name || !lead.message || !EMAIL.test(lead.email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json({ ok: false, error: "delivery_not_configured" }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL ?? "AURA Website <onboarding@resend.dev>",
      to: to.split(",").map((address) => address.trim()),
      reply_to: lead.email,
      subject: `New AURA lead — ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
      text: [
        `Name: ${lead.name}`,
        `Email: ${lead.email}`,
        `Company: ${lead.company || "—"}`,
        `Interest: ${lead.interest || "—"}`,
        "",
        lead.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Lead delivery failed", response.status, await response.text());
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
