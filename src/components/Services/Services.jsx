
import { useLayoutEffect, useRef } from "react";

import { textReveal } from "../../animations/textAnimation";
import { scrollReveal } from "../../animations/scrollAnimation";
import { hoverAnimation } from "../../animations/hoverAnimation";

import "./Services.css";

function Services() {

  const servicesRef = useRef(null);

  useLayoutEffect(() => {

    const textContext = textReveal(servicesRef.current);
    const scrollContext = scrollReveal(servicesRef.current);
    const hoverContext = hoverAnimation(servicesRef.current);

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

    <section className="services" id="services" ref={servicesRef}>

      <div className="services-container">

        {/* SERVICES HEADING */}

        <div className="services-heading">

          <div className="services-heading-top">
            <span className="services-label reveal-label">
              06 / WHAT I DO
            </span>

            <span className="services-count reveal-label">
              MY SERVICES — 03
            </span>
          </div>

          <h2 className="reveal-heading">
            WHAT I <span>OFFER</span>
          </h2>

          <p className="reveal-text">
            Turning ideas into meaningful digital
            experiences through creativity and code.
          </p>

        </div>

        {/* SERVICES LIST */}

        <div className="services-list">

          {/* SERVICE 01 */}

          <article className="service-item scroll-card">

            <div className="service-number">
              <span className="reveal-label">01</span>
              <span className="service-symbol hover-icon">✳</span>
            </div>

            <div className="service-content">

              <div className="service-info">

                <span className="service-category reveal-label">
                  DESIGN & DEVELOPMENT
                </span>

                <h3 className="reveal-heading">
                  Frontend Development
                </h3>

                <p className="reveal-text">
                  Building clean, modern and user-friendly
                  website interfaces using HTML, CSS,
                  JavaScript and Bootstrap.
                </p>

              </div>

              <div className="service-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
                <span>BOOTSTRAP</span>
              </div>

            </div>

          </article>

          {/* SERVICE 02 */}

          <article className="service-item scroll-card">

            <div className="service-number">
              <span className="reveal-label">02</span>
              <span className="service-symbol hover-icon">✳</span>
            </div>

            <div className="service-content">

              <div className="service-info">

                <span className="service-category reveal-label">
                  MODERN WEB APPLICATIONS
                </span>

                <h3 className="reveal-heading">
                  React Development
                </h3>

                <p className="reveal-text">
                  Creating interactive user interfaces
                  and dynamic web applications using
                  React.js and reusable components.
                </p>

              </div>

              <div className="service-tech">
                <span>REACT.JS</span>
                <span>JAVASCRIPT</span>
                <span>REACT ROUTER</span>
              </div>

            </div>

          </article>

          {/* SERVICE 03 */}

          <article className="service-item scroll-card">

            <div className="service-number">
              <span className="reveal-label">03</span>
              <span className="service-symbol hover-icon">✳</span>
            </div>

            <div className="service-content">

              <div className="service-info">

                <span className="service-category reveal-label">
                  MOTION & INTERACTIONS
                </span>

                <h3 className="reveal-heading">
                  Creative Web Experiences
                </h3>

                <p className="reveal-text">
                  Bringing websites to life with engaging
                  animations, smooth transitions and
                  interactive experiences using GSAP.
                </p>

              </div>

              <div className="service-tech">
                <span>GSAP</span>
                <span>SCROLL ANIMATIONS</span>
                <span>INTERACTIONS</span>
              </div>

            </div>

          </article>

        </div>

        {/* SERVICES FOOTER */}

        <div className="services-footer">
          <span className="reveal-label">
            CREATIVITY MEETS CODE.
          </span>

          <span className="reveal-label">
            BUILDING DIGITAL EXPERIENCES ✳
          </span>
        </div>

      </div>

    </section>

  );

}

export default Services;
