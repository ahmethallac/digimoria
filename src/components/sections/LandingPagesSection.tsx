import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Monitor, ArrowRight, MousePointer2 } from "lucide-react";

const pages = [
  { title: "Custom Furniture Solutions", cta: "Book a Demo", color: "from-violet-50 to-purple-50" },
  { title: "Enterprise SaaS Platform", cta: "Get Started", color: "from-blue-50 to-sky-50" },
  { title: "Manufacturing Services", cta: "Request Quote", color: "from-emerald-50 to-teal-50" },
  { title: "Consulting & Advisory", cta: "Schedule Call", color: "from-amber-50 to-orange-50" },
];

const LandingPagesSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-10 md:py-16">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 06</span>
          <h2 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-3 text-foreground">
            Custom Landing Pages
          </h2>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            Qualified prospects land on pages designed for your product
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <motion.div
            className="flex gap-3"
            animate={revealed ? { x: [0, -280, 0] } : {}}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            {[...pages, ...pages].map((page, i) => (
              <div key={i} className="glass-strong rounded-xl p-3 min-w-[200px] flex-shrink-0">
                <div className={`h-20 rounded-lg bg-gradient-to-br ${page.color} flex items-center justify-center mb-2 relative`}>
                  <Monitor className="w-6 h-6 text-primary/20" />
                  {i === 1 && (
                    <motion.div
                      animate={revealed ? { x: [30, 0], y: [20, 0], opacity: [0, 1] } : {}}
                      transition={{ delay: 2, duration: 0.8 }}
                      className="absolute bottom-2 right-2"
                    >
                      <MousePointer2 className="w-3 h-3 text-foreground/40" />
                    </motion.div>
                  )}
                </div>
                <div className="text-[11px] font-semibold text-foreground mb-1">{page.title}</div>
                <div className="h-1.5 bg-muted rounded w-3/4 mb-1" />
                <div className="h-1.5 bg-muted/60 rounded w-1/2 mb-2" />
                <div className="flex items-center gap-1 text-[9px] text-primary font-medium">
                  {page.cta} <ArrowRight className="w-2.5 h-2.5" />
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
