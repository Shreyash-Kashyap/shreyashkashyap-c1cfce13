import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About, Contact, Footer, Journey, Skills, Work } from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreyash Kashyap — Software Developer" },
      {
        name: "description",
        content:
          "Chroma Palette Portfolio showcases color combinations with light, dark, and greyish modes.",
      },
      { property: "og:title", content: "Shreyash Kashyap — Software Developer" },
      {
        property: "og:description",
        content:
          "Chroma Palette Portfolio showcases color combinations with light, dark, and greyish modes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
