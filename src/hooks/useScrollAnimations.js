
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useScrollAnimations(animation, dependencies = [], scope = null) {

  useEffect(() => {

    const context = gsap.context(() => {
      animation();
    }, scope);

    return () => {
      context.revert();
    };

  }, dependencies);

}

export default useScrollAnimations;
