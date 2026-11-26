
import { useEffect, useRef } from "react";

import { textReveal } from "../../animations/textAnimation";
import { scrollReveal } from "../../animations/scrollAnimation";

import "./Certifications.css";

function Certifications() {

  const certificationsRef = useRef(null);

  useEffect(() => {

    const textContext = textReveal(certificationsRef.current);
    const scrollContext = scrollReveal(certificationsRef.current);

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

    <section
      className="certifications"
      id="certifications"
      ref={certificationsRef}
    >

      <div className="certifications-container">

        {/* CERTIFICATIONS HEADING */}

        <div className="certifications-heading">

          <div className="certifications-heading-top">
            <span className="certifications-label reveal-label">
              05 / ACHIEVEMENTS
            </span>

            <span className="certifications-count reveal-label">
              CERTIFICATIONS — 04
            </span>
          </div>

          <h2 className="reveal-heading">
            MY <span>CERTIFICATIONS</span>
          </h2>

          <p className="reveal-text">
            Every certification represents a step forward
            in my continuous learning journey.
          </p>

        </div>

        {/* CERTIFICATION LIST */}

        <div className="certifications-list">

          {/* CERTIFICATE 01 */}

          <article className="certificate-item scroll-section">

            <div className="certificate-number">
              <span className="reveal-label">01</span>
              <span className="certificate-type reveal-label">
                JAVASCRIPT
              </span>
            </div>

            <div className="certificate-content">

              <div className="certificate-info">

                <div className="certificate-image scroll-image">
                  <img
                    src="/images/certificates/infosys-javascript.jpg"
                    alt="Infosys JavaScript Essentials Certificate"
                  />
                </div>

                <span className="certificate-category reveal-label">
                  PROFESSIONAL CERTIFICATION
                </span>

                <h3 className="reveal-heading">
                  JavaScript Essentials
                </h3>

                <p className="reveal-text">
                  Completed JavaScript Essentials certification
                  covering important JavaScript concepts and
                  programming fundamentals.
                </p>

              </div>

              <div className="certificate-meta">
                <span className="reveal-label">ISSUED BY</span>
                <h4 className="reveal-text">Infosys</h4>
              </div>

            </div>

          </article>

          {/* CERTIFICATE 02 */}

          <article className="certificate-item scroll-section">

            <div className="certificate-number">
              <span className="reveal-label">02</span>
              <span className="certificate-type reveal-label">
                VUE.JS
              </span>
            </div>

            <div className="certificate-content">

              <div className="certificate-info">

                <div className="certificate-image scroll-image">
                  <img
                    src="/images/certificates/cisco-vuejs.jpg"
                    alt="Cisco Vue.js Certificate"
                  />
                </div>

                <span className="certificate-category reveal-label">
                  FRONTEND DEVELOPMENT
                </span>

                <h3 className="reveal-heading">
                  Vue.js
                </h3>

                <p className="reveal-text">
                  Completed Vue.js learning certification
                  to explore component-based frontend
                  development and modern JavaScript frameworks.
                </p>

              </div>

              <div className="certificate-meta">
                <span className="reveal-label">ISSUED BY</span>
                <h4 className="reveal-text">Cisco</h4>
              </div>

            </div>

          </article>

          {/* CERTIFICATE 03 */}

          <article className="certificate-item scroll-section">

            <div className="certificate-number">
              <span className="reveal-label">03</span>
              <span className="certificate-type reveal-label">
                FULL STACK
              </span>
            </div>

            <div className="certificate-content">

              <div className="certificate-info">

                <div className="certificate-image scroll-image">
                  <img
                    src="/images/certificates/simplilearn-fullstack.jpg"
                    alt="Simplilearn Full Stack Development Certificate"
                  />
                </div>

                <span className="certificate-category reveal-label">
                  WEB DEVELOPMENT
                </span>

                <h3 className="reveal-heading">
                  Full Stack Development 101
                </h3>

                <p className="reveal-text">
                  Completed an introductory Full Stack
                  Development course covering the fundamentals
                  of modern web development.
                </p>

              </div>

              <div className="certificate-meta">
                <span className="reveal-label">ISSUED BY</span>
                <h4 className="reveal-text">Simplilearn</h4>
              </div>

            </div>

          </article>

          {/* CERTIFICATE 04 */}

          <article className="certificate-item scroll-section">

            <div className="certificate-number">
              <span className="reveal-label">04</span>
              <span className="certificate-type reveal-label">
                TECH WAR
              </span>
            </div>

            <div className="certificate-content">

              <div className="certificate-info">

                <div className="certificate-image scroll-image">
                  <img
                    src="/images/certificates/tech-war.jpg"
                    alt="Tech War Certificate"
                  />
                </div>

                <span className="certificate-category reveal-label">
                  EVENT / PARTICIPATION
                </span>

                <h3 className="reveal-heading">
                  Tech War
                </h3>

                <p className="reveal-text">
                  Participated in Tech War, an event focused
                  on technical skills, practical challenges
                  and learning through participation.
                </p>

              </div>

              <div className="certificate-meta">
                <span className="reveal-label">EVENT</span>
                <h4 className="reveal-text">Tech War</h4>
              </div>

            </div>

          </article>

        </div>

        {/* CERTIFICATIONS FOOTER */}

        <div className="certifications-footer">
          <span className="reveal-label">
            LEARNING NEVER STOPS.
          </span>

          <span className="reveal-label">
            KNOWLEDGE INTO ACTION ✳
          </span>
        </div>

      </div>

    </section>

  );

}

export default Certifications;
