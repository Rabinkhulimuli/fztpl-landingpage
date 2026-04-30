import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Shield, Zap, Users, Globe2 } from "lucide-react";

const points = [
  { icon: Zap, t: "Senior-only team", d: "Every engineer has 6+ years shipping production software." },
  { icon: Shield, t: "Outcome guarantee", d: "We commit to milestones and metrics, not hours and tickets." },
  { icon: Users, t: "Embedded partner", d: "We integrate into your team, tools and rituals from day one." },
  { icon: Globe2, t: "Global delivery", d: "Distributed teams across 9 timezones for true follow-the-sun cadence." },
];

export default function WhyChoose() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Why FZTPL</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-gradient">
              The engineering partner ambitious teams trust.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg">
              We've built and scaled software for funded startups and global enterprises. The same
              senior team works on your product from kickoff to launch.
            </p>
          </Reveal>

          <StaggerGroup className="grid sm:grid-cols-2 gap-5">
            {points.map((p) => (
              <StaggerItem key={p.t}>
                <div className="rounded-2xl glass hairline p-6 h-full transition-transform duration-300 ease-out hover:-translate-y-1">
                  <div className="h-10 w-10 rounded-lg bg-brand-gradient/20 hairline flex items-center justify-center">
                    <p.icon className="h-5 w-5 text-primary-glow" />
                  </div>
                  <h3 className="mt-4 font-display text-lg">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
