import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "../components/marketing-page";

export const Route = createFileRoute("/insights")({
  component: () => <MarketingPage page="insights" />,
  head: () => ({
    meta: [
      { title: "AI Systems Insights | Alligentics" },
      {
        name: "description",
        content:
          "Practical perspectives from Alligentics on AI automation, reliable copilots, build-versus-buy decisions, and moving AI prototypes into production.",
      },
      { property: "og:title", content: "AI Systems Insights | Alligentics" },
      {
        property: "og:description",
        content:
          "Practical perspectives from Alligentics on AI automation, reliable copilots, build-versus-buy decisions, and moving AI prototypes into production.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alligentics.com/insights" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Systems Insights | Alligentics" },
      {
        name: "twitter:description",
        content:
          "Practical perspectives from Alligentics on AI automation, reliable copilots, build-versus-buy decisions, and moving AI prototypes into production.",
      },
    ],
    links: [{ rel: "canonical", href: "https://alligentics.com/insights" }],
  }),
});
