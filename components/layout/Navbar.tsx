"use client";

import { useEffect, useState } from "react";
import { getLenis } from "@/hooks/useLenis";

const links = [
  {
    label: "Work",
    target: "work",
  },
  {
    label: "Experience",
    target: "experience",
  },
  {
    label: "About",
    target: "about",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");

  /*
   * ------------------------------------------------------------
   * Navbar scroll state
   * ------------------------------------------------------------
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * ------------------------------------------------------------
   * Active section detection
   *
   * Keeps a section active only while the activation point is
   * actually inside that section.
   *
   * When scrolling above Work / back into Hero, no nav item
   * remains active.
   * ------------------------------------------------------------
   */
  useEffect(() => {
    const updateActiveSection = () => {
      const activationPoint = window.innerHeight * 0.4;

      let currentSection = "";

      for (const link of links) {
        const section = document.getElementById(link.target);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        /*
         * The activation point must be inside the section.
         *
         * This is the important difference from the previous
         * implementation: a section above the activation point
         * is no longer automatically considered active.
         */
        if (rect.top <= activationPoint && rect.bottom > activationPoint) {
          currentSection = link.target;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    /*
     * Initial state
     */
    updateActiveSection();

    /*
     * Listen directly to Lenis.
     */
    const lenis = getLenis();

    if (lenis) {
      lenis.on("scroll", updateActiveSection);
    }

    /*
     * Native fallback / resize handling.
     */
    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      if (lenis) {
        lenis.off("scroll", updateActiveSection);
      }

      window.removeEventListener("scroll", updateActiveSection);

      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  /*
   * ------------------------------------------------------------
   * Mobile menu scroll lock
   * ------------------------------------------------------------
   */
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /*
   * ------------------------------------------------------------
   * Smooth navigation
   *
   * Uses the existing Lenis instance.
   * The duration is intentionally slightly faster than a slow
   * cinematic scroll while remaining smooth.
   * ------------------------------------------------------------
   */
  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);

    if (!element) return;

    setActiveSection(target);
    setMenuOpen(false);

    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(element, {
        offset: -8,
        duration: 1.25,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });

      return;
    }

    /*
     * Fallback in case Lenis has not mounted yet.
     */
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - 8,
      behavior: "smooth",
    });
  };

  /*
   * ------------------------------------------------------------
   * Close mobile menu
   * ------------------------------------------------------------
   */
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ========================================================
          DESKTOP / MOBILE HEADER
          ======================================================== */}

      <header
        className={[
          "fixed left-0 top-0 z-50 w-full",
          "transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled || menuOpen
            ? "border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="container-main flex h-[64px] items-center justify-between">
          {/* ====================================================
              LOGO
              ==================================================== */}

          <a
            href="#top"
            aria-label="Charan M — back to top"
            onClick={(event) => {
              event.preventDefault();
              closeMenu();

              const element = document.getElementById("top");

              if (!element) return;

              const lenis = getLenis();

              if (lenis) {
                lenis.scrollTo(element, {
                  offset: 0,
                  duration: 1.25,
                  easing: (t: number) => 1 - Math.pow(1 - t, 4),
                });

                return;
              }

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="group flex items-center gap-2"
          >
            <span className="text-[15px] font-medium tracking-[-0.04em] text-white">
              CM
            </span>

            <span className="h-1 w-1 rounded-full bg-white/50 transition-transform duration-300 group-hover:scale-150" />
          </a>

          {/* ====================================================
              DESKTOP NAVIGATION
              ==================================================== */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-9 md:flex"
          >
            {links.map((link) => {
              const isActive = activeSection === link.target;

              return (
                <a
                  key={link.target}
                  href={`#${link.target}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.target);
                  }}
                  className={[
                    "group text-[10px] font-medium uppercase tracking-[0.15em]",
                    "transition-colors duration-300",
                    isActive ? "text-white" : "text-white/40 hover:text-white",
                  ].join(" ")}
                >
                  <span className="relative inline-block py-2">
                    {link.label}

                    {/* Active / hover underline */}
                    <span
                      aria-hidden="true"
                      className={[
                        "absolute bottom-0 left-1/2 h-px w-full",
                        "-translate-x-1/2 bg-white",
                        "origin-center transition-transform duration-300 ease-out",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      ].join(" ")}
                    />
                  </span>
                </a>
              );
            })}
          </nav>

          {/* ====================================================
              RESUME
              ==================================================== */}

          <a
            href="/resume/Charan-Mahendaran-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.15em] text-white/55 transition-colors duration-300 hover:text-white md:flex"
          >
            <span>Resume</span>

            <span className="flex h-7 w-7 items-center justify-center border border-white/15 text-white/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-white/40 group-hover:text-white">
              ↗
            </span>
          </a>

          {/* ====================================================
              MOBILE MENU BUTTON
              ==================================================== */}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-8 w-8 items-center justify-center border border-white/15 text-white/60 transition-colors duration-300 hover:border-white/40 hover:text-white md:hidden"
          >
            <span className="relative flex h-3.5 w-4 items-center justify-center">
              <span
                className={[
                  "absolute h-px w-4 bg-current",
                  "transition-transform duration-300",
                  menuOpen ? "rotate-45" : "-translate-y-[3px]",
                ].join(" ")}
              />

              <span
                className={[
                  "absolute h-px w-4 bg-current",
                  "transition-transform duration-300",
                  menuOpen ? "-rotate-45" : "translate-y-[3px]",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </header>

      {/* ========================================================
          MOBILE MENU
          ======================================================== */}

      <div
        className={[
          "fixed inset-0 z-40 bg-[#0a0a0a]",
          "pt-[64px] transition-opacity duration-300 md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="container-main flex h-full flex-col">
          {/* Mobile menu header */}

          <div className="flex items-center justify-between border-b border-white/10 py-5">
            <span className="eyebrow">Navigation</span>

            <span className="eyebrow text-white/25">CM / 2026</span>
          </div>

          {/* Mobile navigation */}

          <nav
            aria-label="Mobile navigation"
            className="flex flex-1 flex-col justify-center"
          >
            {links.map((link, index) => {
              const isActive = activeSection === link.target;

              return (
                <a
                  key={link.target}
                  href={`#${link.target}`}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.target);
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "group flex items-baseline gap-5",
                    "border-b border-white/10 py-6",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "eyebrow transition-colors duration-300",
                      isActive ? "text-white/60" : "text-white/25",
                    ].join(" ")}
                  >
                    0{index + 1}
                  </span>

                  <span
                    className={[
                      "relative text-4xl font-medium tracking-[-0.05em]",
                      "transition-all duration-300",
                      isActive
                        ? "text-white"
                        : "text-white/65 group-hover:text-white",
                    ].join(" ")}
                  >
                    {link.label}

                    {/* Mobile active marker */}

                    <span
                      className={[
                        "absolute -bottom-1 left-0 h-px bg-white",
                        "transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full",
                      ].join(" ")}
                    />
                  </span>

                  <span
                    className={[
                      "ml-auto text-sm transition-all duration-300",
                      isActive
                        ? "translate-x-0 text-white/50"
                        : "translate-x-0 text-white/20 group-hover:translate-x-1 group-hover:text-white/50",
                    ].join(" ")}
                  >
                    ↗
                  </span>
                </a>
              );
            })}

            {/* Resume */}

            <a
              href="/resume/Charan-Mahendaran-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="group flex items-baseline gap-5 py-6"
            >
              <span className="eyebrow text-white/25">05</span>

              <span className="relative text-4xl font-medium tracking-[-0.05em] text-white/65 transition-colors duration-300 group-hover:text-white">
                Resume
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </span>

              <span className="ml-auto text-sm text-white/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/50">
                ↗
              </span>
            </a>
          </nav>

          {/* Mobile footer */}

          <div className="border-t border-white/10 py-6">
            <span className="text-[10px] uppercase tracking-[0.16em] text-white/25">
              Full Stack / AI Automation / Connected Systems
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
