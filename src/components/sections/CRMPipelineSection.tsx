import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FlowLine from "@/components/FlowLine";
import { ArrowRight } from "lucide-react";

const stages = [
  { label: "Contacted", count: 48, color: "from-primary/40 to-primary/20" },
  { label: "Meeting Scheduled", count: 32, color: "from-accent/40 to-accent/20" },
  { label: "Proposal Sent", count: 18, color: "from-primary/50 to-accent/30" },
  { label: "Follow Up", count: 12, color: "from-accent/50 to-primary/30" },
];

const CRMPipelineSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsla(270,100%,20%,0.1)_0%,_transparent_60%)]" />

      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-5xl mx-auto px-4`}>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Stage 07</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4 glow-text-blue">
            CRM Pipeline
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every stage updates automatically — zero manual data entry
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch">
          {revealed && stages.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex-1 min-w-0"
            >
              <div className={`glass-strong rounded-xl p-4 h-full bg-gradient-to-b ${stage.color}`}>
                <div className="text-2xl font-bold font-display text-foreground">{stage.count}</div>
                <div className="text-xs text-muted-foreground mt-1">{stage.label}</div>
                <div className="mt-3 space-y-1.5">
                  {Array.from({ length: Math.min(stage.count / 10, 3) }, (_, j) => (
                    <motion.div
                      key={j}
                      initial={{ width: 0 }}
                      animate={revealed ? { width: "100%" } : {}}
                      transition={{ delay: i * 0.2 + j * 0.1 + 0.5 }}
                      className="h-1 bg-foreground/10 rounded-full"
                    />
                  ))}
                </div>
              </div>
              {i < stages.length - 1 && (
                <div className="hidden sm:flex justify-center py-0 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <FlowLine />
    </section>
  );
};

export default CRMPipelineSection;
