import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Code2, Smartphone, Sparkles, Cloud, LineChart, Layers } from "lucide-react";

const services = [
  { icon: Code2, title: "Web Engineering", desc: "Production-grade React, Next.js and TypeScript apps with measurable performance." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native-feel iOS & Android with React Native and Expo, shipped to stores." },
  { icon: Sparkles, title: "AI Products", desc: "RAG, agents and AI-native UX powered by modern LLM stacks." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Serverless, edge and Kubernetes — observability and CI baked in." },
  { icon: LineChart, title: "Product Strategy", desc: "Discovery, roadmap and outcome metrics that align teams." },
  { icon: Layers, title: "Design Systems", desc: "Scalable UI systems and component libraries built for velocity." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Services</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-gradient">
            Everything you need to ship a great product.
          </h2>
          <p className="mt-4 text-muted-foreground">
            One senior team. End-to-end ownership. From first prototype to global scale.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group relative h-full rounded-2xl glass hairline p-7 shadow-card transition-transform duration-300 ease-out hover:-translate-y-1.5">
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "var(--gradient-brand-soft)" }}
                />
                <div className="relative">
                  <div className="h-11 w-11 rounded-xl bg-brand-gradient/20 hairline flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-primary-glow" />
                  </div>
                  <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
