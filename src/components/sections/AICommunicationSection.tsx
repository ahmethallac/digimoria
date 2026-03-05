import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FlowLine from "@/components/FlowLine";
import { MessageCircle, Phone, Bot } from "lucide-react";

const chatMessages = [
  { sender: "ai", text: "Hello! I noticed you manufacture custom furniture. Are you currently looking for new B2B clients?" },
  { sender: "user", text: "Yes, we are interested in expanding our wholesale partnerships." },
  { sender: "ai", text: "Great. We help furniture manufacturers generate qualified meetings with retailers and distributors. Would you be open to a short introduction call?" },
  { sender: "user", text: "Yes, that could be interesting." },
];

const AICommunicationSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-16 md:py-24">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-5xl mx-auto px-4`}>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 04</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4 text-foreground">
            AI Communication
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Intelligent AI agents engage, qualify, and filter prospects automatically
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* AI WhatsApp Chat */}
          <div className="glass-strong rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold font-display text-foreground">AI WhatsApp</span>
            </div>
            <div className="space-y-2.5">
              {revealed && chatMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.sender === "ai" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.4 + 0.5 }}
                  className={`rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    msg.sender === "ai"
                      ? "bg-secondary text-foreground/80 mr-4"
                      : "bg-primary/10 text-foreground/80 ml-4"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Voice Agent */}
          <div className="glass-strong rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold font-display text-foreground">AI Voice Agent</span>
            </div>
            
            <div className="flex items-center justify-center py-6">
              {revealed && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  {/* Pulsing rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ width: 80, height: 80, margin: -16 }}
                  />
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                </motion.div>
              )}
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed mt-2">
              We build a fully custom AI chatbot and voice agent specifically for your brand. The AI speaks with prospects like a real sales representative who understands your business deeply.
            </p>
          </div>
        </div>
      </div>

      <FlowLine />
    </section>
  );
};

export default AICommunicationSection;
