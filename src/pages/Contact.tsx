import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar1 as Navbar } from "@/components/ui/navbar-1";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Send, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <ParticleField count={10} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(270,100%,20%,0.15)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.3em] text-accent font-semibold"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold font-display mt-4 mb-6 glow-text-purple"
            >
              Let's Build Your System
            </motion.h1>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="md:col-span-3 glass-strong rounded-2xl p-6 md:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Name" required className="bg-muted/20 border-border/30" />
                <Input placeholder="Email" type="email" required className="bg-muted/20 border-border/30" />
              </div>
              <Input placeholder="Company" className="bg-muted/20 border-border/30" />
              <Textarea placeholder="Tell us about your project..." rows={5} required className="bg-muted/20 border-border/30" />
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold"
              >
                {sending ? "Sending..." : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 space-y-6"
            >
              <div className="glass-strong rounded-2xl p-5">
                <Mail className="w-5 h-5 text-accent mb-2" />
                <div className="text-sm font-semibold text-foreground">Email</div>
                <div className="text-sm text-muted-foreground">hello@digimoria.com</div>
              </div>
              <div className="glass-strong rounded-2xl p-5">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <div className="text-sm font-semibold text-foreground">Location</div>
                <div className="text-sm text-muted-foreground">Global — Remote First</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
