import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const initialStages = [
  {
    title: "Contacted",
    columnClass: "stage-crm-blue",
    cards: [
      { name: "Thomas W.", company: "Weber GmbH" },
      { name: "Marie D.", company: "Dupont Design" },
    ],
  },
  {
    title: "Meeting Scheduled",
    columnClass: "stage-crm-violet",
    cards: [
      { name: "James C.", company: "Carter & Co" },
      { name: "Elena R.", company: "Rossi Int." },
    ],
  },
  {
    title: "Proposal Sent",
    columnClass: "stage-crm-amber",
    cards: [{ name: "Hans M.", company: "Muller AG" }],
  },
  {
    title: "Follow Up",
    columnClass: "stage-crm-emerald",
    cards: [{ name: "Sarah K.", company: "Kraft Ltd" }],
  },
];

const CRMPipelineSection = () => {
  const { ref, revealed } = useScrollReveal();
  const [stages, setStages] = useState(initialStages);
  const [movingCard, setMovingCard] = useState<{ stageIdx: number; cardIdx: number } | null>(null);

  useEffect(() => {
    if (!revealed) return;
    const interval = setInterval(() => {
      setStages((prev) => {
        const nonEmpty = prev.map((stage, idx) => ({ idx, count: stage.cards.length })).filter((stage) => stage.count > 0);
        if (nonEmpty.length === 0) return prev;

        const source = nonEmpty[Math.floor(Math.random() * nonEmpty.length)];
        const fromIdx = source.idx;
        const possibleTargets = prev.map((_, idx) => idx).filter((idx) => idx !== fromIdx);
        const toIdx = possibleTargets[Math.floor(Math.random() * possibleTargets.length)];
        const cardIdx = Math.floor(Math.random() * prev[fromIdx].cards.length);
        const card = prev[fromIdx].cards[cardIdx];

        setMovingCard({ stageIdx: fromIdx, cardIdx });
        window.setTimeout(() => setMovingCard(null), 600);

        return prev.map((stage, idx) => {
          if (idx === fromIdx) return { ...stage, cards: stage.cards.filter((_, currentIdx) => currentIdx !== cardIdx) };
          if (idx === toIdx) return { ...stage, cards: [...stage.cards, card] };
          return stage;
        });
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [revealed]);

  return (
    <section id="crm-pipeline" className="relative w-full py-8 md:py-10">
      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-6 md:grid-cols-[0.82fr_1.18fr] md:px-10`}
      >
        <div className="text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b9abff]">Stage 07</span>
          <h2 className="mt-3 mb-4 font-display text-3xl font-bold text-white md:text-4xl">CRM Pipeline</h2>
          <p className="stage-desc mx-auto max-w-xl text-sm leading-7 md:mx-0 md:text-[15px]">
            Track the entire process from a <b>single panel</b> built specifically for you. Chatbot conversations,
            ad statistics, messages, and comments are collected in one place, so you <b>don&apos;t need</b> any
            additional <b>CRM tools</b>. When you <b>wake up</b>, you can see which customers were contacted, which
            meetings took place, and which sales were completed - all <b>automatically</b> updated in your CRM by{" "}
            <b>AI automations</b> running <b>24 hours</b> a day.
          </p>
        </div>

        <div className="stage-crm-board overflow-x-auto pb-2">
          <div className="flex min-w-[680px] gap-4 md:gap-5">
            {stages.map((stage, stageIdx) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 18, rotateX: 7 }}
                animate={revealed ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: stageIdx * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={`stage-crm-column flex-1 rounded-2xl border p-4 ${stage.columnClass}`}
              >
                <div className="mb-4 flex items-center gap-2">
                  <div className="stage-crm-dot" />
                  <span className="text-sm font-semibold text-white">{stage.title}</span>
                  <span className="ml-auto rounded-full bg-white/8 px-2 py-0.5 text-xs text-white/54">
                    {stage.cards.length}
                  </span>
                </div>
                <div className="min-h-[92px] space-y-2.5">
                  {stage.cards.map((card, cardIdx) => (
                    <motion.div
                      key={`${card.name}-${cardIdx}`}
                      layout
                      initial={{ opacity: 0, x: stageIdx > 0 ? -10 : 0 }}
                      animate={{
                        opacity: movingCard?.stageIdx === stageIdx && movingCard?.cardIdx === cardIdx ? 0.4 : 1,
                        x: 0,
                        scale: movingCard?.stageIdx === stageIdx && movingCard?.cardIdx === cardIdx ? 0.95 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="rounded-xl border border-white/10 bg-[#0c0a16]/88 p-3 shadow-[0_10px_28px_rgba(0,0,0,0.24)]"
                    >
                      <div className="text-sm font-medium text-white">{card.name}</div>
                      <div className="text-xs text-white/50">{card.company}</div>
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
            animate={{ opacity: [0, 0.72, 0.72, 0] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="mt-4 flex items-center justify-center text-xs font-medium text-[#b9abff]"
          >
            Cards move automatically between stages
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CRMPipelineSection;
