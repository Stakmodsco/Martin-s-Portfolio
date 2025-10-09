import { Server, Cpu, CloudCog, Sparkles } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Full-Stack Development",
      description:
        "End-to-end web application development using modern frameworks like React, Next.js, FastAPI, and Django. From database design to responsive frontend interfaces.",
      features: [
        "Custom web applications",
        "API development & integration",
        "Database architecture",
        "Responsive UI/UX",
      ],
    },
    {
      icon: Cpu,
      title: "AI & Automation",
      description:
        "Intelligent automation solutions powered by LangChain, OpenAI, and custom AI models. Transform your workflows with cutting-edge artificial intelligence.",
      features: [
        "AI agent development",
        "Process automation",
        "NLP & chatbots",
        "ML model integration",
      ],
    },
    {
      icon: CloudCog,
      title: "Cloud & DevOps",
      description:
        "Scalable cloud infrastructure on AWS, GCP, or Azure. Kubernetes orchestration, CI/CD pipelines, and infrastructure as code for reliable deployments.",
      features: [
        "Kubernetes & Docker",
        "CI/CD pipelines",
        "Cloud architecture",
        "Performance optimization",
      ],
    },
    {
      icon: Sparkles,
      title: "Technical Consulting",
      description:
        "Strategic guidance on technology stack selection, system architecture, and best practices. Code reviews, performance audits, and team mentoring.",
      features: [
        "Architecture review",
        "Technology selection",
        "Code quality audit",
        "Team training",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Services</span> I Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for your technical needs, from concept to
              deployment and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
