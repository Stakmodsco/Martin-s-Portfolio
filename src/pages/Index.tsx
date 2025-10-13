import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StatsCounter } from "@/components/StatsCounter";
import { PageLoader } from "@/components/PageLoader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageLoader />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <StatsCounter />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
