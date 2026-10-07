import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => { const handleScroll = () => setIsScrolled(window.scrollY > 30); window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    ["hero","about","services","projects","contact"].forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => { document.documentElement.classList.toggle("dark", theme === "dark"); }, [theme]);

  const scrollToSection = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setIsMobileMenuOpen(false); };
  const navItems = [{label:"About",id:"about"},{label:"Services",id:"services"},{label:"Work",id:"projects"},{label:"Contact",id:"contact"}];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3 pointer-events-none">
      <div className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-500 rounded-2xl ${isScrolled || isMobileMenuOpen ? "border border-border/50 bg-background/75 backdrop-blur-2xl shadow-[0_12px_50px_rgba(0,0,0,.12)]" : "border border-transparent bg-transparent"}`}>
        <div className="flex items-center justify-between h-16 px-4 sm:px-5">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2.5 group">
            <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center text-white font-black text-sm shadow-lg group-hover:rotate-6 transition-transform">S</span>
            <span className="font-bold tracking-[-.03em]">Stakmods<span className="text-primary">.</span></span>
          </button>

          <div className="hidden md:flex items-center gap-1 rounded-full border border-border/50 bg-card/30 backdrop-blur-xl p-1">
            {navItems.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${activeSection === item.id ? "bg-foreground text-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>{item.label}</button>)}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full">{theme === "dark" ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}</Button>
            <Button onClick={() => scrollToSection("contact")} size="sm" className="rounded-full px-4">Let's talk <ArrowUpRight className="ml-1.5 h-3.5 w-3.5"/></Button>
          </div>

          <div className="flex md:hidden items-center gap-1">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full">{theme === "dark" ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}</Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="rounded-full">{isMobileMenuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}</Button>
          </div>
        </div>

        {isMobileMenuOpen && <div className="md:hidden px-3 pb-3 animate-fade-in"><div className="rounded-xl bg-card/40 border border-border/40 p-2">{navItems.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-left font-medium transition-colors ${activeSection === item.id ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"}`}><span>{item.label}</span><ArrowUpRight className="h-4 w-4 opacity-40"/></button>)}</div></div>}
      </div>
    </nav>
  );
};
