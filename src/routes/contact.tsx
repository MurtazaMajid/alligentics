import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "../components/marketing-page";

export const Route = createFileRoute("/contact")({
  component: () => <MarketingPage page="contact" />,
  head: () => ({
    meta: [
      { title: "Contact Alligentics | Discuss an AI System" },
      {
        name: "description",
        content:
          "Talk with Alligentics about AI strategy, workflow automation, systems integration, or a custom AI product for your business.",
      },
      { property: "og:title", content: "Contact Alligentics | Discuss an AI System" },
      {
        property: "og:description",
        content:
          "Talk with Alligentics about AI strategy, workflow automation, systems integration, or a custom AI product for your business.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alligentics.com/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Alligentics | Discuss an AI System" },
      {
        name: "twitter:description",
        content:
          "Talk with Alligentics about AI strategy, workflow automation, systems integration, or a custom AI product for your business.",
      },
    ],
    links: [{ rel: "canonical", href: "https://alligentics.com/contact" }],
  }),
});
