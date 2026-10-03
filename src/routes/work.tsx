import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "../components/marketing-page";

export const Route = createFileRoute("/work")({
  component: () => <MarketingPage page="work" />,
  head: () => ({
    meta: [
      { title: "AI Systems & Work | Alligentics" },
      {
        name: "description",
        content:
          "Explore representative AI system patterns from Alligentics, including outreach infrastructure, social content operations, customer operations, and document workflows.",
      },
      { property: "og:title", content: "AI Systems & Work | Alligentics" },
      {
        property: "og:description",
        content:
          "Explore representative AI system patterns from Alligentics, including outreach infrastructure, social content operations, customer operations, and document workflows.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alligentics.com/work" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Systems & Work | Alligentics" },
      {
        name: "twitter:description",
        content:
          "Explore representative AI system patterns from Alligentics, including outreach infrastructure, social content operations, customer operations, and document workflows.",
      },
    ],
    links: [{ rel: "canonical", href: "https://alligentics.com/work" }],
  }),
});
