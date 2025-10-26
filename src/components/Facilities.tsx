import { Card } from "@/components/ui/card";
import { Bike, Weight, Activity, Flame, Wind, Trophy } from "lucide-react";

export const Facilities = () => {
  return (
    <section id="estrutura" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Nossa <span className="text-primary">Estrutura</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Equipamentos de ponta e espaços projetados para seu melhor desempenho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FacilityCard
            icon={Weight}
            title="Musculação Completa"
            description="Área equipada com aparelhos de musculação modernos, pesos livres, barras, anilhas e halteres de diversos pesos"
            features={["Leg Press", "Supino", "Esteira de Musculação", "Cadeira Extensora"]}
          />
          <FacilityCard
            icon={Bike}
            title="Zona Cardio"
            description="Esteiras, bicicletas ergométricas e elípticos para treinos aeróbicos eficientes"
            features={["Esteiras Modernas", "Bikes Ergométricas", "Elípticos", "Transport"]}
          />
          <FacilityCard
            icon={Activity}
            title="Treino Funcional"
            description="Espaço dedicado para exercícios funcionais com acessórios variados"
            features={["Kettlebells", "Medicine Balls", "Cordas Navais", "Caixas Pliométricas"]}
          />
          <FacilityCard
            icon={Flame}
            title="Área de Alongamento"
            description="Espaço confortável para aquecimento, alongamento e recuperação muscular"
            features={["Colchonetes", "Rolos de Espuma", "Faixas Elásticas", "Espelho Grande"]}
          />
          <FacilityCard
            icon={Wind}
            title="Ambiente Climatizado"
            description="Academia toda climatizada para seu conforto durante os treinos mais intensos"
            features={["Ar Condicionado", "Ventilação Adequada", "Iluminação LED", "Som Ambiente"]}
          />
          <FacilityCard
            icon={Trophy}
            title="Vestiários"
            description="Vestiários masculino e feminino equipados e sempre higienizados"
            features={["Armários", "Chuveiros", "Espelhos", "Limpeza Constante"]}
          />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-primary/10 border-2 border-primary/30 rounded-2xl p-8">
            <p className="text-2xl font-bold text-foreground mb-2">
              Mais de <span className="text-primary text-4xl">50 equipamentos</span>
            </p>
            <p className="text-muted-foreground">
              À sua disposição para alcançar seus objetivos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FacilityCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const FacilityCard = ({ icon: Icon, title, description, features }: FacilityCardProps) => (
  <Card className="p-6 bg-card border-2 border-border hover:border-primary/50 transition-all group">
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <div className="pl-14 space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </Card>
);
