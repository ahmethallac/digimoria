import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  BarChart3,
  Settings2,
  Globe,
  Sparkles,
  Bot,
  Database,
  Terminal,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "AI-Powered Digital Performance",
    description:
      "Data-driven campaigns that scale. We combine AI with performance marketing to maximize your ROAS across every channel.",
    gradient: "from-primary to-neon-blue",
  },
  {
    icon: Settings2,
    title: "Custom AI Automation Solutions",
    description:
      "Bespoke automation systems tailored to your workflows — from lead handling to internal operations, fully automated.",
    gradient: "from-neon-blue to-primary",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-converting, lightning-fast websites built with modern stacks. From landing pages to full-scale platforms.",
    gradient: "from-primary to-neon-blue",
  },
  {
    icon: Sparkles,
    title: "AI Content Production",
    description:
      "Scalable, on-brand content generated and optimized by AI — blogs, creatives, videos, and social assets at speed.",
    gradient: "from-neon-blue to-primary",
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Intelligent agents that handle support, sales, and operations autonomously — working 24/7 for your business.",
    gradient: "from-primary to-neon-blue",
  },
  {
    icon: Database,
    title: "Full AI System Infrastructure",
    description:
      "End-to-end AI architecture — from cloud setup and APIs to data pipelines and model deployment.",
    gradient: "from-neon-blue to-primary",
  },
  {
    icon: Terminal,
    title: "Vibe Coding Software Solutions",
    description:
      "Rapid, AI-accelerated software development. We ship MVPs and production apps faster with vibe-coding workflows.",
    gradient: "from-primary to-neon-blue",
  },
];

const ServicesSection = () => {
  const { ref, revealed } = useScrollReveal(0.1);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,_hsla(270,80%,55%,0.05)_0%,_transparent_70%)]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-[1.05] tracking-tight mb-4">
            <span className="text-foreground">Everything your business </span>
            <span className="font-editorial italic font-normal text-gradient-premium">
              needs to scale
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are not just a tool — we are a full-service <b>digital agency</b> powered by <b>AI</b>. From strategy to execution, we cover every layer of growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative"
              >
                <div className="ring-gradient glass-strong rounded-2xl p-6 md:p-7 h-full border border-border/40 group-hover:shadow-glow-premium transition-all duration-300">
                  {/* Gradient top border on hover */}
                  <div
                    className={`absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-accent to-neon-blue flex items-center justify-center mb-5 shadow-[0_8px_20px_-6px_hsla(270,80%,55%,0.45)]">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent" />
                    <Icon className="relative w-5 h-5 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base md:text-lg font-semibold font-display text-foreground mb-2 leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Not sure which service fits your needs?
          </p>
          <a
            href="/contact"
            className="btn-premium inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
