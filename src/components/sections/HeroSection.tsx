import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ParticleField from "@/components/ParticleField";
import NetworkGlobe from "@/components/NetworkGlobe";
import { Globe, MessageCircle, CalendarDays, Users, Database, Brain, Zap, BarChart3, Bot, Mail } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import BrandHero3D from "@/components/BrandHero3D";

const floatingBubbles = [
{ icon: <Globe className="w-5 h-5" />, label: "Google", x: "8%", y: "20%", delay: 0, size: 56 },
{ icon: <span className="text-sm font-bold">f</span>, label: "Meta", x: "86%", y: "16%", delay: 1.2, size: 52 },
{ icon: <span className="text-xs font-bold">in</span>, label: "LinkedIn", x: "90%", y: "52%", delay: 2.5, size: 48 },
{ icon: <MessageCircle className="w-5 h-5" />, label: "Chat", x: "4%", y: "55%", delay: 1.8, size: 54 },
{ icon: <CalendarDays className="w-5 h-5" />, label: "Calendar", x: "80%", y: "70%", delay: 3.5, size: 56 },
{ icon: <Users className="w-4 h-4" />, label: "CRM", x: "14%", y: "75%", delay: 0.8, size: 48 },
{ icon: <Database className="w-4 h-4" />, label: "Data", x: "93%", y: "35%", delay: 2, size: 46 },
{ icon: <Brain className="w-5 h-5" />, label: "AI", x: "3%", y: "38%", delay: 3, size: 56 },
{ icon: <Zap className="w-4 h-4" />, label: "Auto", x: "20%", y: "30%", delay: 0.4, size: 44 },
{ icon: <BarChart3 className="w-4 h-4" />, label: "Analytics", x: "75%", y: "25%", delay: 4, size: 48 },
{ icon: <Bot className="w-4 h-4" />, label: "Agent", x: "25%", y: "65%", delay: 2.8, size: 50 },
{ icon: <Mail className="w-4 h-4" />, label: "Email", x: "70%", y: "60%", delay: 1.5, size: 46 }];


const connections = [
{ from: 0, to: 8 },
{ from: 1, to: 9 },
{ from: 7, to: 3 },
{ from: 2, to: 4 },
{ from: 10, to: 5 },
{ from: 6, to: 1 }];


const HeroSection = () => {
  const webglRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Re-initialize UnicornStudio after React mounts the DOM
    const timer = setTimeout(() => {
      if ((window as any).UnicornStudio) {
        (window as any).UnicornStudio.init();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSystem = () => {
    document.getElementById("lead-sources")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
      {/* WebGL Background */}
      <div
        className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}>
        
        <div
          ref={webglRef}
          style={{ width: "1440px", height: "900px", marginBottom: "-450px" }}
          data-us-project="y6KtVn43LzOq8paDA9Jq" />
        
      </div>

      <ParticleField count={30} />
      <NetworkGlobe />

      {/* Gradient light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_hsla(270,80%,55%,0.06)_0%,_transparent_60%)]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsla(220,90%,56%,0.04)_0%,_transparent_60%)]" />
        <motion.div
          className="absolute top-0 left-0 w-[180px] h-[700px] bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"
          animate={{ x: ["-100%", "250vw"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
          style={{ transform: "rotate(-25deg)" }} />
        

        <motion.div
          className="absolute top-1/2 right-0 w-[120px] h-[600px] bg-gradient-to-b from-transparent via-neon-blue/[0.015] to-transparent"
          animate={{ x: ["100%", "-250vw"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 5 }}
          style={{ transform: "rotate(20deg)" }} />
        
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
              animate={{ opacity: [0, 0.1, 0.15, 0.1, 0] }}
              transition={{ duration: 6, delay: i * 1.2, repeat: Infinity }} />);


        })}
      </svg>

      {/* Floating bubbles */}
      {floatingBubbles.map((bubble, i) =>
      <motion.div
        key={i}
        className="absolute pointer-events-none hidden md:block"
        style={{ left: bubble.x, top: bubble.y, zIndex: 2 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 + bubble.delay * 0.15 }}>
        
          <div
          className="rounded-2xl glass flex items-center justify-center text-muted-foreground/40 animate-float-bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${7 + bubble.delay}s`
          }}>
          
            {bubble.icon}
          </div>
        </motion.div>
      )}

      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-primary/[0.04] animate-spin-slow" />
        <div
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-primary/[0.03] animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "35s" }} />
        
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <AnimatedGroup
          preset="blur-slide"
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <img
            alt="DigiMoria"
            className="w-24 h-24 md:w-28 md:h-28 mx-auto lg:mx-0 mb-6 drop-shadow-md object-contain"
            src="/lovable-uploads/ad6e8aa7-b506-4fb2-b04f-a6758e104990.webp"
          />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-7xl font-bold font-display leading-[1.05] mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
              AI-Powered Digital Performance Agency
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            With our expert <b>performance marketing</b> team, we combine <b>AI</b>, data, and <b>automation</b> to build scalable <b>digital growth systems</b> for brands — going beyond the traditional advertising agency approach.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button
              onClick={scrollToSystem}
              className="group relative px-8 py-3.5 rounded-xl font-semibold font-display text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/15 text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore the System
                <motion.span animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  ↓
                </motion.span>
              </span>
            </button>
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-xl font-semibold font-display text-foreground border border-border hover:bg-secondary transition-all text-base inline-flex items-center justify-center"
            >
              Request a demo
            </a>
          </div>
        </AnimatedGroup>

        <AnimatedGroup
          preset="blur-slide"
          className="order-1 lg:order-2 w-full"
        >
          <BrandHero3D />
        </AnimatedGroup>
      </div>

      {/* Logo cloud */}
      <AnimatedGroup
        preset="blur-slide"
        className="relative z-10 mt-16 md:mt-20 w-full max-w-5xl mx-auto px-4"
      >
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mb-6">
          Powering performance for modern teams
        </p>
        <div className="relative">
          <InfiniteSlider gap={56} duration={28} durationOnHover={60} className="py-2">
            {[
              { Icon: Globe, label: "Google" },
              { Icon: BarChart3, label: "Meta Ads" },
              { Icon: Users, label: "LinkedIn" },
              { Icon: Mail, label: "Klaviyo" },
              { Icon: CalendarDays, label: "HubSpot" },
              { Icon: Bot, label: "OpenAI" },
              { Icon: Database, label: "Airtable" },
              { Icon: Zap, label: "Zapier" },
              { Icon: Brain, label: "Anthropic" },
              { Icon: MessageCircle, label: "Slack" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="font-display text-sm tracking-wide">{label}</span>
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur
            direction="left"
            blurIntensity={0.4}
            className="absolute left-0 top-0 h-full w-24"
          />
          <ProgressiveBlur
            direction="right"
            blurIntensity={0.4}
            className="absolute right-0 top-0 h-full w-24"
          />
        </div>
      </AnimatedGroup>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>);

};

export default HeroSection;