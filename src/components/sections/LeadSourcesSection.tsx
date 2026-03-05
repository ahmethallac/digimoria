import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import GlowingNode from "@/components/GlowingNode";
import FlowLine from "@/components/FlowLine";
import { Globe, Facebook, Linkedin, MessageSquare, Share2, MessageCircle, Users, Database } from "lucide-react";

const sources = [
  { label: "Google Ads", icon: <Globe className="w-6 h-6 text-neon-blue" />, delay: 0 },
  { label: "Meta Ads", icon: <Facebook className="w-6 h-6 text-neon-purple" />, delay: 0.1 },
  { label: "LinkedIn Ads", icon: <Linkedin className="w-6 h-6 text-neon-blue" />, delay: 0.2 },
  { label: "Website Forms", icon: <Globe className="w-6 h-6 text-neon-purple" />, delay: 0.3 },
  { label: "Social Media", icon: <Share2 className="w-6 h-6 text-neon-blue" />, delay: 0.4 },
  { label: "Comments", icon: <MessageSquare className="w-6 h-6 text-neon-purple" />, delay: 0.5 },
  { label: "WhatsApp", icon: <MessageCircle className="w-6 h-6 text-neon-blue" />, delay: 0.6 },
  { label: "Prospect Data", icon: <Database className="w-6 h-6 text-neon-purple" />, delay: 0.7 },
];

const LeadSourcesSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="lead-sources" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsla(270,100%,20%,0.15)_0%,_transparent_60%)]" />
      
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 max-w-6xl mx-auto px-4`}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={revealed ? { opacity: 1 } : {}}
            className="text-xs uppercase tracking-[0.3em] text-accent font-semibold"
          >
            Stage 01
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4 glow-text-purple">
            Lead Sources
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Traffic from every channel flows into one intelligent system
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto">
          {revealed && sources.map((s) => (
            <GlowingNode key={s.label} label={s.label} icon={s.icon} delay={s.delay} />
          ))}
        </div>

        {/* Connection lines converging */}
        <div className="flex justify-center mt-8">
          <svg width="200" height="60" viewBox="0 0 200 60" className="text-primary">
            <line x1="20" y1="0" x2="100" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.3" className="flow-line" />
            <line x1="70" y1="0" x2="100" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.3" className="flow-line" />
            <line x1="130" y1="0" x2="100" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.3" className="flow-line" />
            <line x1="180" y1="0" x2="100" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.3" className="flow-line" />
          </svg>
        </div>
      </div>

      <FlowLine />
    </section>
  );
};

export default LeadSourcesSection;
