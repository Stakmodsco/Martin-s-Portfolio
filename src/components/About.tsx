import { Code2, Brain, Cloud, Smartphone } from "lucide-react";
import { useTiltEffect } from "@/hooks/useTiltEffect";

const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
  const tiltRef = useTiltEffect<HTMLDivElement>();

  return (
    <div
      ref={tiltRef}
      className="glass-card rounded-xl p-6 hover:shadow-[0_0_30px_rgba(0,188,212,0.2)] transition-all duration-300 animate-flow-in"
      style={{
        animationDelay: `${(index + 2) * 0.15}s`,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <skill.icon className={`h-12 w-12 mb-4 ${skill.color}`} />
      <h4 className="font-bold mb-2">{skill.title}</h4>
      <p className="text-sm text-muted-foreground">{skill.description}</p>
    </div>
  );
};

export const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Full-Stack Product Engineering",
      description: "React, TypeScript, Python, FastAPI, Node.js, APIs, auth, payments, and production-ready product flows.",
      color: "text-primary",
    },
    {
      icon: Brain,
      title: "AI & Intelligent Workflows",
      description: "LLM integrations, AI assistants, extraction pipelines, automation, prompt systems, and AI-assisted engineering workflows.",
      color: "text-secondary",
    },
    {
      icon: Smartphone,
      title: "Mobile & Product UX",
      description: "React Native, Expo, Flutter, responsive interfaces, onboarding, secure flows, and polished mobile-first experiences.",
      color: "text-accent",
    },
    {
      icon: Cloud,
      title: "Cloud & Release Engineering",
      description: "AWS, Docker, Kubernetes, CI/CD, background workers, queues, monitoring, deployments, and production hardening.",
      color: "text-primary",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-flow-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Engineering <span className="text-shimmer">complete products</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I work across product design, frontend, backend, mobile, AI, cloud infrastructure, testing, and release hardening — with a focus on turning ambitious ideas into usable software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card rounded-2xl p-8 animate-flow-in">
              <h3 className="text-2xl font-bold mb-4">How I Work</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am comfortable inheriting an existing codebase, including AI-assisted or vibe-coded foundations, then reviewing the architecture, debugging the weak points, improving security and performance, and turning the build into something production-ready.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That means I can move quickly during prototyping without treating speed as a substitute for engineering judgment, testing, observability, or maintainability.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 animate-flow-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-4">What I Deliver</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My recent work spans secure document apps, property platforms, billing systems, AI developer tooling, and premium commerce experiences across web and mobile.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I care about the full product lifecycle: UX, business logic, integrations, deployment, reliability, release workflows, and the details that determine whether software actually works for users.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.title} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
