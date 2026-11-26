
import { useLayoutEffect, useRef } from "react";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { heroAnimation } from "../../animations/heroAnimation";
import { parallaxAnimation } from "../../animations/parallaxAnimation";

import "./Hero.css";

function Hero() {

  const heroRef = useRef(null);

  useLayoutEffect(() => {

    const heroContext = heroAnimation(heroRef.current);
    const parallaxContext = parallaxAnimation(heroRef.current);

    return () => {

      if (heroContext) {
        heroContext.revert();
      }

      if (parallaxContext) {
        parallaxContext.revert();
      }

    };

  }, []);

  return (

    <section className="hero" id="home" ref={heroRef}>

      {/* BACKGROUND IMAGE */}

      <div className="hero-background parallax-bg"></div>

      {/* TOP INFORMATION */}

      <div className="hero-top">

        <div className="hero-chapter">
          <span className="hero-chapter-number">第一章</span>
          <span className="hero-chapter-label">CHAPTER 01</span>
        </div>

        <div className="hero-top-line"></div>

        <div className="hero-location">
          <span></span>
          FRONTEND DEVELOPER · INDIA
        </div>

      </div>

      {/* MAIN HERO CONTENT */}

      <div className="hero-main">

        <div className="hero-heading-area">

          <div className="hero-side-label">
            PORTFOLIO · 2026
          </div>

          <h1 className="hero-title">

            <span className="hero-title-first">
              YASIN
            </span>

            <span className="hero-title-last">
              MITHANI
            </span>

          </h1>

          <div className="hero-brush"></div>

        </div>

        {/* PROFILE VISUAL */}

        <div className="hero-visual">

          <div className="hero-image-pattern parallax-decoration"></div>

          <div className="hero-image-frame">

            <img
              src="/images/profile.png"
              alt="Yasin Mithani"
            />

          </div>

          <div className="hero-image-caption">
            <span>THE DEVELOPER</span>
            <span>01 / 08</span>
          </div>

          <div className="hero-image-circle"></div>

        </div>

        {/* INTRODUCTION */}

        <div className="hero-intro">

          <p>
            I build every layer of a
            <br />
            product, <span>and I ship it.</span>
          </p>

          <div className="hero-actions">

            <a href="#projects" className="hero-work-btn">
              VIEW THE WORK
              <FaArrowRight />
            </a>

            <a href="#contact" className="hero-contact-btn">
              START A PROJECT
            </a>

          </div>

        </div>

        {/* DEVELOPER DETAILS */}

        <div className="hero-details">

          <div className="hero-detail-row">
            <span className="detail-label">NOW</span>
            <p>Frontend Developer · Aspiring Full Stack Developer</p>
          </div>

          <div className="hero-detail-row">
            <span className="detail-label">STACK</span>
            <p>HTML · CSS · JavaScript · React · GSAP</p>
          </div>

          <div className="hero-detail-row">
            <span className="detail-label">STATUS</span>

            <p className="hero-status">
              <span></span>
              Open to opportunities
            </p>

          </div>

          <div className="hero-social-links">

            <a
              href="https://github.com/yasin7458"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yashin-mithani-7421093ab"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM INFORMATION */}

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <span>DESIGN · DEVELOP · CREATE</span>
        <span>© YASIN MITHANI</span>
      </div>

    </section>

  );

}

export default Hero;
