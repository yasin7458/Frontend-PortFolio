
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const parallaxAnimation = (element) => {

  if (!element) return;

  const ctx = gsap.context(() => {

    // BACKGROUND PARALLAX

    gsap.utils.toArray(".parallax-bg").forEach((item) => {

      gsap.to(item, {
        yPercent: 20,
        ease: "none",

        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true
        }

      });

    });

    // IMAGE PARALLAX

    gsap.utils.toArray(".parallax-image").forEach((item) => {

      gsap.to(item, {
        yPercent: -15,
        ease: "none",

        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true
        }

      });

    });

    // TEXT PARALLAX

    gsap.utils.toArray(".parallax-text").forEach((item) => {

      gsap.to(item, {
        yPercent: -20,
        ease: "none",

        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true
        }

      });

    });

    // DECORATIVE PARALLAX

    gsap.utils.toArray(".parallax-decoration").forEach((item) => {

      gsap.to(item, {
        yPercent: 35,
        rotation: 10,
        ease: "none",

        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
          invalidateOnRefresh: true
        }

      });

    });

  }, element);

  return ctx;

};
