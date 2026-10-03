import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "../components/marketing-page";

export const Route = createFileRoute("/about")({
  component: () => <MarketingPage page="about" />,
  head: () => ({
    meta: [
      { title: "About Alligentics | Think. Build. Compound." },
      {
        name: "description",
        content:
          "Meet Alligentics: business thinking and engineering focused on building intelligent systems around the way organizations operate.",
      },
      { property: "og:title", content: "About Alligentics | Think. Build. Compound." },
      {
        property: "og:description",
        content:
          "Meet Alligentics: business thinking and engineering focused on building intelligent systems around the way organizations operate.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alligentics.com/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Alligentics | Think. Build. Compound." },
      {
        name: "twitter:description",
        content:
          "Meet Alligentics: business thinking and engineering focused on building intelligent systems around the way organizations operate.",
      },
    ],
    links: [{ rel: "canonical", href: "https://alligentics.com/about" }],
  }),
});
