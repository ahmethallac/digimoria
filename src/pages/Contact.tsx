import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/ui/header-3";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import { Contact2 } from "@/components/ui/contact-2";
import { toast } from "@/hooks/use-toast";
import { Clock, Mail, MapPin, Sparkles } from "lucide-react";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    }, 1000);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0613] text-white">
      <Helmet>
        <title>Contact DigiMoria - Let's Build Your AI System</title>
        <meta
          name="description"
          content="Get in touch with DigiMoria to design an AI-powered customer acquisition system tailored to your business. Response within 24 hours."
        />
        <link rel="canonical" href="https://digimoria.com/contact" />
        <meta property="og:title" content="Contact DigiMoria - Let's Build Your AI System" />
        <meta
          property="og:description"
          content="Get in touch with DigiMoria to design an AI-powered customer acquisition system tailored to your business."
        />
        <meta property="og:url" content="https://digimoria.com/contact" />
      </Helmet>

      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.024)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-1/2 top-0 h-[42rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,45,242,0.22),transparent_68%)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_70%)] blur-2xl" />
      </div>

      <Header />
      <section className="relative pb-24 pt-32 md:pb-36 md:pt-40">
        <ParticleField count={10} />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0613] via-[#0a0613]/82 to-transparent" />
        <div className="relative z-10">
          <Contact2
            header={
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex rounded-full border border-[#9b87f5]/25 bg-[#9b87f5]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#b9abff]"
              >
                Get in Touch
              </motion.span>
            }
            title={
              <>
                Let&apos;s Build Your{" "}
                <span className="bg-gradient-to-r from-[#b9abff] to-[#38bdf8] bg-clip-text text-transparent">
                  AI System
                </span>
              </>
            }
            description="Tell us where growth gets stuck. We will map the acquisition, AI response and calendar flow into one connected system."
            onSubmit={handleSubmit}
            sending={sending}
            sidebar={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                  <Mail className="mb-3 h-5 w-5 text-[#b9abff]" />
                  <div className="text-sm font-semibold text-white">Email</div>
                  <div className="text-sm text-white/52">hello@digimoria.com</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                  <MapPin className="mb-3 h-5 w-5 text-[#38bdf8]" />
                  <div className="text-sm font-semibold text-white">Location</div>
                  <div className="text-sm text-white/52">Global - Remote First</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#8b2df2]/20 to-[#38bdf8]/10 p-5 backdrop-blur-xl">
                  <Sparkles className="mb-3 h-5 w-5 text-[#b9abff]" />
                  <div className="text-sm font-semibold text-white">First Response</div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-white/56">
                    <Clock className="h-4 w-4" />
                    Within 24 hours
                  </div>
                </div>
              </motion.div>
            }
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
