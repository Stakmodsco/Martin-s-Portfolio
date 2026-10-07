import { Server, Cpu, CloudCog, Smartphone } from "lucide-react";
import { useTiltEffect } from "@/hooks/useTiltEffect";

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const tiltRef = useTiltEffect<HTMLDivElement>();

  return (
    <div
      ref={tiltRef}
      className="glass-card rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(255,87,34,0.3)] transition-all duration-300 group animate-flow-in"
      style={{
        animationDelay: `${index * 0.15}s`,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform glow-primary">
          <service.icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-muted-foreground text-sm">{service.description}</p>
        </div>
      </div>

      <ul className="space-y-2">
        {service.features.map((feature: string) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Full-Stack Product Development",
      description:
        "End-to-end web products with production-grade frontends, APIs, databases, authentication, payments, notifications, and admin workflows.",
      features: [
        "React & TypeScript applications",
        "Python/FastAPI & Node.js backends",
        "Auth, billing & third-party integrations",
        "Responsive product UI/UX",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Engineering",
      description:
        "Cross-platform mobile products built for real devices, app-store release workflows, secure access, subscriptions, and polished user journeys.",
      features: [
        "React Native, Expo & Flutter",
        "Biometrics, MFA & secure sessions",
        "RevenueCat & mobile subscriptions",
        "EAS, TestFlight & release hardening",
      ],
    },
    {
      icon: Cpu,
      title: "AI & Automation",
      description:
        "AI-powered product features and workflow automation, from assistants and extraction pipelines to prompt systems and developer tooling.",
      features: [
        "LLM and OpenAI integrations",
        "AI assistants & extraction workflows",
        "Agentic automation",
        "AI-assisted engineering with human review",
      ],
    },
    {
      icon: CloudCog,
      title: "Cloud & Production Reliability",
      description:
        "Infrastructure and release work focused on scalability, background processing, monitoring, deployment reliability, and recovery.",
      features: [
        "AWS architecture & storage",
        "Workers, queues & retries",
        "Docker, Kubernetes & CI/CD",
        "Monitoring, backups & performance tuning",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-flow-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What I <span className="text-shimmer">Build</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Product engineering across web, mobile, AI, and cloud — from first build through deployment and production hardening.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
