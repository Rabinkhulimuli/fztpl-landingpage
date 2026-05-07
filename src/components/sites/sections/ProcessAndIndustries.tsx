import { GSAPReveal } from '@/components/common/GSAPReveal';
import { Badge } from '@/components/ui/badge';
import { Search, PenTool, Code, Rocket, CheckCircle2 } from 'lucide-react';

export const ProcessAndIndustries = () => {
  const industries = [
    { name: 'Fintech', icon: '🏦' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'SaaS', icon: '☁️' },
    { name: 'E-commerce', icon: '🛍️' },
    { name: 'EdTech', icon: '🎓' },
    { name: 'Logistics', icon: '🚚' },
  ];

  const steps = [
    {
      title: 'Discovery',
      desc: 'We analyze your requirements, business goals, and technical constraints.',
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: 'Design',
      desc: 'Our UI/UX experts create interactive prototypes and technical architecture.',
      icon: <PenTool className="w-6 h-6" />,
    },
    {
      title: 'Build',
      desc: 'Agile development with daily standups and bi-weekly sprint reviews.',
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: 'Scale',
      desc: 'Continuous deployment, monitoring, and infrastructure optimization.',
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  const models = [
    {
      name: 'Fixed Price',
      desc: 'Ideal for clearly defined projects with a set scope and timeline.',
      features: ['Fixed budget', 'Defined deadline', 'Waterfall or Agile'],
    },
    {
      name: 'Dedicated Team',
      desc: 'Best for long-term projects needing continuous development.',
      features: ['Full control', 'Monthly billing', 'Custom integration'],
      popular: true,
    },
    {
      name: 'Time & Material',
      desc: 'Perfect for evolving projects where flexibility is key.',
      features: ['Pay as you go', 'Infinite flexibility', 'Direct oversight'],
    },
  ];

  return (
    <>
      {/* Industries Section */}
      <section id="industries" className="py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
          <GSAPReveal direction="up" className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Domain <span className="gradient-text">Expertise</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges and regulations of your industry.
            </p>
          </GSAPReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((item, index) => (
              <GSAPReveal key={index} direction="up" delay={index * 0.05}>
                <div className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-colors cursor-default group">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{item.icon}</div>
                  <div className="font-semibold">{item.name}</div>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <GSAPReveal direction="up" className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="gradient-text">Process</span></h2>
              <p className="text-xl text-muted-foreground">
                A streamlined methodology that ensures transparency and quality at every stage.
              </p>
            </GSAPReveal>
            <GSAPReveal direction="right">
              <div className="text-6xl font-bold text-white/5 hidden md:block">03 PROCESS</div>
            </GSAPReveal>
          </div>

          <div className="relative">
            {/* Timeline Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 hidden lg:block -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {steps.map((step, index) => (
                <GSAPReveal key={index} direction="up" delay={index * 0.1} className="relative z-10">
                  <div className="bg-background border border-white/10 p-8 rounded-3xl h-full relative group hover:border-primary/50 transition-colors">
                    <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-gradient-premium flex items-center justify-center text-white shadow-lg shadow-primary/20">
                      {step.icon}
                    </div>
                    <div className="pt-6">
                      <div className="text-sm font-bold text-primary-glow mb-2">STEP 0{index + 1}</div>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </GSAPReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <GSAPReveal direction="up" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Flexible <span className="gradient-text">Engagement</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the model that best fits your project size, budget, and internal management style.
            </p>
          </GSAPReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <GSAPReveal key={index} direction="up" delay={index * 0.1}>
                <div className={`glass-card p-10 rounded-3xl h-full border-2 transition-all hover:scale-[1.02] ${model.popular ? 'border-primary shadow-[0_0_30px_rgba(37,99,235,0.2)]' : 'border-white/5'}`}>
                  {model.popular && (
                    <Badge className="mb-6 bg-primary hover:bg-primary text-white">Most Popular</Badge>
                  )}
                  <h3 className="text-3xl font-bold mb-4">{model.name}</h3>
                  <p className="text-muted-foreground mb-8 text-lg">{model.desc}</p>
                  
                  <ul className="space-y-4 mb-10">
                    {model.features.map((f, i) => (
                      <li key={i} className="flex items-center space-x-3 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-primary-glow shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 rounded-xl font-bold transition-all ${model.popular ? 'bg-gradient-premium text-white' : 'bg-secondary hover:bg-secondary/80 text-foreground'}`}>
                    Select Model
                  </button>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};