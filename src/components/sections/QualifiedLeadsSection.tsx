import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, TrendingUp, Zap, Target } from "lucide-react";

const QualifiedLeadsSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-10 md:py-16">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 text-center`}>
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 05</span>
        <h2 className="text-2xl md:text-4xl font-bold font-display mt-2 mb-3 text-foreground">
          Same Budget — 30× More Qualified Meetings
        </h2>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-10">
          See the difference between traditional advertising and DigiMoria's intelligent system
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={revealed ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-strong rounded-2xl p-6 text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-muted/40 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">Traditional Advertising</div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Leads Generated</div>
                  <div className="text-lg font-bold text-foreground">~50</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Qualified Rate</div>
                  <div className="text-lg font-bold text-foreground">5%</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Meetings Booked</div>
                  <div className="text-lg font-bold text-foreground">2-3</div>
                </div>
              </div>
            </div>

            {/* Sad lead indicators */}
            <div className="flex gap-2 mt-4 pt-3 border-t border-border">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-muted-foreground/20" />
                </div>
              ))}
              <div className="flex items-center text-[10px] text-muted-foreground ml-2">Low quality leads</div>
            </div>
          </motion.div>

          {/* DigiMoria */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={revealed ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="glass-strong rounded-2xl p-6 text-left relative overflow-hidden border-primary/20"
            style={{ boxShadow: "0 0 40px hsla(270, 80%, 55%, 0.08)" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="flex items-center gap-2 mb-4">
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">DigiMoria System</div>
              <Zap className="w-3.5 h-3.5 text-primary" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-primary" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Leads Generated</div>
                  <div className="text-lg font-bold text-foreground">1,500+</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-4 h-4 text-primary" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Qualified Rate</div>
                  <div className="text-lg font-bold text-primary">68%</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-primary" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Meetings Booked</div>
                  <div className="text-lg font-bold text-primary">90+</div>
                </div>
              </div>
            </div>

            {/* Animated leads flowing */}
            <div className="flex gap-1.5 mt-4 pt-3 border-t border-primary/10 overflow-hidden">
              {revealed && Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center animate-node-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-primary/30" />
                </motion.div>
              ))}
              <div className="flex items-center text-[10px] text-primary font-medium ml-1">+82 more</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualifiedLeadsSection;
