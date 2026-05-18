import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar1 as Navbar } from "@/components/ui/navbar-1";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import { Users, Zap, Target, Globe } from "lucide-react";

const values = [
  { icon: <Zap className="w-8 h-8 text-accent" />, title: "AI-First Approach", desc: "We build systems, not campaigns. Every solution is powered by intelligent automation." },
  { icon: <Target className="w-8 h-8 text-primary" />, title: "Results-Driven", desc: "Our only metric is qualified meetings on your calendar. Everything else is noise." },
  { icon: <Users className="w-8 h-8 text-accent" />, title: "Full-Stack Team", desc: "Engineers, AI specialists, and growth experts working as one unit." },
  { icon: <Globe className="w-8 h-8 text-primary" />, title: "Global Reach", desc: "Infrastructure that scales across markets, languages, and time zones." },
];

const About = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Helmet>
      <title>About DigiMoria — AI Infrastructure for Customer Acquisition</title>
      <meta name="description" content="DigiMoria is an AI infrastructure company building automated customer acquisition systems that turn traffic into qualified sales meetings." />
      <link rel="canonical" href="https://digimoria.com/about" />
      <meta property="og:title" content="About DigiMoria — AI Infrastructure for Customer Acquisition" />
      <meta property="og:description" content="DigiMoria is an AI infrastructure company building automated customer acquisition systems that turn traffic into qualified sales meetings." />
      <meta property="og:url" content="https://digimoria.com/about" />
    </Helmet>
    <Navbar />
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <ParticleField count={15} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(270,100%,20%,0.2)_0%,_transparent_60%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.3em] text-accent font-semibold"
        >
          About DigiMoria
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold font-display mt-4 mb-6 glow-text-purple"
        >
          We Build the Machine,<br />Not the Marketing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          DigiMoria is not a marketing agency. We're an AI infrastructure company that builds automated customer acquisition systems. Our technology transforms raw traffic into qualified sales meetings — without human intervention.
        </motion.p>
      </div>
    </section>

    <section className="py-20 max-w-5xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.3 }}
            className="glass-strong rounded-2xl p-6 hover:glow-purple transition-shadow"
          >
            {v.icon}
            <h3 className="text-lg font-semibold font-display text-foreground mt-4 mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
