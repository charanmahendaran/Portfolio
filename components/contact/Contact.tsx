"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "@/components/layout/Footer";

const email = "charanmahendaran@gmail.com";

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let frame = 0;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const scrollDistance = Math.max(section.offsetHeight - viewportHeight, 1);

      const rawProgress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);

      /*
       * Keep the curtain completely still for the first 30%
       * of the Contact scroll.
       */
      const start = 0.3;

      /*
       * The curtain uses the remaining 70% of the
       * scroll distance to complete its movement.
       */
      const revealProgress = Math.min(
        Math.max((rawProgress - start) / (1 - start), 0),
        1,
      );

      /*
       * Smooth ease-out:
       * - very gentle start
       * - faster movement through the middle
       * - soft landing at the end
       */
      const easedProgress = 1 - Math.pow(1 - revealProgress, 3);

      section.style.setProperty("--contact-progress", easedProgress.toString());

      frame = 0;
    };

    const requestUpdate = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", requestUpdate, {
      passive: true,
    });

    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-[135svh] overflow-clip bg-[#0a0a0a]"
      style={
        {
          "--contact-progress": 0,
        } as React.CSSProperties
      }
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* =====================================================
            UNDERLYING CONTACT STATEMENT
            ===================================================== */}
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
          <div className="container-main flex h-full flex-col pt-[64px]">
            <div className="flex flex-1 flex-col pt-[clamp(80px,10vh,140px)]">
              <span className="eyebrow">08 / Contact</span>

              <h2 className="mt-12 max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.85] tracking-[-0.07em]">
                LET&apos;S BUILD
                <br />
                <span className="text-white/25">
                  SOMETHING WORTH REMEMBERING.
                </span>
              </h2>

              <p className="mt-10 max-w-xl text-lg leading-8 text-white/40">
                Have an idea, a problem worth solving, or something interesting
                you want to build?
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            MONOLITH CURTAIN
            ===================================================== */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 flex h-[68svh] max-h-[620px] min-h-[460px] flex-col overflow-hidden border-t border-white/10 bg-[#0a0a0a]/96 shadow-[0_-30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl will-change-transform"
          style={{
            transform: "translateY(calc((1 - var(--contact-progress)) * 100%))",
          }}
        >
          <div className="container-main flex min-h-0 flex-1 flex-col">
            {/* =================================================
                CONTACT CONTENT
                ================================================= */}
            <div className="flex min-h-0 flex-1 items-center py-10 md:py-12">
              <div className="grid w-full gap-14 lg:grid-cols-2 lg:gap-20">
                {/* ---------------------------------------------
                    DIRECT INQUIRIES
                    --------------------------------------------- */}
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                    Direct inquiries
                  </span>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="group mt-5 flex w-fit items-center text-left"
                    aria-label="Copy email address"
                  >
                    <span className="text-[clamp(1.6rem,2.7vw,2.6rem)] font-medium leading-none tracking-[-0.045em] text-white/75 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                      {email}
                    </span>

                    <span className="ml-3 text-sm text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white">
                      {copied ? "✓" : "↗"}
                    </span>

                    <span
                      className={`ml-3 whitespace-nowrap text-[9px] uppercase tracking-[0.15em] transition-all duration-300 ${
                        copied
                          ? "translate-x-0 opacity-100 text-white/50"
                          : "pointer-events-none -translate-x-1 opacity-0"
                      }`}
                      aria-live="polite"
                    >
                      Copied
                    </span>
                  </button>

                  <p className="mt-5 text-[10px] uppercase tracking-[0.17em] text-white/25">
                    Available for full-time roles
                  </p>
                </div>

                {/* ---------------------------------------------
                    CONNECT + RESUME
                    --------------------------------------------- */}
                <div className="flex flex-col justify-center lg:items-end">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                    Connect &amp; resume
                  </span>

                  <div className="mt-5 flex flex-wrap gap-x-10 gap-y-4 lg:justify-end">
                    <a
                      href="https://github.com/charanmahendaran"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      GitHub
                      <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/charanmahendaran/"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      LinkedIn
                      <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3 lg:justify-end">
                    <a
                      href="/resume/Charan-Mahendaran-Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="border border-white/20 px-6 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white/60 transition-all duration-300 hover:border-white/50 hover:text-white"
                    >
                      View Resume ↗
                    </a>

                    <a
                      href="/resume/Charan-Mahendaran-Resume.pdf"
                      download
                      className="border border-white/10 px-6 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white/40 transition-all duration-300 hover:border-white/35 hover:text-white"
                    >
                      Download ↓
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                INTEGRATED FOOTER
                ================================================= */}
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
}
