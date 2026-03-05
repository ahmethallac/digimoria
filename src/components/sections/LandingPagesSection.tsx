import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FlowLine from "@/components/FlowLine";
import { Monitor, CalendarDays } from "lucide-react";

const LandingPagesSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-20 md:py-32">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-4xl mx-auto px-4`}>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Stage 05</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4 glow-text-blue">
            Custom Landing Pages
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Prospects arrive on tailored, conversion-optimized pages
          </p>
        </div>

        {/* Mini landing page mockup */}
        <div className="glass-strong rounded-2xl p-4 md:p-6 max-w-lg mx-auto glow-blue">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-destructive/60" />
            <div className="w-2 h-2 rounded-full bg-accent/60" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="flex-1 ml-2 h-5 bg-muted/30 rounded-md flex items-center px-2">
              <span className="text-[10px] text-muted-foreground">digimoria.com/solution</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-24 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl flex items-center justify-center">
              <Monitor className="w-10 h-10 text-primary/50" />
            </div>
            <div className="h-3 bg-muted/30 rounded w-3/4" />
            <div className="h-3 bg-muted/20 rounded w-1/2" />

            {/* Calendar pick animation */}
            {revealed && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass rounded-xl p-3 mt-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CalendarDays className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-foreground">Select a Time</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["10:00", "11:30", "14:00", "15:30", "16:00", "17:30"].map((time, i) => (
                    <motion.div
                      key={time}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      className={`text-[10px] text-center py-1.5 rounded-lg cursor-pointer transition-colors ${
                        i === 2
                          ? "bg-accent text-accent-foreground font-semibold"
                          : "bg-muted/30 text-muted-foreground hover:bg-primary/20"
                      }`}
                    >
                      {time}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <FlowLine />
    </section>
  );
};

export default LandingPagesSection;
