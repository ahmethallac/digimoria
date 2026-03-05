import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FlowLine from "@/components/FlowLine";
import { MessageCircle, Brain, Phone, XCircle, CheckCircle } from "lucide-react";

const chatMessages = [
  { sender: "ai", text: "Hi! I'd love to learn about your needs." },
  { sender: "user", text: "We need help with lead generation." },
  { sender: "ai", text: "Great! What's your monthly budget range?" },
  { sender: "user", text: "Around $5k-10k per month." },
  { sender: "ai", text: "Perfect match. Let me qualify you further..." },
];

const AICommunicationSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(190,100%,50%,0.05)_0%,_transparent_60%)]" />

      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-6xl mx-auto px-4`}>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Stage 03</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4 glow-text-blue">
            AI Communication
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Intelligent AI agents engage, qualify, and filter prospects automatically
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* AI WhatsApp */}
          <div className="glass-strong rounded-2xl p-5 glow-blue">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold font-display text-foreground">AI WhatsApp</span>
            </div>
            <div className="space-y-2">
              {revealed && chatMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.sender === "ai" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.3 + 0.5 }}
                  className={`rounded-lg px-3 py-2 text-xs ${
                    msg.sender === "ai"
                      ? "bg-primary/20 text-foreground/80 mr-6"
                      : "bg-accent/10 text-foreground/80 ml-6"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Qualification */}
          <div className="glass-strong rounded-2xl p-5 glow-purple">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold font-display text-foreground">Qualification Engine</span>
            </div>
            <div className="space-y-3">
              {revealed && [
                { label: "Budget Match", value: 92, color: "bg-accent" },
                { label: "Intent Score", value: 87, color: "bg-primary" },
                { label: "Company Fit", value: 95, color: "bg-accent" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.3 + 0.8 }}
                >
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={revealed ? { width: `${item.value}%` } : {}}
                      transition={{ duration: 1, delay: i * 0.3 + 1 }}
                      className={`h-full rounded-full ${item.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Voice Agent */}
          <div className="glass-strong rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold font-display text-foreground">AI Voice Agent</span>
            </div>
            <div className="space-y-3 mt-4">
              {revealed && [
                { icon: <CheckCircle className="w-4 h-4 text-accent" />, text: "Lead qualified", delay: 1.2 },
                { icon: <CheckCircle className="w-4 h-4 text-accent" />, text: "Budget confirmed", delay: 1.5 },
                { icon: <XCircle className="w-4 h-4 text-destructive/60" />, text: "3 leads filtered out", delay: 1.8 },
                { icon: <CheckCircle className="w-4 h-4 text-accent" />, text: "Meeting interest: Yes", delay: 2.1 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delay }}
                  className="flex items-center gap-2 text-xs text-foreground/70"
                >
                  {item.icon}
                  {item.text}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FlowLine />
    </section>
  );
};

export default AICommunicationSection;
