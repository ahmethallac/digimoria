import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import NetworkGlobe from "@/components/NetworkGlobe";
import ParticleField from "@/components/ParticleField";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SplitText } from "@/components/ui/split-text";

const HeroSection = () => {
  const scrollToSystem = () => {
    document.getElementById("lead-sources")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background: 3D globe + particles + animated mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        {/* animated gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(at_20%_20%,_hsla(270,80%,60%,0.12)_0%,_transparent_50%),radial-gradient(at_80%_30%,_hsla(220,90%,60%,0.10)_0%,_transparent_50%),radial-gradient(at_50%_90%,_hsla(285,80%,65%,0.08)_0%,_transparent_55%)] animate-gradient" />
        {/* subtle noise grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,_black_40%,_transparent_75%)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] animate-globe-rotate">
          <NetworkGlobe />
        </div>
        <ParticleField count={28} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.img
          alt="DigiMoria"
          className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 drop-shadow-md object-contain"
          src="/lovable-uploads/ad6e8aa7-b506-4fb2-b04f-a6758e104990.webp"
          initial={{ opacity: 0, scale: 0.85, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass text-[11px] font-medium text-muted-foreground tracking-[0.18em] uppercase mb-5"
        >
          <Sparkles className="w-3 h-3 text-primary" />
          AI Meeting Engine
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] mb-5 tracking-tight">
          <span className="block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
            <SplitText text="AI-Powered Digital" delay={0.15} />
          </span>
          <span className="block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
            <SplitText text="Performance Agency" delay={0.35} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          With our expert <b>performance marketing</b> team, we combine <b>AI</b>, data, and <b>automation</b> to build scalable <b>digital growth systems</b> for brands — going beyond the traditional advertising agency approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <MagneticButton
            onClick={scrollToSystem}
            className="group rounded-xl px-7 h-12 text-base font-semibold font-display text-primary-foreground bg-gradient-to-r from-primary to-[hsl(220,90%,56%)] shadow-[0_10px_30px_-10px_hsla(270,80%,55%,0.55)] hover:shadow-[0_15px_40px_-10px_hsla(270,80%,55%,0.75)]"
          >
            <span>Explore the System</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <a
            href="/contact"
            className="relative h-12 px-6 rounded-xl font-semibold font-display text-foreground text-base inline-flex items-center justify-center border border-border/70 hover:border-primary/50 hover:bg-secondary/50 transition-all"
          >
            Request a demo
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>);

};

export default HeroSection;