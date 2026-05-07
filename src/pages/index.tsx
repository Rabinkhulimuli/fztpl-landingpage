
import Footer from '@/components/sites/layout/Footer';
import { Navbar } from '@/components/sites/layout/Navbar';
import { Hero } from '@/components/sites/sections/Hero';
import { ProcessAndIndustries } from '@/components/sites/sections/ProcessAndIndustries';
import { ProjectShowcase } from '@/components/sites/sections/ProjectShowcase';
import { Services } from '@/components/sites/sections/Services';
import { TestimonialsAndCTA } from '@/components/sites/sections/TestimonialsAndCTA';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      <div className="relative">
        <Hero />
        <Services />
        <ProjectShowcase />
        <ProcessAndIndustries />
        <TestimonialsAndCTA />
      </div>

      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-border z-[100]">
        <Button onClick={() => window.location.href = 'mailto:hello@fztpl.com'} className="w-full bg-gradient-premium py-6 rounded-xl text-lg font-bold">
          Book a Consultation
        </Button>
      </div>
    </main>
  );
};

export default Home;
