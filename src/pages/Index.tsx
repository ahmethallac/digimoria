import { Header } from "@/components/ui/header-3";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import StagePipeline from "@/components/StagePipeline";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0613]">
      {/* Layered background infrastructure */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-[50vh] bg-[radial-gradient(ellipse_at_top,_hsla(270,80%,55%,0.04)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-[radial-gradient(ellipse_at_bottom,_hsla(220,90%,56%,0.03)_0%,_transparent_60%)]" />
      </div>

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ServicesSection />
        <WhatIsSection />
        <StagePipeline />

        <Footer />
      </div>
    </div>
  );
};

export default Index;
