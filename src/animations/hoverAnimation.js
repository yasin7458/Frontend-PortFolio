
import { gsap } from "gsap";

export const hoverAnimation = (element) => {

  if (!element) return;

  const listeners = [];

  const ctx = gsap.context(() => {

    // BUTTON HOVER

    gsap.utils.toArray(".hover-button").forEach((button) => {

      const hover = gsap.to(button, {
        y: -6,
        scale: 1.04,
        duration: 0.35,
        ease: "power3.out",
        paused: true
      });

      const handleEnter = () => {
        hover.play();
      };

      const handleLeave = () => {
        hover.reverse();
      };

      button.addEventListener("mouseenter", handleEnter);
      button.addEventListener("mouseleave", handleLeave);

      listeners.push(() => {
        button.removeEventListener("mouseenter", handleEnter);
        button.removeEventListener("mouseleave", handleLeave);
      });

    });

    // PROJECT CARD HOVER

    gsap.utils.toArray(".hover-card").forEach((card) => {

      const hover = gsap.to(card, {
        y: -10,
        duration: 0.4,
        ease: "power3.out",
        paused: true
      });

      const handleEnter = () => {
        hover.play();
      };

      const handleLeave = () => {
        hover.reverse();
      };

      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);

      listeners.push(() => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      });

    });

    // IMAGE HOVER

    gsap.utils.toArray(".hover-image").forEach((image) => {

      const hover = gsap.to(image, {
        scale: 1.08,
        duration: 0.6,
        ease: "power3.out",
        paused: true
      });

      const handleEnter = () => {
        hover.play();
      };

      const handleLeave = () => {
        hover.reverse();
      };

      image.addEventListener("mouseenter", handleEnter);
      image.addEventListener("mouseleave", handleLeave);

      listeners.push(() => {
        image.removeEventListener("mouseenter", handleEnter);
        image.removeEventListener("mouseleave", handleLeave);
      });

    });

    // ICON HOVER

    gsap.utils.toArray(".hover-icon").forEach((icon) => {

      const hover = gsap.to(icon, {
        x: 6,
        rotation: 8,
        duration: 0.35,
        ease: "power2.out",
        paused: true
      });

      const handleEnter = () => {
        hover.play();
      };

      const handleLeave = () => {
        hover.reverse();
      };

      icon.addEventListener("mouseenter", handleEnter);
      icon.addEventListener("mouseleave", handleLeave);

      listeners.push(() => {
        icon.removeEventListener("mouseenter", handleEnter);
        icon.removeEventListener("mouseleave", handleLeave);
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
