
import { gsap } from "gsap";

export const heroAnimation = (element) => {

  if (!element) return;

  const ctx = gsap.context(() => {

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out"
      }
    });

    // TOP INFORMATION

    tl.from(".hero-top > *", {
      y: -35,
      opacity: 0,
      duration: 1,
      stagger: 0.18
    });

    // SIDE LABEL

    tl.from(".hero-side-label", {
      x: -35,
      opacity: 0,
      duration: 0.8
    }, "-=0.5");

    // MAIN TITLE

    tl.from(".hero-title-first", {
      yPercent: 120,
      opacity: 0,
      duration: 1.3,
      ease: "power4.out"
    }, "-=0.3");

    tl.from(".hero-title-last", {
      yPercent: 120,
      opacity: 0,
      duration: 1.3,
      ease: "power4.out"
    }, "-=0.85");

    // RED BRUSH STROKE

    tl.fromTo(".hero-brush", {
      scaleX: 0,
      transformOrigin: "left center"
    }, {
      scaleX: 1,
      duration: 1.4,
      ease: "power4.inOut"
    }, "-=0.9");

    // PROFILE IMAGE

    tl.from(".hero-image-frame", {
      x: 100,
      y: 35,
      scale: 0.92,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out"
    }, "-=0.9");

    // IMAGE PATTERN

    tl.from(".hero-image-pattern", {
      scale: 0.85,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=1");

    // IMAGE CAPTION

    tl.from(".hero-image-caption", {
      y: 25,
      opacity: 0,
      duration: 0.8
    }, "-=0.6");

    // INTRODUCTION

    tl.from(".hero-intro", {
      y: 45,
      opacity: 0,
      duration: 1
    }, "-=0.7");

    // DEVELOPER DETAILS

    tl.from(".hero-detail-row", {
      x: 35,
      opacity: 0,
      duration: 0.8,
      stagger: 0.18
    }, "-=0.6");

    // SOCIAL LINKS

    tl.from(".hero-social-links a", {
      y: 25,
      opacity: 0,
      scale: 0.9,
      duration: 0.7,
      stagger: 0.15
    }, "-=0.5");

    // BOTTOM INFORMATION

    tl.from(".hero-bottom", {
      y: 25,
      opacity: 0,
      duration: 0.8
    }, "-=0.4");

    // IMAGE FLOATING

    gsap.to(".hero-image-frame", {
      y: -12,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // ROTATING IMAGE CIRCLE

    gsap.to(".hero-image-circle", {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "none"
    });

    // SUBTLE SIDE LABEL MOVEMENT

    gsap.to(".hero-side-label", {
      y: -6,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, element);

  return ctx;

};
