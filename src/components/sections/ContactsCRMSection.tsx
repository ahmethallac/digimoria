import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
"bg-cyan-100 text-cyan-600",
"bg-lime-100 text-lime-600",
"bg-purple-100 text-purple-600",
"bg-red-100 text-red-600",
"bg-yellow-100 text-yellow-600",
"bg-slate-100 text-slate-600",
"bg-emerald-100 text-emerald-700",
"bg-blue-100 text-blue-700",
"bg-violet-100 text-violet-700",
"bg-amber-100 text-amber-700",
"bg-pink-100 text-pink-700",
"bg-teal-100 text-teal-700"];


const names = ["SK", "JM", "ER", "DL", "MB", "AK", "LS", "TW", "NR", "CP", "HG", "FT", "RB", "WC", "KP", "OZ", "VN", "QD", "PL", "XR", "YB", "ZM", "GT", "UH"];

const ContactsPoolSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-8 md:py-12">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 02</span>
          <h2 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-2.5 text-foreground">
            Contacts Pool
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            All hot, warm, and cold audiences <b>are managed</b> entirely by an <b>AI system</b>. Messages, comments, and all <b>potential</b> interactions are instantly analyzed by AI and <b>converted into customer leads</b>. In addition, through our custom <b>automation</b> systems, more than <b>10,000</b> additional <b>warm</b> prospects are generated and their contact information is <b>automatically</b> transferred to your <b>CRM</b>
          </p>
        </div>

        <div className="glass-strong rounded-2xl p-5 max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs text-muted-foreground ml-2 font-display">DigiMoria Contacts Pool</span>
          </div>
          
          <div className="grid grid-cols-6 gap-2">
            {revealed && names.map((name, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className={`rounded-lg p-2 flex items-center justify-center text-xs font-bold ${avatarColors[i % avatarColors.length]}`}>
              
                {name}
              </motion.div>
            )}
          </div>

          <div className="flex gap-6 mt-4 pt-3 border-t border-border">
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
    </section>);

};

export default ContactsPoolSection;
