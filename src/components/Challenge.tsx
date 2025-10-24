import { Card } from "@/components/ui/card";
import { Trophy, Users, Calendar, Target } from "lucide-react";

export const Challenge = () => {
  return (
    <section id="desafio" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Desafio <span className="text-primary">Verão 60 Dias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Participe do desafio exclusivo e concorra a prêmios incríveis!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <InfoCard
            icon={Calendar}
            title="60 Dias"
            description="1º Nov - 31 Dez"
          />
          <InfoCard
            icon={Users}
            title="40 Vagas"
            description="Grupo VIP Exclusivo"
          />
          <InfoCard
            icon={Target}
            title="Ranking"
            description="Acompanhe seu progresso"
          />
          <InfoCard
            icon={Trophy}
            title="Prêmios"
            description="Top 3 ganham meses grátis"
          />
        </div>

        {/* Prizes */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            Prêmios para os <span className="text-primary">Top 3</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <PrizeCard
              place="1º Lugar"
              prize="3 Meses Grátis"
              value="R$ 357"
              gradient="from-accent to-primary"
            />
            <PrizeCard
              place="2º Lugar"
              prize="2 Meses Grátis"
              value="R$ 238"
              gradient="from-primary to-accent"
            />
            <PrizeCard
              place="3º Lugar"
              prize="1 Mês Grátis"
              value="R$ 119"
              gradient="from-accent/80 to-primary/80"
            />
          </div>
        </div>

        {/* How it Works */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="p-8 bg-card border-2 border-primary/30">
            <h3 className="text-2xl font-bold mb-6 text-center">Como Funciona?</h3>
            <div className="space-y-4">
              <Step number="1" text="Garanta seu plano anual com primeiro mês por R$ 1" />
              <Step number="2" text="Entre no grupo VIP exclusivo do desafio" />
              <Step number="3" text="Treine, registre seu progresso e suba no ranking" />
              <Step number="4" text="Concorra aos prêmios sendo um dos top 3" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const InfoCard = ({ icon: Icon, title, description }: InfoCardProps) => (
  <Card className="p-6 bg-card border-2 border-border hover:border-primary/50 transition-all text-center">
    <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-muted-foreground text-sm">{description}</p>
  </Card>
);

interface PrizeCardProps {
  place: string;
  prize: string;
  value: string;
  gradient: string;
}

const PrizeCard = ({ place, prize, value, gradient }: PrizeCardProps) => (
  <Card className={`p-6 bg-gradient-to-br ${gradient} border-2 border-primary text-center`}>
    <Trophy className="w-12 h-12 mx-auto mb-4 text-primary-foreground" />
    <div className="text-2xl font-black text-primary-foreground mb-2">{place}</div>
    <div className="text-xl font-bold text-primary-foreground mb-2">{prize}</div>
    <div className="text-sm text-primary-foreground/80">Valor: {value}</div>
  </Card>
);

interface StepProps {
  number: string;
  text: string;
}

const Step = ({ number, text }: StepProps) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center font-bold text-primary">
      {number}
    </div>
    <p className="text-foreground pt-2">{text}</p>
  </div>
);
