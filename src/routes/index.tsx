import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/hero-data-center.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Alligentics — AI Services for Automation, Vision & Agents" },
      {
        name: "description",
        content:
          "Alligentics builds automation, computer vision, machine learning, AI agents, and chatbot systems that plug into your operations and keep running in production.",
      },
      {
        property: "og:title",
        content: "Alligentics — AI Services for Automation, Vision & Agents",
      },
      {
        property: "og:description",
        content:
          "Alligentics builds automation, computer vision, machine learning, AI agents, and chatbot systems that plug into your operations and keep running in production.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Alligentics — AI Services for Automation, Vision & Agents" },
      {
        name: "twitter:description",
        content:
          "Alligentics builds automation, computer vision, machine learning, AI agents, and chatbot systems that plug into your operations and keep running in production.",
      },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased selection:bg-accent/20">
      <Header />
      <main>
        <Hero />
        <HeroImage />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-[22px] tracking-tight">
          ALLIGENTICS
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </a>
          <a
            href="#why"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Why us
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 bg-foreground text-background rounded-[min(1vw,8px)] ring-1 ring-black/5 hover:bg-foreground/90 transition-colors"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-10">
      <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-6 animate-rise">
        AI services partner
      </p>
      <h1 className="font-serif italic font-medium text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] text-balance max-w-[20ch] animate-rise [animation-delay:0.1s]">
        Machines that carry your work forward.
      </h1>
      <p className="mt-8 text-lg text-muted-foreground max-w-[52ch] text-pretty animate-rise [animation-delay:0.2s]">
        Alligentics builds automation, vision, and agent systems that plug into
        how your team already operates — and keep running long after the demo
        ends.
      </p>

      <div className="mt-12 grid grid-cols-3 max-w-xl gap-6 border-t border-border pt-6">
        <div className="animate-rise [animation-delay:0.3s]">
          <p className="font-display text-3xl">40+</p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
            Deployed systems
          </p>
        </div>
        <div className="animate-rise [animation-delay:0.38s]">
          <p className="font-display text-3xl">99.9%</p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
            Agent uptime
          </p>
        </div>
        <div className="animate-rise [animation-delay:0.46s]">
          <p className="font-display text-3xl">12</p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
            Verticals served
          </p>
        </div>
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="w-full aspect-[21/9] rounded-[min(1vw,12px)] overflow-hidden outline-1 -outline-offset-1 outline-accent/30 grid place-items-center animate-rise [animation-delay:0.5s]">
        <img
          src={heroImage}
          alt="A moody, high-contrast data center corridor representing the infrastructure behind Alligentics AI systems"
          width={1920}
          height={912}
          className="w-full h-full object-cover"
          priority="true"
        />
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      number: "01",
      title: "Automation",
      description:
        "Workflows that connect your tools and run end-to-end, with no human in the loop.",
      span: "md:col-span-3",
    },
    {
      number: "02",
      title: "Computer vision",
      description:
        "Detection, counting, and quality checks that read the physical world for you.",
      span: "md:col-span-3",
    },
    {
      number: "03",
      title: "Machine learning",
      description:
        "Models trained on your data, tuned to your thresholds.",
      span: "md:col-span-2",
    },
    {
      number: "04",
      title: "AI agents",
      description: "Autonomous workers that plan, act, and report back.",
      span: "md:col-span-2",
    },
    {
      number: "05",
      title: "Chatbots",
      description: "Conversational front-ends that resolve, not deflect.",
      span: "md:col-span-2",
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 pt-24">
      <div className="flex items-end justify-between border-b border-border pb-6 mb-10">
        <h2 className="font-display text-4xl tracking-tight">What we build</h2>
        <span className="font-mono text-xs text-muted-foreground">(01 — 05)</span>
      </div>
      <div className="grid md:grid-cols-6 gap-x-6 gap-y-10">
        {services.map((service, index) => (
          <div
            key={service.number}
            className={`${service.span} py-2 border-b border-border animate-rise`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <p className="font-mono text-xs text-accent">{service.number}</p>
            <h3 className="font-display text-2xl mt-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-[40ch] text-pretty">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="max-w-7xl mx-auto px-6 pt-24 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5 animate-rise">
        <span className="font-mono text-xs text-muted-foreground">(02)</span>
        <h2 className="font-serif italic font-medium text-[clamp(2rem,4vw,3rem)] leading-tight text-balance mt-3">
          We ship systems that hold up under load.
        </h2>
      </div>
      <div className="md:col-span-7 md:pt-10 space-y-6 animate-rise [animation-delay:0.15s]">
        <p className="text-lg text-pretty max-w-[48ch] text-muted-foreground">
          Most AI vendors stop at a demo. We stay through deployment, monitoring,
          and the slow work of keeping models honest in production.
        </p>
        <ul className="space-y-4">
          <li className="flex gap-4 items-baseline">
            <span className="font-mono text-xs text-accent">A</span>
            <span className="text-sm text-pretty">
              Ops-grade reliability, not research prototypes.
            </span>
          </li>
          <li className="flex gap-4 items-baseline">
            <span className="font-mono text-xs text-accent">B</span>
            <span className="text-sm text-pretty">
              Security and data controls built in from day one.
            </span>
          </li>
          <li className="flex gap-4 items-baseline">
            <span className="font-mono text-xs text-accent">C</span>
            <span className="text-sm text-pretty">
              A single team from scoping to handover.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 animate-rise">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-5">
            Start a project
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] text-balance">
            Tell us what you're trying to automate.
          </h2>
        </div>
        <div className="md:col-span-5 flex flex-col gap-4 animate-rise [animation-delay:0.15s]">
          <a
            href="mailto:hello@alligentics.com"
            className="text-center text-sm font-medium py-3 bg-accent text-background rounded-[min(1vw,10px)] animate-pulse-ring hover:bg-accent/90 transition-colors"
          >
            Book a consultation
          </a>
          <a
            href="mailto:hello@alligentics.com"
            className="text-center text-sm py-3 border border-background/30 rounded-[min(1vw,10px)] hover:bg-background/10 transition-colors"
          >
            hello@alligentics.com
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/60 border-t border-background/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-display text-xl text-background">ALLIGENTICS</p>
        <div className="flex gap-8 text-sm">
          <a
            href="#services"
            className="hover:text-background transition-colors"
          >
            Services
          </a>
          <a href="#why" className="hover:text-background transition-colors">
            Why us
          </a>
          <a
            href="#contact"
            className="hover:text-background transition-colors"
          >
            Contact
          </a>
        </div>
        <p className="font-mono text-xs">© 2024 Alligentics Inc.</p>
      </div>
    </footer>
  );
}
