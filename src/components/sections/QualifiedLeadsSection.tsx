import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, TrendingUp, Zap, Target } from "lucide-react";

const QualifiedLeadsSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-6 md:py-10">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 text-center`}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">Stage 05</span>
        <h2 className="text-xl md:text-3xl font-bold font-display mt-1.5 mb-2 text-foreground">
          Same Budget — 30× More Qualified Meetings
        </h2>
        <p className="text-xs text-muted-foreground max-w-md mx-auto mb-6">
          See the difference between traditional advertising and DigiMoria's intelligent system
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={revealed ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-strong rounded-2xl p-4 text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-muted/30 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold mb-3">Traditional Advertising</div>
            
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <Users className="w-3.5 h-3.5 text-muted-foreground" />
                <div className="flex-1">
                  <div className="text-[9px] text-muted-foreground">Leads Generated</div>
                  <div className="text-base font-bold text-foreground">~50</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Target className="w-3.5 h-3.5 text-muted-foreground" />
                <div className="flex-1">
                  <div className="text-[9px] text-muted-foreground">Qualified Rate</div>
                  <div className="text-base font-bold text-foreground">5%</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
                <div className="flex-1">
                  <div className="text-[9px] text-muted-foreground">Meetings Booked</div>
                  <div className="text-base font-bold text-foreground">2-3</div>
                </div>
              </div>
            </div>

            <div className="flex gap-1.5 mt-3 pt-2.5 border-t border-border">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/15" />
                </div>
              ))}
              <div className="flex items-center text-[8px] text-muted-foreground ml-1.5">Low quality leads</div>
            </div>
          </motion.div>

          {/* DigiMoria */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={revealed ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="glass-strong rounded-2xl p-4 text-left relative overflow-hidden border-primary/20"
            style={{ boxShadow: "0 0 30px hsla(270, 80%, 55%, 0.06)" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="flex items-center gap-1.5 mb-3">
              <div className="text-[9px] uppercase tracking-wider text-primary font-semibold">DigiMoria System</div>
              <Zap className="w-3 h-3 text-primary" />
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <Users className="w-3.5 h-3.5 text-primary" />
                <div className="flex-1">
                  <div className="text-[9px] text-muted-foreground">Leads Generated</div>
                  <div className="text-base font-bold text-foreground">1,500+</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Target className="w-3.5 h-3.5 text-primary" />
                <div className="flex-1">
                  <div className="text-[9px] text-muted-foreground">Qualified Rate</div>
                  <div className="text-base font-bold text-primary">68%</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-3.5 h-3.5 text-primary" />
                <div className="flex-1">
                  <div className="text-[9px] text-muted-foreground">Meetings Booked</div>
                  <div className="text-base font-bold text-primary">90+</div>
                </div>
              </div>
            </div>

            <div className="flex gap-1 mt-3 pt-2.5 border-t border-primary/10 overflow-hidden">
              {revealed && Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/25" />
                </motion.div>
              ))}
              <div className="flex items-center text-[8px] text-primary font-medium ml-1">+82</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualifiedLeadsSection;
