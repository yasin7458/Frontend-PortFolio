
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const horizontalScroll = (element) => {

  if (!element) return;

  const ctx = gsap.context(() => {

    const track = element.querySelector(".horizontal-track");

    if (!track) return;

    const getScrollAmount = () => {
      return track.scrollWidth - element.clientWidth;
    };

    if (getScrollAmount() <= 0) return;

    gsap.to(track, {
      x: () => -getScrollAmount(),
      ease: "none",

      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true
      }

    });

  }, element);

  return ctx;

};
