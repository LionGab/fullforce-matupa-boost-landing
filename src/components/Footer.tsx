import { Logo } from "@/components/Logo";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="footer" />
            <p className="text-sm text-muted-foreground max-w-md">
              A Full Force Academia é a melhor escolha em Matupá - MT para você que busca 
              resultados reais, ambiente motivador e estrutura completa.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Matupá - MT</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">(66) 9999-9999</span>
              </div>
              <div className="flex items-start gap-2">
                <Instagram className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="https://instagram.com/fullforceacademia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @fullforceacademia
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Horário</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <div>Segunda a Sexta</div>
                  <div className="text-primary font-semibold">6h às 22h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Full Force Academia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Promoção válida apenas para novos alunos. Limitado a 40 vagas.
          </p>
        </div>
      </div>
    </footer>
  );
};
