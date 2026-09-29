"use client";

import { RefObject, useEffect, useRef, useState } from "react";

type LoaderProps = {
  onComplete?: () => void;
  numberRef?: RefObject<HTMLDivElement | null>;
  zoomRef?: RefObject<HTMLSpanElement | null>;
  firstDigitRef?: RefObject<HTMLSpanElement | null>;
  middleDigitRef?: RefObject<HTMLSpanElement | null>;
  lastDigitRef?: RefObject<HTMLSpanElement | null>;
};

export default function Loader({
  onComplete,
  numberRef,
  zoomRef,
  firstDigitRef,
  middleDigitRef,
  lastDigitRef,
}: LoaderProps) {
  const [progress, setProgress] = useState(0);

  const internalNumberRef = useRef<HTMLDivElement | null>(null);
  const internalZoomRef = useRef<HTMLSpanElement | null>(null);
  const internalFirstRef = useRef<HTMLSpanElement | null>(null);
  const internalMiddleRef = useRef<HTMLSpanElement | null>(null);
  const internalLastRef = useRef<HTMLSpanElement | null>(null);

  const completedRef = useRef(false);

  const numberElement = numberRef ?? internalNumberRef;
  const zoomElement = zoomRef ?? internalZoomRef;
  const firstElement = firstDigitRef ?? internalFirstRef;
  const middleElement = middleDigitRef ?? internalMiddleRef;
  const lastElement = lastDigitRef ?? internalLastRef;

  useEffect(() => {
    let animationFrame = 0;
    let completionTimeout = 0;

    const duration = 1500;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;

      const nextProgress = Math.min(
        100,
        Math.floor((elapsed / duration) * 100),
      );

      setProgress((previous) => {
        if (previous === nextProgress) {
          return previous;
        }

        return nextProgress;
      });

      if (nextProgress >= 100) {
        if (!completedRef.current) {
          completedRef.current = true;

          completionTimeout = window.setTimeout(() => {
            onComplete?.();
          }, 60);
        }

        return;
      }

      animationFrame = window.requestAnimationFrame(update);
    };

    animationFrame = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(completionTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent pointer-events-none">
      <div className="relative flex flex-col items-center justify-center pointer-events-auto">
        <div
          ref={numberElement}
          className="text-5xl tracking-[-0.06em] text-white select-none"
          style={{
            fontFamily:
              '"Avenir Next", "Helvetica Neue", "Segoe UI", sans-serif',
            lineHeight: 1,
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            textRendering: "geometricPrecision",
          }}
        >
          {/* Clean 1:1 unscaled coordinate space ensures exact center measurement of middle 0 */}
          <span
            ref={zoomElement}
            className="inline-block whitespace-nowrap"
            style={{
              display: "inline-block",
              WebkitFontSmoothing: "antialiased",
              textRendering: "geometricPrecision",
              transformOrigin: "50% 50%",
            }}
          >
            <span ref={firstElement} className="inline-block align-baseline">
              {progress >= 100
                ? "1"
                : progress.toString().padStart(2, "0").slice(0, 1)}
            </span>

            <span ref={middleElement} className="inline-block align-baseline">
              {progress >= 100
                ? "0"
                : progress.toString().padStart(2, "0").slice(1, 2)}
            </span>

            <span ref={lastElement} className="inline-block align-baseline">
              {progress >= 100 ? "0" : ""}
            </span>
          </span>
        </div>

        {/* Progress indicator updates directly with rAF for instant butter smoothness */}
        <div
          data-loader-line="true"
          className="mt-4 h-[2px] w-32 overflow-hidden rounded-full bg-white/15"
        >
          <div
            className="h-full bg-white rounded-full"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
