export const Logo = ({ className = "", variant = "default" }: { className?: string; variant?: "default" | "footer" }) => {
  const textSize = variant === "footer" ? "text-xl md:text-2xl" : "text-2xl md:text-3xl";
  
  return (
    <div className={`font-black ${textSize} ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-foreground">FULL</span>
        <span className="text-primary">FORCE</span>
      </div>
      <div className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-wider -mt-1">
        Academia
      </div>
    </div>
  );
};
