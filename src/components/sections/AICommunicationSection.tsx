import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Bot, User, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const messages = [
{ from: "ai", text: "Hello! I noticed you manufacture custom furniture. Are you currently looking for new B2B clients?" },
{ from: "client", text: "Yes, we are interested in expanding our wholesale partnerships." },
{ from: "ai", text: "Great. We help furniture manufacturers generate qualified meetings with retailers and distributors. Would you be open to a short introduction call?" },
{ from: "client", text: "Yes, that could be interesting." }];


const AICommunicationSection = () => {
  const { ref, revealed } = useScrollReveal();
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!revealed) return;
    let idx = 0;
    const showNext = () => {
      if (idx >= messages.length) return;
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        idx++;
        setVisibleMessages(idx);
        setTimeout(showNext, 800);
      }, 1200);
    };
    setTimeout(showNext, 400);
  }, [revealed]);

  return (
    <section className="relative py-8 md:py-12">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 04</span>
          <h2 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-2.5 text-foreground">
            AI Communication
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            A specially <b>trained</b> <b>AI chatbot</b> for your company is <b>integrated</b> into <b>WhatsApp</b>, social media DMs, and your website chat. It communicates like a <b>real</b> team member, conducts voice conversations using <b>AI voice</b> when needed, and can talk to <b>hundreds of people</b> simultaneously to convert cold and warm audiences into <b>warm</b> leads
          </p>
        </div>

        {/* Chat */}
        <div className="glass-strong rounded-2xl p-4 max-w-md mx-auto mb-4">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">DigiMoria AI Agent</div>
              <div className="text-xs text-emerald-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Online
              </div>
            </div>
          </div>

          <div className="space-y-3 min-h-[200px]">
            {messages.slice(0, visibleMessages).map((msg, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-2 ${msg.from === "client" ? "flex-row-reverse" : ""}`}>
              
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
              msg.from === "ai" ? "bg-primary/10" : "bg-secondary"}`
              }>
                  {msg.from === "ai" ? <Bot className="w-3.5 h-3.5 text-primary" /> : <User className="w-3.5 h-3.5 text-muted-foreground" />}
                </div>
                <div className={`rounded-xl px-3.5 py-2 text-sm max-w-[80%] leading-relaxed ${
              msg.from === "ai" ?
              "bg-secondary text-foreground" :
              "bg-primary text-primary-foreground"}`
              }>
                  {msg.text}
                </div>
              </motion.div>
            )}

            {typing &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-2">
              
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="bg-secondary rounded-xl px-4 py-2.5 flex gap-1">
                  {[0, 1, 2].map((d) =>
                <motion.div
                  key={d}
                  className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, delay: d * 0.15, repeat: Infinity }} />

                )}
                </div>
              </motion.div>
            }
          </div>
        </div>

        {/* Voice Agent */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 3 }}
          className="glass-strong rounded-2xl p-4 max-w-[240px] mx-auto text-center">
          
          <div className="relative w-14 h-14 mx-auto mb-3">
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-glow" />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-primary/20" />
            
            <motion.div
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="absolute inset-0 rounded-full border border-primary/10" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="text-sm font-semibold font-display text-foreground mb-1">AI Voice Agent</div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Custom AI chatbot & voice agent for your brand
          </p>
        </motion.div>
      </div>
    </section>);

};

export default AICommunicationSection;