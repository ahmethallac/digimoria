import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FlowLine from "@/components/FlowLine";
import { Calendar, Check } from "lucide-react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const hours = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

const bookedSlots = [
  { day: 0, hour: 1 }, { day: 1, hour: 3 }, { day: 2, hour: 0 },
  { day: 2, hour: 4 }, { day: 3, hour: 2 }, { day: 4, hour: 1 },
  { day: 4, hour: 5 }, { day: 0, hour: 4 }, { day: 3, hour: 0 },
];

const CalendarBookingSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-16 md:py-24">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-4xl mx-auto px-4`}>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 07</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4 text-foreground">
            Automated Meeting Scheduling
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Qualified prospects select available meeting times automatically
          </p>
        </div>

        <div className="glass-strong rounded-2xl p-4 md:p-6 max-w-2xl mx-auto overflow-x-auto">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold font-display text-foreground">March 2026</span>
          </div>

          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="py-2 text-muted-foreground font-normal" />
                {days.map((d) => (
                  <th key={d} className="py-2 text-muted-foreground font-medium">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map((hour, hi) => (
                <tr key={hour}>
                  <td className="py-1 pr-2 text-muted-foreground text-right">{hour}</td>
                  {days.map((_, di) => {
                    const isBooked = bookedSlots.some((s) => s.day === di && s.hour === hi);
                    const slotIndex = bookedSlots.findIndex((s) => s.day === di && s.hour === hi);
                    return (
                      <td key={di} className="p-1">
                        {revealed && isBooked ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: slotIndex * 0.15 + 0.5 }}
                            className="h-8 bg-primary/10 border border-primary/20 rounded-md flex items-center justify-center"
                          >
                            <Check className="w-3 h-3 text-primary" />
                          </motion.div>
                        ) : (
                          <div className="h-8 bg-muted/30 rounded-md" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <FlowLine />
    </section>
  );
};

export default CalendarBookingSection;
