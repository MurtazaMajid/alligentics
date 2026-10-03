import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { CONTACT, Reveal, SectionHead, WHATSAPP_URL } from "./shared";
import { NAV } from "./header";

/* ------------------------------------------------------------------ */
/* Contact                                                              */
/* ------------------------------------------------------------------ */

type Status = "idle" | "sending" | "sent" | "mailto";

type Payload = {
  name: string;
  email: string;
  company: string;
  challenge: string;
  timeline: string;
  budget: string;
};

function openMailDraft(payload: Payload) {
  const body = [
    `Name: ${payload.name}`,
    `Work email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Challenge: ${payload.challenge}`,
    `Timeline: ${payload.timeline || "Not specified"}`,
    `Budget: ${payload.budget || "Not specified"}`,
  ].join("\n\n");
  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("New Alligentics discovery request")}&body=${encodeURIComponent(body)}`;
}

const LINKS = [
  { icon: Mail, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: CONTACT.phoneLabel, href: CONTACT.phoneHref },
  { icon: MessageCircle, label: "Chat on WhatsApp", href: WHATSAPP_URL },
] as const;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get("website")) return; // honeypot: real visitors never fill this in

    const payload: Payload = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      company: String(form.get("company") ?? "").trim(),
      challenge: String(form.get("challenge") ?? "").trim(),
      timeline: String(form.get("timeline") ?? ""),
      budget: String(form.get("budget") ?? ""),
    };

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setStatus("sent");
        return;
      }
      // 503 means no delivery endpoint is configured yet: fall back to the visitor's email app.
      openMailDraft(payload);
      setStatus("mailto");
    } catch {
      openMailDraft(payload);
      setStatus("mailto");
    }
  }

  return (
    <section id="contact" className="x-section">
      <div className="x-container">
        <div className="x-card x-contact">
          <div className="x-contact__glow" aria-hidden="true" />
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Reveal>
                <SectionHead
                  eyebrow="Book a discovery session"
                  title={
                    <>
                      Bring us the messy problem.{" "}
                      <span className="x-grad-text">We'll map the next move.</span>
                    </>
                  }
                  intro="Tell us where work gets stuck, where leads go cold, or what you wish ran by itself. We'll identify practical automation opportunities and give you a clear plan."
                />
              </Reveal>

              <ul className="mt-10 space-y-3">
                {LINKS.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="x-contactlink"
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span className="x-icontile x-icontile--sm">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-3">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="x-iconbtn"
                  aria-label="Alligentics on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="x-iconbtn"
                  aria-label="Alligentics on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              {status === "sent" || status === "mailto" ? (
                <div className="flex min-h-[420px] flex-col justify-center" role="status">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--x-mint)]">
                    {status === "sent" ? "Message received" : "Almost there"}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold">
                    {status === "sent"
                      ? "Thank you. We'll be in touch soon."
                      : "Your email draft is ready."}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-[color:var(--muted-foreground)]">
                    {status === "sent"
                      ? "Our team will review your message and reply to the email you provided."
                      : `Your email app should now contain your details. If it did not open, write to us at ${CONTACT.email} or message us on WhatsApp.`}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="x-btn x-btn--ghost mt-7 w-fit"
                  >
                    Message us on WhatsApp
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  aria-label="Alligentics project inquiry form"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="x-field">
                      <span>Name</span>
                      <input name="name" required autoComplete="name" />
                    </label>
                    <label className="x-field">
                      <span>Work email</span>
                      <input name="email" type="email" required autoComplete="email" />
                    </label>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="x-field">
                      <span>Company</span>
                      <input name="company" required autoComplete="organization" />
                    </label>
                    <label className="x-field">
                      <span>Timeline (optional)</span>
                      <select name="timeline" defaultValue="">
                        <option value="">Not sure yet</option>
                        <option>Within 30 days</option>
                        <option>1–3 months</option>
                        <option>3–6 months</option>
                        <option>6+ months</option>
                      </select>
                    </label>
                  </div>
                  <label className="x-field">
                    <span>Main challenge</span>
                    <textarea
                      name="challenge"
                      required
                      rows={5}
                      placeholder="What is currently manual, slow or hard to scale?"
                    />
                  </label>
                  <label className="x-field">
                    <span>Budget (optional)</span>
                    <select name="budget" defaultValue="">
                      <option value="">Prefer to discuss</option>
                      <option>Under PKR 30,000</option>
                      <option>PKR 30,000–100,000</option>
                      <option>PKR 100,000+</option>
                    </select>
                  </label>

                  {/* Honeypot field: hidden from people, tempting to bots. */}
                  <div
                    className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                    aria-hidden="true"
                  >
                    <label>
                      Website
                      <input name="website" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <p className="text-xs leading-relaxed text-[color:var(--muted-foreground)]">
                    By submitting, you agree that Alligentics may use these details to respond to
                    your inquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="x-btn x-btn--primary w-full sm:w-auto"
                  >
                    {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    {status === "sending" ? "Sending…" : "Start the conversation"}
                    {status === "sending" ? null : <ArrowUpRight className="h-4 w-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

const PAGES = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/20 pb-28 pt-16 sm:pb-24">
      <div className="x-container">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Alligentics home">
              <img
                src="/alligentics-logo.png"
                alt=""
                loading="lazy"
                className="x-logo h-11 w-11 object-contain"
              />
              <span className="font-display text-xl font-semibold">Alligentics</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--muted-foreground)]">
              AI voice agents, chatbots and workflow automation that connect to the tools your
              business already uses.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="x-foot-title">Explore</p>
            <ul className="mt-4 space-y-3">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a className="x-foot-link" href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a className="x-foot-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="More pages">
            <p className="x-foot-title">More</p>
            <ul className="mt-4 space-y-3">
              {PAGES.map((page) => (
                <li key={page.href}>
                  <a className="x-foot-link" href={page.href}>
                    {page.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="x-foot-title">Contact</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a className="x-foot-link" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a className="x-foot-link" href={CONTACT.phoneHref}>
                  {CONTACT.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  className="x-foot-link"
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="x-foot-link"
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-[color:var(--muted-foreground)] sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Alligentics. All rights reserved.</p>
          <p>Automate the work. Accelerate the business.</p>
        </div>
      </div>
    </footer>
  );
}
