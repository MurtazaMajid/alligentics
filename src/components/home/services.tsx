import type { CSSProperties, ReactNode } from "react";
import {
  FileText,
  MessagesSquare,
  Phone,
  Plug,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Reveal, SectionHead, SpotCard } from "./shared";

/* ---------- Mini animated visuals (CSS/SVG only) ---------- */

function VoiceVisual() {
  return (
    <div className="x-vis x-vis--voice" aria-hidden="true">
      <div className="x-wave x-wave--ai">
        {Array.from({ length: 56 }, (_, i) => (
          <i
            key={i}
            style={
              { "--h": `${20 + ((i * 29) % 72)}%`, "--d": `${(i % 12) * 0.07}s` } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}

function ChatVisual() {
  return (
    <div className="x-vis x-vis--chat" aria-hidden="true">
      <span className="x-mini-bubble x-mini-bubble--user">Do you have a slot tomorrow?</span>
      <span className="x-mini-bubble x-mini-bubble--ai">
        <i className="x-typing">
          <b />
          <b />
          <b />
        </i>
      </span>
    </div>
  );
}

const SPOKES = ["CRM", "Email", "Calendar", "Slack", "Sheets"] as const;

function NetworkVisual() {
  return (
    <div className="x-vis x-vis--network" aria-hidden="true">
      <svg viewBox="0 0 240 110" className="h-full w-full">
        {SPOKES.map((label, i) => {
          const x = 24 + i * 48;
          const path = `M120 55 C 120 ${i % 2 ? 20 : 90}, ${x} ${i % 2 ? 90 : 20}, ${x} ${i % 2 ? 98 : 12}`;
          return (
            <g key={label}>
              <path
                id={`net-${i}`}
                d={path}
                fill="none"
                stroke="var(--electric)"
                strokeOpacity="0.35"
              />
              <circle r="2.6" fill="var(--x-cyan)">
                <animateMotion
                  dur={`${2.4 + i * 0.3}s`}
                  begin={`-${i * 0.5}s`}
                  repeatCount="indefinite"
                >
                  <mpath href={`#net-${i}`} />
                </animateMotion>
              </circle>
              <text x={x} y={i % 2 ? 108 : 8} textAnchor="middle" className="x-svg-label">
                {label}
              </text>
            </g>
          );
        })}
        <circle cx="120" cy="55" r="15" fill="var(--background)" stroke="var(--electric)" />
        <circle cx="120" cy="55" r="5" fill="var(--electric)" className="x-pulse-dot" />
      </svg>
    </div>
  );
}

const FUNNEL = [
  { label: "New leads", width: 100 },
  { label: "Qualified", width: 72 },
  { label: "Followed up", width: 52 },
  { label: "Booked", width: 34 },
] as const;

function FunnelVisual() {
  return (
    <div className="x-vis x-vis--funnel" aria-hidden="true">
      {FUNNEL.map((stage, index) => (
        <div key={stage.label} className="x-funnel-row">
          <span>{stage.label}</span>
          <div className="x-funnel-bar">
            <i style={{ "--w": `${stage.width}%`, "--d": `${index * 0.18}s` } as CSSProperties} />
          </div>
        </div>
      ))}
    </div>
  );
}

function DocVisual() {
  return (
    <div className="x-vis x-vis--doc" aria-hidden="true">
      <div className="x-doc">
        <span />
        <span />
        <span />
        <span />
        <i className="x-doc__scan" />
      </div>
      <div className="x-doc-fields">
        <b>Invoice #</b>
        <b>Total</b>
        <b>Due date</b>
      </div>
    </div>
  );
}

function CustomVisual() {
  return (
    <div className="x-vis x-vis--custom" aria-hidden="true">
      {Array.from({ length: 36 }, (_, i) => (
        <i key={i} style={{ "--d": `${((i * 7) % 24) * 0.12}s` } as CSSProperties} />
      ))}
    </div>
  );
}

/* ---------- Data ---------- */

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  body: string;
  tags: readonly string[];
  span: string;
  visual: ReactNode;
};

const SERVICES: readonly Service[] = [
  {
    id: "voice",
    icon: Phone,
    title: "AI voice agents",
    body: "Reception and outbound agents that answer calls, qualify callers, confirm appointments and recover missed calls, with call notes sent straight into your CRM.",
    tags: ["Inbound receptionist", "Outbound & reminders", "Missed-call recovery"],
    span: "lg:col-span-2",
    visual: <VoiceVisual />,
  },
  {
    id: "chat",
    icon: MessagesSquare,
    title: "WhatsApp & website chatbots",
    body: "Assistants that handle FAQs, capture lead details and book appointments around the clock, with a clean handover to your team.",
    tags: ["WhatsApp", "Website chat", "Email"],
    span: "",
    visual: <ChatVisual />,
  },
  {
    id: "crm",
    icon: Plug,
    title: "CRM & business integrations",
    body: "Connect your CRM, communications, storage, finance and calendars so information moves on its own instead of being copied by hand.",
    tags: ["CRM sync", "Calendars", "Internal tools"],
    span: "",
    visual: <NetworkVisual />,
  },
  {
    id: "sales",
    icon: TrendingUp,
    title: "Sales & lead automation",
    body: "Capture leads from your website, Facebook and Instagram, qualify them instantly, update your CRM and schedule the next follow-up automatically.",
    tags: ["Lead capture", "Qualification", "Follow-ups"],
    span: "lg:col-span-2",
    visual: <FunnelVisual />,
  },
  {
    id: "docs",
    icon: FileText,
    title: "Data & document automation",
    body: "Read invoices, forms and CVs automatically, validate the details and pass them to the next step.",
    tags: ["Invoices", "Forms", "CVs"],
    span: "",
    visual: <DocVisual />,
  },
  {
    id: "custom",
    icon: Sparkles,
    title: "Custom AI systems",
    body: "Bespoke builds when your operation doesn't fit anything off the shelf. We map the workflow first, then engineer the system around it.",
    tags: ["Workflow mapping", "Multi-tool systems", "Built to your process"],
    span: "lg:col-span-2",
    visual: <CustomVisual />,
  },
];

export function Services() {
  return (
    <section id="services" className="x-section">
      <div className="x-container">
        <Reveal>
          <SectionHead
            eyebrow="What we build"
            title={
              <>
                From manual processes to <span className="x-grad-text">automated systems.</span>
              </>
            }
            intro="Six capabilities that combine into one operating layer for your business: answering, qualifying, recording and following up, without the copy-paste."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} index={index % 3} className={service.span}>
                <SpotCard className="x-service h-full">
                  <div className="flex items-start justify-between gap-4">
                    <span className="x-icontile">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-[color:var(--muted-foreground)]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--muted-foreground)]">
                    {service.body}
                  </p>
                  {service.visual}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li key={tag} className="x-tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </SpotCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
