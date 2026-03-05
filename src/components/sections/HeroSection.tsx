import { motion } from "framer-motion";
import ParticleField from "@/components/ParticleField";
import logo from "@/assets/digimoria_logo_1.png";

const HeroSection = () => {
  const scrollToSystem = () => {
    document.getElementById("lead-sources")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField count={40} />

      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(270,100%,20%,0.3)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsla(190,100%,50%,0.08)_0%,_transparent_60%)]" />

      {/* Animated ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-primary/10 animate-spin-slow" />
        <div className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-accent/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="DigiMoria" className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-8 drop-shadow-2xl" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-gradient">
            AI-Powered Customer
          </span>
          <br />
          <span className="text-foreground">
            Acquisition Infrastructure
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          An automated system that generates and schedules qualified sales meetings for your business.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToSystem}
          className="group relative px-8 py-4 rounded-xl font-semibold font-display text-primary-foreground bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all glow-purple"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore the System
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </span>
        </motion.button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
