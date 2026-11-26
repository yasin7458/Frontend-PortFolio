
import { useEffect, useRef } from "react";

import { textReveal } from "../../animations/textAnimation";
import { scrollReveal } from "../../animations/scrollAnimation";

import "./Education.css";

function Education() {

  const educationRef = useRef(null);

  useEffect(() => {

    const textContext = textReveal(educationRef.current);
    const scrollContext = scrollReveal(educationRef.current);

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

    <section className="education" id="education" ref={educationRef}>

      <div className="education-container">

        {/* EDUCATION HEADING */}

        <div className="education-heading">

          <div className="education-heading-top">
            <span className="education-label reveal-label">
              04 / MY JOURNEY
            </span>

            <span className="education-count reveal-label">
              EDUCATION — 02
            </span>
          </div>

          <h2 className="reveal-heading">
            MY <span>EDUCATION</span>
          </h2>

          <p className="reveal-text">
            My educational foundation and continuous
            journey of learning and growing in technology.
          </p>

        </div>

        {/* EDUCATION 01 */}

        <div className="education-content scroll-section">

          <div className="education-number">
            <span className="reveal-label">01</span>

            <span className="education-status reveal-label">
              COMPLETED
            </span>
          </div>

          <div className="education-details">

            <div className="education-main">

              <span className="education-category reveal-label">
                HIGHER SECONDARY EDUCATION
              </span>

              <h3 className="reveal-heading">
                12th Science <span>(A Group)</span>
              </h3>

              <p className="reveal-text">
                Completed my Higher Secondary Education
                in the Science stream, building a foundation
                in logical thinking, mathematics and
                problem-solving.
              </p>

            </div>

            <div className="education-meta">

              <div>
                <span className="education-meta-label reveal-label">
                  QUALIFICATION
                </span>
                <h4 className="reveal-text">HSC / 12th Pass</h4>
              </div>

              <div>
                <span className="education-meta-label reveal-label">
                  STREAM
                </span>
                <h4 className="reveal-text">Science — A Group</h4>
              </div>

              <div>
                <span className="education-meta-label reveal-label">
                  PASSING YEAR
                </span>
                <h4 className="reveal-text">2025</h4>
              </div>

            </div>

          </div>

        </div>

        {/* EDUCATION 02 */}

        <div className="education-content education-current scroll-section">

          <div className="education-number">
            <span className="reveal-label">02</span>

            <span className="education-status reveal-label">
              CURRENTLY LEARNING
            </span>
          </div>

          <div className="education-details">

            <div className="education-main">

              <span className="education-category reveal-label">
                SELF-LEARNING / DEVELOPMENT
              </span>

              <h3 className="reveal-heading">
                Full Stack <span>Development</span>
              </h3>

              <p className="reveal-text">
                Currently expanding my development skills
                by learning modern frontend and backend
                technologies to build complete web applications.
              </p>

            </div>

            <div className="education-meta">

              <div>
                <span className="education-meta-label reveal-label">
                  LEARNING
                </span>
                <h4 className="reveal-text">
                  Full Stack Development
                </h4>
              </div>

              <div>
                <span className="education-meta-label reveal-label">
                  TECHNOLOGIES
                </span>
                <h4 className="reveal-text">
                  HTML, CSS, JavaScript, C, C++, DSA, Bootstrap,
                  Tailwind CSS, React, Node.js, Express.js, MongoDB
                </h4>
              </div>

              <div>
                <span className="education-meta-label reveal-label">
                  DURATION
                </span>
                <h4 className="reveal-text">
                  2025 — Present
                </h4>
              </div>

            </div>

          </div>

        </div>

        {/* EDUCATION FOOTER */}

        <div className="education-footer">
          <span className="reveal-label">
            LEARN. GROW. BUILD.
          </span>

          <span className="reveal-label">
            THE JOURNEY CONTINUES ✳
          </span>
        </div>

      </div>

    </section>

  );

}

export default Education;
