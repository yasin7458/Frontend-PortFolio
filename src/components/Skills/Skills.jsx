
import { useEffect, useRef } from "react";

import { textReveal } from "../../animations/textAnimation";
import { scrollReveal } from "../../animations/scrollAnimation";

import "./Skills.css";

function Skills() {

  const skillsRef = useRef(null);

  useEffect(() => {

    const textContext = textReveal(skillsRef.current);
    const scrollContext = scrollReveal(skillsRef.current);

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

    <section className="skills" id="skills" ref={skillsRef}>

      <div className="skills-container">

        {/* SKILLS HEADING */}

        <div className="skills-heading">

          <span className="skills-label reveal-label">
            02 / MY EXPERTISE
          </span>

          <h2 className="reveal-heading">
            TOOLS & <span>TECHNOLOGIES</span>
          </h2>

          <p className="reveal-text">
            The technologies I use to turn ideas into digital experiences.
          </p>

        </div>

        {/* SKILLS MARQUEE */}

        <div className="skills-marquee">

          {/* FIRST STRIP */}

          <div className="skills-strip skills-strip-light scroll-card">

            <div className="skills-track">

              <div className="skills-group">
                <span>HTML5</span>
                <i>✦</i>
                <span>CSS3</span>
                <i>✦</i>
                <span>JAVASCRIPT</span>
                <i>✦</i>
                <span>REACT</span>
                <i>✦</i>
                <span>BOOTSTRAP</span>
                <i>✦</i>
                <span>GSAP</span>
                <i>✦</i>
              </div>

              <div className="skills-group" aria-hidden="true">
                <span>HTML5</span>
                <i>✦</i>
                <span>CSS3</span>
                <i>✦</i>
                <span>JAVASCRIPT</span>
                <i>✦</i>
                <span>REACT</span>
                <i>✦</i>
                <span>BOOTSTRAP</span>
                <i>✦</i>
                <span>GSAP</span>
                <i>✦</i>
              </div>

            </div>

          </div>

          {/* SECOND STRIP */}

          <div className="skills-strip skills-strip-red scroll-card">

            <div className="skills-track skills-track-reverse">

              <div className="skills-group">
                <span>C</span>
                <i>✦</i>
                <span>C++</span>
                <i>✦</i>
                <span>DSA</span>
                <i>✦</i>
                <span>NODE.JS</span>
                <i>✦</i>
                <span>EXPRESS.JS</span>
                <i>✦</i>
                <span>MONGODB</span>
                <i>✦</i>
              </div>

              <div className="skills-group" aria-hidden="true">
                <span>C</span>
                <i>✦</i>
                <span>C++</span>
                <i>✦</i>
                <span>DSA</span>
                <i>✦</i>
                <span>NODE.JS</span>
                <i>✦</i>
                <span>EXPRESS.JS</span>
                <i>✦</i>
                <span>MONGODB</span>
                <i>✦</i>
              </div>

            </div>

          </div>

        </div>

        {/* SKILLS FOOTER */}

        <div className="skills-footer">

          <span className="reveal-label">
            ALWAYS LEARNING. ALWAYS BUILDING.
          </span>

          <span className="reveal-label">
            FRONTEND → FULL STACK
          </span>

        </div>

      </div>

    </section>

  );

}

export default Skills;
