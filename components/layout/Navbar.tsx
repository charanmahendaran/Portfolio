"use client";

import { useEffect, useState } from "react";

const links = [
  ["Work", "work"],
  ["About", "about"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#0a0a0a]/75 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-main flex h-20 items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-[0.18em]">
          CM<span className="text-white/30">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-xs uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:charanmahendaran@gmail.com"
          className="text-xs uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}
