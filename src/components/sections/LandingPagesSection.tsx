import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FlowLine from "@/components/FlowLine";
import { Monitor, ArrowRight } from "lucide-react";

const pages = [
  { title: "Custom Furniture Solutions", color: "from-primary/10 to-violet-50" },
  { title: "Enterprise SaaS Platform", color: "from-blue-50 to-sky-50" },
  { title: "Manufacturing Services", color: "from-emerald-50 to-teal-50" },
  { title: "Consulting & Advisory", color: "from-amber-50 to-orange-50" },
];

const LandingPagesSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-16 md:py-24">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-5xl mx-auto px-4`}>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 06</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4 text-foreground">
            Custom Landing Pages
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Fully qualified prospects are sent to landing pages designed specifically for your product or service
          </p>
        </div>

        {/* Horizontal scrolling landing pages */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={revealed ? { x: [0, -200, 0] } : {}}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            {[...pages, ...pages].map((page, i) => (
              <div
                key={i}
                className={`glass-strong rounded-xl p-4 min-w-[240px] md:min-w-[280px] flex-shrink-0`}
              >
                <div className={`h-28 rounded-lg bg-gradient-to-br ${page.color} flex items-center justify-center mb-3`}>
                  <Monitor className="w-8 h-8 text-primary/30" />
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">{page.title}</div>
                <div className="h-2 bg-muted rounded w-3/4 mb-1" />
                <div className="h-2 bg-muted/60 rounded w-1/2" />
                <div className="mt-3 flex items-center gap-1 text-xs text-primary font-medium">
                  Book a Meeting <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <FlowLine />
    </section>
  );
};

export default LandingPagesSection;
