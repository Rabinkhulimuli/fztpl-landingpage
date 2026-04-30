import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Globe from "@/components/three/Globe";
import { CTA } from "@/components/motion/CTA";
import { EASE_OUT } from "@/components/motion/Reveal";

const line1 = ["Software", "that", "ships"];
const line2 = ["at", "the", "speed", "of", "ambition."];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-linked parallax — applied to a dedicated background layer ONLY,
  // so interactive children (buttons) never inherit a transforming parent.
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.96]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.9], [1, reduce ? 1 : 0.4]);

  return (
    <section ref={ref} className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Decorative grid — parallax layer, isolated from interactive content */}
      <motion.div
        aria-hidden
        style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              className="inline-flex items-center gap-2 rounded-full hairline glass px-3 py-1.5 text-xs text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Accepting projects · Q3 2026
            </motion.div>

            {/* Word-by-word headline (L1) */}
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              <WordReveal words={line1} className="text-gradient" />
              <br />
              <WordReveal words={line2} className="text-brand-gradient" baseDelay={0.35} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.85, ease: EASE_OUT }}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              FZTPL is a senior engineering partner for ambitious teams. We design, build, and scale
              web, mobile, and AI products — measured by outcomes, not output.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.0, ease: EASE_OUT }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <CTA href="#cta" variant="primary">
                Book a Call
                <ArrowRight className="h-4 w-4 transition-transform duration-[250ms] ease-out group-hover:translate-x-0.5" />
              </CTA>
              <CTA href="#work" variant="ghost">
                <Play className="h-4 w-4" />
                View Work
              </CTA>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2, ease: EASE_OUT }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-lg"
            >
              {[
                ["120+", "Projects shipped"],
                ["38", "Engineers"],
                ["4.9/5", "Client rating"],
              ].map(([k, v]) => (
                <div key={v} className="border-l border-white/10 pl-4">
                  <div className="font-display text-2xl md:text-3xl">{k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Globe (single calm entrance, no looping UI animation) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: EASE_OUT }}
            >
              <Globe />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WordReveal({
  words,
  className = "",
  baseDelay = 0,
}: {
  words: string[];
  className?: string;
  baseDelay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pr-[0.25em]">
          <motion.span
            initial={reduce ? false : { y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: baseDelay + i * 0.07,
              ease: EASE_OUT,
            }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
