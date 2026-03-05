import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, MousePointer2, Globe } from "lucide-react";

const pages = [
  {
    title: "Custom Furniture Solutions",
    subtitle: "Premium B2B manufacturing for retailers",
    cta: "Book a Demo",
    gradient: "from-violet-100 via-purple-50 to-violet-100",
    accent: "bg-violet-500",
  },
  {
    title: "Enterprise SaaS Platform",
    subtitle: "Scale your business with AI automation",
    cta: "Get Started",
    gradient: "from-blue-100 via-sky-50 to-blue-100",
    accent: "bg-blue-500",
  },
  {
    title: "Manufacturing Services",
    subtitle: "Industrial-grade production solutions",
    cta: "Request Quote",
    gradient: "from-emerald-100 via-teal-50 to-emerald-100",
    accent: "bg-emerald-500",
  },
  {
    title: "Consulting & Advisory",
    subtitle: "Expert strategy for growth companies",
    cta: "Schedule Call",
    gradient: "from-amber-100 via-orange-50 to-amber-100",
    accent: "bg-amber-500",
  },
];

const LandingPagesSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-6 md:py-10">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-5">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">Stage 06</span>
          <h2 className="text-xl md:text-2xl font-bold font-display mt-1.5 mb-2 text-foreground">
            Custom Landing Pages
          </h2>
          <p className="text-[10px] text-muted-foreground max-w-xs mx-auto">
            Qualified prospects land on pages designed for your product
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <motion.div
            className="flex gap-2.5"
            animate={revealed ? { x: [0, -240, 0] } : {}}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          >
            {[...pages, ...pages].map((page, i) => (
              <div key={i} className="glass-strong rounded-xl overflow-hidden min-w-[180px] flex-shrink-0">
                {/* Browser chrome */}
                <div className="flex items-center gap-1 px-2.5 py-1.5 border-b border-border bg-secondary/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-300" />
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  <div className="flex-1 mx-2 h-3.5 rounded bg-secondary flex items-center px-1.5">
                    <Globe className="w-2 h-2 text-muted-foreground/40" />
                  </div>
                </div>
                {/* Page content */}
                <div className={`h-16 bg-gradient-to-br ${page.gradient} flex items-center justify-center relative`}>
                  <div className={`w-8 h-1 ${page.accent} rounded opacity-30`} />
                  {i === 1 && (
                    <motion.div
                      animate={revealed ? { x: [20, 0], y: [15, 0], opacity: [0, 1] } : {}}
                      transition={{ delay: 2.5, duration: 0.6 }}
                      className="absolute bottom-1.5 right-1.5"
                    >
                      <MousePointer2 className="w-2.5 h-2.5 text-foreground/30" />
                    </motion.div>
                  )}
                </div>
                <div className="p-2.5">
                  <div className="text-[10px] font-semibold text-foreground mb-0.5">{page.title}</div>
                  <div className="text-[8px] text-muted-foreground mb-1.5">{page.subtitle}</div>
                  <div className="h-1 bg-muted rounded w-3/4 mb-1" />
                  <div className="h-1 bg-muted/50 rounded w-1/2 mb-2" />
                  <div className="flex items-center gap-0.5 text-[8px] text-primary font-medium">
                    {page.cta} <ArrowRight className="w-2 h-2" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingPagesSection;
