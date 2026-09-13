import {
  ArrowUpRight,
  BadgeCheck,
  Bell,
  Bot,
  CalendarCheck,
  Check,
  FileStack,
  Globe,
  Mail,
  MessageCircle,
  Minus,
  PhoneCall,
  PhoneMissed,
  Star,
  UserCheck,
} from "lucide-react";

function SectionHeading({
  eyebrow,
  title,
  intro,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary sm:text-[11px] sm:tracking-[0.22em]">{eyebrow}</p>
      <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.12] tracking-normal text-balance sm:text-[clamp(2rem,4vw,3.25rem)] sm:leading-[1.08] sm:tracking-tight">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground text-pretty sm:mt-5 sm:text-lg sm:leading-relaxed">{intro}</p>
      ) : null}
    </div>
  );
}

const CAPABILITIES = [
  {
    icon: MessageCircle,
    title: "WhatsApp automation",
    points: [
      "AI replies, support and FAQ handling",
      "Lead qualification and information capture",
      "Appointment booking and order status",
      "Automatic follow-ups with human handover",
      "WhatsApp connected to CRM, email and internal alerts",
    ],
  },
  {
    icon: PhoneCall,
    title: "AI phone & call automation",
    points: [
      "AI receptionist for inbound calls",
      "Outbound qualification and reminder calls",
      "Appointment confirmation and follow-ups",
      "Missed-call recovery, call notes into CRM",
      "Escalation to a person when needed",
    ],
  },
  {
    icon: Mail,
    title: "Email automation",
    points: [
      "AI-assisted replies and classification",
      "Email connected to WhatsApp alerts, CRM or tasks",
      "Automated follow-up sequences",
      "Inquiry and attachment processing",
    ],
  },
  {
    icon: Globe,
    title: "Website, social & ad leads",
    points: [
      "Connects to your existing site without a rebuild",
      "Facebook and Instagram lead capture",
      "AI qualifies each inquiry instantly",
      "Confirmation by WhatsApp and email",
      "Salesperson notified, follow-up scheduled",
    ],
  },
];

