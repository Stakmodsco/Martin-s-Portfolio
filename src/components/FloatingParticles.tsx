export const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            background: i % 2 === 0 
              ? "hsl(var(--primary) / 0.3)" 
              : "hsl(var(--secondary) / 0.3)",
            boxShadow: i % 2 === 0
              ? "0 0 20px hsl(var(--primary) / 0.5)"
              : "0 0 20px hsl(var(--secondary) / 0.5)",
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        />
      ))}
    </div>
  );
};
