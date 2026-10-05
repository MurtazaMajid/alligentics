import { useState } from "react";
import { Check, Mail, MessageCircle, Pause, Phone, Play, type LucideIcon } from "lucide-react";

import { useInView, useTimedLoop } from "../../hooks/use-motion";
import { Reveal, SectionHead } from "./shared";

type ChannelId = "voice" | "whatsapp" | "email";

type Message = { at: number; from: "customer" | "ai"; text: string };

const CHANNELS: readonly { id: ChannelId; label: string; icon: LucideIcon }[] = [
  { id: "voice", label: "Voice call", icon: Phone },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { id: "email", label: "Email", icon: Mail },
];

const STEPS = [
  {
    title: "Customer gets in touch",
    detail: "A call, message or email arrives, at any hour.",
    system: "Inbound channel",
  },
  {
    title: "AI understands the request",
    detail: "Intent, urgency and key details are read from the conversation.",
    system: "AI understanding",
  },
  {
    title: "Instant reply",
    detail: "The customer gets an answer straight away instead of waiting.",
    system: "AI assistant",
  },
  {
    title: "Lead is qualified",
    detail: "Needs and timing are captured through a few natural questions.",
    system: "Qualification",
  },
  {
    title: "Saved to your CRM",
    detail: "A clean record is created with the conversation attached.",
    system: "Your CRM",
  },
  {
    title: "Team is notified",
    detail: "The right salesperson gets an alert with a short summary.",
    system: "Slack · WhatsApp · email",
  },
  {
    title: "Follow-up scheduled",
    detail: "The next touch is queued so nothing goes cold.",
    system: "Workflow",
  },
  {
    title: "Booking confirmed",
    detail: "The customer receives a confirmation. Complex cases go to a person.",
    system: "Calendar",
  },
] as const;

const CONVERSATIONS: Record<ChannelId, readonly Message[]> = {
  voice: [
    { at: 0, from: "customer", text: "Hi, do you have time for a consultation this week?" },
    {
      at: 2,
      from: "ai",
      text: "Yes, happily! May I have your name and what you'd like to discuss?",
    },
    {
      at: 3,
      from: "customer",
      text: "Daniel Brooks. We run a distribution business and want to automate follow-ups.",
    },
    { at: 4, from: "ai", text: "Thanks, Daniel. Would Thursday at 11 AM suit you?" },
    { at: 6, from: "customer", text: "Thursday works." },
    { at: 7, from: "ai", text: "Booked! A confirmation is on its way to you." },
  ],
  whatsapp: [
    { at: 0, from: "customer", text: "Hello, are you free for a quick consultation this week?" },
    { at: 2, from: "ai", text: "Hi! Yes. What's your name and what would you like help with?" },
    {
      at: 3,
      from: "customer",
      text: "Daniel Brooks. Distribution business, we want automated order follow-ups.",
    },
    { at: 4, from: "ai", text: "Great, Daniel. Does Thursday 11:00 work for a call?" },
    { at: 6, from: "customer", text: "Thursday is perfect." },
    {
      at: 7,
      from: "ai",
      text: "All set! Confirmation sent. You'll get a reminder before the call.",
    },
  ],
  email: [
    {
      at: 0,
      from: "customer",
      text: "Subject: Consultation request. Could we speak this week about automating our follow-ups?",
    },
    {
      at: 2,
      from: "ai",
      text: "Thank you for reaching out. Could you share your name, your business and what you'd like to improve?",
    },
    {
      at: 3,
      from: "customer",
      text: "I'm Daniel Brooks. We run a distribution business and need order follow-ups automated.",
    },
    {
      at: 4,
      from: "ai",
      text: "Thanks, Daniel. We can offer Thursday at 11:00. Shall I reserve it?",
    },
    { at: 6, from: "customer", text: "Yes, please reserve Thursday." },
    { at: 7, from: "ai", text: "Reserved. A calendar invitation has been sent to your inbox." },
  ],
};

const SOURCE_LABEL: Record<ChannelId, string> = {
  voice: "Phone call",
  whatsapp: "WhatsApp",
  email: "Email",
};

const TOTAL = STEPS.length;

