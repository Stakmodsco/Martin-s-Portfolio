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
      style={{ 
        animationDelay: `${index * 0.15}s`,
        transformStyle: "preserve-3d",
        willChange: "transform"
      }}
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
          {project.tags.map((tag: string) => (
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
            href={project.demo}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Medical-Billing Platform",
      category: "saas",
      description:
        "Modular microservices with GitOps, event-driven pipelines, and autoscaling. Demonstrates production-grade ops and platform mindset.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1758122328/revenue-glide-ai_ljl1bd.png",
      tags: ["K8s", "Helm", "ArgoCD", "gRPC", "Kafka"],
      demo: "https://medical-billing-ai-theta.vercel.app/",
    },
    {
      title: "Theos Educational Platform",
      category: "edtech",
      description:
        "Cross-platform educational app and web platform for theological studies with offline access, structured courses, in-app assessments, live sessions, and AI-powered insights.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1758119072/Student_Dashboard_-_theos_Educational_Platform_1_msrqdd.png",
      tags: ["Flutter", "React.js", "Python", "FastAPI", "AI in Education", "EdTech"],
      demo: "https://stakmodsco.github.io/theos_educational_platform/",
    },
    {
      title: "Global Health Check App",
      category: "mobile app",
      description:
        "AI-powered mobile and web app for symptom analysis, severity ratings, and guidance",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1758125547/Medical_App_UI_concept_MediCare___by_Abdullah_Al_Mamun_on_Dribbble_g3arma.png",
      tags: ["Python", "FastAPI", "Flutter", "React.js", "LLM Integration"],
      demo: "https://res.cloudinary.com/dud0zwl1t/video/upload/v1758125254/WhatsApp_Video_2025-09-17_at_18.12.06_rllmyw.mp4",
    },
    {
      title: "Responsive Furniture E-Commerce Template",
      category: "ecommerce",
      description:
        "Mobile-first e-commerce template with optimized performance.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1758120386/Furniture_web_landing_page_1_r0a2c2.png",
      tags: ["HTML", "Tailwind CSS", "JavaScript"],
      demo: "https://stakmodsco.github.io/Furniture-Web-Interactive-Landing-page/",
    },
    {
      title: "Delivery Management/Logistics Platform",
      category: "saas",
      description:
        "A modern delivery management SaaS platform that enables logistics companies to manage, track, and optimize package deliveries in real time. Built with a sleek React.js frontend and powerful Node.js backend, it supports client dashboards, driver management, and seamless payment integration for a complete end-to-end logistics solution.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1759744561/SafeExpress_-_Professional_Delivery_Services___Fast_Secure_Package_Delivery_vv7umh.png",
      tags: ["React.js", "Node.js", "MongoDB", "Stripe", "TailwindCSS", "WebSocket", "WebRTC"],
      demo: "https://swiftride-log.vercel.app/",
    },
    {
      title: "Beauty Salon Website",
      category: "website",
      description:
        "A modern, elegant salon website designed to showcase services, stylists, and client experiences while enabling effortless online bookings.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1759741518/Luxe_Hair_Studio_-_Premium_Hair_Salon_Styling_4_mejwa1.png",
      tags: ["React.js", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
      demo: "https://gilded-strands-salon.vercel.app/",
    },
    {
      title: "WellnesCart Mobile App",
      category: "mobile app",
      description:
        "Mobile e-commerce app for selling health products, supplements, and wellness packages.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1758124885/WellnessCart_UI_boaq4o.png",
      tags: ["Flutter", "React Native", "Stripe", "Firebase"],
      demo: "https://res.cloudinary.com/dud0zwl1t/video/upload/v1758124893/WhatsApp_Video_2025-09-17_at_18.10.36_lbw8kb.mp4",
    },
    {
      title: "Contact/Login Page",
      category: "template",
      description:
        "A clean, responsive Contact & Login page built with HTML, CSS, and JS. Features modern forms, data tables, and smooth UI components, perfect for web apps or portfolios.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1758120032/Login_Contact_Page_iyyuai.png",
      tags: ["HTML", "CSS", "JS"],
      demo: "https://stakmodsco.github.io/Contact-Login-page/",
    },
    {
      title: "LeadMind AI CRM Dashboard",
      category: "landing page",
      description:
        "AI-driven real-time CRM dashboard with conversation tracking, funnel visualization, and chat automation.",
      image: "https://res.cloudinary.com/dud0zwl1t/image/upload/v1758119573/LeadMind_AI_Dashboard_ntu6qf.png",
      tags: ["React.js", "Tailwind CSS", "AI Components"],
      demo: "https://stakmodsco.github.io/leadmind-ai-dashboard/",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "saas", label: "SaaS Platforms" },
    { id: "landing page", label: "Landing Page" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "mobile app", label: "Mobile App" },
    { id: "website", label: "Website" },
    { id: "edtech", label: "EdTech" },
    { id: "template", label: "UI/UX Templates" },
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
          <div className="text-center mb-12 animate-flow-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-shimmer">Projects</span>
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
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
