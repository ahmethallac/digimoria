import { motion } from "framer-motion";
import ParticleField from "@/components/ParticleField";
import logo from "@/assets/digimoria_logo_1.png";
import { Globe, MessageCircle, CalendarDays, Users, Database, Brain, Zap, BarChart3, Bot, Mail } from "lucide-react";

const floatingBubbles = [
  { icon: <Globe className="w-4 h-4" />, label: "Google", x: "8%", y: "20%", delay: 0, size: 52 },
  { icon: <span className="text-sm font-bold">f</span>, label: "Meta", x: "86%", y: "16%", delay: 1.2, size: 46 },
  { icon: <span className="text-[10px] font-bold">in</span>, label: "LinkedIn", x: "90%", y: "52%", delay: 2.5, size: 44 },
  { icon: <MessageCircle className="w-4 h-4" />, label: "Chat", x: "4%", y: "55%", delay: 1.8, size: 48 },
  { icon: <CalendarDays className="w-4 h-4" />, label: "Calendar", x: "80%", y: "70%", delay: 3.5, size: 50 },
  { icon: <Users className="w-3.5 h-3.5" />, label: "CRM", x: "14%", y: "75%", delay: 0.8, size: 42 },
  { icon: <Database className="w-3.5 h-3.5" />, label: "Data", x: "93%", y: "35%", delay: 2, size: 40 },
  { icon: <Brain className="w-4 h-4" />, label: "AI", x: "3%", y: "38%", delay: 3, size: 50 },
  { icon: <Zap className="w-3.5 h-3.5" />, label: "Auto", x: "20%", y: "30%", delay: 0.4, size: 38 },
  { icon: <BarChart3 className="w-3.5 h-3.5" />, label: "Analytics", x: "75%", y: "25%", delay: 4, size: 42 },
  { icon: <Bot className="w-3.5 h-3.5" />, label: "Agent", x: "25%", y: "65%", delay: 2.8, size: 44 },
  { icon: <Mail className="w-3.5 h-3.5" />, label: "Email", x: "70%", y: "60%", delay: 1.5, size: 40 },
];

// Connection lines between bubbles
const connections = [
  { from: 0, to: 8 },
  { from: 1, to: 9 },
  { from: 7, to: 3 },
  { from: 2, to: 4 },
  { from: 10, to: 5 },
];

const HeroSection = () => {
  const scrollToSystem = () => {
    document.getElementById("lead-sources")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      <ParticleField count={25} />

      {/* Gradient light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_hsla(270,80%,55%,0.05)_0%,_transparent_60%)]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_hsla(220,90%,56%,0.04)_0%,_transparent_60%)]" />
        <motion.div
          className="absolute top-0 left-0 w-[150px] h-[600px] bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent"
          animate={{ x: ["-100%", "250vw"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
          style={{ transform: "rotate(-25deg)" }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-[100px] h-[500px] bg-gradient-to-b from-transparent via-neon-blue/[0.01] to-transparent"
          animate={{ x: ["100%", "-250vw"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 5 }}
          style={{ transform: "rotate(20deg)" }}
        />
      </div>

      {/* Connection lines between bubbles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 1 }}>
        {connections.map((conn, i) => {
          const from = floatingBubbles[conn.from];
          const to = floatingBubbles[conn.to];
          return (
            <motion.line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="hsl(270, 80%, 55%)"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.08, 0.12, 0.08, 0] }}
              transition={{ duration: 6, delay: i * 1.5, repeat: Infinity }}
            />
          );
        })}
      </svg>

      {/* Floating bubbles */}
      {floatingBubbles.map((bubble, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none hidden md:block"
          style={{ left: bubble.x, top: bubble.y, zIndex: 2 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 + bubble.delay * 0.15 }}
        >
          <div
            className="rounded-2xl glass flex items-center justify-center text-muted-foreground/40 animate-float-bubble"
            style={{
              width: bubble.size,
              height: bubble.size,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${7 + bubble.delay}s`,
            }}
          >
            {bubble.icon}
          </div>
        </motion.div>
      ))}

      {/* Faint orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full border border-primary/[0.04] animate-spin-slow" />
        <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-primary/[0.03] animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "35s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={logo} alt="DigiMoria" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-5 drop-shadow-md" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-[3.5rem] font-bold font-display leading-[1.1] mb-4 tracking-tight"
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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-7 leading-relaxed"
        >
          An automated system that generates and schedules qualified sales meetings for your business.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          onClick={scrollToSystem}
          className="group relative px-6 py-3 rounded-xl font-semibold font-display text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/15 text-sm"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore the System
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </span>
        </motion.button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
