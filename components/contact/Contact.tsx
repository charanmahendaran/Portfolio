"use client";

import { useState } from "react";

const email = "charanmahendaran@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <section id="contact" className="section section-border min-h-[80vh]">
      <div className="container-main flex min-h-[65vh] flex-col justify-between">
        <div>
          <span className="eyebrow">06 / Contact</span>

          <h2 className="mt-12 max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.85] tracking-[-0.07em]">
            START A
            <br />
            <span className="text-white/25">CONVERSATION.</span>
          </h2>
        </div>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <button type="button" onClick={copyEmail} className="group text-left">
            <span className="block text-xs uppercase tracking-[0.15em] text-white/30">
              {copied ? "Copied to clipboard" : "Copy email"}
            </span>

            <span className="mt-3 block text-xl text-white/80 transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
              {email}
            </span>
          </button>

          <div className="flex gap-6 text-xs uppercase tracking-[0.14em] text-white/45">
            <a
              href="https://github.com/charanmahendaran"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/charanmahendaran/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:charanmahendaran@gmail.com"
              className="hover:text-white"
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
