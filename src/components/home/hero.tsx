import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  Globe,
  Hash,
  Mail,
  MessageCircle,
  PhoneCall,
  Receipt,
  Table2,
  Users,
  Phone,
  CalendarDays,
} from "lucide-react";

import { useInView, usePrefersReducedMotion, useTimedLoop } from "../../hooks/use-motion";

/* ------------------------------------------------------------------ */
/* Live demo: a phone call becomes a qualified, booked CRM record.     */
/* ------------------------------------------------------------------ */

const MESSAGES = [
  { from: "caller", text: "Hi, I'd like a quote and a visit sometime next week." },
  { from: "ai", text: "Of course! May I have your name and what you're looking for?" },
  { from: "caller", text: "Sarah Mitchell. A full-office installation, about 20 desks." },
  { from: "ai", text: "Thanks, Sarah. I have Tuesday at 3 PM. Shall I book it?" },
  { from: "caller", text: "Yes, please." },
  { from: "ai", text: "Done! A confirmation is on its way to your WhatsApp." },
] as const;

const FINAL_STEP = 7;

const EVENTS = [
  { at: 0, label: "Call answered instantly" },
  { at: 2, label: "Lead qualified" },
  { at: 3, label: "CRM record updated" },
  { at: 5, label: "Appointment booked" },
  { at: 7, label: "Team notified on Slack" },
] as const;

function Wave({ mode }: { mode: "ai" | "caller" | "idle" }) {
  return (
    <div className={`x-wave x-wave--${mode}`} aria-hidden="true">
      {Array.from({ length: 40 }, (_, i) => (
        <i
          key={i}
          style={
            { "--h": `${22 + ((i * 37) % 68)}%`, "--d": `${(i % 10) * 0.08}s` } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

function CrmRow({ label, value, filled }: { label: string; value: string; filled: boolean }) {
  return (
    <div className="x-crm-row">
      <dt>{label}</dt>
      <dd key={filled ? "on" : "off"} className={filled ? "is-filled" : "is-empty"}>
        {filled ? value : <span className="x-skeleton" aria-hidden="true" />}
      </dd>
    </div>
  );
}

function HeroDemo() {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);
  const [step] = useTimedLoop({
    total: FINAL_STEP + 1,
    stepMs: 1900,
    holdLastMs: 3600,
    active: inView,
  });

  const speaker = step <= 5 ? (MESSAGES[step]?.from ?? "idle") : "idle";
  const stage = step >= 5 ? "Booked" : step >= 2 ? "Qualified" : "New lead";

  return (
    <div
      ref={ref}
      className="x-hero-demo"
      role="img"
      aria-label="Animated example: an AI voice agent answers a call, qualifies the caller, books an appointment and updates the CRM."
    >
      <div className="x-demo-glow" aria-hidden="true" />

      <div className="x-card x-call">
        <div className="x-demo-bar">
          <span className="x-demo-title">
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            Inbound call · AI voice agent
          </span>
          <span className="x-live">
            <i /> Live
          </span>
        </div>

        <Wave mode={speaker} />

        <ol className="x-transcript">
          {MESSAGES.map((message, index) => (
            <li
              key={message.text}
              className={`x-bubble x-bubble--${message.from} ${index <= step ? "is-in" : ""}`}
            >
              <span className="x-bubble__who">
                {message.from === "ai" ? "Alligentics AI" : "Caller"}
              </span>
              {message.text}
            </li>
          ))}
        </ol>
      </div>

      <div className="x-card x-crm">
        <div className="x-demo-bar">
          <span className="x-demo-title">
            <Users className="h-4 w-4" aria-hidden="true" />
            CRM · auto-updated
          </span>
          <span
            className={`x-stage x-stage--${stage === "Booked" ? "done" : stage === "Qualified" ? "mid" : "new"}`}
          >
            {stage}
          </span>
        </div>

        <dl className="x-crm-rows">
          <CrmRow label="Name" value="Sarah Mitchell" filled={step >= 2} />
          <CrmRow label="Request" value="Office installation · 20 desks" filled={step >= 2} />
          <CrmRow label="Source" value="Phone call" filled={step >= 0} />
          <CrmRow label="Appointment" value="Tue · 3:00 PM" filled={step >= 3} />
        </dl>

        <ul className="x-events">
          {EVENTS.map((event) => (
            <li key={event.label} className={step >= event.at ? "is-done" : ""}>
              <span className="x-events__tick">
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
              </span>
              {event.label}
            </li>
          ))}
        </ul>
      </div>

      <p className="x-demo-note">Illustrative example</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

const FACTS = [
  { icon: Phone, label: "Voice, WhatsApp, email & web" },
  { icon: Table2, label: "Connects to your CRM and tools" },
  { icon: Users, label: "Human handover built in" },
  { icon: CalendarCheck, label: "Custom to your workflow" },
] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-10 sm:pt-14 lg:pb-20 lg:pt-14">
      <div className="x-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-16">
        <div>
          <span className="x-pill animate-rise">
            <i aria-hidden="true" />
            AI voice agents · Chatbots · CRM automation
          </span>

          <h1 className="x-h1 animate-rise mt-7 [animation-delay:0.08s]">
            AI agents that talk to your customers and{" "}
            <span className="x-grad-text">update your CRM.</span>
          </h1>

          <p className="x-lead animate-rise mt-7 max-w-[56ch] [animation-delay:0.16s]">
            Alligentics builds AI voice agents, WhatsApp and website chatbots, and workflow
            automation that reply instantly, qualify leads, book appointments and log everything,
            with your team always in control.
          </p>

          <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row [animation-delay:0.24s]">
            <a href="#contact" className="x-btn x-btn--primary">
              Book a free discovery call
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#demo" className="x-btn x-btn--ghost">
              See it in action
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="animate-rise mt-12 grid gap-x-8 gap-y-4 border-t border-white/10 pt-7 sm:grid-cols-2 [animation-delay:0.32s]">
            {FACTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm text-[color:var(--foreground)]/85"
              >
                <span className="x-factbadge">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise [animation-delay:0.2s]">
          <HeroDemo />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Tools strip                                                          */
/* ------------------------------------------------------------------ */

const TOOLS = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Globe, label: "Website chat" },
  { icon: Mail, label: "Email" },
  { icon: Phone, label: "Phone" },
  { icon: Users, label: "CRM" },
  { icon: Globe, label: "Google Workspace" },
  { icon: Hash, label: "Slack" },
  { icon: Table2, label: "Sheets & databases" },
  { icon: Receipt, label: "Invoicing" },
  { icon: CalendarDays, label: "Calendars" },
] as const;

export function ToolsStrip() {
  const reduced = usePrefersReducedMotion();
  const items = reduced ? TOOLS : [...TOOLS, ...TOOLS];

  return (
    <section
      aria-label="Tools and channels we connect"
      className="relative border-y border-white/[0.07] bg-white/[0.015] py-8"
    >
      <p className="x-container mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
        Works with the channels and tools you already use
      </p>
      <div className="x-marquee">
        <ul className={`x-marquee__track ${reduced ? "is-static" : ""}`}>
          {items.map(({ icon: Icon, label }, index) => (
            <li
              key={`${label}-${index}`}
              className="x-chip"
              aria-hidden={index >= TOOLS.length ? "true" : undefined}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
