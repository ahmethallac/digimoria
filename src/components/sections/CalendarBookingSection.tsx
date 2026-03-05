import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CalendarDays, Clock, MousePointer2, Check } from "lucide-react";
import { useState, useEffect } from "react";

const timeSlots = ["09:00", "10:30", "13:00", "14:30", "16:00"];

const CalendarBookingSection = () => {
  const { ref, revealed } = useScrollReveal();
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    if (!revealed) return;
    const t1 = setTimeout(() => setShowCursor(true), 1200);
    const t2 = setTimeout(() => setSelectedSlot(2), 2000);
    const t3 = setTimeout(() => setShowCursor(false), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [revealed]);

  return (
    <section className="relative py-6 md:py-10">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-5">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">Stage 07</span>
          <h2 className="text-xl md:text-2xl font-bold font-display mt-1.5 mb-2 text-foreground">
            Automated Scheduling
          </h2>
          <p className="text-[10px] text-muted-foreground max-w-xs mx-auto">
            Qualified prospects book meetings automatically
          </p>
        </div>

        <div className="glass-strong rounded-2xl p-3 max-w-[260px] mx-auto relative">
          <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-border">
            <CalendarDays className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-semibold font-display text-foreground">Select a Time</span>
            <span className="ml-auto text-[8px] text-muted-foreground">March 2026</span>
          </div>

          <div className="space-y-1">
            {timeSlots.map((slot, i) => (
              <motion.div
                key={slot}
                initial={{ opacity: 0 }}
                animate={revealed ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className={`flex items-center gap-2 p-1.5 rounded-lg text-[10px] transition-all cursor-pointer ${
                  selectedSlot === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-primary/5 text-foreground"
                }`}
              >
                <Clock className="w-2.5 h-2.5" />
                <span className="font-mono text-[10px]">{slot}</span>
                {selectedSlot === i && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                    <Check className="w-3 h-3" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Animated cursor */}
          {showCursor && (
            <motion.div
              initial={{ x: 80, y: -20, opacity: 0 }}
              animate={{ x: 40, y: 48, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute pointer-events-none z-20"
            >
              <MousePointer2 className="w-3.5 h-3.5 text-foreground/50" />
            </motion.div>
          )}

          {selectedSlot !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 p-1.5 rounded-lg bg-primary/5 border border-primary/10 text-center"
            >
              <div className="text-[9px] text-primary font-medium">✓ Meeting Booked — {timeSlots[selectedSlot]}</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalendarBookingSection;
