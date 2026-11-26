
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollReveal = (element) => {

  if (!element) return;

  const ctx = gsap.context(() => {

    // SECTION REVEAL

    gsap.utils.toArray(".scroll-section").forEach((section) => {

      gsap.from(section, {
        y: 70,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }

      });

    });

    // IMAGE REVEAL

    gsap.utils.toArray(".scroll-image").forEach((image) => {

      gsap.from(image, {
        scale: 0.85,
        y: 50,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",

        scrollTrigger: {
          trigger: image,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }

      });

    });

    // CARD REVEAL

    gsap.utils.toArray(".scroll-card").forEach((card) => {

      gsap.from(card, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none reverse"
        }

      });

    });

    // DECORATIVE ELEMENTS

    gsap.utils.toArray(".scroll-decoration").forEach((item) => {

      gsap.from(item, {
        rotation: -15,
        scale: 0.7,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",

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
