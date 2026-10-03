import { ArrowUpRight } from "lucide-react";

export type MarketingPageKey =
  "capabilities" | "solutions" | "work" | "insights" | "about" | "contact";

const DATA: Record<
  MarketingPageKey,
  {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; body: string }[];
  }
> = {
  capabilities: {
    eyebrow: "Capabilities",
    title: "The intelligence underneath the system.",
    intro:
      "We connect business strategy, AI agents, automation, applications, data, and existing tools into systems designed for real operations.",
    items: [
      {
        title: "AI strategy & opportunity mapping",
        body: "Identify the workflows where AI can create practical value, then define the use case, constraints, risks, and measures of success.",
      },
      {
        title: "Workflow automation & agents",
        body: "Coordinate repetitive tasks, customer conversations, classification, routing, and follow-ups with clear rules and human escalation.",
      },
      {
        title: "Custom AI products & copilots",
        body: "Build focused AI interfaces and applications around the knowledge and actions people need to do their work.",
      },
      {
        title: "Data, models & systems integration",
        body: "Connect APIs, business data, CRM, messaging, calendars, and internal tools into a dependable end-to-end workflow.",
      },
    ],
  },
  solutions: {
    eyebrow: "Solutions",
    title: "AI systems organized around business outcomes.",
    intro:
      "We start with the operational constraint, then connect the intelligence, software, automation, data, and human handoffs required to solve it.",
    items: [
      {
        title: "Reduce operational bottlenecks",
        body: "Automate repetitive coordination, follow-ups, approvals, and information movement so teams spend more time on decisions.",
      },
      {
        title: "Turn knowledge into an interface",
        body: "Make internal knowledge searchable, conversational, and actionable without forcing people through disconnected tools.",
      },
      {
        title: "Automate decision workflows",
        body: "Use AI for classification, extraction, routing, scheduling, and other predictable decisions with human oversight where judgment matters.",
      },
      {
        title: "Build differentiated AI products",
        body: "Design customer-facing AI experiences and internal applications around a real use case instead of adding AI for its own sake.",
      },
    ],
  },
  work: {
    eyebrow: "Work",
    title: "Representative systems we build.",
    intro:
      "The examples below describe implementation patterns rather than invented client claims. Each system is adapted to the operation, tools, and governance requirements of the business.",
    items: [
      {
        title: "AI Outreach Infrastructure",
        body: "Lead data, enrichment, personalized outreach, inbox handling, AI classification, follow-up, and calendar or human handoff connected into one operating flow.",
      },
      {
        title: "Social Content Engine",
        body: "Content strategy, AI generation, image creation, planning, and platform publishing connected into a repeatable content operation.",
      },
      {
        title: "Customer Operations",
        body: "Website, WhatsApp, email, phone, CRM, scheduling, and human escalation connected around the customer journey.",
      },
      {
        title: "Document Operations",
        body: "Documents and business information extracted, validated, stored, and routed to the next action with traceable handoffs.",
      },
    ],
  },
  insights: {
    eyebrow: "Insights",
    title: "Practical thinking for AI systems that have to work.",
    intro:
      "A growing point of view on AI automation, product design, integration, adoption, and human oversight.",
    items: [
      {
        title: "Where AI automation actually creates ROI",
        body: "A framework for finding high-value work instead of automating tasks simply because they are technically possible.",
      },
      {
        title: "Designing reliable internal copilots",
        body: "What makes an AI interface useful when the underlying knowledge, permissions, and workflows are complex.",
      },
      {
        title: "Build versus buy",
        body: "How to decide when an existing capability is enough and when a differentiated workflow deserves a custom system.",
      },
      {
        title: "From prototype to production",
        body: "The engineering, integration, evaluation, and governance work that turns a promising demo into a dependable system.",
      },
    ],
  },
  about: {
    eyebrow: "About Alligentics",
    title: "Business understanding. Engineering depth. Growth focus.",
    intro:
      "Alligentics combines business thinking with technical implementation to build intelligent systems around the way an organization actually operates.",
    items: [
      {
        title: "Think",
        body: "Understand the business, find the real constraint, and map the system around it.",
      },
      {
        title: "Build",
        body: "Engineer the intelligence, connect the tools, and deploy it into the workflow.",
      },
      {
        title: "Compound",
        body: "Measure what happens, improve the system, and expand what creates lasting value.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Start a conversation.",
    intro:
      "Tell us what you are trying to improve, where work is getting stuck, or what you want an intelligent system to handle.",
    items: [
      { title: "Email", body: "alligenticsai@gmail.com" },
      { title: "WhatsApp", body: "+92 329 247 4455" },
      {
        title: "Discovery",
        body: "Start with the business problem. We will help map the intelligent system inside it.",
      },
    ],
  },
};

export function MarketingPage({ page }: { page: MarketingPageKey }) {
  const data = DATA[page];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="/" className="font-display text-lg font-semibold tracking-tight">
            Alligentics
          </a>
          <nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">
            {[
              ["Capabilities", "/capabilities"],
              ["Solutions", "/solutions"],
              ["Work", "/work"],
              ["Insights", "/insights"],
              ["Pricing", "/#packages"],
              ["About", "/about"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="/contact"
            className="border border-border px-4 py-2.5 text-xs font-semibold transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Talk to an AI strategist"
          >
            Talk to an AI strategist <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
          </a>
        </div>
      </header>
      <section className="relative overflow-hidden border-b border-border px-5 pb-24 pt-28 sm:px-8 lg:pb-32 lg:pt-40">
        <div className="grid-veil absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
            {data.eyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-tight">
            {data.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{data.intro}</p>
          <a
            href="/#contact"
            className="mt-9 inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Talk to an AI strategist <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        {page === "solutions" ? (
          <div className="space-y-5">
            {data.items.map((item, index) => (
              <article
                key={item.title}
                className="grid overflow-hidden border border-border lg:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="border-b border-border bg-surface/30 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    Before / {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-5 font-display text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {
                      [
                        "Repeated coordination and slow handoffs obscure the next priority.",
                        "Useful knowledge is spread across documents and disconnected interfaces.",
                        "Decisions wait on manual sorting, inconsistent context, or unclear ownership.",
                        "Promising product ideas lack a focused experience tied to a real use case.",
                      ][index]
                    }
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Delay", "Context gaps", "Manual effort"]
                      .slice(0, index === 0 ? 3 : 2)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="border border-border px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    After / intended transformation
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-7">{item.body}</p>
                  <div className={`solution-transform solution-transform--${index + 1} mt-6`}>
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                      Illustrative shift
                    </p>
                    <div className="solution-transform__before" aria-label="Current constraint">
                      {[
                        ["Inquiry queue", "Manual check", "Follow-up"],
                        ["Documents", "Keyword search", "Open tabs"],
                        ["Unsorted request", "Manual triage", "Waiting"],
                        ["Generic interface", "Context switch", "Drop-off"],
                      ][index]?.map((node) => (
                        <span key={node}>{node}</span>
                      ))}
                    </div>
                    <div className="solution-transform__signal" aria-hidden="true">
                      <span />
                    </div>
                    <div className="solution-transform__after" aria-label="Intended transformation">
                      {[
                        ["Prioritised", "Next action", "Owner"],
                        ["Grounded answer", "Recommended step", "Source link"],
                        ["Classify", "Route", "Human review"],
                        ["Focused task", "Guided action", "Completion"],
                      ][index]?.map((node) => (
                        <span key={node}>{node}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-7 border-t border-border pt-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Measure what changes
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {
                        [
                          "Time from inquiry to next action; follow-up completion; work requiring manual coordination.",
                          "Time to find a trusted answer; source coverage; successful task completion.",
                          "Decision turnaround; routing accuracy; exception and approval rates.",
                          "Task completion; adoption; quality and reliability in the target use case.",
                        ][index]
                      }
                    </p>
                  </div>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary hover:text-foreground"
                  >
                    {
                      [
                        "Map the bottleneck",
                        "Make knowledge actionable",
                        "Design the decision flow",
                        "Shape the AI product",
                      ][index]
                    }{" "}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : page === "work" ? (
          <div className="space-y-10">
            {data.items.map((item, index) => {
              const stages = [
                ["Lead", "Enrich", "Personalize", "Triage", "Follow-up", "Meeting"],
                ["Brief", "Formats", "Assets", "Review", "Schedule", "Publish"],
                ["Request", "Context", "Route", "Respond", "Resolve"],
                ["Intake", "Extract", "Validate", "Review", "Record", "Audit"],
              ][index];
              const details = [
                {
                  context: "Outbound prospecting across multiple tools.",
                  constraint: "Lead context and reply status can become fragmented across steps.",
                  oversight: "Review low-confidence replies and scheduling exceptions.",
                  outcome: "Lead-to-next-action continuity",
                  integration:
                    "Lead source · enrichment provider · email delivery · reply inbox · intent classifier · calendar · sales owner",
                  cta: "Trace the lead path",
                  signal: ["Lead", "Enrich", "Personalize", "Triage", "Meeting"],
                },
                {
                  context: "A repeatable content publishing routine.",
                  constraint:
                    "Ideas, assets, approvals, and platform scheduling live in separate stages.",
                  oversight: "Approve copy and creative assets before scheduling.",
                  outcome: "Consistent publishing operations",
                  integration:
                    "Strategy brief · language model · image generation · approval queue · content calendar · publishing API",
                  cta: "Follow the publishing loop",
                  signal: ["Brief", "Formats", "Assets", "Review", "Schedule", "Publish"],
                },
                {
                  context: "Customer requests arriving through multiple channels.",
                  constraint: "Teams can lose context when a request changes channel or owner.",
                  oversight: "Review sensitive or uncertain requests with context attached.",
                  outcome: "Context-rich customer handoff",
                  integration:
                    "Website · WhatsApp · email · phone capture · CRM · scheduling · escalation queue · customer record",
                  cta: "Explore the customer journey",
                  signal: ["Request", "Context", "Route", "Respond", "Resolve"],
                },
                {
                  context: "Business documents that need structured handling.",
                  constraint:
                    "Manual extraction and inconsistent validation slow the next decision.",
                  oversight: "Review extraction or validation exceptions before record creation.",
                  outcome: "Traceable information processing",
                  integration:
                    "File intake · OCR/parser · extraction model · validation rules · exception queue · database · audit log",
                  cta: "Inspect the document trail",
                  signal: ["Intake", "Extract", "Validate", "Review", "Record", "Audit"],
                },
              ][index];
              if (!stages || !details) return null;
              return (
                <article
                  key={item.title}
                  className={`work-case work-case--${index + 1} overflow-hidden border border-border`}
                >
                  <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="border-b border-border bg-surface/30 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                        Implementation pattern / 0{index + 1}
                      </p>
                      <h2 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
                        {item.title}
                      </h2>
                      <p className="mt-5 text-sm leading-6 text-muted-foreground">
                        <strong className="text-foreground">Context:</strong> {details.context}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        <strong className="text-foreground">Constraint:</strong>{" "}
                        {details.constraint}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        <strong className="text-foreground">Human oversight:</strong>{" "}
                        {details.oversight}
                      </p>
                      <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                        Representative pattern · not a client case study
                      </p>
                    </div>
                    <div className="p-6 sm:p-8">
                      <div
                        className={`work-signal-visual work-signal-visual--${index + 1}`}
                        aria-label={`Illustrative system path: ${details.signal.join(" to ")}`}
                      >
                        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                          Signal path
                        </p>
                        <div className="work-signal-visual__nodes">
                          {details.signal.map((signalNode) => (
                            <span key={signalNode} className="work-signal-visual__node">
                              <i aria-hidden="true" />
                              {signalNode}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                        Implementation path
                      </p>
                      <div className="mt-6 space-y-0">
                        {stages.map((stage, stageIndex) => (
                          <div key={stage} className="grid grid-cols-[2.5rem_1fr] gap-3">
                            <div className="flex flex-col items-center">
                              <span className="flex h-8 w-8 items-center justify-center border border-primary/40 font-mono text-[10px] text-primary">
                                0{stageIndex + 1}
                              </span>
                              {stageIndex < stages.length - 1 ? (
                                <span className="my-1 min-h-5 w-px flex-1 bg-border" />
                              ) : null}
                            </div>
                            <div className={stageIndex === stages.length - 1 ? "pb-1" : "pb-5"}>
                              <p className="text-sm font-medium">{stage}</p>
                              {stageIndex === stages.length - 1 ? (
                                <p className="mt-1 text-xs text-muted-foreground">
                                  Outcome category: {details.outcome}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-6 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
                        <strong className="text-foreground">System built:</strong> {item.body}
                      </p>
                      <p className="mt-3 text-xs leading-5 text-muted-foreground">
                        <strong className="text-foreground">Integration surface:</strong>{" "}
                        {details.integration}
                      </p>
                      <a
                        href="/contact"
                        className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary hover:text-foreground"
                      >
                        {details.cta} <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {data.items.map((item, index) => (
              <article key={item.title} className="bg-background p-7 sm:p-10 lg:min-h-[260px]">
                <span className="font-mono text-[10px] tracking-[0.18em] text-primary">
                  0{index + 1}
                </span>
                <h2 className="mt-8 font-display text-2xl font-semibold">{item.title}</h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">{item.body}</p>
                {page === "contact" && index < 2 ? (
                  <a
                    href={index === 0 ? "mailto:alligenticsai@gmail.com" : "tel:+923292474455"}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {index === 0 ? "Email us" : "Call / WhatsApp"}{" "}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="border-t border-border px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Alligentics · Think. Build. Compound.</span>
          <div className="flex flex-wrap gap-4">
            <a href="/capabilities">Capabilities</a>
            <a href="/solutions">Solutions</a>
            <a href="/work">Work</a>
            <a href="/insights">Insights</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
