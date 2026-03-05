import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FlowLine from "@/components/FlowLine";

const avatarColors = [
  "bg-primary/20 text-primary",
  "bg-pink-100 text-pink-600",
  "bg-blue-100 text-blue-600",
  "bg-amber-100 text-amber-600",
  "bg-emerald-100 text-emerald-600",
  "bg-violet-100 text-violet-600",
  "bg-rose-100 text-rose-600",
  "bg-sky-100 text-sky-600",
  "bg-orange-100 text-orange-600",
  "bg-teal-100 text-teal-600",
  "bg-indigo-100 text-indigo-600",
  "bg-fuchsia-100 text-fuchsia-600",
];

const names = ["SK", "JM", "ER", "DL", "MB", "AK", "LS", "TW", "NR", "CP", "HG", "FT"];

const ContactsPoolSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-16 md:py-24">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-5xl mx-auto px-4`}>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 02</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4 text-foreground">
            Contacts Pool
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            All leads merge into one centralized intelligence hub
          </p>
        </div>

        {/* Pool Panel */}
        <div className="glass-strong rounded-2xl p-6 md:p-10 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="text-xs text-muted-foreground ml-2 font-display">DigiMoria Contacts Pool</span>
          </div>
          
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
            {revealed && names.map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-xl p-3 flex items-center justify-center text-xs font-bold ${avatarColors[i % avatarColors.length]}`}
              >
                {name}
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="flex gap-6 mt-6 pt-4 border-t border-border">
            <div>
              <div className="text-lg font-bold font-display text-foreground">2,847</div>
              <div className="text-xs text-muted-foreground">Total Contacts</div>
            </div>
            <div>
              <div className="text-lg font-bold font-display text-primary">+127</div>
              <div className="text-xs text-muted-foreground">Today</div>
            </div>
            <div>
              <div className="text-lg font-bold font-display text-foreground">89%</div>
              <div className="text-xs text-muted-foreground">Match Rate</div>
            </div>
          </div>
        </div>
      </div>

      <FlowLine />
    </section>
  );
};

export default ContactsPoolSection;
