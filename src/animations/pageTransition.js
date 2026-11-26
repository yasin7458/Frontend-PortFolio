
import { gsap } from "gsap";

export const pageTransition = (element, onComplete) => {

  if (!element) return;

  const ctx = gsap.context(() => {

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      }
    });

    // PAGE INITIAL STATE

    gsap.set(element, {
      opacity: 0,
      y: 30
    });

    // PAGE REVEAL

    tl.to(element, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out"
    });

    // CONTENT REVEAL

    tl.from(".page-transition-item", {
      y: 35,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out"
    }, "-=0.6");

  }, element);

  return ctx;

};
