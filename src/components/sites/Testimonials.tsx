import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  {
    quote:
      "FZTPL operates like an internal team — but with the depth of an agency. They shipped our v2 in half the time we planned.",
    name: "Maya Chen",
    role: "VP Product, Lumen Analytics",
  },
  {
    quote:
      "The clearest engineering partner we've worked with. Outcomes, transparency and senior craftsmanship from day one.",
    name: "David Okafor",
    role: "CTO, Northwind Capital",
  },
  {
    quote:
      "Our AI workflow went from prototype to production in eight weeks. The quality bar is genuinely world-class.",
    name: "Priya Raman",
    role: "Founder, Helix AI",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-gradient">
            Trusted by founders and engineering leaders.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative rounded-3xl glass hairline shadow-card p-8 md:p-14 overflow-hidden">
            <Quote className="absolute top-8 right-8 h-16 w-16 text-white/5" />
            <div className="relative min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-gradient max-w-3xl">
                    "{items[i].quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full bg-brand-gradient" />
                    <div>
                      <div className="font-medium">{items[i].name}</div>
                      <div className="text-sm text-muted-foreground">{items[i].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-1.5">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    onClick={() => setI(idx)}
                    className={`h-1.5 w-8 rounded-full origin-left transition-[transform,background-color,opacity] duration-[250ms] ease-out ${
                      idx === i
                        ? "bg-brand-gradient scale-x-100 opacity-100"
                        : "bg-white/15 scale-x-50 opacity-70"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous"
                  onClick={prev}
                  className="h-10 w-10 rounded-full hairline glass flex items-center justify-center transition-transform duration-200 ease-out hover:scale-105"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next"
                  onClick={next}
                  className="h-10 w-10 rounded-full hairline glass flex items-center justify-center transition-transform duration-200 ease-out hover:scale-105"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
