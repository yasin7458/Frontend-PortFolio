
import { useEffect, useRef } from "react";

import { textReveal } from "../../animations/textAnimation";
import { scrollReveal } from "../../animations/scrollAnimation";
import { hoverAnimation } from "../../animations/hoverAnimation";

import "./Projects.css";

function Projects() {

  const projectsRef = useRef(null);

  useEffect(() => {

    const textContext = textReveal(projectsRef.current);
    const scrollContext = scrollReveal(projectsRef.current);
    const hoverContext = hoverAnimation(projectsRef.current);

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

    <section className="projects" id="projects" ref={projectsRef}>

      <div className="projects-container">

        {/* PROJECTS HEADING */}

        <div className="projects-heading">

          <div className="projects-heading-top">
            <span className="projects-label reveal-label">
              03 / CHAPTER THREE
            </span>

            <span className="projects-count reveal-label">
              SELECTED WORK — 04
            </span>
          </div>

          <h2 className="reveal-heading">
            SELECTED <span>WORK</span>
          </h2>

          <p className="reveal-text">
            A collection of things I've designed, developed
            and brought to life through code.
          </p>

        </div>

        {/* PROJECT LIST */}

        <div className="projects-list">

          {/* PROJECT 01 */}

          <article className="project-item scroll-section">

            <div className="project-number">
              <span className="reveal-label">01</span>
              <span className="project-type reveal-label">REACT / CRUD</span>
            </div>

            <div className="project-content">

              <div className="project-image scroll-image">
                <img
                  src="/images/projects/student-management.jpg"
                  alt="Student Management CRUD Application"
                />

                <span className="project-image-number">01</span>
              </div>

              <div className="project-details">

                <div>
                  <span className="project-category reveal-label">
                    WEB APPLICATION
                  </span>

                  <h3 className="reveal-heading">
                    Student Management CRUD Application
                  </h3>

                  <p className="reveal-text">
                    A React-based application to manage student
                    records with Create, Read, Update and Delete
                    operations using JSON Server and API integration.
                  </p>
                </div>

                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React.js</span>
                  <span>JSON Server</span>
                  <span>Fetch API</span>
                </div>

                <a
                  href="https://student-management-system-gamma-sooty.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link hover-button"
                >
                  VIEW PROJECT <span>↗</span>
                </a>

              </div>

            </div>

          </article>

          {/* PROJECT 02 */}

          <article className="project-item scroll-section">

            <div className="project-number">
              <span className="reveal-label">02</span>
              <span className="project-type reveal-label">
                FRONTEND / E-COMMERCE
              </span>
            </div>

            <div className="project-content">

              <div className="project-image scroll-image">
                <img
                  src="/images/projects/ecommerce.jpg"
                  alt="E-commerce Website"
                />

                <span className="project-image-number">02</span>
              </div>

              <div className="project-details">

                <div>
                  <span className="project-category reveal-label">
                    E-COMMERCE WEBSITE
                  </span>

                  <h3 className="reveal-heading">
                    E-commerce Website
                  </h3>

                  <p className="reveal-text">
                    A user-friendly shopping experience featuring
                    product listings, interactive product cards
                    and a clean, responsive interface.
                  </p>
                </div>

                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Bootstrap</span>
                </div>

                <a
                  href="https://e-commerce-tau-two-70.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link hover-button"
                >
                  VIEW PROJECT <span>↗</span>
                </a>

              </div>

            </div>

          </article>

          {/* PROJECT 03 */}

          <article className="project-item scroll-section">

            <div className="project-number">
              <span className="reveal-label">03</span>
              <span className="project-type reveal-label">
                JAVASCRIPT / INTERACTIVE
              </span>
            </div>

            <div className="project-content">

              <div className="project-image scroll-image">
                <img
                  src="/images/projects/quiz-app.jpg"
                  alt="Quiz Application"
                />

                <span className="project-image-number">03</span>
              </div>

              <div className="project-details">

                <div>
                  <span className="project-category reveal-label">
                    INTERACTIVE APPLICATION
                  </span>

                  <h3 className="reveal-heading">
                    Quiz Application
                  </h3>

                  <p className="reveal-text">
                    An interactive quiz experience with multiple-choice
                    questions, answer selection and automatic
                    score calculation using JavaScript.
                  </p>
                </div>

                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

                <a
                  href="https://quiz-4ht2gfy8m-me-1b4d.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link hover-button"
                >
                  VIEW PROJECT <span>↗</span>
                </a>

              </div>

            </div>

          </article>

          {/* PROJECT 04 */}

          <article className="project-item scroll-section">

            <div className="project-number">
              <span className="reveal-label">04</span>
              <span className="project-type reveal-label">
                GSAP / ANIMATION
              </span>
            </div>

            <div className="project-content">

              <div className="project-image scroll-image">
                <img
                  src="/images/projects/gsap-project.jpg"
                  alt="GSAP Animated Web Project"
                />

                <span className="project-image-number">04</span>
              </div>

              <div className="project-details">

                <div>
                  <span className="project-category reveal-label">
                    CREATIVE WEB EXPERIENCE
                  </span>

                  <h3 className="reveal-heading">
                    GSAP Motion Experience
                  </h3>

                  <p className="reveal-text">
                    A creative web project focused on motion,
                    smooth transitions and engaging visual
                    interactions using GSAP animations.
                  </p>
                </div>

                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>GSAP</span>
                </div>

                <a
                  href="https://github.com/yasin7458/GSAP-Experience.git"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link hover-button"
                >
                  VIEW PROJECT <span>↗</span>
                </a>

              </div>

            </div>

          </article>

        </div>

        {/* PROJECTS FOOTER */}

        <div className="projects-footer">
          <span className="reveal-label">
            04 SELECTED PROJECTS
          </span>

          <span className="reveal-label">
            IDEAS INTO INTERFACES ✳
          </span>
        </div>

      </div>

    </section>

  );

}

export default Projects;
