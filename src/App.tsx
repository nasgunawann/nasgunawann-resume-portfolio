import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Skills from "./components/sections/Skills";
import Footer from "@components/sections/Footer";

// Daftarkan plugin GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    // Sinkronisasi ScrollTrigger setelah smoother siap
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName !== "A") return;

      const href = (target as HTMLAnchorElement).getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        smoother.scrollTo(targetEl, true, "power2.out");
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <>
      {/* Navbar tetap fixed di luar smoother */}
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Portfolio />
            </section>
            <section id="contacts">
              <Contact />
            </section>
            <section>
              <Footer />
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
