import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const steps = [
  { n: "01", t: "Discover", d: "We align on outcomes, constraints and the shape of success in week one." },
  { n: "02", t: "Design", d: "Rapid prototypes and a high-fidelity system designed for engineering velocity." },
  { n: "03", t: "Build", d: "Senior engineers ship in tight loops with weekly demos and live previews." },
  { n: "04", t: "Scale", d: "Observability, performance budgets and a roadmap to compound results." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Process</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-gradient">
            A predictable path from idea to impact.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5" delay={0.08}>
          {steps.map((s, i) => (
            <StaggerItem key={s.n}>
              <div className="relative h-full rounded-2xl glass hairline p-7 shadow-card">
                <div className="font-mono text-xs text-primary-glow">{s.n}</div>
                <h3 className="mt-3 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-gradient-to-r from-white/30 to-transparent" />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
