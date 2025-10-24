import { Countdown } from "./Countdown";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export const UrgencySection = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/50 rounded-full px-6 py-3">
            <Clock className="w-5 h-5 text-destructive" />
            <span className="text-sm font-semibold text-destructive uppercase tracking-wider">
              Oferta Limitada
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black">
            Tempo <span className="text-primary">Esgotando!</span>
          </h2>

          <p className="text-xl text-muted-foreground">
            A promoção de primeiro mês por R$ 1 termina em:
          </p>

          <div className="py-8">
            <Countdown />
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold">
              ⚠️ Apenas <span className="text-primary text-2xl font-black">40 vagas</span> disponíveis!
            </p>
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToContact}
              className="animate-pulse hover:animate-none"
            >
              GARANTIR MINHA VAGA AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
