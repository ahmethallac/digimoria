import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FlowLine from "@/components/FlowLine";
import { User } from "lucide-react";

const ContactsCRMSection = () => {
  const { ref, revealed } = useScrollReveal();

  const contacts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.15,
  }));

  return (
    <section className="relative py-20 md:py-32">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-5xl mx-auto px-4`}>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Stage 02</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4 glow-text-purple">
            Contacts CRM
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            All leads merge into one centralized intelligence hub
          </p>
        </div>

        {/* CRM Dashboard Panel */}
        <div className="glass-strong rounded-2xl p-6 md:p-10 max-w-2xl mx-auto glow-purple">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <span className="text-xs text-muted-foreground ml-2 font-display">DigiMoria CRM</span>
          </div>
          
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
            {revealed && contacts.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: c.delay }}
                className="glass rounded-xl p-3 flex items-center justify-center animate-pulse-glow"
              >
                <User className="w-5 h-5 text-accent/70" />
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="flex gap-6 mt-6 pt-4 border-t border-border/30">
            <div>
              <div className="text-lg font-bold font-display text-foreground">2,847</div>
              <div className="text-xs text-muted-foreground">Total Contacts</div>
            </div>
            <div>
              <div className="text-lg font-bold font-display text-accent">+127</div>
              <div className="text-xs text-muted-foreground">Today</div>
            </div>
            <div>
              <div className="text-lg font-bold font-display text-primary">89%</div>
              <div className="text-xs text-muted-foreground">Match Rate</div>
            </div>
          </div>
        </div>
      </div>

      <FlowLine />
    </section>
  );
};

export default ContactsCRMSection;
