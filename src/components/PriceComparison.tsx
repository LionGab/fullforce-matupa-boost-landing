import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export const PriceComparison = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="planos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Compare e <span className="text-primary">Economize</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja quanto você economiza com o plano anual
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Monthly Plan */}
          <Card className="p-8 bg-card border-2 border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-muted text-muted-foreground text-xs font-bold px-4 py-2 rounded-bl-lg">
              TRADICIONAL
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Plano Mensal</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black">R$ 189</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>

              <div className="space-y-3 py-6 border-y border-border">
                <Feature icon={Check} text="Acesso à academia" />
                <Feature icon={Check} text="Todos os equipamentos" />
                <Feature icon={X} text="Desafio 60 dias" variant="negative" />
                <Feature icon={X} text="Grupo VIP" variant="negative" />
                <Feature icon={X} text="Prêmios" variant="negative" />
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Total em 12 meses:</div>
                <div className="text-3xl font-bold text-destructive">R$ 2.268</div>
              </div>
            </div>
          </Card>

          {/* Annual Plan - Highlighted */}
          <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border-2 border-primary relative overflow-hidden shadow-[0_0_40px_rgba(255,87,34,0.3)]">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold px-6 py-2 rounded-bl-lg">
              🔥 MELHOR OFERTA
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Plano Anual</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-primary">R$ 119</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <div className="mt-2">
                  <span className="text-accent font-bold text-lg">Primeiro mês: R$ 1</span>
                </div>
              </div>

              <div className="space-y-3 py-6 border-y border-primary/30">
                <Feature icon={Check} text="Acesso à academia" variant="positive" />
                <Feature icon={Check} text="Todos os equipamentos" variant="positive" />
                <Feature icon={Check} text="Desafio 60 dias" variant="positive" />
                <Feature icon={Check} text="Grupo VIP exclusivo" variant="positive" />
                <Feature icon={Check} text="Concorra a prêmios" variant="positive" />
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                <div className="text-sm text-muted-foreground mb-1">Total em 12 meses:</div>
                <div className="text-3xl font-bold text-primary mb-2">R$ 119</div>
                <div className="text-sm font-semibold text-accent">
                  Economize R$ 2.149 no ano! 💰
                </div>
              </div>

              <Button 
                variant="hero" 
                size="xl" 
                className="w-full"
                onClick={scrollToContact}
              >
                GARANTIR MINHA VAGA AGORA
              </Button>
            </div>
          </Card>
        </div>

        {/* Savings Highlight */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-8">
            <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
              Sua economia total
            </div>
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              R$ 2.149
            </div>
            <div className="text-lg text-muted-foreground mt-2">
              94% de desconto em relação ao plano mensal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  icon: React.ElementType;
  text: string;
  variant?: "positive" | "negative";
}

const Feature = ({ icon: Icon, text, variant = "positive" }: FeatureProps) => (
  <div className="flex items-center gap-3">
    <Icon 
      className={`w-5 h-5 ${
        variant === "positive" ? "text-primary" : "text-muted-foreground/50"
      }`} 
    />
    <span className={variant === "positive" ? "text-foreground" : "text-muted-foreground/50"}>
      {text}
    </span>
  </div>
);
