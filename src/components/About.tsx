import { Code2, Brain, Cloud, Palette } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Expert in Python, React, TypeScript, FastAPI, and Node.js",
      color: "text-primary",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "LangChain, OpenAI, AI agents, and intelligent automation",
      color: "text-secondary",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Kubernetes, Docker, AWS, CI/CD, and scalable infrastructure",
      color: "text-accent",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Modern interfaces with TailwindCSS and responsive design",
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions that bridge the gap
              between complex technology and user needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card rounded-2xl p-8 animate-flow-in">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With years of experience in full-stack development and a deep
                passion for artificial intelligence, I've built scalable
                platforms that serve thousands of users and automated complex
                workflows using cutting-edge AI technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines technical excellence with business acumen,
                ensuring that every solution is not only robust but also
                delivers tangible value.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 animate-flow-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I specialize in architecting and developing full-stack
                applications, implementing AI-powered solutions, and optimizing
                cloud infrastructure for maximum performance and scalability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From prototyping to production deployment, I handle every aspect
                of the development lifecycle with meticulous attention to
                detail.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300 animate-flow-in"
                style={{ animationDelay: `${(index + 2) * 0.15}s` }}
              >
                <skill.icon className={`h-12 w-12 mb-4 ${skill.color}`} />
                <h4 className="font-bold mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
