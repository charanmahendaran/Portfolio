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

  return (
    <header
      className={[
        "fixed left-0 top-0 z-50 w-full",
        "transition-[background-color,border-color] duration-500",
        scrolled
          ? "border-b border-white/10 bg-[#0a0a0a]"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="container-main flex h-[64px] items-center justify-between">
        {/* Logo */}

        <a
          href="#top"
          aria-label="Charan M — back to top"
          className="group flex items-center gap-2"
        >
          <span className="text-[15px] font-medium tracking-[-0.04em]">CM</span>

          <span className="h-1 w-1 rounded-full bg-white/50 transition-transform duration-300 group-hover:scale-150" />
        </a>

        {/* Navigation */}

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

        {/* Let's Talk */}

        <a
          href="#contact"
          className="group flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-white"
        >
          <span className="hidden sm:inline">Let&apos;s Talk</span>

          <span className="flex h-7 w-7 items-center justify-center border border-white/15 text-white/50 transition-all duration-300 group-hover:border-white/40 group-hover:text-white">
            ↗
          </span>
        </a>
      </div>
    </header>
  );
}
