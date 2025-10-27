import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Check, 
  Star, 
  Dumbbell, 
  Users, 
  Trophy, 
  Heart,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  Target,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-31T23:59:59').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-final');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Schema.org LocalBusiness JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          "name": "Full Force Academia",
          "image": "https://fullforceacademia.com.br/logo.png",
          "description": "A melhor academia de Matupá-MT com equipamentos modernos, profissionais qualificados e ambiente motivador para sua transformação física.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Principal",
            "addressLocality": "Matupá",
            "addressRegion": "MT",
            "postalCode": "78525-000",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-10.1833",
            "longitude": "-54.9333"
          },
          "telephone": "+55-66-99999-9999",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "06:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "priceRange": "$$",
          "url": "https://fullforceacademia.com.br"
        })}
      </script>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Urgency Badge */}
            <Badge variant="outline" className="border-primary text-primary px-6 py-2 text-sm font-semibold animate-pulse">
              <Clock className="w-4 h-4 mr-2" />
              OFERTA LIMITADA - TERMINA EM 31 DE OUTUBRO
            </Badge>

            {/* Main Headline - H1 otimizado para SEO */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              Transforme Seu Corpo em 2025
              <span className="block text-primary mt-2">
                Plano Anual Full Force Matupá
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A <strong className="text-foreground">melhor academia de Matupá-MT</strong> com uma oferta exclusiva de fim de ano
            </p>

            {/* Oferta Destaque */}
            <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-5xl md:text-7xl font-black text-primary mb-4">
                R$ 1,00
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-2">
                NO PRIMEIRO MÊS
              </div>
              <p className="text-muted-foreground text-lg">
                Plano Anual com Acesso Ilimitado a Todas as Modalidades
              </p>
            </div>

            {/* CTA Principal */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={scrollToCTA}
              >
                <Zap className="w-5 h-5 mr-2" />
                GARANTIR MINHA VAGA AGORA
              </Button>
              <a href="https://wa.me/5566999999999?text=Quero%20saber%20mais%20sobre%20o%20plano%20anual" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 font-bold border-2 border-primary text-primary hover:bg-primary/10"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  FALAR NO WHATSAPP
                </Button>
              </a>
            </div>

            {/* Countdown Timer */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">TEMPO RESTANTE PARA ESTA OFERTA:</p>
              <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
                {[
                  { label: 'Dias', value: timeLeft.days },
                  { label: 'Horas', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Seg', value: timeLeft.seconds }
                ].map((item) => (
                  <div key={item.label} className="bg-card border border-border rounded-lg p-4">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{item.value}</div>
                    <div className="text-xs text-muted-foreground uppercase">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios do Plano Anual */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Por Que Escolher o Plano Anual da Full Force?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Invista em você com o melhor custo-benefício de Matupá
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Economia Garantida",
                description: "Economize mais de R$ 500,00 por ano comparado ao plano mensal. Investimento inteligente na sua saúde."
              },
              {
                icon: Dumbbell,
                title: "Acesso Ilimitado",
                description: "Todas as modalidades disponíveis: musculação, funcional, aeróbico, spinning e muito mais."
              },
              {
                icon: Users,
                title: "Acompanhamento Personalizado",
                description: "Avaliação física completa e treino personalizado com nossos profissionais qualificados."
              },
              {
                icon: Shield,
                title: "Sem Taxa de Matrícula",
                description: "Zero taxa de adesão. Você paga apenas R$ 1,00 no primeiro mês e começa a treinar imediatamente."
              },
              {
                icon: Target,
                title: "Preço Fixo por 12 Meses",
                description: "Proteção contra reajustes. Seu investimento permanece o mesmo durante todo o ano."
              },
              {
                icon: Trophy,
                title: "Equipamentos Modernos",
                description: "Aparelhos de última geração e ambiente climatizado para seu conforto e resultados."
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Como Funciona? É Muito Simples!
            </h2>
            <p className="text-xl text-muted-foreground">
              3 passos para começar sua transformação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Entre em Contato",
                description: "Clique no botão abaixo e fale com nossa equipe pelo WhatsApp ou telefone para garantir sua vaga."
              },
              {
                step: "2",
                title: "Pague Apenas R$ 1,00",
                description: "Faça o pagamento simbólico do primeiro mês e formalize seu plano anual com condições especiais."
              },
              {
                step: "3",
                title: "Comece a Treinar",
                description: "Faça sua avaliação física, receba seu treino personalizado e inicie sua jornada de transformação hoje mesmo!"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-black mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 font-bold bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={scrollToCTA}
            >
              QUERO ECONOMIZAR NO PLANO ANUAL
            </Button>
          </div>
        </div>
      </section>

      {/* Prova Social - Depoimentos */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              O Que Nossos Alunos Dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Resultados reais de pessoas reais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Maria Silva",
                result: "Perdeu 15kg em 6 meses",
                text: "A Full Force mudou minha vida! O acompanhamento personalizado e os equipamentos modernos fizeram toda a diferença. Melhor investimento que já fiz!",
                rating: 5
              },
              {
                name: "João Santos",
                result: "Ganhou 8kg de massa muscular",
                text: "Treino aqui há 2 anos e não troco por nada. Os professores são excelentes e o ambiente é super motivador. O plano anual vale muito a pena!",
                rating: 5
              },
              {
                name: "Ana Costa",
                result: "Melhorou condicionamento físico",
                text: "Estava sedentária há anos e a equipe da Full Force me acolheu muito bem. Hoje treino 5x por semana e me sinto incrível! Recomendo demais!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estrutura da Academia */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Conheça a Melhor Academia de Matupá - MT
            </h2>
            <p className="text-xl text-muted-foreground">
              Estrutura completa para sua transformação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="bg-card border-border overflow-hidden">
              <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                <Dumbbell className="w-20 h-20 text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Equipamentos de Última Geração</h3>
                <p className="text-muted-foreground">
                  Aparelhos modernos e bem mantidos para todos os tipos de treino
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                <Users className="w-20 h-20 text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Profissionais Qualificados</h3>
                <p className="text-muted-foreground">
                  Equipe de educadores físicos experientes e dedicados ao seu resultado
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Modalidades */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Nossas Modalidades de Treino em Matupá
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Dumbbell, name: "Musculação" },
                { icon: Heart, name: "Funcional" },
                { icon: Zap, name: "Aeróbico" },
                { icon: Target, name: "Spinning" },
                { icon: Users, name: "Treino em Grupo" },
                { icon: Trophy, name: "Personal Trainer" },
                { icon: Calendar, name: "Avaliação Física" },
                { icon: Shield, name: "Acompanhamento" }
              ].map((modality, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all">
                  <modality.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-semibold text-center">{modality.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgência e Comparação */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="destructive" className="px-6 py-2 text-sm font-semibold mb-4">
                <Clock className="w-4 h-4 mr-2" />
                ÚLTIMAS VAGAS DISPONÍVEIS
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Não Perca Esta Oportunidade Única!
              </h2>
              <p className="text-xl text-muted-foreground">
                Compare e veja quanto você economiza com o plano anual
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Plano Mensal */}
              <Card className="bg-card border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Plano Mensal</h3>
                    <div className="text-4xl font-black text-muted-foreground mb-4">
                      R$ 150<span className="text-lg">/mês</span>
                    </div>
                    <p className="text-muted-foreground">Pagamento mensal</p>
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Acesso às modalidades</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Sem fidelidade</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="font-bold">Total em 12 meses:</p>
                      <p className="text-2xl font-black text-destructive">R$ 1.800,00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Plano Anual - DESTAQUE */}
              <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground font-bold">
                    MELHOR OFERTA
                  </Badge>
                </div>
                <CardContent className="p-8 space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Plano Anual</h3>
                    <div className="text-5xl font-black text-primary mb-2">
                      R$ 1,00
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">no 1º mês, depois R$ 110/mês</p>
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Acesso ilimitado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Sem taxa de matrícula</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Preço fixo por 12 meses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Acompanhamento personalizado</span>
                    </div>
                    <div className="pt-4 border-t border-primary/30">
                      <p className="font-bold">Total em 12 meses:</p>
                      <p className="text-2xl font-black text-primary">R$ 1.211,00</p>
                      <p className="text-sm text-primary font-bold mt-2">
                        💰 ECONOMIA DE R$ 589,00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre o plano anual
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Como funciona o pagamento do plano anual?",
                answer: "Você paga apenas R$ 1,00 no primeiro mês. A partir do segundo mês, o valor é de R$ 110,00 mensais por 11 meses, totalizando R$ 1.211,00 no ano. Uma economia de R$ 589,00 comparado ao plano mensal!"
              },
              {
                question: "Posso cancelar antes de completar 1 ano?",
                answer: "O plano anual tem fidelidade de 12 meses. Caso necessite cancelar antes, entre em contato com nossa equipe para avaliarmos sua situação específica."
              },
              {
                question: "Tenho acesso a todas as modalidades?",
                answer: "Sim! Com o plano anual você tem acesso ilimitado a todas as modalidades: musculação, funcional, aeróbico, spinning, treinos em grupo e muito mais."
              },
              {
                question: "Preciso pagar taxa de matrícula?",
                answer: "Não! Nesta promoção especial, a taxa de matrícula está GRÁTIS. Você paga apenas R$ 1,00 no primeiro mês e já começa a treinar."
              },
              {
                question: "Até quando posso aproveitar esta oferta?",
                answer: "Esta é uma promoção exclusiva de fim de ano válida até 31 de Outubro de 2025. As vagas são limitadas, então garanta a sua o quanto antes!"
              },
              {
                question: "Como faço para garantir minha vaga?",
                answer: "É simples! Clique no botão de WhatsApp ou ligue para nossa academia. Nossa equipe vai te orientar sobre os próximos passos para você começar sua transformação."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 flex items-start gap-2">
                    <span className="text-primary">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-6">
                    <span className="text-primary font-bold">R:</span> {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-20 bg-gradient-to-br from-primary/20 via-primary/10 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Pronto Para Transformar Seu Corpo?
            </h2>
            <p className="text-xl text-muted-foreground">
              Não deixe esta oportunidade passar! Vagas limitadas até 31 de Outubro.
            </p>

            <div className="bg-card border-2 border-primary rounded-2xl p-8 space-y-6">
              <div className="text-5xl font-black text-primary">
                R$ 1,00 NO PRIMEIRO MÊS
              </div>
              <p className="text-lg">
                Plano Anual com Acesso Ilimitado + Economia de R$ 589,00
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a href="https://wa.me/5566999999999?text=Quero%20garantir%20minha%20vaga%20no%20plano%20anual%20por%20R$1" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full text-lg px-8 py-6 font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    GARANTIR MINHA VAGA PELO WHATSAPP
                  </Button>
                </a>
              </div>

              <div className="pt-6 border-t border-border space-y-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+5566999999999" className="hover:text-primary transition-colors">
                    (66) 99999-9999
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Rua Principal - Matupá, MT</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Seg a Sex: 6h às 22h | Sáb: 8h às 18h</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              * Oferta válida até 31/10/2025 ou enquanto durarem as vagas. Plano anual com fidelidade de 12 meses.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Full Force Academia - Matupá, MT. Todos os direitos reservados.</p>
          <p className="mt-2">A melhor academia de Matupá-MT para sua transformação física.</p>
        </div>
      </footer>
    </div>
  );
}

