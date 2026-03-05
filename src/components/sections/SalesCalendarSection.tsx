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
    <section className="relative py-10 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(270,80%,55%,0.03)_0%,_transparent_50%)]" />

      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-3xl mx-auto px-4 text-center`}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">Final Result</span>
        <h2 className="text-2xl md:text-4xl font-bold font-display mt-2 mb-2 text-foreground">
          Your Sales Team Only Focuses<br className="hidden md:block" /> on Real Meetings
        </h2>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-8">
          DigiMoria automatically transforms traffic into scheduled sales meetings.
        </p>

        <div className="glass-strong rounded-2xl p-3 md:p-4 max-w-sm mx-auto mb-8 text-left">
          <div className="flex items-center gap-2 mb-2.5">
            <CalendarCheck className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-semibold font-display text-foreground">Today's Schedule</span>
            <span className="ml-auto text-[8px] text-muted-foreground">March 5, 2026</span>
          </div>
          <div className="space-y-1">
            {revealed && meetings.map((m, i) => (
              <motion.div
                key={m.time}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="flex items-center gap-2.5 p-1.5 rounded-lg bg-secondary hover:bg-primary/5 transition-colors"
              >
                <span className="text-[9px] font-mono text-primary w-8">{m.time}</span>
                <div className="w-0.5 h-4 rounded-full bg-primary/25" />
                <span className="text-[10px] text-foreground/80">{m.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold font-display text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/15 text-sm"
          >
            Start Automating <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SalesCalendarSection;
