
import { useEffect, useRef } from "react";

import { textReveal } from "../../animations/textAnimation";
import { scrollReveal } from "../../animations/scrollAnimation";
import { parallaxAnimation } from "../../animations/parallaxAnimation";

import "./Workflow.css";

function Workflow() {

  const workflowRef = useRef(null);

  const steps = [
    {
      number: "01",
      icon: "◎",
      label: "STEP ONE",
      title: "Discover",
      description:
        "Understanding the project idea, goals and requirements before starting.",
      footer: "UNDERSTAND THE IDEA ↗",
    },
    {
      number: "02",
      icon: "◈",
      label: "STEP TWO",
      title: "Plan",
      description:
        "Organizing the structure, planning the layout and choosing the right approach.",
      footer: "PLAN THE STRUCTURE ↗",
    },
    {
      number: "03",
      icon: "⌘",
      label: "STEP THREE",
      title: "Develop",
      description:
        "Bringing the design to life by writing clean code and building functionality.",
      footer: "BUILD THE EXPERIENCE ↗",
    },
    {
      number: "04",
      icon: "✳",
      label: "STEP FOUR",
      title: "Refine",
      description:
        "Testing the final experience, fixing issues and improving the details.",
      footer: "POLISH THE DETAILS ↗",
    },
  ];

  useEffect(() => {

    const textContext = textReveal(workflowRef.current);
    const scrollContext = scrollReveal(workflowRef.current);
    const parallaxContext = parallaxAnimation(workflowRef.current);

    return () => {

      if (textContext) {
        textContext.revert();
      }

      if (scrollContext) {
        scrollContext.revert();
      }

      if (parallaxContext) {
        parallaxContext.revert();
      }

    };

  }, []);

  return (

    <section className="workflow" id="workflow" ref={workflowRef}>

      <div className="workflow-container">

        {/* WORKFLOW HEADING */}

        <div className="workflow-heading">

          <div className="workflow-heading-top">
            <span className="workflow-label reveal-label">
              07 / MY PROCESS
            </span>

            <span className="workflow-count reveal-label">
              FROM IDEA TO REALITY
            </span>
          </div>

          <h2 className="reveal-heading">
            HOW I <span>WORK</span>
          </h2>

          <p className="reveal-text">
            Every great digital experience starts with
            an idea and grows through a thoughtful process.
          </p>

        </div>

        {/* WORKFLOW INTRO */}

        <div className="workflow-intro scroll-section">

          <span className="workflow-intro-mark scroll-decoration">
            ✳
          </span>

          <div className="workflow-intro-content">

            <span className="workflow-intro-label reveal-label">
              THE CREATIVE PROCESS
            </span>

            <h3 className="reveal-heading">
              A SIMPLE IDEA.
              <br />
              A THOUGHTFUL PROCESS.
              <br />
              <span>A BETTER EXPERIENCE.</span>
            </h3>

          </div>

          <span className="workflow-intro-number reveal-label">
            01 — 04
          </span>

        </div>

        {/* WORKFLOW IMAGE BANNER */}

        <div className="workflow-banner scroll-section">

          <img
            src="/images/workflow-banner.png"
            alt="Black and white manga inspired artwork"
            className="parallax-image"
          />

          <div className="workflow-banner-overlay"></div>

          <div className="workflow-banner-content">

            <span className="workflow-banner-label reveal-label">
              FOCUS / CREATIVITY / EXECUTION
            </span>

            <h3 className="reveal-heading">
              DETAILS MAKE
              <span>THE DIFFERENCE.</span>
            </h3>

            <div className="workflow-banner-bottom">
              <span className="reveal-label">
                07 — 01 / PROCESS
              </span>

              <span className="reveal-label">
                THINK BEYOND THE ORDINARY ✳
              </span>
            </div>

          </div>

        </div>

        {/* WORKFLOW STEPS */}

        <div className="workflow-steps">

          {steps.map((step) => (

            <article
              className="workflow-step scroll-card"
              key={step.number}
            >

              <div className="workflow-step-top">

                <span className="workflow-step-number reveal-label">
                  {step.number}
                </span>

                <span className="workflow-step-icon scroll-decoration">
                  {step.icon}
                </span>

              </div>

              <div className="workflow-step-content">

                <span className="workflow-step-label reveal-label">
                  {step.label}
                </span>

                <h4 className="reveal-heading">
                  {step.title}
                </h4>

                <p className="reveal-text">
                  {step.description}
                </p>

              </div>

              <span className="workflow-step-bottom reveal-label">
                {step.footer}
              </span>

            </article>

          ))}

        </div>

        {/* WORKFLOW FOOTER */}

        <div className="workflow-footer">

          <span className="reveal-label">
            THINK <i>→</i> CREATE <i>→</i> IMPROVE
          </span>

          <span className="reveal-label">
            GOOD WORK TAKES A PROCESS ✳
          </span>

        </div>

      </div>

    </section>

  );

}

export default Workflow;
