import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import robotImg from "@/assets/robot.png";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const robotCanvasRef = useRef<HTMLCanvasElement>(null);

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

  // Interactive Robot Animation
  useEffect(() => {
    const robotCanvas = robotCanvasRef.current;
    if (!robotCanvas) return;

    const ctx = robotCanvas.getContext("2d");
    if (!ctx) return;

    const robot = new Image();
    robot.src = robotImg;

    const resize = () => {
      robotCanvas.width = window.innerWidth;
      robotCanvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 + 50 };
    let targetPos = { ...pos };
    let winkBoost = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;
    };

    const handleClick = () => {
      winkBoost = 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    const drawRobot = (cx: number, cy: number, scale: number, blink: number, armAngle: number) => {
      const imgW = robot.width * scale;
      const imgH = robot.height * scale;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.drawImage(robot, -imgW/2, -imgH/2, imgW, imgH);

      // Left eye
      ctx.fillStyle = "cyan";
      ctx.beginPath();
      ctx.arc(-imgW*0.12, -imgH*0.18, imgW*0.04, 0, Math.PI*2);
      ctx.fill();

      // Right eye (wink)
      const rx = imgW*0.12, ry = -imgH*0.18;
      ctx.beginPath();
      if (blink < 0.5) {
        ctx.strokeStyle = "cyan";
        ctx.lineWidth = 3;
        ctx.moveTo(rx - imgW*0.04, ry);
        ctx.quadraticCurveTo(rx, ry+imgH*0.02, rx+imgW*0.04, ry);
        ctx.stroke();
      } else {
        ctx.fillStyle = "cyan";
        ctx.arc(rx, ry, imgW*0.04*blink, 0, Math.PI*2);
        ctx.fill();
      }

      // Mouth
      ctx.beginPath();
      ctx.strokeStyle = "cyan";
      ctx.lineWidth = 2;
      ctx.moveTo(-imgW*0.08, -imgH*0.08);
      ctx.quadraticCurveTo(0, -imgH*0.05, imgW*0.08, -imgH*0.08);
      ctx.stroke();

      // Arm peace sign
      ctx.save();
      ctx.translate(imgW*0.25, imgH*0.05);
      ctx.rotate(armAngle);
      ctx.strokeStyle = "cyan";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0, imgH*0.12);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, imgH*0.12);
      ctx.lineTo(0, imgH*0.20);
      ctx.moveTo(0, imgH*0.12);
      ctx.lineTo(-imgW*0.03, imgH*0.18);
      ctx.stroke();
      ctx.restore();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, robotCanvas.width, robotCanvas.height);
      t += 0.03;

      pos.x += (targetPos.x - pos.x) * 0.05;
      pos.y += (targetPos.y - pos.y) * 0.05;

      let blink = 0.5 + 0.5 * Math.sin(t*2);
      if (winkBoost > 0) {
        blink = 0.2;
        winkBoost -= 0.05;
      }

      const armAngle = -0.6 + 0.2 * Math.sin(t*1.5);

      drawRobot(pos.x, pos.y, 0.4, blink, armAngle);
      requestAnimationFrame(animate);
    };

    robot.onload = () => animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
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

      <canvas
        ref={robotCanvasRef}
        className="absolute inset-0 opacity-60"
        style={{ pointerEvents: 'none' }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />


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
