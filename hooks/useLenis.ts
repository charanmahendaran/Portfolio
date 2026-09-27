"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
      autoRaf: true,
      anchors: false,
    });

    lenisInstance = lenis;

    return () => {
      if (lenisInstance === lenis) {
        lenisInstance = null;
      }

      lenis.destroy();
    };
  }, []);
}
