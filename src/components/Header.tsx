import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="footer" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("planos")}
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("desafio")}
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              Desafio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              Contato
            </button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contato")}
            >
              GARANTIR VAGA
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("planos")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-semibold"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("desafio")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-semibold"
            >
              Desafio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-semibold"
            >
              Contato
            </button>
            <Button
              variant="hero"
              size="sm"
              className="w-full"
              onClick={() => scrollToSection("contato")}
            >
              GARANTIR VAGA
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
