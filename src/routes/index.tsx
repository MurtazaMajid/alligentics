import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  Building2,
  Cpu,
  Database,
  Eye,
  FileStack,
  Gauge,
  Globe,
  Headphones,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MessageSquare,
  Network,
  Phone,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import heroNetwork from "../assets/hero-network.jpg";
import { Button } from "../components/ui/button";
import {
  Capabilities,
  HumanLoop,
  Insights,
  LeadJourney,
  Packages,
  Process,
} from "../components/site-sections";

const TITLE = "Alligentics | AI Automation for Modern Businesses";
const DESCRIPTION =
  "Alligentics builds custom AI automation: assistants, workflow orchestration, lead and document automation, and business integrations that connect your entire tech stack.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alligentics.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://alligentics.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Alligentics",
          description: DESCRIPTION,
          url: "https://alligentics.com/",
          email: "alligenticsai@gmail.com",
          telephone: "+923292474455",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background font-body text-foreground">
      <Header />

      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Services />
        <Difference />
        <Capabilities />
        <LeadJourney />
        <Anatomy />
        <Insights />
        <Process />
        <HumanLoop />
        <ValueMap />
        <Packages />
        <WhyUs />
        <Partners />
        <Manifesto />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#automation", label: "Solutions" },
  { href: "#process", label: "Process" },
  { href: "#packages", label: "Pricing" },
  { href: "#team", label: "About" },
];

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid h-[72px] w-full max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:h-[82px] sm:gap-6 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-10 lg:px-10 xl:px-12">

        {/* Logo + Brand */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          aria-label="Alligentics home"
        >
          <img
            src="/alligentics-logo.png"
            alt=""
            className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
          />

          <span className="truncate font-display text-lg font-semibold tracking-normal text-foreground sm:text-xl">
            Alligentics
          </span>
        </a>

        {/* Navigation */}
        <nav
          className="hidden w-full max-w-[760px] items-center justify-between justify-self-center lg:flex"
          aria-label="Primary navigation"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[15px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button asChild className="group h-10 shrink-0 rounded-lg px-3 text-xs font-semibold shadow-lg sm:h-12 sm:rounded-xl sm:px-6 sm:text-sm">
          <a href="#contact" aria-label="Book a free call">
            <span className="sm:hidden">Book a call</span>
            <span className="hidden sm:inline">Book a free call</span>
            <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>

      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroNetwork}
        alt="Glowing network of connected nodes representing intelligent automation"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />

      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
        aria-hidden="true"
      />

      <div
        className="grid-veil absolute inset-0 opacity-60"
        aria-hidden="true"
      />

      <div
        className="glow-orb animate-float-slow absolute -left-24 top-24 h-72 w-72"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 md:pb-32 md:pt-28">
        <span className="animate-rise inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary backdrop-blur sm:px-4 sm:text-[11px] sm:tracking-[0.18em]">
          <Sparkles className="h-3.5 w-3.5" />
          Your business apps, working together automatically
        </span>

        <h1 className="animate-rise mt-7 max-w-[24ch] break-words font-display text-[2.35rem] font-bold leading-[1.1] tracking-normal sm:text-[clamp(2.5rem,6.4vw,5rem)] sm:leading-[1.05] sm:tracking-tight [animation-delay:0.08s]">
          Automate the work.{" "}
          <span className="text-gradient">Accelerate the business.</span>
        </h1>

        <p className="animate-rise mt-6 max-w-[56ch] text-base leading-7 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-relaxed [animation-delay:0.16s]">
          We connect the apps your business already uses and add AI to handle
          repetitive, predictable work while your team stays in control.
        </p>

        <div className="animate-rise mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:gap-4 [animation-delay:0.24s]">
          <a
            href="#contact"
            className="animate-pulse-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-semibold text-primary-foreground sm:px-7 sm:py-3.5"
            style={{ background: "var(--gradient-brand)" }}
          >
            Book a discovery session
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="#services"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-center text-sm font-medium text-foreground transition-colors hover:bg-surface sm:px-7 sm:py-3.5"
          >
            See what we automate
          </a>
        </div>

        <dl className="animate-rise mt-12 grid max-w-3xl grid-cols-2 gap-x-5 gap-y-7 border-t border-border pt-7 sm:mt-16 sm:gap-8 sm:pt-8 md:grid-cols-4 [animation-delay:0.32s]">
          {[
            { value: "5-stage", label: "From discovery to launch" },
            { value: "End-to-end", label: "Workflow coverage" },
            { value: "Human + AI", label: "You stay in control" },
            { value: "Custom", label: "Never off-the-shelf" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-2xl font-semibold text-foreground">
                {stat.value}
              </dt>

              <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const CHANNELS = [
  "WhatsApp",
  "Website chat",
  "Email",
  "Phone",
  "CRM",
  "Google Workspace",
  "Slack",
  "Sheets & databases",
  "Invoicing",
  "Calendars",
];

function Marquee() {
  return (
    <section
      className="border-y border-border bg-surface/40 py-5"
      aria-label="Systems we connect"
    >
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {[...CHANNELS, ...CHANNELS].map((channel, index) => (
            <span
              key={`${channel}-${index}`}
              className="flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
            >
              <Zap className="h-3.5 w-3.5 text-primary" />
              {channel}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary sm:text-[11px] sm:tracking-[0.22em]">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.12] tracking-normal text-balance sm:text-[clamp(2rem,4vw,3.25rem)] sm:leading-[1.08] sm:tracking-tight">
        {title}
      </h2>

      {intro ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground text-pretty sm:mt-5 sm:text-lg sm:leading-relaxed">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

const PROBLEMS = [
  {
    icon: Database,
    title: "Manual data entry & CRM updates",
    body: "Customer details copied by hand between messages, spreadsheets, and your CRM.",
  },
  {
    icon: Network,
    title: "Cross-platform integration",
    body: "Your business apps hold useful information, but they do not pass it along.",
  },
  {
    icon: MessageSquare,
    title: "Customer communication",
    body: "Customers wait while staff answer the same questions across different apps.",
  },
  {
    icon: UserCheck,
    title: "Lead management",
    body: "Slow replies and forgotten follow-ups let interested customers go cold.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    body: "Weekly summaries are rebuilt by hand instead of appearing automatically.",
  },
  {
    icon: Eye,
    title: "System monitoring",
    body: "Teams check several systems before they can see what needs attention.",
  },
];

function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="The bottleneck"
        title="The problem isn't a lack of software."
        intro="Your tools do not work together. Every gap between two apps becomes extra work for someone on your team."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((item, index) => (
          <article
            key={item.title}
            className="surface-panel animate-rise group rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60 text-primary transition-colors group-hover:text-accent">
              <item.icon className="h-5 w-5" />
            </span>

            <h3 className="mt-5 font-display text-lg font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

const SERVICES = [
  {
    number: "01",
    icon: Bot,
    title: "AI assistants",
    body: "Support and reception agents for WhatsApp, websites, email, and phone, with reliable handover to your team when needed.",
    wide: true,
  },
  {
    number: "02",
    icon: Workflow,
    title: "Workflow automation",
    body: "Multistep orchestration across departments, so one trigger moves an entire process forward.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Sales & lead automation",
    body: "Capture and qualify new leads, update your CRM, and schedule the next follow-up automatically.",
  },
  {
    number: "04",
    icon: FileStack,
    title: "Data & document automation",
    body: "Read invoices, forms, and CVs automatically instead of typing their details by hand.",
  },
  {
    number: "05",
    icon: Boxes,
    title: "Business integrations",
    body: "Connect your CRM, communications, storage, finance, and internal tools.",
  },
  {
    number: "06",
    icon: Cpu,
    title: "Custom AI systems",
    body: "Bespoke builds when your operation doesn't fit anything off the shelf.",
    wide: true,
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden border-y border-border bg-surface/30"
    >
      <div
        className="glow-orb absolute -right-20 top-10 h-80 w-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <SectionHeading
          eyebrow="What we build"
          title="From manual processes to automated systems"
          intro="Six capabilities that combine into one operating layer for your business."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <article
              key={service.number}
              className={`surface-panel animate-rise group relative overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                service.wide ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <service.icon className="h-5 w-5" />
                </span>

                <span className="font-mono text-xs text-muted-foreground">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
                {service.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section
      id="approach"
      className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-6 md:py-32"
    >
      <SectionHeading
        eyebrow="The strategic shift"
        title={
          <>
            We do more than sell you{" "}
            <span className="text-gradient">another AI tool.</span>
          </>
        }
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <article className="animate-rise rounded-2xl border border-border p-8 opacity-80">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Typical AI agency
          </p>

          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            {[
              "Sells isolated tools",
              "Chatbot-only implementations",
              "One-size-fits-all strategy",
              "Technology before business needs",
            ].map((point) => (
              <li key={point} className="flex items-baseline gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                {point}
              </li>
            ))}
          </ul>
        </article>

        <article
          className="surface-panel animate-rise rounded-2xl p-8 [animation-delay:0.12s]"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            Alligentics
          </p>

          <ul className="mt-6 space-y-4 text-sm">
            {[
              "Starts with the core business problem",
              "Maps the full operational workflow",
              "Integrates multiple tools into one flow",
              "Prioritises measurable business outcomes",
            ].map((point) => (
              <li key={point} className="flex items-baseline gap-3">
                <span
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--gradient-brand)" }}
                />
                {point}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

const ANATOMY = [
  {
    icon: Search,
    title: "Intent understanding",
    body: "Decoding complex requests with advanced language understanding.",
  },
  {
    icon: Layers,
    title: "Knowledge retrieval",
    body: "Real-time context pulled from your own enterprise data.",
  },
  {
    icon: Database,
    title: "CRM logging",
    body: "Every interaction recorded accurately, automatically.",
  },
  {
    icon: Gauge,
    title: "Adaptive follow-ups",
    body: "Proactively managing the next step in the journey.",
  },
  {
    icon: Users,
    title: "Human-in-the-loop",
    body: "Complex issues escalate seamlessly to your team.",
  },
];

function Anatomy() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <SectionHeading
          eyebrow="The Alligentics difference"
          title="We automate the workflow, not just the task"
          intro="A reply is not automation. One automation should connect an entire business process, from first message to logged outcome."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {ANATOMY.map((step, index) => (
            <li
              key={step.title}
              className="animate-rise relative rounded-2xl border border-border bg-background/50 p-6"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="font-mono text-[11px] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>

              <step.icon className="mt-4 h-5 w-5 text-accent" />

              <h3 className="mt-4 font-display text-base font-semibold">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const DEPARTMENTS = [
  {
    icon: TrendingUp,
    title: "Sales",
    body: "Leads and CRM management",
  },
  {
    icon: BarChart3,
    title: "Marketing",
    body: "Automated reporting and content workflows",
  },
  {
    icon: Settings2,
    title: "Operations",
    body: "Approvals and status notifications",
  },
  {
    icon: Headphones,
    title: "Customer support",
    body: "Ticket triage and AI-driven responses",
  },
  {
    icon: FileStack,
    title: "Finance & admin",
    body: "Streamlined document processing",
  },
  {
    icon: Users,
    title: "HR",
    body: "Onboarding and candidate screening",
  },
];

function ValueMap() {
  return (
    <section id="value" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Where we create value"
              title="High-impact automation, department by department"
              intro="If a task is repetitive, rule-based, or data-heavy, it's a prime candidate for automation."
            />

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary hover:text-accent"
            >
              Map your opportunities
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {DEPARTMENTS.map((dept, index) => (
              <div
                key={dept.title}
                className="animate-rise flex items-start gap-4 rounded-xl border border-border bg-background/50 p-6"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <dept.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                <div>
                  <h3 className="font-display text-base font-semibold">
                    {dept.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {dept.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  {
    icon: Building2,
    title: "Business-first",
    body: "We prioritise your operational process over the technology stack.",
  },
  {
    icon: Settings2,
    title: "Customised",
    body: "Every solution is tailored to how your business actually works.",
  },
  {
    icon: Network,
    title: "End-to-end",
    body: "We connect your whole ecosystem, not one isolated step.",
  },
  {
    icon: ShieldCheck,
    title: "Human + AI",
    body: "Systems empower your team and keep you firmly in control.",
  },
  {
    icon: Layers,
    title: "Scalable",
    body: "Architecture built to grow alongside your business.",
  },
];

function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Why Alligentics"
        title={
          <>
            Practical automation that creates{" "}
            <span className="text-gradient">measurable improvements.</span>
          </>
        }
        intro="Reply faster, miss fewer leads, reduce repetitive work, and keep customer information organised."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((reason, index) => (
          <article
            key={reason.title}
            className="surface-panel animate-rise rounded-2xl p-7"
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            <reason.icon className="h-5 w-5 text-accent" />

            <h3 className="mt-5 font-display text-lg font-semibold">
              {reason.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {reason.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

const PARTNERS = [
  {
    icon: Rocket,
    title: "Startups & growing SMBs",
    body: "Scaling operations efficiently with limited resources.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & agencies",
    body: "Automating high-volume client tasks and fulfilment.",
  },
  {
    icon: FileStack,
    title: "Professional services",
    body: "Streamlining documentation and client reporting.",
  },
  {
    icon: TrendingUp,
    title: "Sales-driven teams",
    body: "Improving lead management and pipeline velocity.",
  },
];

function Partners() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <SectionHeading
          eyebrow="Ideal partners"
          title="Built for businesses ready to work smarter"
          intro="You don't need to be an AI company to thrive through AI automation."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map((partner, index) => (
            <article
              key={partner.title}
              className="animate-rise rounded-2xl border border-border bg-background/50 p-7 transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <partner.icon className="h-5 w-5 text-primary" />

              <h3 className="mt-5 font-display text-base font-semibold">
                {partner.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {partner.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="glow-orb absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
        <p className="animate-rise font-display text-[clamp(1.6rem,3.4vw,2.75rem)] font-medium leading-[1.25] text-balance">
          We find the work that no longer needs to be manual, then build a
          connected system that handles it{" "}
          <span className="text-gradient">intelligently.</span>
        </p>

        <p className="mt-10 font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Alligentics
        </p>
      </div>
    </section>
  );
}

const TEAM = [
  {
    name: "Omer Bin Aziz",
    role: "Founder & CEO",
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
];

function Team() {
  return (
    <section
      id="team"
      className="scroll-mt-20 border-y border-border bg-surface/30"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <SectionHeading
          eyebrow="Founding team"
          title="The people behind the systems"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {TEAM.map((member, index) => (
            <article
              key={member.name}
              className="surface-panel animate-rise rounded-2xl p-8 text-center"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full font-display text-lg font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {member.initials}
              </span>

              <h3 className="mt-6 font-display text-lg font-semibold">
                {member.name}
              </h3>

              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {member.role}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {member.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "alligenticsai@gmail.com",
    href: "mailto:alligenticsai@gmail.com",
  },
  {
    icon: Phone,
    label: "+92 329 247 4455",
    href: "tel:+923292474455",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/alligentics?stkn=MzJtZ2Q4cWJ1NzN4",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/alligentics-ai/posts/?feedView=all",
  },
];

function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden">
      <div
        className="glow-orb absolute -bottom-20 right-0 h-96 w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <div className="surface-panel grid gap-10 rounded-2xl p-6 sm:p-8 md:p-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              Connect with us
            </p>

            <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.12] tracking-normal text-balance sm:text-[clamp(2rem,4vw,3.25rem)] sm:leading-[1.08] sm:tracking-tight">
              Book a discovery session
            </h2>

            <p className="mt-4 max-w-[52ch] text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-relaxed">
              We will identify practical automation opportunities and give you a
              clear plan for improving your operation.
            </p>

            <a
              href="mailto:alligenticsai@gmail.com?subject=Discovery%20session%20with%20Alligentics"
              className="animate-pulse-ring mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-brand)" }}
            >
              Start the conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="flex flex-col gap-3 lg:col-span-5">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-4 transition-colors hover:bg-surface sm:px-5"
                >
                  <span className="flex min-w-0 items-center gap-3 text-sm">
                    <link.icon className="h-4.5 w-4.5 shrink-0 text-primary" />
                    <span className="min-w-0 break-all">{link.label}</span>
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}

            <li>
              <a
                href="https://alligentics.com/"
                className="group grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-4 transition-colors hover:bg-surface sm:px-5"
              >
                <span className="flex min-w-0 items-center gap-3 text-sm">
                  <Globe className="h-4.5 w-4.5 shrink-0 text-primary" />

                  <span className="min-w-0 break-all">
                    https://alligentics.com/
                  </span>
                </span>

                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-10 xl:px-12">

        {/* Logo + Brand */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex shrink-0 items-center gap-3 justify-self-start"
          aria-label="Alligentics home"
        >
          <img
            src="/alligentics-logo.png"
            alt=""
            loading="lazy"
            className="h-11 w-11 shrink-0 object-contain"
          />

          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            Alligentics
          </span>
        </a>

        {/* Footer Navigation */}
        <nav
          className="flex w-full max-w-[760px] flex-wrap items-center justify-between gap-5 justify-self-center text-sm text-muted-foreground"
          aria-label="Footer navigation"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="whitespace-nowrap transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        {/* Copyright */}
        <p className="justify-self-start whitespace-nowrap font-mono text-xs text-muted-foreground md:justify-self-end">
          © {new Date().getFullYear()} Alligentics
        </p>

      </div>
    </footer>
  );
}
