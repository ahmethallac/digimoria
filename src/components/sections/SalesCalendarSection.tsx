import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { CalendarCheck, ArrowRight } from "lucide-react";

const SalesCalendarSection = () => {
  const { ref, revealed } = useScrollReveal();

  const meetings = [
    { time: "09:00", name: "Sarah K. — Discovery Call", type: "discovery" },
    { time: "10:30", name: "James M. — Product Demo", type: "demo" },
    { time: "13:00", name: "Elena R. — Strategy Session", type: "strategy" },
    { time: "14:30", name: "David L. — Proposal Review", type: "proposal" },
    { time: "16:00", name: "Michael B. — Closing Call", type: "closing" },
  ];

  return (
    <section className="relative py-20 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(270,100%,25%,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsla(190,100%,50%,0.08)_0%,_transparent_50%)]" />

      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-4xl mx-auto px-4 text-center`}>
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Final Result</span>
        <h2 className="text-3xl md:text-6xl font-bold font-display mt-3 mb-4 glow-text-purple">
          Your Sales Team Only Focuses<br className="hidden md:block" /> on Real Meetings
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12 text-lg">
          The entire process runs automatically. Every meeting on the calendar is a qualified prospect ready to buy.
        </p>

        {/* Calendar */}
        <div className="glass-strong rounded-2xl p-4 md:p-6 max-w-lg mx-auto mb-12 glow-purple text-left">
          <div className="flex items-center gap-2 mb-4">
            <CalendarCheck className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold font-display text-foreground">Today's Schedule</span>
            <span className="ml-auto text-xs text-muted-foreground">March 5, 2026</span>
          </div>
          <div className="space-y-2">
            {revealed && meetings.map((m, i) => (
              <motion.div
                key={m.time}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 + 0.3 }}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-gradient-to-r from-primary/10 to-accent/5 hover:from-primary/20 hover:to-accent/10 transition-colors"
              >
                <span className="text-xs font-mono text-accent w-12">{m.time}</span>
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
                <span className="text-sm text-foreground/80">{m.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold font-display text-primary-foreground bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all glow-purple text-lg"
          >
            Start Automating <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SalesCalendarSection;
