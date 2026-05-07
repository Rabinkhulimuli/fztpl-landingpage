import { GSAPReveal } from '@/components/common/GSAPReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Quote } from 'lucide-react';

export const TestimonialsAndCTA = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'CTO, Finova Tech',
      text: "FZTPL didn't just write code; they transformed our entire product vision into a scalable reality. Their AI expertise is unmatched in the outsourcing space.",
      avatar: 'https://i.pravatar.cc/150?u=sarah',
    },
    {
      name: 'Mark Thompson',
      role: 'Founder, HealthLink',
      text: 'The dedicated team model worked perfectly for us. It felt like they were part of our company from day one. Highly professional and transparent.',
      avatar: 'https://i.pravatar.cc/150?u=mark',
    },
    {
      name: 'David Chen',
      role: 'VP Engineering, CloudScale',
      text: 'We interviewed over 10 agencies before choosing FZTPL. Their commitment to code quality and UI/UX detail is what set them apart.',
      avatar: 'https://i.pravatar.cc/150?u=david',
    },
  ];

  const techStack = [
    'React', 'Next.js', 'Node.js', 'Python', 'PyTorch', 'AWS', 'Google Cloud', 'Kubernetes', 'PostgreSQL', 'Redis', 'TypeScript', 'GraphQL'
  ];

  return (
    <>
      {/* Testimonials */}
      <section className="py-32 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-6">
          <GSAPReveal direction="up" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Client <span className="gradient-text">Success</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here is what our partners have to say.
            </p>
          </GSAPReveal>

          <GSAPReveal direction="up">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((t, index) => (
                  <CarouselItem key={index}>
                    <div className="p-4">
                      <Card className="bg-background border-white/5 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
                        <Quote className="absolute top-10 right-10 w-32 h-32 text-white/5 -rotate-12" />
                        <CardContent className="p-0 flex flex-col items-center text-center">
                          <img src={t.avatar} alt={t.name} className="w-24 h-24 rounded-full mb-8 border-4 border-primary/20" />
                          <p className="text-2xl md:text-3xl italic leading-relaxed mb-10 text-foreground/90">
                            "{t.text}"
                          </p>
                          <div>
                            <div className="text-xl font-bold">{t.name}</div>
                            <div className="text-primary-glow">{t.role}</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="bg-background border-white/10 hover:bg-primary/20" />
                <CarouselNext className="bg-background border-white/10 hover:bg-primary/20" />
              </div>
            </Carousel>
          </GSAPReveal>
        </div>
      </section>

      {/* Why Choose Us & Tech Stack */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <GSAPReveal direction="left">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Why Global Leaders <span className="gradient-text">Choose Us</span></h2>
              <div className="space-y-8">
                {[
                  { t: 'Strategic Partnership', d: 'We focus on your business outcomes, not just task completion.' },
                  { t: 'Elite Talent', d: 'Top 3% of engineering talent across Eastern Europe and Asia.' },
                  { t: 'Radical Transparency', d: 'Real-time access to our Jira, Slack, and development progress.' }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                      <p className="text-muted-foreground">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GSAPReveal>

            <GSAPReveal direction="right">
              <div className="glass-card p-12 rounded-[40px] h-full">
                <h3 className="text-3xl font-bold mb-10">Our Tech Stack</h3>
                <div className="flex flex-wrap gap-4">
                  {techStack.map((tech, i) => (
                    <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-8 bg-gradient-premium/10 rounded-3xl border border-primary/20">
                  <p className="text-sm font-semibold text-primary-glow mb-2 uppercase tracking-widest">Constant Innovation</p>
                  <p className="text-foreground/80">We are continuously updating our stack with the latest stable releases of AI and Cloud technologies.</p>
                </div>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <GSAPReveal direction="up" className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 md:p-24 rounded-[60px] border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -ml-32 -mb-32" />
              
              <h2 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">
                Ready to Build Your <br /> <span className="gradient-text">Next Big Thing?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Join 100+ companies that have scaled their technical teams with FZTPL. Book your free technical consultation today.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <Button onClick={() => window.location.href = 'mailto:hello@fztpl.com'} size="lg" className="w-full md:w-auto text-xl px-12 py-8 bg-gradient-premium hover:scale-105 transition-transform rounded-2xl glow-on-hover">
                  Schedule a Call
                </Button>
                <Button onClick={() => window.location.href = 'mailto:sales@fztpl.com'} size="lg" variant="outline" className="w-full md:w-auto text-xl px-12 py-8 border-white/20 hover:bg-white/5 transition-all rounded-2xl">
                  Contact Sales
                </Button>
              </div>
            </div>
          </GSAPReveal>
        </div>
      </section>
    </>
  );
};