export function Capabilities() {
  return (
    <section id="automation" className="scroll-mt-20 border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <SectionHeading
          eyebrow="What we can automate"
          title="Every channel your customers already use"
          intro="We connect complete workflows across the channels your business already uses."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {CAPABILITIES.map((cap, index) => (
            <article
              key={cap.title}
              className="surface-panel animate-rise rounded-2xl p-8"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <cap.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                {cap.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {cap.points.map((point) => (
                  <li key={point} className="flex items-baseline gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const JOURNEY = [
  "Customer gets in touch",
  "AI understands the request",
  "Instant reply, any hour",
  "Lead is qualified",
  "Details stored in your CRM",
  "Salesperson notified",
  "Quotation generated or sent",
  "Follow-up scheduled automatically",
  "Appointment booked if needed",
  "Customer receives confirmation",
];

export function LeadJourney() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="Example workflow"
        title="From first message to booked appointment"
        intro="One trigger, one connected chain of actions. Less manual work, faster responses, fewer missed opportunities."
      />
      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {JOURNEY.map((step, index) => (
          <li
            key={step}
            className="animate-rise rounded-xl border border-border bg-background/50 p-5"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <span className="font-mono text-[11px] text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-sm leading-relaxed">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const BRIEF = [
  { label: "New leads", value: "42" },
  { label: "Qualified leads", value: "18" },
  { label: "Quotations sent", value: "11" },
  { label: "Appointments booked", value: "7" },
  { label: "Follow-ups required", value: "13" },
  { label: "Unanswered inquiries", value: "3" },
];

const RECOVERY = [
  { icon: PhoneMissed, title: "Missed-lead recovery", body: "A missed call triggers an instant message, an AI conversation, qualification, then a nudge to your sales team." },
  { icon: Star, title: "Feedback automation", body: "Happy customers are asked for a review; unhappy ones reach management before they reach the internet." },
  { icon: CalendarCheck, title: "Scheduling", body: "AI checks slots, books, confirms, reminds and reschedules — ideal for clinics, salons, real estate and consultants." },
  { icon: FileStack, title: "Document processing", body: "Invoices, quotations, forms and CVs read, validated, stored and passed to the next step automatically." },
];

export function Insights() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Reporting & insights"
              title="Your business, summarised every morning"
               intro="Instead of checking five systems, you get one clear brief with the items that need your attention."
            />
            <div className="mt-10 space-y-4">
              {RECOVERY.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-base font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="surface-panel animate-rise rounded-2xl p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                <Bell className="h-4 w-4 text-accent" />
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Sample daily business brief
                </p>
              </div>
              <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {BRIEF.map((row) => (
                   <div key={row.label} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 bg-background p-5 sm:p-6">
                    <dt className="text-sm text-muted-foreground">{row.label}</dt>
                    <dd className="font-display text-2xl font-semibold text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Delivered through WhatsApp, email or Slack, based on how your team works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const HUMAN = {
  ai: [
    "Repetitive questions",
    "Data collection",
    "Lead qualification",
    "Routine communication",
    "Follow-ups and classification",
    "Scheduling and information processing",
  ],
  people: [
    "Important decisions",
    "Complex customer situations",
    "Sensitive cases",
    "Negotiations",
    "Approvals and exceptions",
  ],
};

export function HumanLoop() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="Human in the loop"
        title={
          <>
            AI handles the repetitive work.{" "}
            <span className="text-gradient">Your team stays in control.</span>
          </>
        }
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <article className="surface-panel animate-rise rounded-2xl p-8">
          <div className="flex items-center gap-3">
            <Bot className="h-5 w-5 text-primary" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              AI can handle
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            {HUMAN.ai.map((item) => (
              <li key={item} className="flex items-baseline gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="animate-rise rounded-2xl border border-border p-8 [animation-delay:0.1s]">
          <div className="flex items-center gap-3">
            <UserCheck className="h-5 w-5 text-muted-foreground" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Your people stay responsible for
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {HUMAN.people.map((item) => (
              <li key={item} className="flex items-baseline gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

const PROCESS = [
  { title: "Business discovery", body: "Your model, customer journey, tools, channels and pain points." },
  { title: "Automation audit", body: "What can be automated, what should stay human, what to connect." },
  { title: "Workflow design", body: "The full flow mapped and approved before anything is built." },
  { title: "Integration", body: "WhatsApp, email, website, CRM, calendar, databases, social." },
  { title: "AI configuration", body: "Trained on your information, tone, rules and escalation points." },
  { title: "Testing", body: "Normal chats, odd questions, errors, handoff, data transfer, alerts." },
  { title: "Deployment", body: "Once you approve, it goes live inside your real workflow." },
  { title: "Monitoring & optimisation", body: "We watch real usage and keep improving the workflows." },
];

const CLIENT_INPUTS = [
  "Business information",
  "Website / integration access",
  "WhatsApp Business resources",
  "Meta Business resources",
  "Email authorisation",
  "CRM access",
  "Calendar access",
  "Product & service information",
  "FAQs and pricing information",
  "Existing workflows and documents",
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <SectionHeading
          eyebrow="How we work"
          title="Eight steps from first conversation to live system"
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, index) => (
            <div
              key={step.title}
              className="animate-rise bg-background p-7 transition-colors hover:bg-surface/60"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="font-mono text-[11px] text-primary">
                Step {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              What we need from you
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We handle the technical implementation. You authorise the business resources the
              selected automation needs.
            </p>
            <p className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-background/50 p-5 text-sm">
              <BadgeCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
               You remain the owner of your accounts and data at all times.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {CLIENT_INPUTS.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 rounded-xl border border-border bg-background/50 px-5 py-4 text-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type Cell = true | false | string;

const TIERS = ["Starter", "Growth", "Advanced"] as const;

const PACKAGE_ROWS: { feature: string; values: [Cell, Cell, Cell] }[] = [
  { feature: "Business workflow assessment", values: [true, true, true] },
  { feature: "Automation audit", values: [true, true, true] },
  { feature: "Automation workflows", values: ["1", "Multiple", "Multiple & interconnected"] },
  { feature: "AI-powered customer interaction", values: [true, true, true] },
  { feature: "WhatsApp automation", values: ["Basic", "Advanced", "Advanced"] },
  { feature: "Email automation", values: ["Basic", true, true] },
  { feature: "Lead capture", values: [true, true, true] },
  { feature: "Lead qualification", values: [false, true, true] },
  { feature: "Automated follow-ups", values: ["Basic", true, "Advanced"] },
  { feature: "CRM / database integration", values: ["Basic", true, true] },
  { feature: "Website / lead-form integration", values: [false, true, true] },
  { feature: "Appointment automation", values: [false, true, true] },
  { feature: "Social-media lead integration", values: [false, true, true] },
  { feature: "AI phone automation", values: [false, false, true] },
  { feature: "Document automation", values: [false, false, true] },
  { feature: "Business reporting", values: ["Basic", true, "Advanced"] },
  { feature: "Custom integrations", values: ["Limited", true, "Advanced"] },
  { feature: "Human handoff", values: [true, true, true] },
];

const PRICING_FACTORS = [
  "Complexity of the workflow",
  "Number of integrations",
  "AI requirements",
  "Number of automation workflows",
  "Development time",
  "Third-party platform and API costs",
  "Maintenance requirements",
  "Business value created",
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-accent" />;
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" />;
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

export function Packages() {
  return (
    <section id="packages" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="Packages"
        title="Start small, or automate the whole operation"
        intro="Three levels of engagement. Every package begins with a workflow assessment and an automation audit."
      />

      <div className="mt-10 grid gap-4 md:hidden">
        {TIERS.map((tier, tierIndex) => (
          <article key={tier} className="rounded-2xl border border-border bg-surface/30 p-5">
            <h3 className="font-display text-xl font-semibold">{tier}</h3>
            <dl className="mt-5 divide-y divide-border">
              {PACKAGE_ROWS.map((row) => {
                const value = row.values[tierIndex] ?? false;
                return (
                  <div key={`${tier}-${row.feature}`} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
                    <dt className="min-w-0 text-sm leading-5 text-muted-foreground">{row.feature}</dt>
                    <dd className="shrink-0 text-right"><CellValue value={value} /></dd>
                  </div>
                );
              })}
            </dl>
            <p className="mt-4 border-t border-border pt-4 text-sm font-semibold">Quoted per project</p>
          </article>
        ))}
      </div>

      <div className="mt-14 hidden overflow-x-auto rounded-2xl border border-border md:block">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-surface/60">
              <th className="px-6 py-5 text-left font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Feature
              </th>
              {TIERS.map((tier) => (
                <th
                  key={tier}
                  className="px-6 py-5 text-center font-display text-base font-semibold"
                >
                  {tier}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PACKAGE_ROWS.map((row) => (
              <tr key={row.feature} className="border-t border-border">
                <td className="px-6 py-4 text-left">{row.feature}</td>
                {row.values.map((value, i) => (
                  <td key={`${row.feature}-${i}`} className="px-6 py-4 text-center">
                    <CellValue value={value} />
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t border-border bg-surface/40">
              <td className="px-6 py-5 text-left font-semibold">Pricing</td>
              {TIERS.map((tier) => (
                <td key={`price-${tier}`} className="px-6 py-5 text-center text-xs text-muted-foreground">
                  Quoted per project
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h3 className="font-display text-2xl font-semibold tracking-tight">Pricing philosophy</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Automation shouldn't be priced by message count or feature checkboxes. We quote against
            the work involved and the value created.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary hover:text-accent"
          >
            Request a quote <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {PRICING_FACTORS.map((factor) => (
            <li
              key={factor}
              className="flex items-baseline gap-3 rounded-xl border border-border bg-background/50 px-5 py-4 text-sm"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              />
              {factor}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
