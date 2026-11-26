
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const textReveal = (element) => {

  if (!element) return;

  const ctx = gsap.context(() => {

    // HEADING REVEAL

    gsap.utils.toArray(".reveal-heading").forEach((item) => {
      gsap.from(item, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // PARAGRAPH REVEAL

    gsap.utils.toArray(".reveal-text").forEach((item) => {
      gsap.from(item, {
        y: 35,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 88%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // SMALL LABEL REVEAL

    gsap.utils.toArray(".reveal-label").forEach((item) => {
      gsap.from(item, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // LINE REVEAL

    gsap.utils.toArray(".reveal-line").forEach((item) => {
      gsap.from(item, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    });

  }, element);

  return ctx;
};
