import { gsap } from "gsap";

export const loaderAnimation = (element, onComplete) => {

  const ctx = gsap.context(() => {

    const counter = { value: 0 };

    const progressText = element.querySelector(".loader-counter");

    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // CHAPTER REVEAL

    tl.from(".loader-top", {
      y: -25,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out"
    });

    // EYEBROW REVEAL

    tl.from(".loader-eyebrow", {
      x: -40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out"
    }, "-=0.3");

    // MAIN TITLE REVEAL

    tl.from(".loader-title", {
      y: 120,
      opacity: 0,
      duration: 1.1,
      ease: "power4.out"
    }, "-=0.2");

    // SUBTITLE REVEAL

    tl.from(".loader-subtitle span", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.6");

    // DESCRIPTION REVEAL

    tl.from(".loader-description", {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out"
    }, "-=0.4");

    // PROGRESS ANIMATION

    tl.to(counter, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",

      onUpdate: () => {
        progressText.textContent =
          Math.round(counter.value) + "%";
      }

    });

    tl.to(".loader-progress-bar", {
      scaleX: 1,
      duration: 2,
      ease: "power2.inOut"
    }, "<");

    // FOOTER REVEAL

    tl.from(".loader-footer", {
      y: 15,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=1.5");

    // LOADER EXIT

    tl.to(element, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut"
    });

  }, element);

  return ctx;
};