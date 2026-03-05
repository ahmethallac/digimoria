import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CalendarDays, Clock, MousePointer2, Check } from "lucide-react";
import { useState, useEffect } from "react";

const timeSlots = ["09:00", "10:30", "13:00", "14:30", "16:00"];

const CalendarBookingSection = () => {
  const { ref, revealed } = useScrollReveal();
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  useEffect(() => {
    if (!revealed) return;
    const timer = setTimeout(() => setSelectedSlot(2), 2000);
    return () => clearTimeout(timer);
  }, [revealed]);

  return (
    <section className="relative py-10 md:py-16">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 07</span>
          <h2 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-3 text-foreground">
            Automated Scheduling
          </h2>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            Qualified prospects book meetings automatically
          </p>
        </div>

        <div className="glass-strong rounded-2xl p-4 max-w-xs mx-auto relative">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
            <CalendarDays className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold font-display text-foreground">Select a Time</span>
            <span className="ml-auto text-[10px] text-muted-foreground">March 2026</span>
          </div>

          <div className="space-y-1.5">
            {timeSlots.map((slot, i) => (
              <motion.div
                key={slot}
                initial={{ opacity: 0 }}
                animate={revealed ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`flex items-center gap-2 p-2 rounded-lg text-xs transition-all cursor-pointer ${
                  selectedSlot === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-primary/5 text-foreground"
                }`}
              >
                <Clock className="w-3 h-3" />
                <span className="font-mono">{slot}</span>
                {selectedSlot === i && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                    <Check className="w-3.5 h-3.5" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {selectedSlot !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="mt-3 p-2 rounded-lg bg-primary/5 border border-primary/10 text-center"
            >
              <div className="text-[10px] text-primary font-medium">✓ Meeting Booked — {timeSlots[selectedSlot]}</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalendarBookingSection;
