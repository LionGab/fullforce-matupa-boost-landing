import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";
import { Logo } from "@/components/Logo";

export const Hero = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Full Force Academia - Transforme seu corpo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="mb-4">
            <Logo className="inline-block scale-125" />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Promoção Fim de Ano • Apenas Novembro
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            PRIMEIRO MÊS POR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-8xl md:text-9xl my-4">
              R$ 1,00
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Garanta seu <span className="text-primary font-bold">Plano Anual</span> na melhor academia de Matupá e economize{" "}
            <span className="text-accent font-bold">R$ 2.149</span> no ano!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>+50 Equipamentos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Profissionais Qualificados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Ambiente Climatizado</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToPlans}
              className="group"
            >
              QUERO MINHA VAGA
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">40</div>
              <div className="text-sm text-muted-foreground uppercase">Vagas Limitadas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">60</div>
              <div className="text-sm text-muted-foreground uppercase">Dias de Desafio</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">94%</div>
              <div className="text-sm text-muted-foreground uppercase">De Desconto</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
