import { Card } from "@/components/ui/card";
import { Dumbbell, Clock, Users, Heart, Zap, Shield } from "lucide-react";

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Por Que Escolher a <span className="text-primary">Full Force?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A melhor academia de Matupá com tudo que você precisa para alcançar seus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <BenefitCard
            icon={Dumbbell}
            title="Equipamentos Modernos"
            description="Aparelhos de última geração para treino de musculação, cardio e funcional"
          />
          <BenefitCard
            icon={Clock}
            title="Horário Flexível"
            description="Academia aberta das 6h às 22h, de segunda a sexta, para você treinar quando quiser"
          />
          <BenefitCard
            icon={Users}
            title="Personal Disponível"
            description="Profissionais qualificados para te orientar e criar treinos personalizados"
          />
          <BenefitCard
            icon={Heart}
            title="Ambiente Motivador"
            description="Espaço climatizado e equipado com som ambiente para você treinar com energia"
          />
          <BenefitCard
            icon={Zap}
            title="Resultados Reais"
            description="Métodos comprovados e acompanhamento constante para garantir sua evolução"
          />
          <BenefitCard
            icon={Shield}
            title="Segurança e Higiene"
            description="Ambiente limpo e seguro, com protocolos de higienização e manutenção constante"
          />
        </div>
      </div>
    </section>
  );
};

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => (
  <Card className="p-6 bg-card border-2 border-border hover:border-primary/50 transition-all group hover:shadow-lg">
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </Card>
);
