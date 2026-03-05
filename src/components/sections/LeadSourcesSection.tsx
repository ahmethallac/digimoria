import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import GlowingNode from "@/components/GlowingNode";
import { Globe, Facebook, Linkedin, MessageSquare, Share2, MessageCircle, Users, Database } from "lucide-react";

const sources = [
  { label: "Google Ads", icon: <Globe className="w-5 h-5 text-primary" />, delay: 0 },
  { label: "Meta Ads", icon: <Facebook className="w-5 h-5 text-primary/80" />, delay: 0.1 },
  { label: "LinkedIn Ads", icon: <Linkedin className="w-5 h-5 text-primary" />, delay: 0.2 },
  { label: "Website Forms", icon: <Globe className="w-5 h-5 text-primary/80" />, delay: 0.3 },
  { label: "Social Media", icon: <Share2 className="w-5 h-5 text-primary" />, delay: 0.4 },
  { label: "Comments", icon: <MessageSquare className="w-5 h-5 text-primary/80" />, delay: 0.5 },
  { label: "WhatsApp", icon: <MessageCircle className="w-5 h-5 text-primary" />, delay: 0.6 },
  { label: "Prospect Data", icon: <Database className="w-5 h-5 text-primary/80" />, delay: 0.7 },
];

const LeadSourcesSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="lead-sources" className="relative py-10 md:py-16">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={revealed ? { opacity: 1 } : {}}
            className="text-xs uppercase tracking-[0.3em] text-primary font-semibold"
          >
            Stage 01
          </motion.span>
          <h2 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-3 text-foreground">
            Lead Sources
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Traffic from every channel flows into one intelligent system
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
          {revealed && sources.map((s) => (
            <GlowingNode key={s.label} label={s.label} icon={s.icon} delay={s.delay} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadSourcesSection;
