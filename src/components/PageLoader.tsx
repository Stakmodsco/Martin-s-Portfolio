import { useEffect, useState } from "react";

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient animate-pulse">
            Stakmods
          </h1>
          <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-2xl animate-pulse" />
        </div>
        
        <div className="w-64 h-2 bg-border/30 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-primary transition-all duration-200 shadow-[0_0_15px_hsl(var(--primary)/0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-sm text-muted-foreground animate-pulse">
          Loading excellence...
        </p>
      </div>
    </div>
  );
};
