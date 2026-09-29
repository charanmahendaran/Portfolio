"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Loader from "@/components/loader/Loader";

type IntroProps = {
  onComplete?: () => void;
};

const ZERO_ZOOM_DURATION = 1.35;

const CHARAN_DURATION = 0.75;
const M_ENTRY_DURATION = 0.28;
const MAHENDARAN_DURATION = 0.52;
const SNAP_BACK_DURATION = 0.32;

// Elevated luxury sapphire gradient
const LUXURY_BLUE_BG =
  "radial-gradient(ellipse at 50% 50%, #0c1a30 0%, #060d19 100%)";
const LUXURY_BLUE_SOLID = "#081324";

export default function Intro({ onComplete }: IntroProps) {
  const [mounted, setMounted] = useState(true);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const loaderWrapperRef = useRef<HTMLDivElement | null>(null);
  const loaderNumberRef = useRef<HTMLDivElement | null>(null);
  const loaderZoomRef = useRef<HTMLSpanElement | null>(null);
  const loaderFirstRef = useRef<HTMLSpanElement | null>(null);
  const loaderMiddleRef = useRef<HTMLSpanElement | null>(null);
  const loaderLastRef = useRef<HTMLSpanElement | null>(null);

  const blueBackgroundRef = useRef<HTMLDivElement | null>(null);
  const blueRevealRef = useRef<HTMLDivElement | null>(null);
  const heroTransitionRef = useRef<HTMLDivElement | null>(null);

  // Identity elements
  const charanRef = useRef<HTMLSpanElement | null>(null);
  const secondLineRef = useRef<HTMLSpanElement | null>(null);
  const mRef = useRef<HTMLSpanElement | null>(null);
  const dotRef = useRef<HTMLSpanElement | null>(null);
  const mahendaranRef = useRef<HTMLSpanElement | null>(null);

  // Accompanying Hero elements that reveal seamlessly
  const topMetadataRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const profileVisualRef = useRef<HTMLDivElement | null>(null);

  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const startedRef = useRef(false);
  const completedRef = useRef(false);

  /*
   * ------------------------------------------------------------
   * FINISH & CLEANUP
   * ------------------------------------------------------------
   */
  const finishIntro = useCallback(() => {
    if (completedRef.current) {
      return;
    }

    completedRef.current = true;

    timelineRef.current?.kill();
    timelineRef.current = null;

    sessionStorage.setItem("introPlayed", "true");

    // Clean up all body / html overflow locks so the navbar stays pinned on scroll
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    window.dispatchEvent(new Event("scroll"));
    window.dispatchEvent(new Event("resize"));

    const overlay = overlayRef.current;
    if (!overlay) {
      setMounted(false);
      onComplete?.();
      return;
    }

    gsap.to(overlay, {
      opacity: 0,
      duration: 0.15,
      ease: "power2.out",
      onComplete: () => {
        setMounted(false);
        onComplete?.();
      },
    });
  }, [onComplete]);

  /*
   * ------------------------------------------------------------
   * START INTRO
   * ------------------------------------------------------------
   */
  const startIntro = useCallback(() => {
    if (startedRef.current || completedRef.current) {
      return;
    }

    startedRef.current = true;

    const overlay = overlayRef.current;
    const loaderWrapper = loaderWrapperRef.current;
    const loaderNumber = loaderNumberRef.current;
    const loaderZoom = loaderZoomRef.current;
    const loaderFirst = loaderFirstRef.current;
    const loaderMiddle = loaderMiddleRef.current;
    const loaderLast = loaderLastRef.current;
    const blueBackground = blueBackgroundRef.current;
    const blueReveal = blueRevealRef.current;
    const heroTransition = heroTransitionRef.current;

    const charan = charanRef.current;
    const secondLine = secondLineRef.current;
    const m = mRef.current;
    const dot = dotRef.current;
    const mahendaran = mahendaranRef.current;

    const topMetadata = topMetadataRef.current;
    const tagline = taglineRef.current;
    const description = descriptionRef.current;
    const profileVisual = profileVisualRef.current;

    if (
      !overlay ||
      !loaderWrapper ||
      !loaderNumber ||
      !loaderZoom ||
      !loaderFirst ||
      !loaderMiddle ||
      !loaderLast ||
      !blueBackground ||
      !blueReveal ||
      !heroTransition ||
      !charan ||
      !secondLine ||
      !m ||
      !dot ||
      !mahendaran ||
      !topMetadata ||
      !tagline ||
      !description ||
      !profileVisual
    ) {
      return;
    }

    const charanLetters = Array.from(charan.children);
    const mahendaranLetters = Array.from(mahendaran.children);
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      finishIntro();
      return;
    }

    const entranceX = isMobile ? 36 : 56;
    const blurAmount = isMobile ? 3 : 5;

    /*
     * ------------------------------------------------------------
     * INITIAL STATE
     * ------------------------------------------------------------
     */
    gsap.set(overlay, {
      opacity: 1,
      backgroundColor: "transparent",
    });

    gsap.set(loaderWrapper, {
      opacity: 1,
      visibility: "visible",
    });

    gsap.set(loaderNumber, {
      opacity: 1,
    });

    gsap.set(loaderZoom, {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
    });

    gsap.set([loaderFirst, loaderMiddle, loaderLast], {
      opacity: 1,
    });

    gsap.set(blueBackground, {
      opacity: 0,
    });

    gsap.set(blueReveal, {
      opacity: 0,
      scale: 1,
      x: 0,
      y: 0,
      force3D: true,
    });

    gsap.set(heroTransition, {
      opacity: 0,
      visibility: "hidden",
    });

    gsap.set(charanLetters, {
      opacity: 0,
      x: entranceX,
      y: 0,
      scale: 1,
      filter: `blur(${blurAmount}px)`,
    });

    gsap.set(secondLine, {
      opacity: 0,
    });

    gsap.set(m, {
      opacity: 0,
    });

    gsap.set(dot, {
      opacity: 1,
      width: "auto",
      overflow: "hidden",
    });

    gsap.set(mahendaran, {
      opacity: 0,
      filter: `blur(${blurAmount}px)`,
    });

    gsap.set(mahendaranLetters, {
      opacity: 0,
      y: 0,
      filter: `blur(${blurAmount}px)`,
    });

    gsap.set([topMetadata, tagline, description], {
      opacity: 0,
      filter: "blur(6px)",
    });

    gsap.set(profileVisual, {
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.98,
    });

    /*
     * ------------------------------------------------------------
     * PRECISE 0 CENTERING CALCULATIONS
     * ------------------------------------------------------------
     */
    const zeroRect = loaderMiddle.getBoundingClientRect();
    const zoomRect = loaderZoom.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const screenCenterX = viewportWidth / 2;
    const screenCenterY = viewportHeight / 2;

    const zeroCenterX = zeroRect.left + zeroRect.width / 2;
    const zeroCenterY = zeroRect.top + zeroRect.height / 2;

    // Origin inside loaderZoom precisely at the center of the middle 0
    const originX = zeroCenterX - zoomRect.left;
    const originY = zeroCenterY - zoomRect.top;

    // Vector to center the middle 0 on screen
    const shiftX = screenCenterX - zeroCenterX;
    const shiftY = screenCenterY - zeroCenterY;

    gsap.set(loaderZoom, {
      transformOrigin: `${originX}px ${originY}px`,
    });

    const revealSize = Math.max(viewportWidth * 0.22, 260);

    gsap.set(blueReveal, {
      width: `${revealSize}px`,
      height: `${revealSize}px`,
      left: `${zeroCenterX}px`,
      top: `${zeroCenterY}px`,
      xPercent: -50,
      yPercent: -50,
      borderRadius: "50%",
      background: LUXURY_BLUE_BG,
      backgroundColor: LUXURY_BLUE_SOLID,
      transformOrigin: "50% 50%",
    });

    const screenDiagonal = Math.hypot(viewportWidth, viewportHeight);
    const finalRevealScale = (screenDiagonal / revealSize) * 2.6;

    // Full 0 zoom-through scale: expands zero hole completely past the camera
    const scaleX = viewportWidth / Math.max(zeroRect.width, 1);
    const scaleY = viewportHeight / Math.max(zeroRect.height, 1);
    const finalZoomScale = Math.max(scaleX, scaleY) * 2.8;

    const dotWidth = dot.getBoundingClientRect().width;

    /*
     * ------------------------------------------------------------
     * TIMELINE
     * ------------------------------------------------------------
     */
    const timeline = gsap.timeline({
      paused: true,
    });

    timelineRef.current = timeline;

    /*
     * 1. PREPARE HERO LAYER
     */
    timeline.set(
      heroTransition,
      {
        visibility: "visible",
        opacity: 1,
      },
      0,
    );

    const loaderLine = loaderWrapper.querySelector('[data-loader-line="true"]');
    if (loaderLine) {
      timeline.set(
        loaderLine,
        {
          opacity: 0,
          scaleX: 0,
        },
        0,
      );
    }

    /*
     * 2. FULL 0 ZOOM-THROUGH (Centered on middle 0, no pixelation)
     */
    timeline.to(
      loaderZoom,
      {
        scale: finalZoomScale,
        x: shiftX,
        y: shiftY,
        duration: ZERO_ZOOM_DURATION,
        ease: "power2.inOut",
        force3D: false, // 2D matrix allows vector glyph re-rasterization without bitmap blurring
      },
      0,
    );

    // Smooth exit dissolve as zero passes viewport bounds
    timeline.to(
      loaderZoom,
      {
        opacity: 0,
        duration: ZERO_ZOOM_DURATION * 0.28,
        ease: "power2.in",
      },
      ZERO_ZOOM_DURATION * 0.72,
    );

    /*
     * 3. EXPANDING LUXURY BLUE FLOOD
     */
    timeline.to(
      blueReveal,
      {
        opacity: 1,
        scale: finalRevealScale,
        x: shiftX,
        y: shiftY,
        duration: ZERO_ZOOM_DURATION,
        ease: "power2.inOut",
        force3D: true,
      },
      0,
    );

    /*
     * 4. DIGITS FADE
     */
    timeline.to(
      [loaderFirst, loaderLast],
      {
        opacity: 0,
        duration: ZERO_ZOOM_DURATION * 0.45,
        ease: "power2.in",
      },
      0.08,
    );

    /*
     * 5. BLUE DOMAIN ACTIVE
     */
    timeline.set(
      blueBackground,
      {
        opacity: 1,
      },
      ZERO_ZOOM_DURATION,
    );

    timeline.set(
      loaderWrapper,
      {
        opacity: 0,
        visibility: "hidden",
      },
      ZERO_ZOOM_DURATION,
    );

    /*
     * 6. CHARAN ENTERS 0.5s EARLIER
     */
    const nameStartTime = Math.max(0, ZERO_ZOOM_DURATION - 0.5);

    timeline.to(
      charanLetters,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: CHARAN_DURATION,
        stagger: {
          each: 0.045,
          from: "start",
        },
        ease: "power2.out",
      },
      nameStartTime,
    );

    /*
     * 7. M.
     */
    timeline.to(
      secondLine,
      {
        opacity: 1,
        duration: 0.01,
      },
      nameStartTime + CHARAN_DURATION + 0.03,
    );

    timeline.to(
      m,
      {
        opacity: 1,
        duration: M_ENTRY_DURATION,
        ease: "power2.out",
      },
      "<",
    );

    /*
     * 8. M. -> MAHENDARAN
     */
    const expandStart = nameStartTime + CHARAN_DURATION + 0.32;

    timeline.to(
      dot,
      {
        opacity: 0,
        width: 0,
        duration: 0.16,
        ease: "power2.inOut",
      },
      expandStart,
    );

    timeline.to(
      mahendaran,
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.18,
        ease: "power2.out",
      },
      expandStart + 0.02,
    );

    timeline.to(
      mahendaranLetters,
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: MAHENDARAN_DURATION,
        stagger: {
          each: 0.035,
          from: "start",
        },
        ease: "power2.out",
      },
      expandStart + 0.04,
    );

    /*
     * 9. MAHENDARAN -> M. (Snap Back to Hero State)
     */
    timeline.addLabel("snap", "+=0.35");

    timeline.to(
      mahendaranLetters,
      {
        opacity: 0,
        filter: `blur(${blurAmount}px)`,
        duration: SNAP_BACK_DURATION,
        stagger: {
          each: 0.02,
          from: "end",
        },
        ease: "power2.in",
      },
      "snap",
    );

    timeline.to(
      mahendaran,
      {
        opacity: 0,
        filter: `blur(${blurAmount}px)`,
        duration: SNAP_BACK_DURATION,
        ease: "power2.in",
      },
      "snap",
    );

    timeline.set(
      dot,
      {
        width: dotWidth,
      },
      `snap+=${SNAP_BACK_DURATION - 0.12}`,
    );

    timeline.to(
      dot,
      {
        opacity: 1,
        duration: 0.12,
        ease: "power2.out",
      },
      `snap+=${SNAP_BACK_DURATION - 0.08}`,
    );

    /*
     * 10. SEAMLESS HERO INTEGRATION (ZERO BLINK)
     * Name "CHARAN M." stays fixed in place.
     * The blue background dissolves while the remaining Hero elements unblur smoothly.
     */
    const revealStart = `snap+=${SNAP_BACK_DURATION + 0.04}`;

    timeline.to(
      [blueBackground, blueReveal],
      {
        opacity: 0,
        duration: 0.42,
        ease: "power2.inOut",
      },
      revealStart,
    );

    timeline.to(
      [topMetadata, tagline, description],
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.42,
        ease: "power2.out",
      },
      revealStart,
    );

    timeline.to(
      profileVisual,
      {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.45,
        ease: "power2.out",
      },
      revealStart,
    );

    timeline.call(
      () => {
        finishIntro();
      },
      undefined,
      `revealStart+=0.42`,
    );

    timeline.play();
  }, [finishIntro]);

  /*
   * ------------------------------------------------------------
   * SESSION CONTROL
   * ------------------------------------------------------------
   */
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const alreadyPlayed = sessionStorage.getItem("introPlayed");

    if (alreadyPlayed === "true") {
      setMounted(false);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      onComplete?.();
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" ||
        event.key === " " ||
        event.key === "Enter"
      ) {
        event.preventDefault();
        finishIntro();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      timelineRef.current?.kill();
      timelineRef.current = null;
    };
  }, [finishIntro, onComplete]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] overflow-hidden bg-transparent"
      aria-hidden="true"
    >
      {/*
       * ==========================================================
       * LUXURY SAPPHIRE BACKGROUND
       * ==========================================================
       */}
      <div
        ref={blueBackgroundRef}
        className="pointer-events-none absolute inset-0 z-[101]"
        style={{
          background: LUXURY_BLUE_BG,
          backgroundColor: LUXURY_BLUE_SOLID,
          opacity: 0,
        }}
      />

      {/*
       * ==========================================================
       * LUXURY SAPPHIRE REVEAL CIRCLE
       * ==========================================================
       */}
      <div
        ref={blueRevealRef}
        className="pointer-events-none absolute z-[106]"
        style={{
          opacity: 0,
          background: LUXURY_BLUE_BG,
          backgroundColor: LUXURY_BLUE_SOLID,
          borderRadius: "50%",
          transformOrigin: "50% 50%",
          willChange: "transform, opacity",
        }}
      />

      {/*
       * ==========================================================
       * HERO TRANSITION LAYER
       * Matches Hero.tsx pixel-for-pixel with zero shift and zero blink
       * ==========================================================
       */}
      <div
        ref={heroTransitionRef}
        className="pointer-events-none absolute inset-0 z-[108] pt-[64px]"
        style={{
          opacity: 0,
          visibility: "hidden",
        }}
      >
        <div className="container-main flex min-h-[calc(100svh-64px)] w-full flex-col">
          {/* Top metadata */}
          <div
            ref={topMetadataRef}
            className="flex items-center justify-between pt-8 md:pt-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/40" />
              <span className="eyebrow">Bengaluru / India</span>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-white/20 sm:block">
              2026 / Portfolio
            </span>
          </div>

          {/* Main hero composition */}
          <div className="flex flex-1 items-start pt-[clamp(45px,7vh,80px)] pb-12 md:items-start">
            <div className="grid w-full items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(520px,1.05fr)] md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(600px,1.05fr)] lg:gap-16">
              {/* Identity */}
              <div className="relative z-10 min-w-0 pt-[clamp(40px,7vh,70px)] md:pt-[clamp(70px,11vh,130px)]">
                <p
                  ref={taglineRef}
                  className="mb-7 text-[10px] uppercase tracking-[0.2em] text-white/35"
                >
                  Software Developer
                </p>

                <h1 className="display-xl relative z-10 max-w-[900px]">
                  <span
                    ref={charanRef}
                    className="relative block whitespace-nowrap"
                  >
                    {"CHARAN".split("").map((letter, index) => (
                      <span
                        key={`charan-${letter}-${index}`}
                        className="inline-block align-baseline"
                      >
                        {letter}
                      </span>
                    ))}
                  </span>

                  <span
                    ref={secondLineRef}
                    className="relative block whitespace-nowrap text-white/25"
                  >
                    <span ref={mRef} className="inline-block align-baseline">
                      M
                    </span>
                    <span ref={dotRef} className="inline-block align-baseline">
                      .
                    </span>
                    <span
                      ref={mahendaranRef}
                      className="inline whitespace-nowrap"
                    >
                      {"AHENDARAN".split("").map((letter, index) => (
                        <span
                          key={`mahendaran-${letter}-${index}`}
                          className="inline-block align-baseline"
                        >
                          {letter}
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>

                <div
                  ref={descriptionRef}
                  className="mt-7 max-w-[300px] md:mt-8 md:max-w-[620px]"
                >
                  <p className="text-xs leading-6 text-white/40 md:text-sm md:leading-7">
                    Full Stack
                    <span className="mx-1.5 text-white/15 md:mx-2">/</span>
                    AI Automation
                    <span className="mx-1.5 text-white/15 md:mx-2">/</span>
                    Connected Systems
                  </p>
                </div>
              </div>

              {/* Reserved visual area */}
              <div
                ref={profileVisualRef}
                className="relative z-0 mt-0 flex w-full justify-start md:-mt-[clamp(0px,2vh,100px)] md:justify-end"
              >
                <div className="relative aspect-[9/7] w-full max-w-[760px] overflow-hidden border border-white/10">
                  <img
                    src="/images/profile/charan-profile.webp"
                    alt="Charan M."
                    className="h-full w-full object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
       * ==========================================================
       * LOADER
       * ==========================================================
       */}
      <div ref={loaderWrapperRef} className="absolute inset-0 z-[110]">
        <Loader
          onComplete={startIntro}
          numberRef={loaderNumberRef}
          zoomRef={loaderZoomRef}
          firstDigitRef={loaderFirstRef}
          middleDigitRef={loaderMiddleRef}
          lastDigitRef={loaderLastRef}
        />
      </div>
    </div>
  );
}
