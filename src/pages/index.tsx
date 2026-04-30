import Navbar from "@/components/sites/Navbar";
import Hero from "@/components/sites/Hero";
import TrustedBy from "@/components/sites/TrustedBy";
import Services from "@/components/sites/Services";
import CaseStudies from "@/components/sites/CaseStudies";
import Process from "@/components/sites/Process";
import WhyChoose from "@/components/sites/WhyChoose";
import Testimonials from "@/components/sites/Testimonials";
import TechStack from "@/components/sites/TechStack";
import FinalCTA from "@/components/sites/FinalCTA";
import Footer from "@/components/sites/Footer";
import MobileCTA from "@/components/sites/MobileCTA";
import FAQ from "@/components/sites/Faq";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <CaseStudies />
        <Process />
        <WhyChoose />
        <Testimonials />
        <TechStack />
        <FinalCTA />
        <FAQ/>
      </main>
      <Footer />
      <MobileCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FZTPL",
            url: "/",
            description:
              "FZTPL is a senior engineering partner for ambitious teams building web, mobile, and AI products.",
          }),
        }}
      />
    </div>
  );
};

export default Index;
