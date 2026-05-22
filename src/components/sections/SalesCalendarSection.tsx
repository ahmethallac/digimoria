import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { CalendarCheck, ArrowRight } from "lucide-react";

const meetings = [
  { time: "09:00", name: "Sarah K. — Discovery Call" },
  { time: "10:30", name: "James M. — Product Demo" },
  { time: "13:00", name: "Elena R. — Strategy Session" },
  { time: "14:30", name: "David L. — Proposal Review" },
  { time: "16:00", name: "Michael B. — Closing Call" },
];

const SalesCalendarSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="sales-calendar" className="relative py-12 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(270,80%,55%,0.08)_0%,_transparent_55%)]" />

      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} relative z-10 mx-auto max-w-4xl px-4 text-center`}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b9abff]">Final Result</span>
        <h2 className="mt-2.5 mb-3 font-display text-3xl font-bold text-white md:text-5xl">
          Your Sales Team Only Focuses
          <br className="hidden md:block" /> on Real Meetings
        </h2>
        <p className="stage-desc mx-auto mb-10 max-w-xl text-base leading-relaxed">
          Customer acquisition automations <b>custom-built for your company by our team</b> identify potential
          prospects, initiate contact, and convert them into meetings. As a result, your sales team can conduct
          meetings with <b>at least 30x more warm potential prospects</b>.
        </p>

        <div className="mx-auto mb-10 max-w-md rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-left shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-md md:p-6">
          <div className="mb-4 flex items-center gap-2.5">
            <CalendarCheck className="size-5 text-[#b9abff]" aria-hidden="true" />
            <span className="font-display text-sm font-semibold text-white">Today&apos;s Schedule</span>
            <span className="ml-auto text-xs text-white/45">March 5, 2026</span>
          </div>
          <div className="space-y-2.5">
            {revealed &&
              meetings.map((m, i) => (
                <motion.div
                  key={m.time}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.04] p-3 transition-colors hover:border-[#9b87f5]/25 hover:bg-[#9b87f5]/[0.06]"
                >
                  <span className="w-12 font-mono text-sm font-medium text-[#b9abff]">{m.time}</span>
                  <div className="h-5 w-0.5 rounded-full bg-[#9b87f5]/35" />
                  <span className="text-sm text-white/85">{m.name}</span>
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
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#8b2df2] px-8 py-3.5 font-display text-base font-semibold text-white shadow-[0_0_28px_rgba(139,45,242,0.35)] transition-all hover:shadow-[0_0_36px_rgba(139,45,242,0.48)]"
          >
            Start Automating <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SalesCalendarSection;
