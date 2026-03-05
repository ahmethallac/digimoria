import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";

const initialStages = [
  {
    title: "Contacted",
    color: "bg-blue-50 border-blue-200",
    dot: "bg-blue-400",
    cards: [
      { name: "Thomas W.", company: "Weber GmbH" },
      { name: "Marie D.", company: "Dupont Design" },
    ],
  },
  {
    title: "Meeting Scheduled",
    color: "bg-violet-50 border-violet-200",
    dot: "bg-violet-400",
    cards: [
      { name: "James C.", company: "Carter & Co" },
      { name: "Elena R.", company: "Rossi Int." },
    ],
  },
  {
    title: "Proposal Sent",
    color: "bg-amber-50 border-amber-200",
    dot: "bg-amber-400",
    cards: [
      { name: "Hans M.", company: "Müller AG" },
    ],
  },
  {
    title: "Follow Up",
    color: "bg-emerald-50 border-emerald-200",
    dot: "bg-emerald-400",
    cards: [
      { name: "Sarah K.", company: "Kraft Ltd" },
    ],
  },
];

const CRMPipelineSection = () => {
  const { ref, revealed } = useScrollReveal();
  const [stages, setStages] = useState(initialStages);
  const [movingCard, setMovingCard] = useState<{ stageIdx: number; cardIdx: number } | null>(null);

  // Auto-move cards between stages
  useEffect(() => {
    if (!revealed) return;
    const interval = setInterval(() => {
      setStages(prev => {
        const fromIdx = Math.floor(Math.random() * 3); // don't pick last
        const from = prev[fromIdx];
        if (from.cards.length === 0) return prev;
        const cardIdx = 0;
        const card = from.cards[cardIdx];
        setMovingCard({ stageIdx: fromIdx, cardIdx });
        setTimeout(() => setMovingCard(null), 600);
        const updated = prev.map((s, i) => {
          if (i === fromIdx) return { ...s, cards: s.cards.filter((_, ci) => ci !== cardIdx) };
          if (i === fromIdx + 1) return { ...s, cards: [...s.cards, card] };
          return s;
        });
        return updated;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [revealed]);

  return (
    <section className="relative py-6 md:py-10">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-5">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">Stage 08</span>
          <h2 className="text-xl md:text-3xl font-bold font-display mt-1.5 mb-2 text-foreground">
            CRM Pipeline
          </h2>
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            Every morning your dashboard shows leads automatically organized. No manual work required.
          </p>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-[550px]">
            {stages.map((stage, si) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 15 }}
                animate={revealed ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: si * 0.12 }}
                className={`flex-1 rounded-xl p-2.5 border ${stage.color}`}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${stage.dot}`} />
                  <span className="text-[10px] font-semibold text-foreground">{stage.title}</span>
                  <span className="ml-auto text-[9px] text-muted-foreground">{stage.cards.length}</span>
                </div>
                <div className="space-y-1.5 min-h-[60px]">
                  {stage.cards.map((card, ci) => (
                    <motion.div
                      key={card.name}
                      layout
                      initial={{ opacity: 0, x: si > 0 ? -10 : 0 }}
                      animate={{
                        opacity: movingCard?.stageIdx === si && movingCard?.cardIdx === ci ? 0.4 : 1,
                        x: 0,
                        scale: movingCard?.stageIdx === si && movingCard?.cardIdx === ci ? 0.95 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-background rounded-lg p-2 shadow-sm border border-border/40"
                    >
                      <div className="text-[10px] font-medium text-foreground">{card.name}</div>
                      <div className="text-[8px] text-muted-foreground">{card.company}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0.7, 0] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="flex items-center justify-center mt-2 text-[9px] text-primary font-medium"
          >
            ← Cards move automatically between stages →
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CRMPipelineSection;
