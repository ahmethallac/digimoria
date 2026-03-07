import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import GlowingNode from "@/components/GlowingNode";
import { Globe, Facebook, Linkedin, MessageSquare, Share2, MessageCircle, Users, Database } from "lucide-react";

const sources = [
{ label: "Google Ads", icon: <Globe className="w-5 h-5 text-primary" />, delay: 0 },
{ label: "Meta Ads", icon: <Facebook className="w-5 h-5 text-primary/80" />, delay: 0.08 },
{ label: "LinkedIn Ads", icon: <Linkedin className="w-5 h-5 text-primary" />, delay: 0.16 },
{ label: "Website Forms", icon: <Globe className="w-5 h-5 text-primary/80" />, delay: 0.24 },
{ label: "Social Media", icon: <Share2 className="w-5 h-5 text-primary" />, delay: 0.32 },
{ label: "Comments", icon: <MessageSquare className="w-5 h-5 text-primary/80" />, delay: 0.4 },
{ label: "WhatsApp", icon: <MessageCircle className="w-5 h-5 text-primary" />, delay: 0.48 },
{ label: "Prospect Data", icon: <Database className="w-5 h-5 text-primary/80" />, delay: 0.56 }];


const LeadSourcesSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="lead-sources" className="relative py-8 md:py-12">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={revealed ? { opacity: 1 } : {}}
            className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            
            Stage 01
          </motion.span>
          <h2 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-2.5 text-foreground">
            Lead Sources
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto"><b>We build</b> your <digital customer acquisition infrastructure. Google, Meta, and LinkedIn traffic channels are activated by our <b>professional team</b>, and all your social media accounts are <b>integrated into a central panel</b>. Website forms, social media messages, and all other communications are handled by <b>AI customer</b> service and automatically recorded in your <b>CRM</b> system.
            <b>We build</b> your digital customer acquisition infrastructure. Google, Meta, and LinkedIn traffic channels are activated by our <b>professional team</b>, and all your social media accounts are <b>integrated into a central panel</b>. Website forms, social media messages, and all other communications are handled by <b>AI customer</b> service and automatically recorded in your <b>CRM</b> system.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
          {revealed && sources.map((s) =>
          <GlowingNode key={s.label} label={s.label} icon={s.icon} delay={s.delay} />
          )}
        </div>
      </div>
    </section>);

};

export default LeadSourcesSection;