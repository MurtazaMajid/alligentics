import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  Bell,
  Check,
  Compass,
  Rocket,
  Search,
  TrendingUp,
  UserCheck,
  Bot,
  X,
  FileText,
  Star,
  CalendarClock,
  PhoneMissed,
} from "lucide-react";

import { useCountUp, useInView } from "../../hooks/use-motion";
import { Reveal, SectionHead, SpotCard } from "./shared";

/* ------------------------------------------------------------------ */
/* Morning brief                                                        */
/* ------------------------------------------------------------------ */

const KPIS = [
  { label: "New leads", value: 42, tone: "blue" },
  { label: "Qualified leads", value: 18, tone: "violet" },
  { label: "Quotations sent", value: 11, tone: "blue" },
  { label: "Appointments booked", value: 7, tone: "mint" },
  { label: "Follow-ups required", value: 13, tone: "violet" },
  { label: "Unanswered inquiries", value: 3, tone: "warn" },
] as const;

const BARS = [38, 52, 44, 66, 58, 79, 92] as const;
const DAYS = ["M", "T", "W", "T", "F", "S", "S"] as const;

function Kpi({
  label,
  value,
  tone,
  active,
}: {
  label: string;
  value: number;
  tone: string;
  active: boolean;
}) {
  const shown = useCountUp(value, active);
  return (
    <div className={`x-kpi x-kpi--${tone}`}>
      <strong aria-label={`${value} ${label}`}>{shown}</strong>
      <span>{label}</span>
    </div>
  );
}

const BRIEF_FEATURES = [
  {
    icon: PhoneMissed,
    title: "Missed-lead recovery",
    body: "A missed call triggers an instant message, an AI conversation, qualification, then a nudge to your sales team.",
  },
  {
    icon: Star,
    title: "Feedback automation",
    body: "Happy customers are asked for a review; unhappy ones reach management before they reach the internet.",
  },
  {
    icon: CalendarClock,
    title: "Scheduling",
    body: "AI checks availability, books appointments, sends reminders and handles rescheduling.",
  },
  {
    icon: FileText,
    title: "Document processing",
    body: "Invoices, quotations, forms and CVs are read, validated, stored and passed on automatically.",
  },
] as const;

