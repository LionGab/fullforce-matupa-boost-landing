import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { PriceComparison } from "@/components/PriceComparison";
import { Facilities } from "@/components/Facilities";
import { Challenge } from "@/components/Challenge";
import { Testimonials } from "@/components/Testimonials";
import { UrgencySection } from "@/components/UrgencySection";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Benefits />
      <PriceComparison />
      <Facilities />
      <Challenge />
      <Testimonials />
      <UrgencySection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
