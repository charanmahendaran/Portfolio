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

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-8 md:grid-cols-2">
          {/* Email */}

          <div>
            <span className="text-[9px] uppercase tracking-[0.16em] text-white/25">
              Start a conversation
            </span>

            <button
              type="button"
              onClick={copyEmail}
              className="group mt-4 block text-left"
            >
              <span className="block text-xl tracking-[-0.02em] text-white/75 transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                {email}
              </span>

              <span className="mt-2 block text-[9px] uppercase tracking-[0.15em] text-white/25">
                {copied ? "Copied to clipboard" : "Click to copy"}
              </span>
            </button>
          </div>

          {/* Links */}

          <div className="flex flex-col gap-5 md:items-end">
            <a
              href="https://github.com/charanmahendaran"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-sm uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-white"
            >
              GitHub
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/charanmahendaran/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-sm uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-white"
            >
              LinkedIn
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <a
              href="mailto:charanmahendaran@gmail.com"
              className="group flex items-center gap-3 text-sm uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-white"
            >
              Gmail
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <div className="mt-4 flex flex-wrap gap-3 md:justify-end">
              <a
                href="/resume/Charan-Mahendaran-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="border border-white/20 px-5 py-3 text-[9px] uppercase tracking-[0.15em] text-white/60 transition-colors hover:border-white/50 hover:text-white"
              >
                View Resume ↗
              </a>

              <a
                href="/resume/Charan-Mahendaran-Resume.pdf"
                download
                className="border border-white/10 px-5 py-3 text-[9px] uppercase tracking-[0.15em] text-white/40 transition-colors hover:border-white/40 hover:text-white"
              >
                Download Resume ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
