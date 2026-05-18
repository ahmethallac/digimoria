import { motion } from "framer-motion";
import { Sparkles, Bot, Globe, FileText, Cpu, Network, Code2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const services = [
  { icon: Sparkles, title: "AI-Powered Digital Performance", desc: "Data-driven growth campaigns supercharged by AI." },
  { icon: Bot, title: "Custom AI Automation Solutions", desc: "Tailor-made automations for your unique workflows." },
  { icon: Globe, title: "Website Development", desc: "High-performance, conversion-focused websites." },
  { icon: FileText, title: "AI Content Production", desc: "Scalable content engines powered by AI." },
  { icon: Cpu, title: "AI Agent Development", desc: "Autonomous agents that work 24/7 for your team." },
  { icon: Network, title: "Full AI System Infrastructure", desc: "End-to-end AI stacks built for your business." },
  { icon: Code2, title: "Vibe Coding Software Solutions", desc: "Rapid, AI-native software built with intent." },
];

const ServicesSection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_hsla(270,80%,55%,0.05)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground tracking-widest uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              What we build for you
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <SpotlightCard className="h-full p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-[hsl(220,90%,56%)] flex items-center justify-center shadow-md shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-[hsl(220,90%,56%)] blur-md opacity-0 group-hover:opacity-60 transition-opacity" />
                      <Icon className="relative w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-[17px] font-semibold font-display text-foreground leading-tight mb-1.5">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
