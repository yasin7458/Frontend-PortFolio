
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Education from "../components/Education/Education";
import Certifications from "../components/Certifications/Certifications";
import Services from "../components/Services/Services";
import Workflow from "../components/Workflow/Workflow";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import "./Home.css";

function Home() {
  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <main className="home-page">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Services />
      <Workflow />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
