import { motion } from "framer-motion";
import ParticleField from "@/components/ParticleField";
import logo from "@/assets/digimoria_logo_1.png";
import { Globe, MessageCircle, CalendarDays, Users, Database, Brain, Zap, BarChart3 } from "lucide-react";

const floatingBubbles = [
  { icon: <Globe className="w-5 h-5" />, label: "Google", x: "8%", y: "20%", delay: 0, size: "w-14 h-14" },
  { icon: <span className="text-lg font-bold">f</span>, label: "Meta", x: "85%", y: "15%", delay: 1.5, size: "w-12 h-12" },
  { icon: <span className="text-sm font-bold">in</span>, label: "LinkedIn", x: "90%", y: "55%", delay: 3, size: "w-12 h-12" },
  { icon: <MessageCircle className="w-5 h-5" />, label: "Chat", x: "5%", y: "60%", delay: 2, size: "w-13 h-13" },
  { icon: <CalendarDays className="w-5 h-5" />, label: "Calendar", x: "78%", y: "75%", delay: 4, size: "w-14 h-14" },
  { icon: <Users className="w-4 h-4" />, label: "CRM", x: "15%", y: "80%", delay: 1, size: "w-11 h-11" },
  { icon: <Database className="w-4 h-4" />, label: "Data", x: "92%", y: "35%", delay: 2.5, size: "w-11 h-11" },
  { icon: <Brain className="w-5 h-5" />, label: "AI", x: "3%", y: "40%", delay: 3.5, size: "w-13 h-13" },
  { icon: <Zap className="w-4 h-4" />, label: "Auto", x: "20%", y: "35%", delay: 0.5, size: "w-10 h-10" },
  { icon: <BarChart3 className="w-4 h-4" />, label: "Analytics", x: "75%", y: "25%", delay: 4.5, size: "w-11 h-11" },
];

const HeroSection = () => {
  const scrollToSystem = () => {
    document.getElementById("lead-sources")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField count={25} />

      {/* Gradient light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsla(270,80%,55%,0.08)_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_hsla(220,90%,56%,0.06)_0%,_transparent_70%)]" />
        <motion.div
          className="absolute top-1/3 left-0 w-[200px] h-[800px] bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent"
          animate={{ x: ["-100%", "200vw"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          style={{ transform: "rotate(-30deg)" }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-[150px] h-[600px] bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"
          animate={{ x: ["200%", "-200vw"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 5 }}
          style={{ transform: "rotate(25deg)" }}
        />
      </div>

      {/* Floating system bubbles */}
      {floatingBubbles.map((bubble, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: bubble.x, top: bubble.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 + bubble.delay * 0.2 }}
        >
          <div
            className={`${bubble.size} rounded-2xl glass flex items-center justify-center text-muted-foreground/60 animate-float-bubble`}
            style={{ animationDelay: `${bubble.delay}s` }}
          >
            {bubble.icon}
          </div>
        </motion.div>
      ))}

      {/* Animated ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-primary/[0.06] animate-spin-slow" />
        <div className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-primary/[0.04] animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="DigiMoria" className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 drop-shadow-lg" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
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
          className="group relative px-8 py-4 rounded-xl font-semibold font-display text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
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
