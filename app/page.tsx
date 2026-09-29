"use client";

import { useEffect, useState } from "react";

import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Credentials from "@/components/credentials/Credentials";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import Navbar from "@/components/layout/Navbar";
import ScrollProgressTop from "@/components/ui/ScrollProgressTop";
import ProjectSection from "@/components/projects/ProjectSection";
import Statement from "@/components/statement/Statement";
import TechSystem from "@/components/tech/TechSystem";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyPlayed =
      window.sessionStorage.getItem("introPlayed") === "true";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (alreadyPlayed || prefersReducedMotion) {
      setIntroComplete(true);
    }
  }, []);

  return (
    <>
      {!introComplete && (
        <Intro
          onComplete={() => {
            setIntroComplete(true);
          }}
        />
      )}

      <div
        className={[
          "relative z-[90]",
          "transition-[opacity,transform] duration-500 ease-out",
          introComplete
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-[-12px] opacity-0",
        ].join(" ")}
      >
        <Navbar />
      </div>

      <main>
        <div
          className={[
            "transition-[opacity,transform] duration-700 ease-out",
            introComplete
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-[8px] opacity-0",
          ].join(" ")}
        >
          <Hero />
        </div>

        <Statement />
        <TechSystem />
        <ProjectSection />
        <Experience />
        <Education />
        <Credentials />
        <About />
        <Contact />
      </main>

      <ScrollProgressTop />
    </>
  );
}
