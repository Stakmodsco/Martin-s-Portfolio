import { useEffect, useRef, useState } from "react";

interface Stat { value:number; label:string; detail:string; suffix?:string; }
const stats: Stat[] = [
  { value:13, label:"Selected case studies", detail:"Curated from a broader GitHub body of work" },
  { value:6, label:"Engineering domains", detail:"Mobile · AI · Fintech · Security · Platforms · Commerce" },
  { value:3, label:"Product platforms", detail:"Web · iOS · Android" },
  { value:1, label:"Engineering standard", detail:"Production-ready over prototype-only" },
];

const CountUp = ({end,duration=1600,suffix=""}:{end:number;duration?:number;suffix?:string}) => {
  const [count,setCount] = useState(0); const ref = useRef<HTMLSpanElement>(null); const [ran,setRan] = useState(false);
  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if(entry.isIntersecting && !ran){ setRan(true); const start=Date.now(); const animate=()=>{const p=Math.min((Date.now()-start)/duration,1); setCount(Math.floor(p*end)); if(p<1) requestAnimationFrame(animate);}; animate(); } },{threshold:.5}); if(ref.current) observer.observe(ref.current); return()=>observer.disconnect(); },[end,duration,ran]);
  return <span ref={ref} className="text-4xl md:text-5xl font-bold tracking-[-.05em] text-shimmer">{count}{suffix}</span>;
};

export const StatsCounter = () => (
  <section className="py-8 md:py-12 relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-[1.75rem] border border-border/50 bg-card/40 backdrop-blur-2xl overflow-hidden">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat,index) => <div key={stat.label} className={`p-6 md:p-7 ${index !== stats.length-1 ? "lg:border-r border-border/50" : ""} ${index < 2 ? "sm:border-b lg:border-b-0 border-border/50" : ""}`}><CountUp end={stat.value} suffix={stat.suffix}/><p className="font-semibold mt-2">{stat.label}</p><p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{stat.detail}</p></div>)}
        </div>
      </div>
    </div>
  </section>
);
