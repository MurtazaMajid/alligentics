import { ArrowUpRight, Check, ChevronDown } from "lucide-react";

import { Reveal, SectionHead, SpotCard } from "./shared";

/* ------------------------------------------------------------------ */
/* Pricing                                                              */
/* ------------------------------------------------------------------ */

type Row = { label: string; values: readonly [string, string, string] };

const ROWS: readonly Row[] = [
  {
    label: "Getting started",
    values: ["Quick workflow review", "Full review + plan", "Every department"],
  },
  { label: "Customer chats", values: ["1 channel", "WhatsApp + email", "All channels + phone"] },
  { label: "Lead handling", values: ["Capture", "Qualify + website & ads", "Surge + documents"] },
  {
    label: "Social media",
    values: ["1 platform", "Instagram + Facebook", "All platforms connected"],
  },
  { label: "Tool connections", values: ["1 tool", "CRM + extra tools", "CRM + unlimited tools"] },
  { label: "Reports", values: ["Monthly summary", "Live dashboard", "Advanced dashboard"] },
];

const TIERS = [
  {
    name: "Snap",
    label: "Starter",
    line: "Get your first workflow moving.",
    audience: "For solo founders and small teams automating one process for the first time.",
    setup: "$199",
    monthly: "$99",
    featured: false,
  },
  {
    name: "Surge",
    label: "Growth",
    line: "Connect the whole funnel.",
    audience: "For growing teams whose leads and workflows do not yet connect.",
    setup: "$499",
    monthly: "$199",
    featured: true,
  },
  {
    name: "Apex",
    label: "Custom",
    line: "Run the operation on AI.",
    audience: "For businesses ready to automate connected work across departments.",
    setup: "",
    monthly: "",
    featured: false,
  },
] as const;

