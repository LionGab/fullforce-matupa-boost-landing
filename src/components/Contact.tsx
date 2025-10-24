import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Phone, Instagram } from "lucide-react";

export const Contact = () => {
  const whatsappNumber = "5566999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Olá! Quero garantir minha vaga no Plano Anual por R$ 1 no primeiro mês! 🔥"
  );

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Garanta Sua <span className="text-primary">Vaga Agora!</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Entre em contato e comece sua transformação
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-2 border-primary">
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full px-6 py-3">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span className="text-sm font-semibold text-[#25D366] uppercase tracking-wider">
                    Atendimento Rápido
                  </span>
                </div>
                
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full md:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
                >
                  <MessageCircle className="mr-2" />
                  FALAR NO WHATSAPP
                </Button>

                <p className="text-sm text-muted-foreground">
                  Resposta em até 5 minutos • Vagas limitadas
                </p>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-card text-muted-foreground">Ou visite nossa academia</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <ContactItem
                  icon={MapPin}
                  title="Endereço"
                  info="Matupá - MT"
                  subInfo="22 mil habitantes"
                />
                <ContactItem
                  icon={Phone}
                  title="Telefone"
                  info="(66) 9999-9999"
                  subInfo="Segunda a Sexta, 6h às 22h"
                />
              </div>

              {/* Social */}
              <div className="text-center pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Siga-nos no Instagram</p>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://instagram.com/fullforceacademia", "_blank")}
                >
                  <Instagram className="mr-2" />
                  @fullforceacademia
                </Button>
              </div>
            </div>
          </Card>

          {/* Trust Badges */}
          <div className="mt-12 text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Sem taxa de adesão</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Ambiente seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ElementType;
  title: string;
  info: string;
  subInfo: string;
}

const ContactItem = ({ icon: Icon, title, info, subInfo }: ContactItemProps) => (
  <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
    <div>
      <div className="font-semibold text-foreground mb-1">{title}</div>
      <div className="text-foreground">{info}</div>
      <div className="text-sm text-muted-foreground">{subInfo}</div>
    </div>
  </div>
);
