import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "AI-Powered SaaS Platform",
      category: "saas",
      description:
        "Multi-tenant SaaS platform with AI-driven analytics and automation. Built with React, FastAPI, and PostgreSQL.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["React", "FastAPI", "AI", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-Commerce Marketplace",
      category: "ecommerce",
      description:
        "Full-featured marketplace with payment integration, inventory management, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["Next.js", "Stripe", "MongoDB", "Redis"],
      github: "#",
      demo: "#",
    },
    {
      title: "Intelligent Chatbot System",
      category: "ai",
      description:
        "Enterprise chatbot using LangChain and GPT-4 with custom knowledge base integration and conversation memory.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["LangChain", "OpenAI", "Python", "Docker"],
      github: "#",
      demo: "#",
    },
    {
      title: "Cloud Infrastructure Automation",
      category: "devops",
      description:
        "Kubernetes-based infrastructure with automated scaling, monitoring, and deployment pipelines.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
      tags: ["Kubernetes", "Terraform", "AWS", "GitLab CI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Real-Time Collaboration Tool",
      category: "saas",
      description:
        "WebSocket-based collaboration platform with document editing, video calls, and team management.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      tags: ["React", "WebSocket", "Node.js", "WebRTC"],
      github: "#",
      demo: "#",
    },
    {
      title: "Modern Admin Dashboard",
      category: "template",
      description:
        "Beautiful, responsive admin template with charts, data tables, and comprehensive UI components.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["React", "TailwindCSS", "Recharts", "TypeScript"],
      github: "#",
      demo: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "saas", label: "SaaS Platforms" },
    { id: "ai", label: "AI Solutions" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "devops", label: "DevOps" },
    { id: "template", label: "Templates" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A selection of projects showcasing my expertise in full-stack
              development, AI, and cloud technologies.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card rounded-2xl overflow-hidden group hover:scale-105 hover:shadow-[0_0_40px_rgba(0,188,212,0.3)] transition-all duration-300 animate-scale-in animate-tilt"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
