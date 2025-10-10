import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import robotImg from "@/assets/robot.png";

export const Hero = () => {
  const robotCanvasRef = useRef<HTMLCanvasElement>(null);

  // Centered Robot Animation
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
    let winkBoost = 0;

    const handleClick = () => {
      winkBoost = 1;
    };

    window.addEventListener("click", handleClick);

    const drawRobot = (cx: number, cy: number, scale: number, blink: number, armAngle: number) => {
      const imgW = robot.width * scale;
      const imgH = robot.height * scale;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.drawImage(robot, -imgW/2, -imgH/2, imgW, imgH);

      // Left eye - orange glow
      ctx.fillStyle = "rgba(255, 87, 34, 0.9)";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(255, 87, 34, 0.8)";
      ctx.beginPath();
      ctx.arc(-imgW*0.12, -imgH*0.18, imgW*0.04, 0, Math.PI*2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Right eye (wink) - cyan glow
      const rx = imgW*0.12, ry = -imgH*0.18;
      ctx.beginPath();
      if (blink < 0.5) {
        ctx.strokeStyle = "rgba(0, 188, 212, 0.9)";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(0, 188, 212, 0.8)";
        ctx.lineWidth = 3;
        ctx.moveTo(rx - imgW*0.04, ry);
        ctx.quadraticCurveTo(rx, ry+imgH*0.02, rx+imgW*0.04, ry);
        ctx.stroke();
      } else {
        ctx.fillStyle = "rgba(0, 188, 212, 0.9)";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(0, 188, 212, 0.8)";
        ctx.arc(rx, ry, imgW*0.04*blink, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // Mouth - gradient orange to cyan
      ctx.beginPath();
      const gradient = ctx.createLinearGradient(-imgW*0.08, -imgH*0.08, imgW*0.08, -imgH*0.08);
      gradient.addColorStop(0, "rgba(255, 87, 34, 0.8)");
      gradient.addColorStop(1, "rgba(0, 188, 212, 0.8)");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(-imgW*0.08, -imgH*0.08);
      ctx.quadraticCurveTo(0, -imgH*0.05, imgW*0.08, -imgH*0.08);
      ctx.stroke();

      // Arm peace sign - cyan with glow
      ctx.save();
      ctx.translate(imgW*0.25, imgH*0.05);
      ctx.rotate(armAngle);
      ctx.strokeStyle = "rgba(0, 188, 212, 0.9)";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(0, 188, 212, 0.6)";
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
      ctx.shadowBlur = 0;
      ctx.restore();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, robotCanvas.width, robotCanvas.height);
      t += 0.03;

      // Center position with slight floating motion
      const cx = robotCanvas.width / 2;
      const cy = robotCanvas.height / 2 + Math.sin(t * 0.5) * 20;

      let blink = 0.5 + 0.5 * Math.sin(t*2);
      if (winkBoost > 0) {
        blink = 0.2;
        winkBoost -= 0.05;
      }

      const armAngle = -0.6 + 0.2 * Math.sin(t*1.5);

      drawRobot(cx, cy, 0.8, blink, armAngle);
      requestAnimationFrame(animate);
    };

    robot.onload = () => animate();

    return () => {
      window.removeEventListener("resize", resize);
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
        ref={robotCanvasRef}
        className="absolute inset-0 opacity-25"
        style={{ pointerEvents: 'none' }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />


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
