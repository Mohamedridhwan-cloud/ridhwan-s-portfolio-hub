import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohamed Ridhwan — Full Stack Developer & Cloud Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Mohamed Ridhwan, B.Tech CSE (Cloud Computing) student at SRM. Projects in full-stack development, machine learning and cloud.",
      },
      { property: "og:title", content: "Mohamed Ridhwan — Portfolio" },
      { property: "og:description", content: "Full Stack Developer · Cloud Computing · Python · React · Node." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster richColors position="top-right" />
    </>
  );
}