const FACTORS = [
  "Complexity of the workflow",
  "Number of integrations",
  "AI requirements",
  "Number of automation workflows",
  "Development time",
  "Third-party platform and API costs",
  "Maintenance requirements",
  "Business value created",
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="x-section">
      <div className="x-container">
        <Reveal>
          <SectionHead
            center
            eyebrow="Pricing"
            title={
              <>
                Start with one workflow or{" "}
                <span className="x-grad-text">connect the whole operation.</span>
              </>
            }
            intro="Every project receives a clear, specific quote before work begins. Prices are shown in US dollars; other currencies can be quoted on request."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {TIERS.map((tier, tierIndex) => (
            <Reveal key={tier.name} index={tierIndex} className="h-full">
              <SpotCard
                className={`x-price h-full ${tier.featured ? "x-card--accent x-price--featured" : ""}`}
              >
                {tier.featured ? <span className="x-price__badge">Most connected</span> : null}
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--electric)]">
                  {tier.label}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{tier.name}</h3>
                <p className="mt-1 text-[color:var(--foreground)]/90">{tier.line}</p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  {tier.audience}
                </p>

                {tier.setup ? (
                  <>
                    <p className="mt-7 flex items-baseline gap-2">
                      <span className="font-display text-4xl font-semibold tracking-tight">
                        {tier.setup}
                      </span>
                      <span className="text-sm text-[color:var(--muted-foreground)]">
                        one-time setup
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-[color:var(--foreground)]/90">
                      then <span className="font-semibold">{tier.monthly}</span> / month
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mt-7 font-display text-4xl font-semibold tracking-tight">
                      Custom quote
                    </p>
                    <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
                      Scoped to your operation
                    </p>
                  </>
                )}

                <a
                  href="#contact"
                  className={`x-btn mt-7 w-full ${tier.featured ? "x-btn--primary" : "x-btn--ghost"}`}
                >
                  Request a quote
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <ul className="mt-8 space-y-3.5 border-t border-white/10 pt-7">
                  {ROWS.map((row) => (
                    <li key={row.label} className="flex items-start gap-3 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--x-mint)]"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="text-[color:var(--muted-foreground)]">{row.label}: </span>
                        {row.values[tierIndex]}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--x-mint)]"
                      aria-hidden="true"
                    />
                    Human handoff
                  </li>
                </ul>
              </SpotCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="x-card p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--electric)]">
                  Pricing philosophy
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  Setup is a one-time build fee. The scope shapes the final quote.
                </h3>
              </div>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {FACTORS.map((factor) => (
                <li key={factor} className="x-tag">
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Team                                                                 */
/* ------------------------------------------------------------------ */

const TEAM = [
  {
    name: "Omar Bin Aziz",
    role: "Co-founder & CEO",
    initials: "OA",
    body: "Leads overall business strategy, operations, and business development.",
  },
  {
    name: "Murtaza Majid",
    role: "Co-founder & CTO",
    initials: "MM",
    body: "Leads automation architecture, AI integrations, and the technical build.",
  },
  {
    name: "Muhammad Hassan",
    role: "Co-founder & CRO",
    initials: "MH",
    body: "Leads sales, client outreach, and business development.",
  },
] as const;

export function Team() {
  return (
    <section id="team" className="x-section">
      <div className="x-container">
        <Reveal>
          <SectionHead
            eyebrow="Founding team"
            title={
              <>
                The people behind <span className="x-grad-text">the systems.</span>
              </>
            }
            intro="Business, engineering and growth under one roof, so what we sell is what we can actually build."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {TEAM.map((person, index) => (
            <Reveal key={person.name} index={index}>
              <SpotCard className="h-full p-7">
                <span className="x-avatar">{person.initials}</span>
                <h3 className="mt-6 font-display text-xl font-semibold">{person.name}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--electric)]">
                  {person.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  {person.body}
                </p>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: "What does Alligentics actually build?",
    a: "AI voice agents, WhatsApp and website chatbots, workflow automation, sales and lead automation, data and document automation, business integrations, and custom AI systems. We connect them so one trigger moves a whole process forward, from first message to logged outcome.",
  },
  {
    q: "Do I need to replace my current tools?",
    a: "No. We connect the apps your business already uses, including your CRM, communications, calendars and storage, and we can connect to your existing website without a rebuild.",
  },
  {
    q: "Will the AI replace my team?",
    a: "No. AI handles repetitive and predictable work. Your people stay responsible for important decisions, sensitive cases, negotiations and approvals, and complex issues are handed over to your team.",
  },
  {
    q: "Who owns my accounts and data?",
    a: "You do, always. We handle the technical implementation; you authorise the business resources the chosen automation needs, such as CRM, calendar or WhatsApp Business access.",
  },
  {
    q: "How is pricing worked out?",
    a: "Snap (Starter) is $199 for setup plus $99 a month, and Surge (Growth) is $499 for setup plus $199 a month. Apex is a custom quote for businesses automating across departments. The final price depends on workflow complexity, integrations, AI requirements, delivery effort and the support you need, and you receive a clear quote before any work begins.",
  },
  {
    q: "How do we test it before it goes live?",
    a: "We test normal requests, unusual questions, handovers to your team and data transfers before launch, then monitor real use and keep improving it afterwards.",
  },
  {
    q: "How do we get started?",
    a: "Book a free discovery session. We will identify practical automation opportunities in your operation and give you a clear plan for improving it.",
  },
] as const;

export function Faq() {
  return (
    <section id="faq" className="x-section">
      <div className="x-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <SectionHead
            eyebrow="FAQ"
            title={
              <>
                Questions, <span className="x-grad-text">answered.</span>
              </>
            }
            intro="The things most teams ask before their first discovery call."
          />
          <a href="#contact" className="x-btn x-btn--ghost mt-8">
            Ask us directly
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="space-y-3">
          {FAQS.map((item, index) => (
            <Reveal key={item.q} index={index % 3}>
              <details className="x-faq">
                <summary>
                  {item.q}
                  <ChevronDown className="x-faq__chev h-5 w-5" aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
