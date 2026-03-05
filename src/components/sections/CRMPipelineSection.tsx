import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FlowLine from "@/components/FlowLine";
import { ArrowRight } from "lucide-react";

const stages = [
  { label: "Contacted", count: 48, cards: ["Acme Corp", "Beta Inc", "Gamma Ltd"] },
  { label: "Meeting Scheduled", count: 32, cards: ["Delta Co", "Epsilon SA"] },
  { label: "Proposal Sent", count: 18, cards: ["Zeta GmbH"] },
  { label: "Follow Up", count: 12, cards: ["Eta LLC", "Theta AG"] },
];

const CRMPipelineSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-16 md:py-24">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-5xl mx-auto px-4`}>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 08</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4 text-foreground">
            CRM Pipeline
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every morning your dashboard shows leads automatically organized by stage. No manual work required.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch">
          {revealed && stages.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex-1 min-w-0 relative"
            >
              <div className="glass-strong rounded-xl p-4 h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-foreground">{stage.label}</div>
                  <div className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">{stage.count}</div>
                </div>
                <div className="space-y-2">
                  {stage.cards.map((card, j) => (
                    <motion.div
                      key={card}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 + j * 0.1 + 0.5 }}
                      className="bg-background rounded-lg p-2.5 border border-border text-xs text-foreground/70 shadow-sm"
                    >
                      {card}
                    </motion.div>
                  ))}
                </div>
              </div>
              {i < stages.length - 1 && (
                <div className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-primary/30" />
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
