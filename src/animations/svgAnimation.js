
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const svgAnimation = (element) => {

  if (!element) return;

  const ctx = gsap.context(() => {

    // SVG LINE DRAW

    gsap.utils.toArray(".svg-line").forEach((line) => {

      if (typeof line.getTotalLength !== "function") return;

      const length = line.getTotalLength();

      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length
      });

      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",

        scrollTrigger: {
          trigger: line,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }

      });

    });

    // SVG CIRCLE REVEAL

    gsap.utils.toArray(".svg-circle").forEach((circle) => {

      gsap.from(circle, {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
        duration: 1.2,
        ease: "back.out(1.7)",

        scrollTrigger: {
          trigger: circle,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }

      });

    });

    // SVG SHAPE REVEAL

    gsap.utils.toArray(".svg-shape").forEach((shape) => {

      gsap.from(shape, {
        scale: 0.5,
        rotation: -25,
        opacity: 0,
        transformOrigin: "center center",
        duration: 1.3,
        ease: "power3.out",

        scrollTrigger: {
          trigger: shape,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }

      });

    });

    // SVG ROTATION

    gsap.utils.toArray(".svg-rotate").forEach((item) => {

      gsap.to(item, {
        rotation: 360,
        transformOrigin: "center center",
        duration: 20,
        repeat: -1,
        ease: "none"

      });

    });

  }, element);

  return ctx;

};
