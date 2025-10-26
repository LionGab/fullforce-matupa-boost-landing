import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            O Que Nossos <span className="text-primary">Alunos Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transformações reais de pessoas reais de Matupá
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard
            name="Maria Silva"
            age="32 anos"
            result="Perdeu 12kg em 4 meses"
            testimonial="A Full Force mudou minha vida! Os professores são incríveis e sempre me motivam. Consegui perder peso e ganhei muito mais saúde e disposição."
            rating={5}
          />
          <TestimonialCard
            name="João Santos"
            age="28 anos"
            result="Ganhou 8kg de massa muscular"
            testimonial="Melhor investimento que fiz! Academia completa, equipamentos novos e ambiente motivador. Minha evolução foi surpreendente."
            rating={5}
          />
          <TestimonialCard
            name="Ana Paula"
            age="41 anos"
            result="Melhorou condicionamento físico"
            testimonial="Depois que comecei a treinar na Full Force, minha qualidade de vida melhorou muito. Não consigo mais ficar sem treinar! Recomendo de olhos fechados."
            rating={5}
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-bold text-2xl">+200</span> alunos satisfeitos em Matupá
          </p>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  age: string;
  result: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard = ({ name, age, result, testimonial, rating }: TestimonialCardProps) => (
  <Card className="p-6 bg-card border-2 border-border hover:border-primary/50 transition-all relative">
    <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
    
    <div className="space-y-4">
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>

      <p className="text-foreground italic">"{testimonial}"</p>

      <div className="pt-4 border-t border-border">
        <div className="font-bold text-foreground">{name}</div>
        <div className="text-sm text-muted-foreground">{age}</div>
        <div className="text-sm text-primary font-semibold mt-1">{result}</div>
      </div>
    </div>
  </Card>
);
