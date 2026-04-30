import { useEffect, useState } from "react";

/**
 * Mobile-only CTA bar.
 * - Hidden until user has scrolled past hero (reduces visual noise on first paint).
 * - No looping animation; single fade/slide-in via CSS transition.
 */
export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 p-3 pointer-events-none transition-[transform,opacity] duration-[300ms] ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="glass-strong rounded-full hairline p-1.5 flex items-center justify-between gap-2 pointer-events-auto shadow-elegant">
        <span className="pl-4 text-sm">Ready to start?</span>
        <a
          href="#cta"
          className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-brand-gradient text-primary-foreground text-sm font-medium transition-transform duration-[250ms] ease-out hover:scale-[1.03] active:scale-95"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
}
