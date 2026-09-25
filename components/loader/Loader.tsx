"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = window.setInterval(() => {
      value += Math.floor(Math.random() * 8) + 4;

      if (value >= 100) {
        value = 100;
        window.clearInterval(interval);

        window.setTimeout(() => {
          setFinished(true);
        }, 350);
      }

      setProgress(value);
    }, 55);

    return () => window.clearInterval(interval);
  }, []);

  if (finished) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        <div className="mb-3 font-mono text-5xl tracking-[-0.06em] text-white">
          {progress.toString().padStart(2, "0")}
        </div>

        <div className="h-px w-32 overflow-hidden bg-white/10">
          <div
            className="h-full bg-white transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
