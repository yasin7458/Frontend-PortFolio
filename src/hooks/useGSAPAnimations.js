
import { useEffect } from "react";
import gsap from "gsap";

function useGSAPAnimations(animation, dependencies = [], scope = null) {

  useEffect(() => {

    const context = gsap.context(() => {
      animation();
    }, scope);

    return () => {
      context.revert();
    };

  }, dependencies);

}

export default useGSAPAnimations;
