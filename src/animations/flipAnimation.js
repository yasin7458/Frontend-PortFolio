
import { gsap } from "gsap";

export const flipAnimation = (element) => {

  if (!element) return;

  const listeners = [];

  const ctx = gsap.context(() => {

    // CARD FLIP

    gsap.utils.toArray(".flip-card").forEach((card) => {

      const front = card.querySelector(".flip-front");
      const back = card.querySelector(".flip-back");

      if (!front || !back) return;

      gsap.set(card, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d"
      });

      gsap.set([front, back], {
        backfaceVisibility: "hidden"
      });

      gsap.set(back, {
        rotationY: 180
      });

      const timeline = gsap.timeline({
        paused: true
      });

      timeline
        .to(front, {
          rotationY: -180,
          duration: 0.7,
          ease: "power2.inOut"
        }, 0)
        .to(back, {
          rotationY: 0,
          duration: 0.7,
          ease: "power2.inOut"
        }, 0);

      const handleEnter = () => {
        timeline.play();
      };

      const handleLeave = () => {
        timeline.reverse();
      };

      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);

      listeners.push(() => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      });

    });

  }, element);

  return {
    revert: () => {

      listeners.forEach((removeListener) => {
        removeListener();
      });

      ctx.revert();

    }
  };

};