export function Brief() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);

  return (
    <section id="insights" className="x-section">
      <div className="x-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionHead
              eyebrow="Reporting & insights"
              title={
                <>
                  Your business, <span className="x-grad-text">summarised every morning.</span>
                </>
              }
              intro="Instead of checking five systems, you get one clear brief with the items that need your attention, delivered through WhatsApp, email or Slack."
            />
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {BRIEF_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} index={index}>
                  <li className="list-none">
                    <span className="x-icontile x-icontile--sm">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 font-display text-base font-semibold">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                      {feature.body}
                    </p>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal>
          <div ref={ref} className="x-card x-brief">
            <div className="x-demo-bar">
              <span className="x-demo-title">
                <Bell className="h-4 w-4" aria-hidden="true" />
                Daily business brief · 8:00 AM
              </span>
              <span className="x-tag">Sample data</span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {KPIS.map((kpi) => (
                <Kpi key={kpi.label} {...kpi} active={inView} />
              ))}
            </div>

            <div className="x-chart mt-6" aria-hidden="true">
              <p className="x-chart__title">Leads this week</p>
              <div className={`x-chart__bars ${inView ? "is-in" : ""}`}>
                {BARS.map((height, index) => (
                  <div key={index} className="x-chart__col">
                    <i
                      style={{ "--h": `${height}%`, "--d": `${index * 0.07}s` } as CSSProperties}
                    />
                    <span>{DAYS[index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Process timeline                                                     */
/* ------------------------------------------------------------------ */

const PHASES = [
  {
    icon: Search,
    tag: "Diagnose",
    title: "Find the opportunity",
    body: "We map the business, the customer journey, your tools and where time is being lost, then pick the highest-value bottleneck.",
  },
  {
    icon: Compass,
    tag: "Design",
    title: "Architect the system",
    body: "We define the experience, the intelligence layer, integrations, data flows, human handoffs and how success will be measured.",
  },
  {
    icon: Rocket,
    tag: "Deploy",
    title: "Engineer & integrate",
    body: "We build the agents and workflows, connect your tools, and test normal requests, unusual questions, handovers and data transfers before launch.",
  },
  {
    icon: TrendingUp,
    tag: "Scale",
    title: "Measure & improve",
    body: "We monitor real use, remove friction, improve reliability and expand what creates measurable value.",
  },
] as const;

const NEEDS = [
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
] as const;

export function Process() {
  const trackRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const element = trackRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const anchor = window.innerHeight * 0.55;
      setProgress(Math.min(1, Math.max(0, (anchor - rect.top) / rect.height)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const activeIndex = Math.min(PHASES.length - 1, Math.floor(progress * PHASES.length));

  return (
    <section id="process" className="x-section">
      <div className="x-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionHead
              eyebrow="How we work"
              title={
                <>
                  Diagnose. Design. Deploy. <span className="x-grad-text">Scale.</span>
                </>
              }
              intro="A straightforward path from your first conversation to a reliable AI system that keeps improving."
            />
          </Reveal>

          <Reveal className="mt-10">
            <SpotCard className="p-6">
              <h3 className="font-display text-lg font-semibold">What we need from you</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                We handle the technical implementation. You authorise the business resources the
                selected automation needs, and you remain the owner of your accounts and data at all
                times.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {NEEDS.map((need) => (
                  <li key={need} className="x-tag">
                    {need}
                  </li>
                ))}
              </ul>
            </SpotCard>
          </Reveal>
        </div>

        <ol
          ref={trackRef}
          className="x-timeline"
          style={{ "--progress": progress } as CSSProperties}
        >
          <span className="x-timeline__rail" aria-hidden="true">
            <i />
          </span>
          {PHASES.map((phase, index) => {
            const Icon = phase.icon;
            const state = index < activeIndex ? "done" : index === activeIndex ? "active" : "todo";
            return (
              <li key={phase.tag} className={`x-phase is-${state}`}>
                <span className="x-phase__node">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="x-card x-phase__card">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--electric)]">
                      0{index + 1} · {phase.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold sm:text-2xl">
                    {phase.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[color:var(--muted-foreground)]">
                    {phase.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust: comparison + human in the loop                                */
/* ------------------------------------------------------------------ */

const TYPICAL = [
  "Sells isolated tools",
  "Chatbot-only implementations",
  "One-size-fits-all strategy",
  "Technology before business needs",
] as const;
const OURS = [
  "Starts with the core business problem",
  "Maps the full operational workflow",
  "Integrates multiple tools into one flow",
  "Prioritises measurable business outcomes",
] as const;

const AI_HANDLES = [
  "Repetitive questions",
  "Data collection",
  "Lead qualification",
  "Routine communication",
  "Follow-ups and classification",
  "Scheduling and information processing",
] as const;
const PEOPLE_OWN = [
  "Important decisions",
  "Complex customer situations",
  "Sensitive cases",
  "Negotiations",
  "Approvals and exceptions",
] as const;

export function Trust() {
  return (
    <section id="why" className="x-section">
      <div className="x-container">
        <Reveal>
          <SectionHead
            eyebrow="The Alligentics difference"
            title={
              <>
                We automate the workflow, <span className="x-grad-text">not just the task.</span>
              </>
            }
            intro="A reply is not automation. One automation should connect an entire business process, from first message to logged outcome."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="x-card h-full p-7 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                Typical AI agency
              </p>
              <ul className="mt-6 space-y-4">
                {TYPICAL.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[color:var(--muted-foreground)]"
                  >
                    <span className="x-mark x-mark--no">
                      <X className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal index={1}>
            <div className="x-card x-card--accent h-full p-7 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--electric)]">
                Alligentics
              </p>
              <ul className="mt-6 space-y-4">
                {OURS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="x-mark x-mark--yes">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <SectionHead
            eyebrow="Human in the loop"
            title={
              <>
                AI handles the repetitive work.{" "}
                <span className="x-grad-text">Your team stays in control.</span>
              </>
            }
          />
        </Reveal>

        <div className="x-handover mt-10">
          <Reveal>
            <div className="x-card h-full p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="x-icontile x-icontile--sm">
                  <Bot className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold">AI can handle</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {AI_HANDLES.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Check
                      className="h-4 w-4 shrink-0 text-[color:var(--x-mint)]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="x-handover__link" aria-hidden="true">
            <i />
            <span>Handover</span>
          </div>

          <Reveal index={1}>
            <div className="x-card h-full p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="x-icontile x-icontile--sm">
                  <UserCheck className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  Your people stay responsible for
                </h3>
              </div>
              <ul className="mt-6 space-y-3 text-[color:var(--muted-foreground)]">
                {PEOPLE_OWN.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--electric)]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
