import { GSAPReveal } from '@/components/common/GSAPReveal';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export const ProjectShowcase = () => {
  const projects = [
    {
      title: 'NexGen AI Dashboard',
      category: 'SaaS / AI',
      problem: 'Enterprise clients lacked a unified view of their distributed AI model performance.',
      solution: 'We built a high-concurrency real-time dashboard with predictive analytics.',
      result: '40% increase in operational efficiency.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e3fec64c-7c88-46b2-bbc7-cf99ba0df025.jpg',
    },
    {
      title: 'HealthFlow Platform',
      category: 'Healthcare',
      problem: 'Manual patient data entry was causing errors and delaying treatments.',
      solution: 'Developed an automated HIPAA-compliant data pipeline with an intuitive UI.',
      result: '99.9% reduction in data entry errors.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f8a09e0c-ec22-41fd-923f-aa857b831e91.jpg',
    },
    {
      title: 'CryptoVault Wallet',
      category: 'Fintech',
      problem: 'Users found existing hardware wallet interfaces too technical and intimidating.',
      solution: 'Created a minimalist mobile-first wallet with biometric security and simple UX.',
      result: 'Reached 1M active users within 6 months.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_56841fe8-d4ec-4e42-950c-f60206542966.jpg',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <GSAPReveal direction="up" className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Proven <span className="gradient-text">Results</span></h2>
            <p className="text-xl text-muted-foreground">
              Explore how we've helped global brands solve complex technical challenges.
            </p>
          </GSAPReveal>
          <GSAPReveal direction="right">
            <div className="text-6xl font-bold text-white/5 hidden md:block">02 PROJECTS</div>
          </GSAPReveal>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {projects.map((project, index) => (
            <GSAPReveal key={index} direction="up" delay={index * 0.1}>
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative overflow-hidden rounded-3xl aspect-[16/9] bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
                
                <div className="space-y-6">
                  <Badge variant="secondary" className="bg-primary/20 text-primary-glow border-none px-4 py-1 text-sm">
                    {project.category}
                  </Badge>
                  <h3 className="text-3xl md:text-5xl font-bold">{project.title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Problem</p>
                      <p className="text-foreground/80">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Result</p>
                      <p className="text-primary-glow font-bold text-xl">{project.result}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground pt-4">
                    <span className="text-foreground font-semibold">Solution: </span>
                    {project.solution}
                  </p>
                  
                  <div className="pt-6">
                    <button className="flex items-center space-x-2 text-primary-glow font-semibold group/btn">
                      <span>View Case Study</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </GSAPReveal>
          ))}
        </div>
      </div>
    </section>
  );
};