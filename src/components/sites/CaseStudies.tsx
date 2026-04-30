import { ArrowUpRight } from "lucide-react";
import { Reveal ,StaggerGroup, StaggerItem} from "../motion/Reveal";
// import { Case3D } from "./CaseCard3d";

const cases = [
  {
    tag: "Fintech",
    title: "Cut onboarding time by 64%",
    client: "Northwind Capital",
    metric: "+38% activation",
    gradient: "from-blue-500/30 to-purple-500/30",
    visual: "pipeline-fast",
  },
  {
    tag: "SaaS",
    title: "Scaled to 1.2M MAU on edge",
    client: "Lumen Analytics",
    metric: "−52% p95 latency",
    gradient: "from-fuchsia-500/30 to-blue-500/30",
    visual: "network-scale",
  },
  {
    tag: "AI",
    title: "Shipped agentic workflow in 8 weeks",
    client: "Helix AI",
    metric: "3.1× team output",
    gradient: "from-indigo-500/30 to-violet-500/30",
    visual: "agent-flow",
  },
  {
    tag: "Marketplace",
    title: "Doubled conversion on mobile",
    client: "Orbit Goods",
    metric: "+104% checkout",
    gradient: "from-cyan-500/30 to-purple-500/30",
    visual: "conversion-boost",
  },
];
export default function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <Reveal className="flex items-end justify-between gap-8 flex-wrap">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Case Studies</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-gradient">
              Outcomes our clients can measure.
            </h2>
          </div>
          <a href="#cta" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            All work →
          </a>
        </Reveal>

        <StaggerGroup className="mt-14 grid md:grid-cols-2 gap-5">
          {cases.map((c) => (
            <StaggerItem key={c.title}>
              <a
                href="#cta"
                className="group block relative overflow-hidden rounded-2xl hairline shadow-card aspect-[4/3]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]`} />
                <div className="absolute inset-0 bg-[#0B0F19]/30" />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, white 1px, transparent 1.5px), radial-gradient(circle at 70% 70%, white 1px, transparent 1.5px)",
                    backgroundSize: "120px 120px, 80px 80px",
                  }}
                />
                <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-white/70">{c.tag}</span>
                    <span className="h-9 w-9 rounded-full glass-strong flex items-center justify-center transition-transform duration-300 ease-out group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-white/70">{c.client}</div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl tracking-tight max-w-md">
                      {c.title}
                    </h3>
                    <div
                      className="mt-5 inline-flex items-center gap-2 rounded-full glass-strong hairline px-3 py-1.5 text-xs translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-[300ms] ease-out"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {c.metric}
                    </div>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
          {/* {cases.map((c) => (
  <StaggerItem key={c.title}>
    <Case3D visual={c.visual} />
  </StaggerItem>
))} */}
        </StaggerGroup>
      </div>
    </section>
  );
}
