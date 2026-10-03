import { createFileRoute } from "@tanstack/react-router";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  challenge?: unknown;
  timeline?: unknown;
  budget?: unknown;
};

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

/**
 * Forwards website enquiries to a webhook (for example an n8n or Make workflow that
 * emails the team and logs the lead in the CRM). Set CONTACT_WEBHOOK_URL to turn it on.
 * Without it we answer 503 and the form falls back to the visitor's email app.
 */
async function handleContact(request: Request) {
  const webhook = process.env["CONTACT_WEBHOOK_URL"];
  if (!webhook) {
    return Response.json({ error: "Contact delivery is not configured." }, { status: 503 });
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const lead = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    company: clean(body.company, 160),
    challenge: clean(body.challenge, 4000),
    timeline: clean(body.timeline, 60),
    budget: clean(body.budget, 60),
    source: "alligentics.com",
    submittedAt: new Date().toISOString(),
  };

  if (
    !lead.name ||
    !lead.company ||
    !lead.challenge ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)
  ) {
    return Response.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  try {
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    if (!upstream.ok) {
      console.error(`Contact webhook responded with ${upstream.status}`);
      return Response.json({ error: "Could not deliver your message." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact webhook failed:", error);
    return Response.json({ error: "Could not deliver your message." }, { status: 502 });
  }
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => handleContact(request),
    },
  },
});
