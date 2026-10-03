import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "../components/marketing-page";

export const Route = createFileRoute("/solutions")({
  component: () => <MarketingPage page="solutions" />,
  head: () => ({
    meta: [
      { title: "AI Solutions | Alligentics" },
      {
        name: "description",
        content:
          "Explore practical AI solutions from Alligentics for operational bottlenecks, connected workflows, internal knowledge, and differentiated AI products.",
      },
      { property: "og:title", content: "AI Solutions | Alligentics" },
      {
        property: "og:description",
        content:
          "Explore practical AI solutions from Alligentics for operational bottlenecks, connected workflows, internal knowledge, and differentiated AI products.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alligentics.com/solutions" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Solutions | Alligentics" },
      {
        name: "twitter:description",
        content:
          "Explore practical AI solutions from Alligentics for operational bottlenecks, connected workflows, internal knowledge, and differentiated AI products.",
      },
    ],
    links: [{ rel: "canonical", href: "https://alligentics.com/solutions" }],
  }),
});
