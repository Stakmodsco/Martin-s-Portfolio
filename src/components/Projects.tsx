import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTiltEffect } from "@/hooks/useTiltEffect";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const tiltRef = useTiltEffect<HTMLDivElement>();

  return (
    <div
      ref={tiltRef}
      className="glass-card rounded-2xl overflow-hidden group hover:shadow-[0_0_40px_rgba(0,188,212,0.3)] transition-all duration-300 animate-flow-in"
      style={{
        animationDelay: `${index * 0.12}s`,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center px-8 text-center">
            <span className="text-2xl font-bold text-shimmer">{project.visualLabel}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
        <div className="absolute top-4 left-4 rounded-full border border-white/15 bg-background/65 backdrop-blur-xl px-3 py-1 text-xs font-medium">
          {project.stage}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">
              {tag}
            </span>
          ))}
        </div>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "NotMe",
      category: "mobile",
      stage: "Flagship Mobile Product",
      description:
        "Cross-platform secure document app with AI-assisted extraction, reminders, authentication hardening, subscriptions, biometrics/MFA, cloud migration, background processing, and production release workflows.",
      image: "",
      visualLabel: "Secure documents. Intelligent reminders. Production-ready mobile.",
      tags: ["React Native", "Expo", "TypeScript", "Python", "FastAPI", "Supabase", "RevenueCat", "AWS"],
      demo: "",
    },
    {
      title: "Ishi Property Hub",
      category: "platform",
      stage: "Property Platform",
      description:
        "Mobile-first Kenyan property platform spanning BnB stays, long-term rentals, verified listings, house-hunter discovery, authentication, notifications, conversion-focused flows, and app foundations for Android and iOS.",
      image: "",
      visualLabel: "Verified living across Kenya",
      tags: ["React", "TypeScript", "Mobile-first UX", "Auth", "Notifications", "Property Tech"],
      demo: "",
    },
    {
      title: "Balipa",
      category: "saas",
      stage: "Billing System",
      description:
        "Kenyan billing product designed for schools and rentals, with payment tracking, paid-versus-balance logic, overpayment handling, account records, and automated SMS updates for users.",
      image: "",
      visualLabel: "Paid. Balance. Clear communication.",
      tags: ["SaaS", "Billing", "Payments", "SMS", "Kenya", "Product Design"],
      demo: "",
    },
    {
      title: "Vibe Guard",
      category: "ai",
      stage: "AI Developer Product",
      description:
        "AI-assisted development platform work covering request/debugging services, entitlements and usage limits, notification queues, pricing fallbacks, reusable UI/UX systems, and animated product experiences.",
      image: "",
      visualLabel: "AI development with guardrails",
      tags: ["AI", "TypeScript", "Product Systems", "Queues", "Entitlements", "UI/UX"],
      demo: "",
    },
    {
      title: "Fino Fiore",
      category: "commerce",
      stage: "Premium Commerce Concept",
      description:
        "Luxury fragrance storefront direction with editorial mobile-first UI, cinematic product storytelling, exploded scent-note interactions, premium imagery, structured product discovery, and performance-aware responsive media.",
      image: "",
      visualLabel: "Luxury fragrance, designed as an experience",
      tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX", "E-Commerce", "Motion Design"],
      demo: "",
    },
    {
      title: "Medical Billing AI",
      category: "saas",
      stage: "Cloud-Native Platform",
      description:
        "Modular medical-billing platform demonstrating event-driven services, GitOps delivery, autoscaling, service-to-service communication, and production-minded platform architecture.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1758122328/revenue-glide-ai_ljl1bd.png",
      tags: ["Kubernetes", "Helm", "ArgoCD", "gRPC", "Kafka"],
      demo: "https://medical-billing-ai-theta.vercel.app/",
    },
    {
      title: "Theos Educational Platform",
      category: "platform",
      stage: "EdTech Platform",
      description:
        "Cross-platform theological learning product with structured courses, assessments, offline-oriented experiences, live learning features, and AI-assisted educational workflows.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1758119072/Student_Dashboard_-_theos_Educational_Platform_1_msrqdd.png",
      tags: ["Flutter", "React", "Python", "FastAPI", "AI", "EdTech"],
      demo: "https://stakmodsco.github.io/theos_educational_platform/",
    },
    {
      title: "AI Personal COO",
      category: "ai",
      stage: "AI Operations Product",
      description:
        "Executive operations assistant focused on workflow automation, business decision support, real-time operational insight, and AI-assisted strategy execution.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1761232577/AI_Personal_COO_-_Your_Intelligent_Executive_Assistant_qlaq2e.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "AI Automation", "LangChain"],
      demo: "https://ai-personal-coo.vercel.app/",
    },
  ];

  const filters = [
    { id: "all", label: "Selected Work" },
    { id: "mobile", label: "Mobile" },
    { id: "platform", label: "Platforms" },
    { id: "saas", label: "SaaS" },
    { id: "ai", label: "AI" },
    { id: "commerce", label: "Commerce & UX" },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-flow-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Selected <span className="text-shimmer">Product Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              A portfolio of mobile products, AI systems, SaaS platforms, cloud architecture, and premium UI/UX work — showing both what I build and how I think about production software.
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
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
