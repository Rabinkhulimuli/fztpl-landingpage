import { Reveal } from "@/components/motion/Reveal";
import { CTA } from "@/components/motion/CTA";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl hairline shadow-card p-10 md:p-16 text-center">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "var(--gradient-brand)", opacity: 0.14 }}
            />
            <div
              aria-hidden
              className="absolute -inset-40 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at center, hsl(270 90% 60% / 0.35), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass-strong hairline px-3 py-1.5 text-xs">
                <Calendar className="h-3.5 w-3.5 text-primary-glow" />
                30-min intro · No pitch
              </div>
              <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight text-gradient max-w-3xl mx-auto">
                Let's build something your users will love.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                Tell us about your product and goals. We'll respond within one business day.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <CTA href="mailto:hello@fztpl.com" variant="primary">
                  Book a Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-[250ms] ease-out group-hover:translate-x-0.5" />
                </CTA>
                <CTA href="mailto:hello@fztpl.com" variant="ghost">
                  hello@fztpl.com
                </CTA>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
