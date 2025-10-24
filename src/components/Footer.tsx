export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-2xl font-black">
            FULL <span className="text-primary">FORCE</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Academia em Matupá - MT
          </p>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Full Force Academia. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
