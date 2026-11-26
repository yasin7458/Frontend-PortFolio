
import { useEffect, useRef } from "react";

import { textReveal } from "../../animations/textAnimation";
import { scrollReveal } from "../../animations/scrollAnimation";

import "./About.css";

function About() {

  const aboutRef = useRef(null);

  useEffect(() => {

    const textContext = textReveal(aboutRef.current);
    const scrollContext = scrollReveal(aboutRef.current);

    return () => {

      if (textContext) {
        textContext.revert();
      }

      if (scrollContext) {
        scrollContext.revert();
      }

    };

  }, []);

  return (

    <section className="about" id="about" ref={aboutRef}>

      <div className="about-container">

        {/* ABOUT HEADING */}

        <div className="about-heading">
          <h2 className="reveal-heading">
            ABOUT M<span className="about-star">✺</span>E
          </h2>
        </div>

        {/* MANGA IMAGE BANNER */}

        <div className="about-manga-visual">

          <div className="about-manga-overlay"></div>

          <div className="about-manga-content">

            <span className="reveal-label">
              BEHIND THE CODE · BEYOND THE SCREEN
            </span>

            <h3 className="reveal-heading">
              CREATIVITY
              <br />
              MEETS <span>LOGIC.</span>
            </h3>

            <p className="reveal-text">
              Every line of code is a step towards something meaningful.
            </p>

          </div>

          <div className="about-manga-caption">
            <span className="reveal-label">THE MINDSET</span>
            <span className="reveal-label">02 / MY STORY</span>
          </div>

        </div>

        {/* FIRST ROW */}

        <div className="about-row about-row-one">

          <div className="about-image about-image-one scroll-image">
            <img
              src="/images/about-1.jpg"
              alt="Yasin Mithani working on development"
            />
          </div>

          <div className="about-text about-text-one">

            <p className="reveal-text">
              I'm Yasin Mithani, an aspiring Full Stack Developer
              with a passion for creating modern, interactive and
              meaningful digital experiences.
            </p>

            <p className="reveal-text">
              My journey into web development started with
              frontend technologies, where I discovered my
              interest in combining creativity, design and
              problem-solving through code.
            </p>

            <p className="reveal-text">
              I enjoy turning ideas into functional interfaces
              and building websites that deliver engaging
              experiences.
            </p>

          </div>

        </div>

        {/* SECOND ROW */}

        <div className="about-row about-row-two">

          <div className="about-text about-text-two">

            <p className="reveal-text">
              I have worked with technologies like HTML, CSS,
              JavaScript, Bootstrap and React, while exploring
              animations using GSAP.
            </p>

            <p className="reveal-text">
              Currently, I'm expanding my knowledge of backend
              development with Node.js, Express.js and MongoDB
              to grow towards becoming a Full Stack Developer.
            </p>

            <p className="reveal-text">
              I believe learning never stops. Every project,
              challenge and new concept is an opportunity to
              improve my skills and become a better developer.
            </p>

          </div>

          <div className="about-image about-image-two scroll-image">
            <img
              src="/images/about-2.jpg"
              alt="Yasin Mithani portrait"
            />
          </div>

        </div>

      </div>

    </section>

  );

}

export default About;
