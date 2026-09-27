"use client";

import { useState } from "react";

const email = "charanmahendaran@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

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
    <section id="contact" className="section min-h-[100svh]">
      <div className="container-main flex min-h-[70vh] flex-col justify-between">
        {/* Main statement — unchanged */}
        <div>
          <span className="eyebrow">08 / Contact</span>

          <h2 className="mt-12 max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.85] tracking-[-0.07em]">
            LET&apos;S BUILD
            <br />
            <span className="text-white/25">SOMETHING WORTH REMEMBERING.</span>
          </h2>

          <p className="mt-10 max-w-xl text-lg leading-8 text-white/40">
            Have an idea, a problem worth solving, or something interesting you
            want to build?
          </p>
        </div>

        {/* Contact actions */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            {/* Email */}
            <div>
              <span className="block text-[9px] uppercase tracking-[0.16em] text-white/25">
                Direct inquiries
              </span>

              <button
                type="button"
                onClick={copyEmail}
                className="group mt-3 flex items-center text-left"
                aria-label="Copy email address"
              >
                <span className="text-xl tracking-[-0.025em] text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white md:text-2xl">
                  {email}
                </span>

                <span className="ml-2 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white">
                  {copied ? "✓" : "↗"}
                </span>

                <span
                  className={`ml-3 text-[9px] uppercase tracking-[0.14em] transition-all duration-300 ${
                    copied
                      ? "translate-x-0 opacity-100 text-white/50"
                      : "pointer-events-none -translate-x-1 opacity-0"
                  }`}
                  aria-live="polite"
                >
                  Copied
                </span>
              </button>
            </div>

            {/* Links + Resume */}
            <div className="flex flex-col gap-7 lg:items-end">
              {/* Social links */}
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <a
                  href="https://github.com/charanmahendaran"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/45 transition-colors duration-300 hover:text-white"
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
                  className="group flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/45 transition-colors duration-300 hover:text-white"
                >
                  LinkedIn
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/45 transition-colors duration-300 hover:text-white"
                >
                  Gmail
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>

              {/* Resume */}
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="/resume/Charan-Mahendaran-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/20 px-5 py-3 text-[9px] uppercase tracking-[0.15em] text-white/60 transition-colors duration-300 hover:border-white/50 hover:text-white"
                >
                  View Resume ↗
                </a>

                <a
                  href="/resume/Charan-Mahendaran-Resume.pdf"
                  download
                  className="border border-white/10 px-5 py-3 text-[9px] uppercase tracking-[0.15em] text-white/40 transition-colors duration-300 hover:border-white/40 hover:text-white"
                >
                  Download Resume ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
