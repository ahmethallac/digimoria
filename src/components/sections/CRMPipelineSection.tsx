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
  { name: "Marie D.", company: "Dupont Design" }]

},
{
  title: "Meeting Scheduled",
  color: "bg-violet-50 border-violet-200",
  dot: "bg-violet-400",
  cards: [
  { name: "James C.", company: "Carter & Co" },
  { name: "Elena R.", company: "Rossi Int." }]

},
{
  title: "Proposal Sent",
  color: "bg-amber-50 border-amber-200",
  dot: "bg-amber-400",
  cards: [
  { name: "Hans M.", company: "Müller AG" }]

},
{
  title: "Follow Up",
  color: "bg-emerald-50 border-emerald-200",
  dot: "bg-emerald-400",
  cards: [
  { name: "Sarah K.", company: "Kraft Ltd" }]

}];


const CRMPipelineSection = () => {
  const { ref, revealed } = useScrollReveal();
  const [stages, setStages] = useState(initialStages);
  const [movingCard, setMovingCard] = useState<{stageIdx: number;cardIdx: number;} | null>(null);

  useEffect(() => {
    if (!revealed) return;
    const interval = setInterval(() => {
      setStages((prev) => {
        // Find stages that have cards
        const nonEmpty = prev.map((s, i) => ({ idx: i, count: s.cards.length })).filter(s => s.count > 0);
        if (nonEmpty.length === 0) return prev;

        // Pick a random non-empty stage
        const source = nonEmpty[Math.floor(Math.random() * nonEmpty.length)];
        const fromIdx = source.idx;

        // Pick a random different destination (can go forward or backward)
        const possibleTargets = prev.map((_, i) => i).filter(i => i !== fromIdx);
        const toIdx = possibleTargets[Math.floor(Math.random() * possibleTargets.length)];

        const cardIdx = Math.floor(Math.random() * prev[fromIdx].cards.length);
        const card = prev[fromIdx].cards[cardIdx];

        setMovingCard({ stageIdx: fromIdx, cardIdx });
        setTimeout(() => setMovingCard(null), 600);

        const updated = prev.map((s, i) => {
          if (i === fromIdx) return { ...s, cards: s.cards.filter((_, ci) => ci !== cardIdx) };
          if (i === toIdx) return { ...s, cards: [...s.cards, card] };
          return s;
        });
        return updated;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [revealed]);

  return (
    <section className="relative py-8 md:py-12">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 07</span>
          <h2 className="text-2xl md:text-4xl font-bold font-display mt-2 mb-2.5 text-foreground">
            CRM Pipeline
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Track the entire process from a <b>single panel</b> built specifically for you. Chatbot conversations, ad statistics, messages, and comments are collected in one place, so you <b>don't need</b> any additional <b>CRM tools</b>. When you <b>wake up</b>, you can see which customers were contacted, which meetings took place, and which sales were completed — all <b>automatically</b> updated in your CRM by <b>AI automations</b> running <b>24 hours</b> a day.
          </p>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex gap-3 min-w-[640px]">
            {stages.map((stage, si) =>
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 15 }}
              animate={revealed ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: si * 0.12 }}
              className={`flex-1 rounded-xl p-3.5 border ${stage.color}`}>
              
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full ${stage.dot}`} />
                  <span className="text-sm font-semibold text-foreground">{stage.title}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{stage.cards.length}</span>
                </div>
                <div className="space-y-2 min-h-[80px]">
                  {stage.cards.map((card, ci) =>
                <motion.div
                  key={card.name}
                  layout
                  initial={{ opacity: 0, x: si > 0 ? -10 : 0 }}
                  animate={{
                    opacity: movingCard?.stageIdx === si && movingCard?.cardIdx === ci ? 0.4 : 1,
                    x: 0,
                    scale: movingCard?.stageIdx === si && movingCard?.cardIdx === ci ? 0.95 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-background rounded-lg p-2.5 shadow-sm border border-border/40">
                  
                      <div className="text-sm font-medium text-foreground">{card.name}</div>
                      <div className="text-xs text-muted-foreground">{card.company}</div>
                    </motion.div>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {revealed &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0.7, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="flex items-center justify-center mt-3 text-xs text-primary font-medium">
          
            ← Cards move automatically between stages →
          </motion.div>
        }
      </div>
    </section>);

};

export default CRMPipelineSection;
