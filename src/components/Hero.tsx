import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";

export const Hero = () => {
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,hsl(var(--primary)/.14),transparent_30%),radial-gradient(circle_at_82%_35%,hsl(var(--secondary)/.13),transparent_32%)]" />
      <FloatingParticles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-primary/20 bg-primary/[.07] backdrop-blur-xl mb-7">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"/><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"/></span>
              <span className="text-xs sm:text-sm font-medium">Full-Stack Engineer · AI · Mobile · Cloud</span>
            </div>

            <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-[-.055em] leading-[.98] mb-7">
              Engineering products <span className="text-shimmer">people can actually use.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              I turn ambitious ideas — including AI-assisted and vibe-coded foundations — into secure, polished products across web, iOS, Android and cloud infrastructure.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="rounded-full px-6 group">Explore my work <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/></Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="rounded-full px-6 bg-background/30 backdrop-blur-xl">Start a project</Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary"/> Production hardening</div>
              <div className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-secondary"/> iOS + Android</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary"/> AI systems</div>
            </div>

            <div className="flex items-center gap-3 mt-9">
              {[{href:"https://github.com/Stakmodsco",label:"GitHub",Icon:Github},{href:"https://www.linkedin.com/in/martin-kihiu-04607a235",label:"LinkedIn",Icon:Linkedin},{href:"mailto:stakmodsco@gmail.com",label:"Email",Icon:Mail}].map(({href,label,Icon}) => <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={label} className="h-10 w-10 rounded-full border border-border/60 bg-card/40 backdrop-blur-xl grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-1 transition-all"><Icon className="h-4.5 w-4.5"/></a>)}
            </div>
          </div>

          <div className="relative min-h-[500px] md:min-h-[590px] hidden sm:block animate-flow-in">
            <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl" />

            <div className="absolute top-2 right-0 w-[82%] rounded-[2rem] border border-white/10 bg-card/50 backdrop-blur-2xl p-3 shadow-2xl rotate-[2deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-[310px] md:h-[350px] overflow-hidden rounded-[1.45rem] bg-black">
                <img src="https://raw.githubusercontent.com/Stakmodsco/cozy3fts-luxury-shop/main/src/assets/hero-main.jpg" alt="Cozy3fts luxury commerce project" className="w-full h-full object-cover opacity-90"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent"/>
                <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[.22em] text-white/55 mb-1">Commerce · UI/UX</p><h3 className="text-white text-2xl font-bold">Cozy3fts</h3></div><span className="text-xs text-white/70 border border-white/20 bg-black/30 backdrop-blur-md rounded-full px-3 py-1.5">Live product</span></div>
              </div>
            </div>

            <div className="absolute left-0 bottom-8 w-[66%] rounded-[1.7rem] border border-white/10 bg-card/70 backdrop-blur-2xl p-5 shadow-2xl -rotate-[3deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center justify-between mb-6"><div className="flex items-center gap-3"><div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center"><ShieldCheck className="h-5 w-5 text-primary"/></div><div><p className="text-xs text-muted-foreground">Security · AI</p><p className="font-bold">Vibe Guard</p></div></div><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.7)]"/></div>
              <div className="space-y-3"><div className="rounded-xl border border-border/50 bg-background/40 p-3 flex items-center justify-between"><span className="text-xs">Production readiness</span><span className="text-xs text-emerald-400">Verified</span></div><div className="rounded-xl border border-border/50 bg-background/40 p-3"><div className="flex justify-between text-[11px] text-muted-foreground mb-2"><span>Security hardening</span><span>92%</span></div><div className="h-1.5 rounded-full bg-muted overflow-hidden"><div className="h-full w-[92%] rounded-full bg-gradient-to-r from-primary to-secondary"/></div></div></div>
            </div>

            <div className="absolute right-2 bottom-2 rounded-2xl border border-white/10 bg-background/75 backdrop-blur-xl px-4 py-3 shadow-xl animate-float"><p className="text-[10px] uppercase tracking-[.18em] text-muted-foreground">Build stack</p><p className="text-sm font-semibold mt-1">React · RN · Python · AWS</p></div>
          </div>
        </div>
      </div>

      <button onClick={() => scrollToSection("about")} className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:grid h-10 w-10 place-items-center rounded-full border border-border/50 bg-background/30 backdrop-blur-xl text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll to about"><ArrowDown className="h-4 w-4"/></button>
    </section>
  );
};
