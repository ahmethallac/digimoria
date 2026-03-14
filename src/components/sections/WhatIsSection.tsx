import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap } from "lucide-react";

const WhatIsSection = () => {
  const { ref, revealed } = useScrollReveal(0.2);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_hsla(270,80%,55%,0.07)_0%,_transparent_70%)]" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-4 text-center reveal ${revealed ? "revealed" : ""}`}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground tracking-widest uppercase mb-8"
        >
          <Zap className="w-3.5 h-3.5 text-primary" />
          Core Service
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-display leading-[1.1] tracking-tight mb-8"
        >
          <span className="text-foreground">What is </span>
          <span className="bg-gradient-to-r from-primary to-neon-blue bg-clip-text text-transparent">
            AI Meeting Engine
          </span>
          <span className="text-foreground">?</span>
        </motion.h2>

        {/* Description card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-strong rounded-2xl p-8 md:p-10 mb-8 text-left"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
            <b>AI Meeting Engine</b> is an <b>AI-powered</b> customer acquisition infrastructure that <b>automatically</b> schedules sales meetings with <b>real potential customers</b> for businesses.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            The system manages <b>advertising</b>, responds instantly to incoming inquiries, <b>pre-qualifies</b> candidates, and only adds suitable prospects to your <b>calendar</b>.
          </p>
        </motion.div>

        {/* Result highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary/[0.07] border border-primary/20"
        >
          <span className="text-3xl md:text-4xl font-bold font-display bg-gradient-to-r from-primary to-neon-blue bg-clip-text text-transparent">
            30×
          </span>
          <span className="text-sm md:text-base font-semibold text-foreground text-left leading-tight">
            more potential<br />meeting requests
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
