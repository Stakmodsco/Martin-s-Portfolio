import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, ShieldCheck, Smartphone, CreditCard, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTiltEffect } from "@/hooks/useTiltEffect";

const vibeGuardVisual = "https://raw.githubusercontent.com/Stakmodsco/vibe-guard/main/src/assets/security-robot.png";
const cozyVisual = "https://raw.githubusercontent.com/Stakmodsco/cozy3fts-luxury-shop/main/src/assets/hero-main.jpg";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const tiltRef = useTiltEffect<HTMLDivElement>();
  const Icon = project.icon || Sparkles;

  return (
    <article
      ref={tiltRef}
      className={`glass-card rounded-[1.6rem] overflow-hidden group border border-white/10 hover:border-primary/30 hover:shadow-[0_0_45px_rgba(0,188,212,0.18)] transition-all duration-500 animate-flow-in ${project.featured ? "md:col-span-2" : ""}`}
      style={{ animationDelay: `${index * 0.08}s`, transformStyle: "preserve-3d", willChange: "transform" }}
    >
      <div className={`relative overflow-hidden ${project.featured ? "h-72 md:h-[24rem]" : "h-56"}`}>
        {project.image ? (
          <img src={project.image} alt={`${project.title} project interface`} className="w-full h-full object-cover group-hover:scale-[1.035] transition-transform duration-700" loading="lazy" />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${project.gradient || "from-primary/25 via-background to-secondary/20"} flex items-center justify-center relative`}>
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.18),transparent_28%),radial-gradient(circle_at_70%_65%,rgba(0,188,212,.2),transparent_30%)]" />
            <div className="relative w-[82%] max-w-xl rounded-2xl border border-white/15 bg-black/25 backdrop-blur-xl p-5 shadow-2xl group-hover:-translate-y-1 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3"><div className="p-2.5 rounded-xl bg-white/10"><Icon className="h-6 w-6 text-primary" /></div><div><p className="text-xs text-white/50">{project.stage}</p><p className="font-semibold text-white">{project.title}</p></div></div>
                <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {["Product", "System", "UX"].map((item, i) => <div key={item} className="rounded-xl border border-white/10 bg-white/[.06] p-3"><div className={`h-1.5 rounded-full mb-3 ${i === 1 ? "w-2/3" : "w-full"} bg-white/25`} /><p className="text-[10px] uppercase tracking-[.18em] text-white/45">{item}</p></div>)}
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden"><div className="h-full w-3/4 bg-gradient-to-r from-primary to-secondary rounded-full" /></div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-transparent" />
        <div className="absolute top-4 left-4 rounded-full border border-white/15 bg-background/75 backdrop-blur-xl px-3 py-1.5 text-[11px] uppercase tracking-[.14em] font-semibold">{project.stage}</div>
        {project.featured && <div className="absolute top-4 right-4 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-[11px] uppercase tracking-[.14em] font-bold">Featured</div>}
      </div>

      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4 mb-3"><h3 className="text-xl md:text-2xl font-bold">{project.title}</h3><ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" /></div>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">{project.tags.map((tag: string) => <span key={tag} className="px-2.5 py-1 text-[11px] rounded-full bg-primary/10 text-primary border border-primary/15">{tag}</span>)}</div>
        <div className="flex flex-wrap gap-4 border-t border-white/10 pt-4">
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"><ExternalLink className="h-4 w-4" /> Live experience</a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"><Github className="h-4 w-4" /> Repository</a>}
        </div>
      </div>
    </article>
  );
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const projects = [
    { title:"NotMe", category:"mobile", stage:"Mobile · Cloud", featured:true, icon:Smartphone, gradient:"from-emerald-500/25 via-slate-950 to-cyan-500/20", description:"Production-hardened iOS and Android document-expiry product with reminders, AI-assisted document workflows, secure authentication, subscriptions, cloud migration, background processing, and release engineering.", tags:["React Native","Expo","TypeScript","FastAPI","Supabase","RevenueCat","AWS"], demo:"", repo:"" },
    { title:"Vibe Guard", category:"security", stage:"Security · AI", featured:true, icon:ShieldCheck, image:vibeGuardVisual, description:"Developer security and production-readiness SaaS for AI-built and vibe-coded applications, covering cleanup, secure implementation patterns, verification, launch readiness, premium access, and stack-specific security guidance.", tags:["React","TypeScript","Supabase","RLS","Edge Functions","Security","SaaS"], demo:"", repo:"" },
    { title:"Cozy3fts Luxury Shop", category:"commerce", stage:"Commerce · UI/UX", featured:true, image:cozyVisual, description:"A complete luxury fashion storefront with editorial visual direction, responsive shopping, product detail flows, cart and wishlist state, checkout, order tracking, thrift and new-arrival collections, admin tooling, and image-protection features.", tags:["React","TypeScript","E-Commerce","Cart","Wishlist","Checkout","Responsive UX"], demo:"https://cozy3fts-luxury-shop.vercel.app", repo:"https://github.com/Stakmodsco/cozy3fts-luxury-shop" },
    { title:"PayDouFlow", category:"fintech", stage:"Fintech · Infrastructure", icon:CreditCard, gradient:"from-violet-500/25 via-slate-950 to-cyan-500/20", description:"M-Pesa/Daraja payment core engineered around encrypted credentials, tenant isolation, idempotent callbacks, immutable ledgers, atomic finalization, signed webhooks, replay protection, diagnostics, and transaction repair tooling.", tags:["M-Pesa","Daraja","Supabase","RLS","AES-256-GCM","Webhooks","Ledger"], demo:"", repo:"" },
    { title:"Ishi Property Hub", category:"platform", stage:"Property · Mobile", icon:Home, gradient:"from-amber-500/20 via-slate-950 to-emerald-500/20", description:"Verification-led Kenyan property platform for vetted short stays, rentals, vacancy alerts and house-hunter discovery, with controlled publishing, owner approvals, partner workflows and mobile-first delivery.", tags:["React","TypeScript","Supabase","Capacitor","Property Tech","Mobile UX"], demo:"", repo:"" },
    { title:"TaskBridge", category:"platform", stage:"Work Platform", gradient:"from-blue-500/20 via-slate-950 to-indigo-500/20", description:"Kenyan digital-work platform connecting talent with paid AI training, annotation, transcription, moderation, writing, research and evaluation tasks, with eligibility, security and payout-oriented product flows.", tags:["React","TypeScript","TanStack Router","Supabase","Auth","M-Pesa UX"], demo:"", repo:"https://github.com/Stakmodsco/taskbridge-connect" },
    { title:"Balipa", category:"fintech", stage:"Billing · Kenya", icon:CreditCard, gradient:"from-green-500/20 via-slate-950 to-teal-500/20", description:"Billing and reconciliation infrastructure for school fees and rentals: account records, fee structures, payment allocation, paid/outstanding/credit balances, receipts, statements, reporting and notification-ready workflows.", tags:["Next.js","TypeScript","FastAPI","PostgreSQL","Redis","Billing","M-Pesa"], demo:"", repo:"" },
    { title:"LexMind AI Contracts", category:"ai", stage:"Legal AI", gradient:"from-yellow-500/15 via-slate-950 to-violet-500/20", description:"AI-assisted contract product with generation and refinement workflows, document management, billing, authentication, account settings and a complete SaaS dashboard experience.", tags:["React","TypeScript","AI","SaaS","Documents","Billing","Framer Motion"], demo:"", repo:"" },
    { title:"SOC Genesis AI", category:"security", stage:"Cybersecurity · AI", icon:ShieldCheck, gradient:"from-red-500/20 via-slate-950 to-cyan-500/20", description:"Security-operations interface for alert ingestion, incident triage, incident analysis, confidence scoring, metrics and operational settings, exploring AI-assisted SOC response workflows.", tags:["React","TypeScript","Cybersecurity","Incident Triage","SOC","Analytics"], demo:"", repo:"" },
    { title:"Medical Billing AI", category:"ai", stage:"Healthcare · AI", image:"https://res.cloudinary.com/dud0zwl1t/image/upload/v1758122328/revenue-glide-ai_ljl1bd.png", description:"Healthcare revenue and billing product with dashboard experiences, revenue and expense views, ROI tooling, security and pricing surfaces, and enterprise-facing product UX.", tags:["React","TypeScript","Supabase","Healthcare","Revenue Analytics"], demo:"https://medical-billing-ai-theta.vercel.app/", repo:"" },
    { title:"Theos Educational Platform", category:"platform", stage:"EdTech", image:"https://res.cloudinary.com/dud0zwl1t/image/upload/v1758119072/Student_Dashboard_-_theos_Educational_Platform_1_msrqdd.png", description:"Cross-platform theological learning experience with structured educational content and dashboard-led learning UX across web and application delivery.", tags:["Flutter","React","Python","FastAPI","EdTech"], demo:"https://stakmodsco.github.io/theos_educational_platform/", repo:"https://github.com/Stakmodsco/theos_educational_platform" },
    { title:"AI Personal COO", category:"ai", stage:"AI · Operations", image:"https://res.cloudinary.com/dud0zwl1t/image/upload/v1761232577/AI_Personal_COO_-_Your_Intelligent_Executive_Assistant_qlaq2e.png", description:"Executive operations assistant focused on workflow automation, operational visibility, decision support and AI-assisted business execution.", tags:["React","TypeScript","AI Automation","Operations","Product UX"], demo:"https://ai-personal-coo.vercel.app/", repo:"https://github.com/Stakmodsco/AI-Personal-COO" },
    { title:"Fino Fiore", category:"commerce", stage:"Luxury · Commerce", gradient:"from-fuchsia-500/15 via-slate-950 to-amber-500/15", description:"Luxury fragrance commerce direction combining catalog architecture, Kenya-specific pricing, premium imagery and cinematic perfume-note storytelling through motion-led product presentation.", tags:["React","TypeScript","Commerce","UI/UX","Motion","Storytelling"], demo:"", repo:"" },
  ];

  const filters = [
    { id:"all", label:"All Selected Work" }, { id:"mobile", label:"Mobile" }, { id:"ai", label:"AI" }, { id:"fintech", label:"Fintech" }, { id:"security", label:"Security" }, { id:"platform", label:"Platforms" }, { id:"commerce", label:"Commerce & UI/UX" },
  ];
  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 animate-flow-in"><p className="text-xs uppercase tracking-[.28em] text-primary font-semibold mb-4">Selected portfolio</p><div className="grid lg:grid-cols-2 gap-6 items-end"><h2 className="text-4xl md:text-6xl font-bold leading-[1.05]">Products should be <span className="text-shimmer">seen, not just listed.</span></h2><p className="text-lg text-muted-foreground lg:pb-1">A visual collection of production engineering, mobile products, AI systems, fintech infrastructure, security tooling and premium interfaces. The strongest UI-heavy builds use their actual project artwork rather than generic placeholder cards.</p></div></div>
        <div className="flex flex-wrap gap-2 mb-10">{filters.map((filter) => <Button key={filter.id} variant={activeFilter === filter.id ? "default" : "outline"} size="sm" onClick={() => setActiveFilter(filter.id)}>{filter.label}</Button>)}</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{filteredProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        <div className="mt-14 glass-card rounded-[1.6rem] p-7 md:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10"><div><p className="text-xs uppercase tracking-[.2em] text-primary mb-2">Beyond the highlights</p><h3 className="text-2xl font-bold mb-2">The portfolio is curated. The repository history is broader.</h3><p className="text-sm text-muted-foreground max-w-3xl">Additional cybersecurity products, commerce builds, SaaS experiments, finance products, mobility concepts and earlier interface explorations remain available on GitHub without crowding the main case-study wall.</p></div><a href="https://github.com/Stakmodsco?tab=repositories" target="_blank" rel="noopener noreferrer"><Button variant="outline" className="whitespace-nowrap"><Github className="h-4 w-4 mr-2" /> Explore GitHub</Button></a></div>
      </div></div>
    </section>
  );
};
