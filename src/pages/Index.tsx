import { Hero } from "@/components/Hero";
import { PriceComparison } from "@/components/PriceComparison";
import { Challenge } from "@/components/Challenge";
import { UrgencySection } from "@/components/UrgencySection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
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
