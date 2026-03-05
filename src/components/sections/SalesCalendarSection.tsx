import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { CalendarCheck, ArrowRight } from "lucide-react";

const SalesCalendarSection = () => {
  const { ref, revealed } = useScrollReveal();

  const meetings = [
    { time: "09:00", name: "Sarah K. — Discovery Call" },
    { time: "10:30", name: "James M. — Product Demo" },
    { time: "13:00", name: "Elena R. — Strategy Session" },
    { time: "14:30", name: "David L. — Proposal Review" },
    { time: "16:00", name: "Michael B. — Closing Call" },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(270,80%,55%,0.03)_0%,_transparent_50%)]" />

      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-4xl mx-auto px-4 text-center`}>
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Final Result</span>
        <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-3 text-foreground">
          Your Sales Team Only Focuses<br className="hidden md:block" /> on Real Meetings
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          DigiMoria automatically transforms traffic into scheduled sales meetings.
        </p>

        <div className="glass-strong rounded-2xl p-4 md:p-5 max-w-md mx-auto mb-10 text-left">
          <div className="flex items-center gap-2 mb-3">
            <CalendarCheck className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold font-display text-foreground">Today's Schedule</span>
            <span className="ml-auto text-[10px] text-muted-foreground">March 5, 2026</span>
          </div>
          <div className="space-y-1.5">
            {revealed && meetings.map((m, i) => (
              <motion.div
                key={m.time}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12 + 0.3 }}
                className="flex items-center gap-3 p-2 rounded-lg bg-secondary hover:bg-primary/5 transition-colors"
              >
                <span className="text-[10px] font-mono text-primary w-10">{m.time}</span>
                <div className="w-0.5 h-5 rounded-full bg-primary/30" />
                <span className="text-xs text-foreground/80">{m.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold font-display text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/15"
          >
            Start Automating <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SalesCalendarSection;
