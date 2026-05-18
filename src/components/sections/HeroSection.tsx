import { ArrowRight } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import NetworkGlobe from "@/components/NetworkGlobe";
import ParticleField from "@/components/ParticleField";

const HeroSection = () => {
  const scrollToSystem = () => {
    document.getElementById("lead-sources")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background: 3D globe + particles */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,_hsla(270,80%,60%,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-[radial-gradient(ellipse_at_bottom,_hsla(220,90%,60%,0.05)_0%,_transparent_60%)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] animate-globe-rotate">
          <NetworkGlobe />
        </div>
        <ParticleField count={28} />
      </div>

      {/* Content */}
      <AnimatedGroup preset="blur-slide" className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img
          alt="DigiMoria"
          className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 drop-shadow-md object-contain"
          src="/lovable-uploads/ad6e8aa7-b506-4fb2-b04f-a6758e104990.webp"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] mb-5 tracking-tight">
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
            AI-Powered Digital Performance Agency
          </span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          With our expert <b>performance marketing</b> team, we combine <b>AI</b>, data, and <b>automation</b> to build scalable <b>digital growth systems</b> for brands — going beyond the traditional advertising agency approach.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <div className="bg-foreground/5 rounded-[14px] border border-border/60 p-0.5">
            <button
              onClick={scrollToSystem}
              className="group rounded-xl px-6 h-11 text-base font-semibold font-display text-primary-foreground bg-primary hover:bg-primary/90 transition-all inline-flex items-center gap-2"
            >
              <span>Explore the System</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
          <a
            href="/contact"
            className="h-11 px-6 rounded-xl font-semibold font-display text-foreground hover:bg-secondary transition-all text-base inline-flex items-center justify-center"
          >
            Request a demo
          </a>
        </div>
      </AnimatedGroup>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>);

};

export default HeroSection;