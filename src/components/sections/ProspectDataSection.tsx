import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FlowLine from "@/components/FlowLine";
import { Globe, Database, Users, TrendingUp } from "lucide-react";

const ProspectDataSection = () => {
  const { ref, revealed } = useScrollReveal();

  const nodes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: 15 + Math.random() * 70,
    y: 15 + Math.random() * 70,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative py-16 md:py-24">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-5xl mx-auto px-4`}>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 03</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4 text-foreground">
            Global Prospect Data Engine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We maintain a massive data network with access to more than 60 million decision makers across platforms such as Google Maps and LinkedIn. Our automation systems extract contacts matching your ideal customer profile.
          </p>
        </div>

        {/* Data Cloud Visualization */}
        <div className="glass-strong rounded-2xl p-6 md:p-8 max-w-2xl mx-auto relative overflow-hidden" style={{ minHeight: 250 }}>
          {/* Animated nodes */}
          {revealed && nodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute rounded-full bg-primary/30"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: node.size,
                height: node.size,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.8, 0.4], scale: [0, 1.2, 1] }}
              transition={{ duration: 2, delay: node.delay, repeat: Infinity, repeatDelay: 3 }}
            />
          ))}

          {/* Center stats */}
          <div className="relative z-10 flex flex-col items-center justify-center py-8">
            <Database className="w-10 h-10 text-primary/60 mb-4" />
            <div className="text-4xl md:text-5xl font-bold font-display text-foreground">60M+</div>
            <div className="text-sm text-muted-foreground mt-1">Decision Makers</div>
          </div>

          {/* Source badges */}
          <div className="relative z-10 flex flex-wrap justify-center gap-3 mt-2">
            {[
              { icon: <Globe className="w-3.5 h-3.5" />, label: "Google Maps" },
              { icon: <Users className="w-3.5 h-3.5" />, label: "LinkedIn" },
              { icon: <Database className="w-3.5 h-3.5" />, label: "B2B Databases" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={revealed ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.2 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs text-foreground/70 font-medium"
              >
                {s.icon}
                {s.label}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Monthly stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={revealed ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground"
        >
          <TrendingUp className="w-4 h-4 text-primary" />
          <span>At least <strong className="text-foreground">10,000 new prospects</strong> added to your pool every month — without advertising</span>
        </motion.div>
      </div>

      <FlowLine />
    </section>
  );
};

export default ProspectDataSection;
