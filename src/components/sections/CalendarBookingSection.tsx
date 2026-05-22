import { motion } from "framer-motion";
import { CalendarDays, Check, ChevronLeft, ChevronRight, Clock, Globe2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const calendarCells = [
  "", "", "", 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, "",
];
const activeDays = new Set([9, 14, 17, 22, 28]);
const timeSlots = ["10:00", "11:30", "13:00", "15:30"];

const CalendarBookingSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="calendar-booking" className="relative w-full py-8 md:py-10">
      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} relative z-10 mx-auto grid w-full max-w-5xl items-center gap-8 px-6 md:grid-cols-[0.88fr_1.12fr] md:px-10`}
      >
        <div className="text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Stage 06</span>
          <h2 className="mb-4 mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Automated Scheduling
          </h2>
          <p className="stage-desc mx-auto max-w-xl text-sm leading-7 md:mx-0 md:text-[15px]">
            Through our <b>custom-built</b> <b>calendar automation</b>, warm prospects can select a suitable{" "}
            <b>date and time</b> to automatically create a <b>Zoom</b> meeting. The meeting link and details are{" "}
            <b>automatically</b> sent to both the customer and your <b>sales representative</b>.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, rotateX: 8 }}
          animate={revealed ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="glass-strong mx-auto grid w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#101522]/92 shadow-[0_28px_80px_rgba(0,0,0,0.42)] sm:grid-cols-[190px_1fr] md:mx-0"
        >
          <aside className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-primary/25 bg-[radial-gradient(circle_at_35%_30%,rgba(167,139,250,0.45),rgba(37,99,235,0.16)_50%,rgba(15,23,42,0.92))] font-display text-xl font-bold text-white shadow-[0_12px_45px_rgba(124,58,237,0.25)]">
              DM
            </div>
            <div className="mb-1 text-[11px] uppercase tracking-[0.26em] text-primary">DigiMoria</div>
            <h3 className="font-display text-xl font-bold leading-tight text-white">AI Strategy Call</h3>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/58">
              <Clock className="h-4 w-4" />
              <span>30 min</span>
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.035] p-3 text-xs leading-5 text-white/62">
              Calendar routes qualified leads to the right representative and writes the booking back to CRM.
            </div>
          </aside>

          <div className="p-5">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <div>
                <div className="flex items-center gap-2 font-display text-lg font-semibold text-white">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  Select Date & Time
                </div>
                <div className="text-xs text-white/45">Mock availability for qualified prospects</div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="min-w-24 text-center text-sm font-semibold text-white">July 2026</span>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_112px]">
              <div>
                <div className="mb-2 grid grid-cols-7 gap-1 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35">
                  {days.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {calendarCells.map((date, index) => {
                    const isSelected = date === 17;
                    const isActive = typeof date === "number" && activeDays.has(date);

                    return (
                      <motion.button
                        key={`${date}-${index}`}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={revealed ? { opacity: date ? 1 : 0.25, scale: 1 } : {}}
                        transition={{ delay: 0.12 + index * 0.012 }}
                        className={`aspect-square rounded-lg border text-xs transition-all ${
                          isSelected
                            ? "border-primary bg-primary text-white shadow-[0_0_24px_rgba(139,92,246,0.34)]"
                            : isActive
                              ? "border-sky-400/30 bg-sky-400/10 text-sky-100 hover:bg-sky-400/18"
                              : date
                                ? "border-white/8 bg-white/[0.025] text-white/45"
                                : "border-transparent"
                        }`}
                      >
                        {date}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">July 17</div>
                {timeSlots.map((slot, index) => {
                  const selected = slot === "13:00";
                  return (
                    <motion.button
                      key={slot}
                      initial={{ opacity: 0, x: 12 }}
                      animate={revealed ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.25 + index * 0.06 }}
                      className={`flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-xs font-semibold ${
                        selected
                          ? "border-primary bg-primary text-white"
                          : "border-white/10 bg-white/[0.035] text-white/72"
                      }`}
                    >
                      {slot}
                      {selected && <Check className="h-3.5 w-3.5" />}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] p-3 text-xs text-white/65">
              <Globe2 className="h-4 w-4 text-primary" />
              <span className="font-semibold text-white/82">Time zone</span>
              <span>GMT+03:00 Europe/Istanbul (GMT+3)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendarBookingSection;
