const logos = [
  "STRIPE", "LINEAR", "VERCEL", "NOTION", "FRAMER", "OPENAI", "FIGMA", "ARC", "RAYCAST", "SUPABASE",
];

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by teams shipping at scale
        </p>
        <div
          className="mt-8 relative overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-16 pr-16">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display font-bold text-2xl md:text-3xl text-muted-foreground/60 tracking-wider whitespace-nowrap"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
