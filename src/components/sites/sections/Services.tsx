import { GSAPReveal } from '@/components/common/GSAPReveal';
import { Monitor, Cpu, Palette, Users } from 'lucide-react';

export const Services = () => {
  const logos = ['Google', 'Microsoft', 'Netflix', 'Amazon', 'Spotify', 'NVIDIA'];

  const services = [
    {
      title: 'Web Development',
      description: 'Scalable, high-performance web applications built with modern frameworks and cloud-native architecture.',
      icon: <Monitor className="w-8 h-8 text-primary" />,
    },
    {
      title: 'AI Solutions',
      description: 'Integrating cutting-edge machine learning and LLMs into your existing workflow for maximum efficiency.',
      icon: <Cpu className="w-8 h-8 text-primary" />,
    },
    {
      title: 'UI/UX Design',
      description: 'User-centric designs that prioritize conversion and provide a premium, intuitive experience.',
      icon: <Palette className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Dedicated Teams',
      description: 'Expert engineers who integrate seamlessly with your internal team to accelerate development.',
      icon: <Users className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <>
      {/* Trusted By Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-6">
          <GSAPReveal direction="up" duration={0.8}>
            <p className="text-center text-muted-foreground uppercase tracking-widest text-sm mb-12">
              Trusted by global industry leaders
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-50">
              {logos.map((logo) => (
                <div key={logo} className="text-xl md:text-2xl font-bold grayscale hover:grayscale-0 transition-all cursor-default">
                  {logo}
                </div>
              ))}
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <GSAPReveal direction="up" className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Expertise That <span className="gradient-text">Scales</span></h2>
              <p className="text-xl text-muted-foreground">
                We combine technical excellence with business strategy to deliver software that drives results.
              </p>
            </GSAPReveal>
            <GSAPReveal direction="right">
              <div className="text-6xl font-bold text-white/5 hidden md:block">01 SERVICES</div>
            </GSAPReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <GSAPReveal key={index} direction="up" delay={index * 0.1} className="h-full">
                <div className="glass-card p-8 rounded-2xl h-full glow-on-hover hover:-translate-y-2 transition-transform">
                  <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
