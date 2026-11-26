
import { useEffect, useRef } from "react";
import { loaderAnimation } from "../../animations/loaderAnimation";
import "./Loader.css";

function Loader({ onComplete }) {

  const loaderRef = useRef(null);

  useEffect(() => {

    const ctx = loaderAnimation(loaderRef.current, onComplete);

    return () => {
      if (ctx) {
        ctx.revert();
      }
    };

  }, [onComplete]);

  return (
    <div className="loader" ref={loaderRef}>

      <div className="loader-top">

        <div className="loader-chapter">
          <span className="chapter-number">00</span>
          <span className="chapter-label">CHAPTER</span>
        </div>

        <div className="loader-location">
          PORTFOLIO · INDIA
        </div>

      </div>

      <div className="loader-center">

        <div className="loader-eyebrow">
          <span></span>
          WELCOME TO MY CREATIVE WORLD
        </div>

        <h1 className="loader-title">
          YASIN<span>.</span>
        </h1>

        <div className="loader-subtitle">
          <span>FRONTEND</span>
          <span className="outline-text">DEVELOPER</span>
        </div>

        <p className="loader-description">
          Building ideas into digital experiences.
        </p>

      </div>

      <div className="loader-bottom">

        <div className="loader-progress-info">
          <span>INITIALIZING EXPERIENCE</span>
          <span className="loader-counter">00%</span>
        </div>

        <div className="loader-progress-track">
          <div className="loader-progress-bar"></div>
        </div>

        <div className="loader-footer">
          <span>DESIGN · DEVELOP · CREATE</span>
          <span>EST. 2026</span>
        </div>

      </div>

      <div className="loader-decoration"></div>

    </div>
  );
}

export default Loader;
