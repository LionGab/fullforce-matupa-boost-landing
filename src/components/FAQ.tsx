import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre a promoção e a academia
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                Como funciona a promoção de R$ 1 no primeiro mês?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Você paga apenas R$ 1,00 no primeiro mês e garante o plano anual completo. 
                A partir do segundo mês, o valor é de R$ 119,00 mensais. É um desconto incrível 
                de 94% comparado ao plano mensal tradicional!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                O que está incluído no plano anual?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                O plano anual inclui acesso ilimitado à academia, uso de todos os equipamentos, 
                participação no Desafio Verão 60 Dias, entrada no grupo VIP exclusivo, e a chance 
                de concorrer a prêmios incríveis. Você tem acesso completo de segunda a sexta, 
                das 6h às 22h.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                Como funciona o Desafio Verão 60 Dias?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                O desafio acontece de 1º de novembro a 31 de dezembro. Você entra no grupo VIP, 
                registra seus treinos e evolução, e concorre ao ranking. Os 3 primeiros colocados 
                ganham meses grátis de academia: 1º lugar ganha 3 meses, 2º lugar ganha 2 meses, 
                e 3º lugar ganha 1 mês grátis!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                Posso cancelar o plano antes do período anual?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim, você pode cancelar quando quiser, sem multas. No entanto, o plano anual 
                oferece uma economia significativa, então recomendamos aproveitar o período 
                completo para alcançar seus objetivos de saúde e fitness.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                A Full Force oferece acompanhamento profissional?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Temos profissionais qualificados disponíveis para orientação e criação de 
                treinos personalizados. Você também pode contratar acompanhamento de personal 
                trainer por um valor adicional, se desejar um acompanhamento mais intensivo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                Onde fica a academia em Matupá?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Estamos localizados em Matupá - MT, uma cidade com 22 mil habitantes. Entre em 
                contato pelo WhatsApp (66) 9999-9999 para obter o endereço completo ou agendar 
                uma visita para conhecer nossas instalações.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                Quantas vagas estão disponíveis nesta promoção?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                São apenas 40 vagas limitadas para esta promoção especial de fim de ano. 
                É por ordem de chegada, então não perca tempo e garanta já a sua vaga!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-card border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                Preciso pagar taxa de adesão?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Não! Nesta promoção especial, não há taxa de adesão. Você paga apenas R$ 1,00 
                no primeiro mês e começa a treinar imediatamente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
