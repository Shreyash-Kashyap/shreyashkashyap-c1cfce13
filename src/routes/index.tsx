import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About, Contact, Footer, Journey, Skills, Work } from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreyash Kashyap — Software Developer & AI Builder" },
      {
        name: "description",
        content:
          "Shreyash Kashyap builds AI-driven applications with Python, MySQL and the MERN stack. Projects, experience and contact in one place.",
      },
      { property: "og:title", content: "Shreyash Kashyap — Software Developer & AI Builder" },
      {
        property: "og:description",
        content:
          "CSE (Data Science) engineer shipping AI-driven applications and scalable software systems.",
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
