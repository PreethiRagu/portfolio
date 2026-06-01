import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Marquee } from "@/components/portfolio/Marquee";
import { Cursor } from "@/components/portfolio/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Preethi R — Full-Stack & AI Engineer" },
      { name: "description", content: "Final-year B.Tech IT student building production-grade full-stack and AI systems with React, FastAPI, LangChain and LLMs." },
      { property: "og:title", content: "Preethi R — Full-Stack & AI Engineer" },
      { property: "og:description", content: "Premium portfolio — full-stack, AI engineering, and shipped products." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
