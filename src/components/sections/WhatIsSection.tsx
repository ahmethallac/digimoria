import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap, Megaphone, MessageSquare, UserCheck, CalendarCheck, ArrowDown } from "lucide-react";

const funnelSteps = [
  { icon: Megaphone, label: "Ads & Mail", sub: "Traffic generation", color: "from-primary to-primary" },
  { icon: MessageSquare, label: "AI Responds", sub: "Instant engagement", color: "from-primary to-neon-blue" },
  { icon: UserCheck, label: "Pre-Qualification", sub: "Filter real prospects", color: "from-neon-blue to-neon-blue" },
  { icon: CalendarCheck, label: "Meeting Booked", sub: "Calendar auto-filled", color: "from-neon-blue to-primary" },
];

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
          className="glass-strong rounded-2xl p-8 md:p-10 mb-12 text-left"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
            <b>AI Meeting Engine</b> is an <b>AI-powered</b> customer acquisition infrastructure that <b>automatically</b> schedules sales meetings with <b>real potential customers</b> for businesses.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            The system manages <b>advertising</b>, responds instantly to incoming inquiries, <b>pre-qualifies</b> candidates, and only adds suitable prospects to your <b>calendar</b>.
          </p>
        </motion.div>

        {/* Automation Funnel Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-12"
        >
          {/* Desktop: horizontal funnel */}
          <div className="hidden md:flex items-start justify-center gap-0 relative">
            {funnelSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
                    className="flex flex-col items-center w-[140px] lg:w-[160px]"
                  >
                    {/* Icon node */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0px hsla(270,80%,55%,0)",
                          "0 0 20px hsla(270,80%,55%,0.15)",
                          "0 0 0px hsla(270,80%,55%,0)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      className={`w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-3 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                    </motion.div>
                    {/* Step number */}
                    <span className="text-[10px] font-bold text-primary/50 tracking-widest uppercase mb-1">
                      Step {i + 1}
                    </span>
                    {/* Label */}
                    <span className="text-sm font-semibold text-foreground leading-tight">
                      {step.label}
                    </span>
                    <span className="text-xs text-muted-foreground mt-0.5">
                      {step.sub}
                    </span>
                  </motion.div>

                  {/* Connector arrow between steps */}
                  {i < funnelSteps.length - 1 && (
                    <div className="relative flex items-center mx-1 lg:mx-2 mt-6">
                      <svg width="48" height="16" viewBox="0 0 48 16" className="overflow-visible">
                        <line
                          x1="0" y1="8" x2="36" y2="8"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                          strokeOpacity="0.15"
                        />
                        <polygon
                          points="34,4 42,8 34,12"
                          fill="hsl(var(--primary))"
                          fillOpacity="0.25"
                        />
                        {/* Flowing dot */}
                        {revealed && (
                          <motion.circle
                            cy="8" r="3"
                            fill="hsl(var(--primary))"
                            animate={{ cx: [0, 40], opacity: [0, 0.6, 0.6, 0] }}
                            transition={{ duration: 2, delay: i * 0.6, repeat: Infinity, ease: "linear" }}
                          />
                        )}
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical funnel */}
          <div className="flex md:hidden flex-col items-center gap-0">
            {funnelSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4 w-full max-w-[280px]"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0px hsla(270,80%,55%,0)",
                          "0 0 16px hsla(270,80%,55%,0.12)",
                          "0 0 0px hsla(270,80%,55%,0)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-md`}
                    >
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </motion.div>
                    <div className="text-left">
                      <span className="text-[10px] font-bold text-primary/50 tracking-widest uppercase">
                        Step {i + 1}
                      </span>
                      <p className="text-sm font-semibold text-foreground leading-tight">{step.label}</p>
                      <p className="text-xs text-muted-foreground">{step.sub}</p>
                    </div>
                  </motion.div>

                  {/* Vertical connector */}
                  {i < funnelSteps.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <svg width="6" height="32" viewBox="0 0 6 32">
                        <line x1="3" y1="0" x2="3" y2="24" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.12" />
                        <polygon points="0,22 3,30 6,22" fill="hsl(var(--primary))" fillOpacity="0.2" />
                        {revealed && (
                          <motion.circle
                            cx="3" r="2"
                            fill="hsl(var(--primary))"
                            animate={{ cy: [0, 28], opacity: [0, 0.5, 0.5, 0] }}
                            transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity, ease: "linear" }}
                          />
                        )}
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
