import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const stack = [
  "TypeScript", "React", "Next.js", "React Native", "Node.js", "Go", "Python", "Rust",
  "PostgreSQL", "Redis", "Kafka", "GraphQL", "tRPC", "Prisma", "AWS", "GCP",
  "Vercel", "Cloudflare", "Kubernetes", "Terraform", "OpenAI", "LangChain",
];

export default function TechStack() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Tech Stack</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-gradient">
            Modern tools. Boring where it matters.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We choose technology for outcomes, not novelty. Battle-tested foundations, modern UX.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 flex flex-wrap gap-3" delay={0.025}>
          {stack.map((t) => (
            <StaggerItem key={t}>
              <span className="inline-flex items-center rounded-full glass hairline px-4 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
                {t}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
