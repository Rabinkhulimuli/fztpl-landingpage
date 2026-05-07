import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Globe from '@/components/three/Globe';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        scale: 0.95,
        opacity: 0.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Initial reveal
      const tl = gsap.timeline();
      tl.from('.hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 z-0 bg-gradient-glow opacity-50" />
      <Globe />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] z-0" />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10 text-center">
        <div className="hero-content max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-secondary/50 border border-white/10 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="text-primary-glow">New</span>
            <span className="text-foreground/60">Expert AI Implementation for Enterprises</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            We Build <span className="gradient-text">Future-Proof</span> Software Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            From visionary startups to Fortune 500 enterprises, we deliver premium software outsourcing with a focus on AI, UI/UX, and scalability.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Button onClick={() => window.location.href = 'mailto:hello@fztpl.com'} size="lg" className="w-full md:w-auto text-lg px-8 py-7 bg-gradient-premium hover:opacity-90 transition-all rounded-xl glow-on-hover">
              Book a Call
            </Button>
            <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="w-full md:w-auto text-lg px-8 py-7 border-white/20 hover:bg-white/5 transition-all rounded-xl group">
              View Our Work
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};
