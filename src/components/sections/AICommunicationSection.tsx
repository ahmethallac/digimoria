import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Bot, User, Phone } from "lucide-react";

const messages = [
  { from: "ai", text: "Hello! I noticed you manufacture custom furniture. Are you currently looking for new B2B clients?" },
  { from: "client", text: "Yes, we are interested in expanding our wholesale partnerships." },
  { from: "ai", text: "Great. We help furniture manufacturers generate qualified meetings with retailers and distributors. Would you be open to a short introduction call?" },
  { from: "client", text: "Yes, that could be interesting." },
];

const AICommunicationSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-10 md:py-16">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 04</span>
          <h2 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-3 text-foreground">
            AI Communication
          </h2>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            Custom AI agents engage prospects like real sales representatives
          </p>
        </div>

        {/* Chat interface */}
        <div className="glass-strong rounded-2xl p-4 max-w-md mx-auto mb-4">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs font-semibold text-foreground">DigiMoria AI Agent</div>
              <div className="text-[10px] text-emerald-500">Online</div>
            </div>
          </div>

          <div className="space-y-3 max-h-64 overflow-y-auto">
            {revealed && messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.6 + 0.3 }}
                className={`flex gap-2 ${msg.from === "client" ? "flex-row-reverse" : ""}`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.from === "ai" ? "bg-primary/10" : "bg-secondary"
                }`}>
                  {msg.from === "ai" ? <Bot className="w-3 h-3 text-primary" /> : <User className="w-3 h-3 text-muted-foreground" />}
                </div>
                <div className={`rounded-xl px-3 py-2 text-[11px] max-w-[80%] ${
                  msg.from === "ai"
                    ? "bg-secondary text-foreground"
                    : "bg-primary text-primary-foreground"
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Voice Agent */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.8 }}
          className="glass-strong rounded-2xl p-4 max-w-xs mx-auto text-center"
        >
          <div className="relative w-14 h-14 mx-auto mb-3">
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-glow" />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-primary/20"
            />
            <motion.div
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="absolute inset-0 rounded-full border border-primary/10"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="text-xs font-semibold font-display text-foreground mb-1">AI Voice Agent</div>
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            Custom AI chatbot & voice agent that speaks with prospects like a real sales representative.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AICommunicationSection;
