import { createFileRoute } from "@tanstack/react-router";

import { Brief, Process, Trust } from "../components/home/brief-process";
import { Contact, Footer } from "../components/home/contact-footer";
import { FloatingActions } from "../components/home/floating";
import { Header } from "../components/home/header";
import { Hero, ToolsStrip } from "../components/home/hero";
import { PipelineDemo } from "../components/home/pipeline-demo";
import { Faq, Pricing, Team } from "../components/home/pricing-team";
import { Services } from "../components/home/services";

const TITLE = "Alligentics | AI Voice Agents, Chatbots & CRM Automation";
const DESCRIPTION =
  "Alligentics builds AI voice agents, WhatsApp and website chatbots, and workflow automation that answer customers instantly, qualify leads, book appointments and update your CRM, with your team in control.";

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
          logo: "https://alligentics.com/alligentics-logo.png",
          email: "alligenticsai@gmail.com",
          telephone: "+923292474455",
          sameAs: [
            "https://www.linkedin.com/company/alligentics-ai/",
            "https://www.instagram.com/alligentics",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="x-site">
      <div className="x-bg" aria-hidden="true" />
      <a href="#services" className="x-skip">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <ToolsStrip />
        <Services />
        <PipelineDemo />
        <Brief />
        <Process />
        <Trust />
        <Pricing />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