export function PipelineDemo() {
  const [channel, setChannel] = useState<ChannelId>("voice");
  const [playing, setPlaying] = useState(true);
  const [ref, inView] = useInView<HTMLDivElement>(0.25);
  const [step, setStep] = useTimedLoop({
    total: TOTAL,
    stepMs: 2400,
    holdLastMs: 4200,
    active: inView && playing,
  });

  const messages = CONVERSATIONS[channel];
  const stage = step >= 7 ? "Booked" : step >= 3 ? "Qualified" : "New lead";
  const progress = (step / (TOTAL - 1)) * 100;

  function selectChannel(next: ChannelId) {
    setChannel(next);
    setStep(0);
  }

  return (
    <section id="demo" className="x-section">
      <div className="x-container">
        <Reveal>
          <SectionHead
            eyebrow="See it work"
            title={
              <>
                From first message to <span className="x-grad-text">booked appointment.</span>
              </>
            }
            intro="One trigger sets off a connected chain of actions. Pick a channel and watch the same workflow run end to end: less manual work, faster responses, fewer missed opportunities."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="x-tabs" role="tablist" aria-label="Choose a channel">
              {CHANNELS.map((item) => {
                const Icon = item.icon;
                const selected = channel === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className="x-tab"
                    onClick={() => selectChannel(item.id)}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="x-btn x-btn--ghost !min-h-10 !px-4 !py-2 text-sm"
              onClick={() => setPlaying((value) => !value)}
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {playing ? "Pause demo" : "Play demo"}
            </button>
          </div>
        </Reveal>

        <div ref={ref} className="mt-6 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: conversation + CRM */}
          <div className="grid gap-5">
            <div className="x-card x-convo" data-channel={channel}>
              <div className="x-demo-bar">
                <span className="x-demo-title">
                  {channel === "voice" ? (
                    <Phone className="h-4 w-4" />
                  ) : channel === "whatsapp" ? (
                    <MessageCircle className="h-4 w-4" />
                  ) : (
                    <Mail className="h-4 w-4" />
                  )}
                  {SOURCE_LABEL[channel]} · conversation
                </span>
                <span className="x-live">
                  <i /> {playing ? "Running" : "Paused"}
                </span>
              </div>

              <ol className="x-thread" aria-live="polite">
                {messages.map((message) => (
                  <li
                    key={`${channel}-${message.at}`}
                    className={`x-msg x-msg--${message.from} ${step >= message.at ? "is-in" : ""}`}
                  >
                    <span className="x-bubble__who">
                      {message.from === "ai" ? "Alligentics AI" : "Customer"}
                    </span>
                    {message.text}
                  </li>
                ))}
              </ol>
            </div>

            <div className="x-card x-crm x-crm--wide">
              <div className="x-demo-bar">
                <span className="x-demo-title">Your CRM · record</span>
                <span
                  className={`x-stage x-stage--${stage === "Booked" ? "done" : stage === "Qualified" ? "mid" : "new"}`}
                >
                  {stage}
                </span>
              </div>
              <dl className="x-crm-grid">
                {[
                  { label: "Source", value: SOURCE_LABEL[channel], on: step >= 1 },
                  { label: "Contact", value: "Daniel Brooks", on: step >= 3 },
                  { label: "Request", value: "Automate order follow-ups", on: step >= 3 },
                  { label: "Owner", value: "Sales team", on: step >= 5 },
                  {
                    label: "Next step",
                    value: step >= 7 ? "Discovery call · Thu 11:00" : "Follow-up queued",
                    on: step >= 6,
                  },
                ].map((row) => (
                  <div key={row.label} className="x-crm-row">
                    <dt>{row.label}</dt>
                    <dd
                      key={`${row.on}-${row.value}`}
                      className={row.on ? "is-filled" : "is-empty"}
                    >
                      {row.on ? row.value : <span className="x-skeleton" aria-hidden="true" />}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right: workflow rail */}
          <div className="x-card x-rail">
            <div className="x-demo-bar">
              <span className="x-demo-title">Workflow</span>
              <span className="font-mono text-xs text-[color:var(--muted-foreground)]">
                Step {step + 1} / {TOTAL}
              </span>
            </div>

            <ol className="x-steps" style={{ "--p": `${progress}%` } as React.CSSProperties}>
              <span className="x-steps__track" aria-hidden="true">
                <i />
              </span>
              {STEPS.map((item, index) => {
                const state = index < step ? "done" : index === step ? "active" : "todo";
                return (
                  <li key={item.title} className={`x-step is-${state}`}>
                    <button
                      type="button"
                      onClick={() => setStep(index)}
                      aria-current={state === "active" ? "step" : undefined}
                    >
                      <span className="x-step__node">
                        {state === "done" ? (
                          <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                        ) : (
                          index + 1
                        )}
                      </span>
                      <span className="x-step__text">
                        <strong>{item.title}</strong>
                        <small className="x-step__detail">{item.detail}</small>
                      </span>
                      <span className="x-step__sys">{item.system}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
