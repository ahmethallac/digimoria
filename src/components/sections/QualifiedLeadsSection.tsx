import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FlowLine from "@/components/FlowLine";
import { Shield } from "lucide-react";

const QualifiedLeadsSection = () => {
  const { ref, revealed } = useScrollReveal();

  const leads = [
    { name: "Sarah K.", score: 97 },
    { name: "James M.", score: 94 },
    { name: "Elena R.", score: 91 },
    { name: "David L.", score: 89 },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-4xl mx-auto px-4 text-center`}>
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 05</span>
        <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4 text-foreground">
          Qualified Leads
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-12">
          AI filters real prospects — only verified candidates move forward
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {revealed && leads.map((lead, i) => (
            <motion.div
              key={lead.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass-strong rounded-2xl p-5 w-36 animate-node-pulse"
            >
              <Shield className="w-8 h-8 text-primary/60 mx-auto mb-2" />
              <div className="text-sm font-semibold text-foreground">{lead.name}</div>
              <div className="text-xs text-primary mt-1">{lead.score}% match</div>
            </motion.div>
          ))}
        </div>
      </div>

      <FlowLine />
    </section>
  );
};

export default QualifiedLeadsSection;
