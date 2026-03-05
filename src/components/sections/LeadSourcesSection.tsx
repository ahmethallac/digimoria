import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import GlowingNode from "@/components/GlowingNode";
import { Globe, Facebook, Linkedin, MessageSquare, Share2, MessageCircle, Users, Database } from "lucide-react";

const sources = [
  { label: "Google Ads", icon: <Globe className="w-4 h-4 text-primary" />, delay: 0 },
  { label: "Meta Ads", icon: <Facebook className="w-4 h-4 text-primary/80" />, delay: 0.08 },
  { label: "LinkedIn Ads", icon: <Linkedin className="w-4 h-4 text-primary" />, delay: 0.16 },
  { label: "Website Forms", icon: <Globe className="w-4 h-4 text-primary/80" />, delay: 0.24 },
  { label: "Social Media", icon: <Share2 className="w-4 h-4 text-primary" />, delay: 0.32 },
  { label: "Comments", icon: <MessageSquare className="w-4 h-4 text-primary/80" />, delay: 0.4 },
  { label: "WhatsApp", icon: <MessageCircle className="w-4 h-4 text-primary" />, delay: 0.48 },
  { label: "Prospect Data", icon: <Database className="w-4 h-4 text-primary/80" />, delay: 0.56 },
];

const LeadSourcesSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="lead-sources" className="relative py-6 md:py-10">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-5">
          <motion.span
            initial={{ opacity: 0 }}
            animate={revealed ? { opacity: 1 } : {}}
            className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold"
          >
            Stage 01
          </motion.span>
          <h2 className="text-xl md:text-2xl font-bold font-display mt-1.5 mb-2 text-foreground">
            Lead Sources
          </h2>
          <p className="text-xs text-muted-foreground max-w-xs mx-auto">
            Traffic from every channel flows into one intelligent system
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-sm mx-auto">
          {revealed && sources.map((s) => (
            <GlowingNode key={s.label} label={s.label} icon={s.icon} delay={s.delay} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadSourcesSection;
