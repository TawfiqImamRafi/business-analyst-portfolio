import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Capabilities from "./components/Capabilities.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import LiveProducts from "./components/LiveProducts.jsx";
import Documentation from "./components/Documentation.jsx";
import Process from "./components/Process.jsx";
import AiAssisted from "./components/AiAssisted.jsx";
import Skills from "./components/Skills.jsx";
import Principles from "./components/Principles.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import { useReveal, useSpotlight, useHeroParallax } from "./hooks/useScrollBehaviour.js";
import { ResumePreviewProvider } from "./context/ResumePreview.jsx";

export default function App() {
  /* Runs once after the whole page has mounted, so every .reveal in every
     section is picked up by a single observer. */
  useReveal();
  useSpotlight();
  useHeroParallax();

  return (
    <ResumePreviewProvider>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Capabilities />
        <CaseStudies />
        <LiveProducts />
        <Documentation />
        <Process />
        <AiAssisted />
        <Skills />
        <Principles />
        <Experience />
        <Contact />
      </main>
    </ResumePreviewProvider>
  );
}
