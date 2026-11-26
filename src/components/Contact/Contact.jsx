
import { useEffect, useRef } from "react";

import { textReveal } from "../../animations/textAnimation";
import { scrollReveal } from "../../animations/scrollAnimation";
import { hoverAnimation } from "../../animations/hoverAnimation";

import "./Contact.css";

function Contact() {

  const contactRef = useRef(null);

  const email = "yashinmithani950@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  useEffect(() => {

    const textContext = textReveal(contactRef.current);
    const scrollContext = scrollReveal(contactRef.current);
    const hoverContext = hoverAnimation(contactRef.current);

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

    <section className="contact" id="contact" ref={contactRef}>

      <div className="contact-background"></div>
      <div className="contact-overlay"></div>

      <div className="contact-container">

        {/* TOP HEADER */}

        <div className="contact-header">

          <span className="contact-chapter reveal-label">
            08 / GET IN TOUCH
          </span>

          <span className="contact-header-right reveal-label">
            LET'S CREATE SOMETHING ✳
          </span>

        </div>

        {/* MAIN CONTENT */}

        <div className="contact-main scroll-section">

          <div className="contact-intro">

            <span className="contact-small-label reveal-label">
              THE NEXT CHAPTER STARTS HERE
            </span>

            <h2 className="contact-title reveal-heading">
              Have an idea?
              <span>Let's make</span>
              <span className="contact-title-accent">
                it happen.
              </span>
            </h2>

            <p className="contact-description reveal-text">
              Every great project starts with a conversation.
              Whether you have an idea, an opportunity, or just
              want to connect, I'd love to hear from you.
            </p>

            <a
              href={`mailto:${email}?subject=Let's%20Build%20Something%20Great`}
              className="contact-main-button hover-button"
            >
              <span>LET'S TALK ABOUT YOUR PROJECT</span>
              <span className="contact-button-arrow">↗</span>
            </a>

          </div>

          {/* CONTACT INFORMATION */}

          <div className="contact-info scroll-card">

            <div className="contact-info-heading">
              <span className="reveal-label">
                01 / DROP ME A LINE
              </span>

              <span className="contact-info-dot">●</span>
            </div>

            <a
              href={`mailto:${email}`}
              className="contact-email reveal-text"
            >
              {email}
              <span>↗</span>
            </a>

            <button
              className="contact-copy-button hover-button"
              onClick={copyEmail}
            >
              <span>⧉</span>
              COPY EMAIL ADDRESS
            </button>

            <div className="contact-info-divider"></div>

            <div className="contact-social-heading">
              <span className="reveal-label">
                02 / FIND ME ONLINE
              </span>
            </div>

            <div className="contact-social-links">

              <a
                href="https://github.com/yasin7458"
                target="_blank"
                rel="noreferrer"
                className="reveal-text"
              >
                GITHUB <span>↗</span>
              </a>

              <a
                href="https://linkedin.com/in/yashin-mithani-7421093ab"
                target="_blank"
                rel="noreferrer"
                className="reveal-text"
              >
                LINKEDIN <span>↗</span>
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM MESSAGE */}

        <div className="contact-bottom">

          <div className="contact-availability reveal-label">
            <span className="contact-availability-dot"></span>
            AVAILABLE FOR CREATIVE OPPORTUNITIES
          </div>

          <span className="contact-bottom-message reveal-label">
            GOOD THINGS START WITH A HELLO.
          </span>

        </div>

        {/* FOOTER */}

        <div className="contact-footer">

          <div className="contact-footer-brand reveal-label">
            YASIN<span>.</span>
          </div>

          <div className="contact-footer-center reveal-label">
            DESIGNED & DEVELOPED WITH PURPOSE
          </div>

          <a
            href="#home"
            className="contact-back-top reveal-label"
          >
            BACK TO TOP ↑
          </a>

        </div>

      </div>

    </section>

  );

}

export default Contact;
