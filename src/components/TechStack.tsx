import { 
  Code2, 
  Braces, 
  Palette, 
  Server, 
  Cloud, 
  Database, 
  Boxes, 
  Cpu, 
  GitBranch,
  Sparkles,
  Terminal,
  FileCode
} from "lucide-react";

export const TechStack = () => {
  const techStack = [
    { name: "Python", icon: FileCode, color: "text-[#3776AB]" },
    { name: "TypeScript", icon: Code2, color: "text-[#3178C6]" },
    { name: "JavaScript", icon: Braces, color: "text-[#F7DF1E]" },
    { name: "React", icon: Cpu, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: Terminal, color: "text-foreground" },
    { name: "TailwindCSS", icon: Palette, color: "text-[#06B6D4]" },
    { name: "FastAPI", icon: Server, color: "text-[#009688]" },
    { name: "Node.js", icon: Server, color: "text-[#339933]" },
    { name: "LangChain", icon: Sparkles, color: "text-primary" },
    { name: "OpenAI", icon: Sparkles, color: "text-secondary" },
    { name: "AWS", icon: Cloud, color: "text-[#FF9900]" },
    { name: "Kubernetes", icon: Boxes, color: "text-[#326CE5]" },
    { name: "Docker", icon: Boxes, color: "text-[#2496ED]" },
    { name: "PostgreSQL", icon: Database, color: "text-[#336791]" },
    { name: "MongoDB", icon: Database, color: "text-[#47A248]" },
    { name: "Git", icon: GitBranch, color: "text-[#F05032]" },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-flow-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tech <span className="text-shimmer">Stack</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build exceptional solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,87,34,0.3)] transition-all duration-300 animate-flow-in cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <tech.icon className={`h-10 w-10 ${tech.color} group-hover:scale-125 transition-transform duration-300`} />
                <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};