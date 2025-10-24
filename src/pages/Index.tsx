import { Hero } from "@/components/Hero";
import { PriceComparison } from "@/components/PriceComparison";
import { Challenge } from "@/components/Challenge";
import { UrgencySection } from "@/components/UrgencySection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <PriceComparison />
      <Challenge />
      <UrgencySection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
