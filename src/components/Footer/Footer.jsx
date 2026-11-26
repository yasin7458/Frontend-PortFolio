
import { useEffect, useRef } from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
  FaArrowRight
} from "react-icons/fa";

import { textReveal } from "../../animations/textAnimation";
import { scrollReveal } from "../../animations/scrollAnimation";
import { hoverAnimation } from "../../animations/hoverAnimation";

import "./Footer.css";

function Footer() {

  const footerRef = useRef(null);

  useEffect(() => {

    const textContext = textReveal(footerRef.current);
    const scrollContext = scrollReveal(footerRef.current);
    const hoverContext = hoverAnimation(footerRef.current);

    return () => {

      if (textContext) {
        textContext.revert();
      }

      if (scrollContext) {
        scrollContext.revert();
      }

      if (hoverContext) {
        hoverContext.revert();
      }

    };

  }, []);

  return (

    <footer className="footer" id="footer" ref={footerRef}>

      <div className="footer-container">

        {/* FOOTER TOP */}

        <div className="footer-top">

          <span className="footer-label reveal-label">
            09 / THE FINAL CHAPTER
          </span>

          <span className="footer-location reveal-label">
            DESIGNED & DEVELOPED BY YASIN
          </span>

        </div>

        {/* FOOTER HERO */}

        <div className="footer-hero">

          <span className="footer-eyebrow reveal-label">
            HAVE AN IDEA IN MIND?
          </span>

          <h2 className="reveal-heading">
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span>MEANINGFUL.</span>
          </h2>

          <p className="reveal-text">
            Every great journey begins with a conversation.
            Let's turn your next idea into something real.
          </p>

          <a
            href="#contact"
            className="footer-contact-btn hover-button"
          >
            LET'S TALK
            <FaArrowRight />
          </a>

        </div>

        {/* FOOTER NAVIGATION */}

        <div className="footer-middle">

          <div className="footer-brand">

            <h3 className="reveal-heading">
              YASIN<span>.</span>
            </h3>

            <p className="reveal-text">
              Frontend Developer
              <br />
              Aspiring Full Stack Developer
            </p>

          </div>

          <div className="footer-links">

            <span className="footer-column-title reveal-label">
              EXPLORE
            </span>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>

          </div>

          <div className="footer-links">

            <span className="footer-column-title reveal-label">
              MORE
            </span>

            <a href="#services">Services</a>
            <a href="#workflow">My Process</a>
            <a href="#contact">Contact</a>

          </div>

          <div className="footer-social">

            <span className="footer-column-title reveal-label">
              CONNECT WITH ME
            </span>

            <a
              href="https://github.com/yasin7458"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GITHUB
            </a>

            <a
              href="https://linkedin.com/in/yashin-mithani-7421093ab"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
              LINKEDIN
            </a>

          </div>

        </div>

        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">

          <span className="reveal-label">
            © 2026 YASIN MITHANI. ALL RIGHTS RESERVED.
          </span>

          <span className="reveal-label">
            DESIGNED WITH PURPOSE. BUILT WITH PASSION.
          </span>

          <a href="#home" className="footer-back-top hover-button">
            BACK TO TOP
            <FaArrowUp />
          </a>

        </div>

      </div>

      <div className="footer-watermark scroll-decoration">
        YASIN.
      </div>

    </footer>

  );

}

export default Footer;
