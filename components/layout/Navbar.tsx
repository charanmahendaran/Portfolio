"use client";

import { useEffect, useState } from "react";

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={[
          "fixed left-0 top-0 z-50 w-full",
          "transition-[background-color,border-color] duration-500",
          scrolled || menuOpen
            ? "border-b border-white/10 bg-[#0a0a0a]"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="container-main flex h-[64px] items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            aria-label="Charan M — back to top"
            onClick={closeMenu}
            className="group flex items-center gap-2"
          >
            <span className="text-[15px] font-medium tracking-[-0.04em]">
              CM
            </span>

            <span className="h-1 w-1 rounded-full bg-white/50 transition-transform duration-300 group-hover:scale-150" />
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-9 md:flex"
          >
            {links.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                className="group text-[10px] font-medium uppercase tracking-[0.15em] text-white/40 transition-colors duration-300 hover:text-white"
              >
                <span className="relative inline-block py-2">
                  {link.label}

                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                </span>
              </a>
            ))}
          </nav>

          {/* Desktop Let's Talk */}
          <a
            href="#contact"
            className="hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-white sm:flex"
          >
            <span>Let&apos;s Talk</span>

            <span className="flex h-7 w-7 items-center justify-center border border-white/15 text-white/50 transition-all duration-300 group-hover:border-white/40 group-hover:text-white">
              ↗
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-8 w-8 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white md:hidden"
          >
            <span className="relative flex h-3.5 w-4 items-center justify-center">
              <span
                className={[
                  "absolute h-px w-4 bg-current transition-transform duration-300",
                  menuOpen ? "rotate-45" : "-translate-y-[3px]",
                ].join(" ")}
              />

              <span
                className={[
                  "absolute h-px w-4 bg-current transition-transform duration-300",
                  menuOpen ? "-rotate-45" : "translate-y-[3px]",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={[
          "fixed inset-0 z-40 bg-[#0a0a0a] pt-[64px] transition-opacity duration-300 md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="container-main flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 py-5">
            <span className="eyebrow">Navigation</span>
            <span className="eyebrow text-white/25">CM / 2026</span>
          </div>

          <nav
            aria-label="Mobile navigation"
            className="flex flex-1 flex-col justify-center"
          >
            {links.map((link, index) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={closeMenu}
                className="group flex items-baseline gap-5 border-b border-white/10 py-6"
              >
                <span className="eyebrow text-white/25">0{index + 1}</span>

                <span className="text-4xl font-medium tracking-[-0.05em] text-white transition-transform duration-300 group-hover:translate-x-2">
                  {link.label}
                </span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="group flex items-baseline gap-5 py-6"
            >
              <span className="eyebrow text-white/25">05</span>

              <span className="text-4xl font-medium tracking-[-0.05em] text-white transition-transform duration-300 group-hover:translate-x-2">
                Let&apos;s Talk ↗
              </span>
            </a>
          </nav>

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
