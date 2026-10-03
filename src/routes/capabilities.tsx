import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "../components/marketing-page";

export const Route = createFileRoute("/capabilities")({
  component: () => <MarketingPage page="capabilities" />,
  head: () => ({
    meta: [
      { title: "AI Capabilities | Alligentics" },
      {
        name: "description",
        content:
          "Explore Alligentics capabilities in AI strategy, workflow automation, AI agents, custom AI applications, and systems integration.",
      },
      { property: "og:title", content: "AI Capabilities | Alligentics" },
      {
        property: "og:description",
        content:
          "Explore Alligentics capabilities in AI strategy, workflow automation, AI agents, custom AI applications, and systems integration.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alligentics.com/capabilities" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Capabilities | Alligentics" },
      {
        name: "twitter:description",
        content:
          "Explore Alligentics capabilities in AI strategy, workflow automation, AI agents, custom AI applications, and systems integration.",
      },
    ],
    links: [{ rel: "canonical", href: "https://alligentics.com/capabilities" }],
  }),
});
