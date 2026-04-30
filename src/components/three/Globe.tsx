import { Suspense, lazy, useState } from "react";

const GlobeCanvas = lazy(() => import("./GlobeCanvas"));

export default function Globe() {
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !isMobile && !reduce;
  });

  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      {/* Static glow halo (no animation) */}
      <div
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(235 85% 55% / 0.35), hsl(270 90% 60% / 0.18) 45%, transparent 70%)",
          filter: "blur(20px)",
        }}
        aria-hidden
      />
      {enabled ? (
        <Suspense fallback={<GlobeFallback />}>
          <GlobeCanvas />
        </Suspense>
      ) : (
        <GlobeFallback />
      )}
    </div>
  );
}

function GlobeFallback() {
  return (
    <div className="absolute inset-6 rounded-full hairline glass shadow-glow flex items-center justify-center">
      <div
        className="w-3/4 h-3/4 rounded-full"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, hsl(235 85% 60% / 0.6), hsl(270 90% 65% / 0.5), hsl(235 85% 60% / 0.6))",
          maskImage: "radial-gradient(circle, black 55%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle, black 55%, transparent 75%)",
        }}
      />
    </div>
  );
}
