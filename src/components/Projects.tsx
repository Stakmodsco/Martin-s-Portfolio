import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTiltEffect } from "@/hooks/useTiltEffect";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const tiltRef = useTiltEffect<HTMLDivElement>();

  return (
    <div
      ref={tiltRef}
      className="glass-card rounded-2xl overflow-hidden group hover:shadow-[0_0_40px_rgba(0,188,212,0.3)] transition-all duration-300 animate-flow-in"
      style={{ animationDelay: `${index * 0.1}s`, transformStyle: "preserve-3d", willChange: "transform" }}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="h-full w-full flex items-center justify-center px-8 text-center">
            <span className="text-2xl font-bold text-shimmer">{project.visualLabel}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
        <div className="absolute top-4 left-4 rounded-full border border-white/15 bg-background/70 backdrop-blur-xl px-3 py-1 text-xs font-medium">
          {project.stage}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">{tag}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="h-4 w-4" /> Live project
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-4 w-4" /> Repository
            </a>
          )}
        </div>
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
      description: "Production-hardened iOS and Android document-expiry app with cloud sync, renewal reminders, optional AI extraction and assistant features, secure local locking, family profiles, RevenueCat subscriptions, EAS release workflows, backend validation, and dependency-security checks.",
      image: "",
      visualLabel: "Secure documents · AI assistance · Mobile release engineering",
      tags: ["React Native", "Expo", "TypeScript", "FastAPI", "Supabase", "MongoDB", "RevenueCat", "EAS"],
      demo: "",
      repo: "",
    },
    {
      title: "PayDouFlow",
      category: "fintech",
      stage: "Payment Infrastructure",
      description: "M-Pesa/Daraja payment core engineered around encrypted credentials, tenant isolation, idempotent STK callbacks, immutable ledgers, atomic payment finalization, signed webhooks, replay protection, diagnostics, and repair tooling for stuck transactions.",
      image: "",
      visualLabel: "Payments that reconcile safely",
      tags: ["M-Pesa", "Daraja", "Supabase", "RLS", "AES-256-GCM", "Webhooks", "Ledger", "TypeScript"],
      demo: "",
      repo: "",
    },
    {
      title: "Vibe Guard",
      category: "security",
      stage: "Developer Security SaaS",
      description: "A security and production-readiness product for AI-built and vibe-coded applications. It guides builders through cleanup, professionalization, secure implementation patterns, verification tests, launch checklists, role-based premium access, and stack-specific security modules.",
      image: "",
      visualLabel: "Build fast. Clean it up. Lock it down.",
      tags: ["React", "TypeScript", "Supabase", "RLS", "Edge Functions", "Zod", "Security", "SaaS"],
      demo: "",
      repo: "",
    },
    {
      title: "Ishi Property Hub",
      category: "platform",
      stage: "Property Platform + Mobile App",
      description: "Verification-led Kenyan property platform for vetted short stays, genuine rentals, and early vacancy alerts. The product uses controlled publishing, owner-only approvals, responsive editorial UX, partner submission workflows, and Capacitor-based mobile delivery.",
      image: "",
      visualLabel: "Find your place. Live sure.",
      tags: ["React", "TypeScript", "Supabase", "Capacitor", "Property Tech", "Mobile-first UX", "Verification"],
      demo: "",
      repo: "",
    },
    {
      title: "TaskBridge",
      category: "platform",
      stage: "Work Platform",
      description: "A Kenyan digital-work platform connecting freelancers with paid AI training, annotation, transcription, moderation, writing, research, and evaluation tasks, with account security, eligibility flows, managed-team hiring, and M-Pesa-oriented payout UX.",
      image: "",
      visualLabel: "Digital work for Kenyan talent",
      tags: ["React", "TypeScript", "TanStack Router", "Supabase", "Auth", "M-Pesa UX", "SEO"],
      demo: "",
      repo: "https://github.com/Stakmodsco/taskbridge-connect",
    },
    {
      title: "Balipa",
      category: "fintech",
      stage: "Billing Infrastructure",
      description: "Kenyan billing and reconciliation infrastructure beginning with school fees: students and guardians, fee structures, append-oriented ledgers, payment allocation, automatic paid/outstanding/credit balances, receipts, statements, reporting, and notification-ready workflows. The core engine is designed to extend to rentals.",
      image: "",
      visualLabel: "Paid. Balanced.",
      tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Billing", "Reconciliation", "M-Pesa"],
      demo: "",
      repo: "",
    },
    {
      title: "LexMind AI Contracts",
      category: "ai",
      stage: "Legal AI Product",
      description: "AI-assisted contract product with contract generation and refinement workflows, document management, billing, authentication, account settings, and a full SaaS dashboard experience designed around professional legal-document creation.",
      image: "",
      visualLabel: "AI-assisted contract workflows",
      tags: ["React", "TypeScript", "AI", "SaaS", "Document Workflows", "Billing", "Framer Motion"],
      demo: "",
      repo: "",
    },
    {
      title: "SOC Genesis AI",
      category: "security",
      stage: "Security Operations Product",
      description: "Security-operations interface for alert ingestion, incident triage, incident detail analysis, confidence scoring, security metrics, and operational settings — exploring how AI-assisted workflows can reduce noise and accelerate SOC response.",
      image: "",
      visualLabel: "AI-assisted security operations",
      tags: ["React", "TypeScript", "Cybersecurity", "Incident Triage", "SOC", "Analytics"],
      demo: "",
      repo: "",
    },
    {
      title: "Medical Billing AI",
      category: "ai",
      stage: "Healthcare Revenue Product",
      description: "Healthcare revenue and billing product with authentication, dashboard experiences, revenue and expense views, ROI tooling, security and pricing surfaces, and a polished enterprise-facing React interface.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1758122328/revenue-glide-ai_ljl1bd.png",
      tags: ["React", "TypeScript", "Supabase", "Healthcare", "Revenue Analytics", "Dashboard UX"],
      demo: "https://medical-billing-ai-theta.vercel.app/",
      repo: "",
    },
    {
      title: "Theos Educational Platform",
      category: "platform",
      stage: "EdTech Platform",
      description: "Cross-platform theological learning experience with structured educational content and a dashboard-led interface, representing my work across learning-product UX and multi-platform application delivery.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1758119072/Student_Dashboard_-_theos_Educational_Platform_1_msrqdd.png",
      tags: ["Flutter", "React", "Python", "FastAPI", "EdTech", "Cross-platform"],
      demo: "https://stakmodsco.github.io/theos_educational_platform/",
      repo: "https://github.com/Stakmodsco/theos_educational_platform",
    },
    {
      title: "AI Personal COO",
      category: "ai",
      stage: "AI Operations Product",
      description: "Executive operations assistant concept focused on workflow automation, operational visibility, decision support, and AI-assisted business execution through a polished web product experience.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1761232577/AI_Personal_COO_-_Your_Intelligent_Executive_Assistant_qlaq2e.png",
      tags: ["React", "TypeScript", "AI Automation", "Operations", "Product UX"],
      demo: "https://ai-personal-coo.vercel.app/",
      repo: "https://github.com/Stakmodsco/AI-Personal-COO",
    },
    {
      title: "Fino Fiore",
      category: "commerce",
      stage: "Luxury Commerce Direction",
      description: "Luxury fragrance commerce work combining catalog architecture, Kenya-specific pricing logic, premium product presentation, high-quality imagery, and a new cinematic design direction built around animated perfume-note storytelling.",
      image: "",
      visualLabel: "Fragrance commerce as a visual experience",
      tags: ["React", "TypeScript", "Commerce", "UI/UX", "Motion", "Product Storytelling"],
      demo: "",
      repo: "",
    },
  ];

  const filters = [
    { id: "all", label: "Flagship Work" },
    { id: "mobile", label: "Mobile" },
    { id: "ai", label: "AI" },
    { id: "fintech", label: "Fintech" },
    { id: "security", label: "Security" },
    { id: "platform", label: "Platforms" },
    { id: "commerce", label: "Commerce & UX" },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-flow-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Flagship <span className="text-shimmer">Engineering Work</span></h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Selected from a much larger GitHub body of work. I prioritize the projects that best demonstrate production engineering, product thinking, security, AI, mobile delivery, fintech, and interface quality rather than treating every experiment or remix as a separate case study.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <Button key={filter.id} variant={activeFilter === filter.id ? "default" : "outline"} size="sm" onClick={() => setActiveFilter(filter.id)}>
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>

          <div className="mt-12 glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <h3 className="text-xl font-bold mb-2">More work lives on GitHub</h3>
              <p className="text-sm text-muted-foreground max-w-3xl">
                The wider repository collection includes additional cybersecurity products, commerce builds, SaaS experiments, finance products, mobility concepts, landing experiences, and earlier UI explorations. I keep this page curated so the strongest engineering work stays easy to evaluate.
              </p>
            </div>
            <a href="https://github.com/Stakmodsco?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="whitespace-nowrap"><Github className="h-4 w-4 mr-2" /> Explore GitHub</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
