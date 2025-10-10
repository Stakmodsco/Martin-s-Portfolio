import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import laptop3D from "@/assets/3d-laptop.png";
import aiBrain3D from "@/assets/3d-ai-brain.png";
import server3D from "@/assets/3d-server.png";
import codeEditor3D from "@/assets/3d-code-editor.png";
import database3D from "@/assets/3d-database.png";
import cloud3D from "@/assets/3d-cloud.png";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 2
        );
        gradient.addColorStop(0, "rgba(255, 87, 34, 0.8)");
        gradient.addColorStop(0.5, "rgba(0, 188, 212, 0.6)");
        gradient.addColorStop(1, "rgba(255, 87, 34, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(255, 87, 34, ${0.3 * (1 - distance / 150)})`);
            gradient.addColorStop(1, `rgba(0, 188, 212, ${0.2 * (1 - distance / 150)})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Floating 3D Tech Images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img src={laptop3D} alt="3D Laptop" className="absolute top-20 left-[10%] w-32 h-32 object-contain opacity-80 animate-float" style={{ animationDelay: "0s" }} />
        <img src={aiBrain3D} alt="AI Brain" className="absolute top-40 right-[15%] w-40 h-40 object-contain opacity-70 animate-float" style={{ animationDelay: "1s" }} />
        <img src={database3D} alt="3D Database" className="absolute bottom-40 left-[20%] w-36 h-36 object-contain opacity-75 animate-float" style={{ animationDelay: "2s" }} />
        <img src={cloud3D} alt="3D Cloud" className="absolute top-60 left-[70%] w-44 h-44 object-contain opacity-65 animate-float" style={{ animationDelay: "3s" }} />
        <img src={server3D} alt="3D Server" className="absolute bottom-60 right-[25%] w-32 h-32 object-contain opacity-80 animate-float" style={{ animationDelay: "1.5s" }} />
        <img src={codeEditor3D} alt="3D Code Editor" className="absolute top-[30%] left-[15%] w-28 h-28 object-contain opacity-70 animate-float" style={{ animationDelay: "2.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Full-Stack Engineer & AI Specialist
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building{" "}
            <span className="text-gradient animate-glow">
              Scalable Systems
            </span>
            <br />& Intelligent AI Solutions
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transforming ideas into production-ready platforms with cutting-edge
            technology. Specialized in Python, React, FastAPI, Kubernetes, and
            LangChain.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};
