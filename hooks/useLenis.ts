"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
      autoRaf: true,
      anchors: true,
    });

    lenis.on("scroll", (event) => {
      console.log("LENIS:", event.scroll, event.velocity);
    });

    return () => {
      lenis.destroy();
    };
  }, []);
}
