"use client";

import { useEffect } from "react";
import useLenis from "@/hooks/useLenis";

export default function SmoothScroll() {
  useLenis();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const resetScroll = () => {
      window.scrollTo(0, 0);
    };

    const frame = window.requestAnimationFrame(resetScroll);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
