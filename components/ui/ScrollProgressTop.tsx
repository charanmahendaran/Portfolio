"use client";

import { useEffect, useRef, useState } from "react";
import { getLenis } from "@/hooks/useLenis";

const RADIUS = 13;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollProgressTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  /*
   * Current magnetic position.
   */
  const magneticX = useRef(0);
  const magneticY = useRef(0);

  /*
   * Target magnetic position.
   */
  const targetX = useRef(0);
  const targetY = useRef(0);

  /*
   * Animation frame used for the magnetic movement.
   */
  const magneticFrame = useRef<number | null>(null);

  /*
   * ------------------------------------------------------------
   * Scroll progress
   *
   * Progress is based on the entire document:
   *
   * 0%   = top of page
   * 50%  = middle
   * 100% = bottom
   * ------------------------------------------------------------
   */
  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollProgress =
        scrollableHeight > 0
          ? Math.min(Math.max(scrollTop / scrollableHeight, 0), 1)
          : 0;

      setProgress(scrollProgress);

      /*
       * Keep the control hidden while the user is still
       * inside the Hero.
       */
      setVisible(scrollTop > window.innerHeight * 0.5);
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);

      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  /*
   * ------------------------------------------------------------
   * Magnetic movement
   *
   * The button only follows the cursor slightly.
   * Maximum movement is intentionally small so it remains
   * subtle rather than behaving like a large magnetic button.
   * ------------------------------------------------------------
   */
  useEffect(() => {
    const button = buttonRef.current;

    if (!button) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = button.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;

      const centerY = rect.top + rect.height / 2;

      const distanceX = event.clientX - centerX;

      const distanceY = event.clientY - centerY;

      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      /*
       * Only activate the magnetic effect close to
       * the control.
       */
      const magneticRadius = 90;

      if (distance > magneticRadius) {
        targetX.current = 0;
        targetY.current = 0;
        return;
      }

      /*
       * Strength decreases as the pointer gets farther away.
       */
      const strength = (1 - distance / magneticRadius) * 7;

      const normalizedX = distance > 0 ? distanceX / distance : 0;

      const normalizedY = distance > 0 ? distanceY / distance : 0;

      targetX.current = normalizedX * strength;

      targetY.current = normalizedY * strength;
    };

    const resetMagnetic = () => {
      targetX.current = 0;
      targetY.current = 0;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    window.addEventListener("pointerleave", resetMagnetic);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      window.removeEventListener("pointerleave", resetMagnetic);
    };
  }, []);

  /*
   * ------------------------------------------------------------
   * Smooth magnetic interpolation
   * ------------------------------------------------------------
   */
  useEffect(() => {
    const animate = () => {
      magneticX.current += (targetX.current - magneticX.current) * 0.12;

      magneticY.current += (targetY.current - magneticY.current) * 0.12;

      if (buttonRef.current) {
        buttonRef.current.style.setProperty(
          "--magnetic-x",
          `${magneticX.current}px`,
        );

        buttonRef.current.style.setProperty(
          "--magnetic-y",
          `${magneticY.current}px`,
        );
      }

      magneticFrame.current = window.requestAnimationFrame(animate);
    };

    magneticFrame.current = window.requestAnimationFrame(animate);

    return () => {
      if (magneticFrame.current !== null) {
        window.cancelAnimationFrame(magneticFrame.current);
      }
    };
  }, []);

  /*
   * ------------------------------------------------------------
   * Scroll to top
   * ------------------------------------------------------------
   */
  const scrollToTop = () => {
    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.25,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const strokeOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={[
        "group fixed bottom-6 right-6 z-50",
        "flex h-7 w-7 items-center justify-center",
        "rounded-full",
        "bg-[#0a0a0a]/20",
        "backdrop-blur-[2px]",
        "transition-[width,height,opacity,transform,color] duration-300 ease-out",
        "md:bottom-8 md:right-8",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
        "group-hover:h-9 group-hover:w-9",
      ].join(" ")}
      style={
        {
          "--magnetic-x": "0px",
          "--magnetic-y": "0px",
          transform: "translate3d(var(--magnetic-x), var(--magnetic-y), 0)",
        } as React.CSSProperties
      }
    >
      {/* ======================================================
          BASE RING
          ====================================================== */}

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 36 36"
      >
        {/* Base ring */}

        <circle
          cx="18"
          cy="18"
          r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="1"
        />

        {/* Progress ring */}

        <circle
          cx="18"
          cy="18"
          r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.48)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeOffset}
          transform="rotate(-90 18 18)"
          className="transition-[stroke,stroke-width] duration-300 group-hover:stroke-white/80"
        />
      </svg>

      {/* ======================================================
          ARROW
          ====================================================== */}

      <span className="relative z-10 text-[13px] leading-none text-white/30 transition-all duration-300 group-hover:-translate-y-[2px] group-hover:text-white">
        ↑
      </span>
    </button>
  );
}
