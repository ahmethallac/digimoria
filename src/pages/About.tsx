import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/ui/header-3";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import { ArrowRight, Bot, Globe, Target, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "AI-First Approach",
    desc: "We build systems, not campaigns. Every layer — ads, CRM, response and calendar — runs on intelligent automation.",
    accent: "text-[#b9abff]",
    glow: "from-[#8b2df2]/20 to-transparent",
  },
  {
    icon: Target,
    title: "Results-Driven",
    desc: "Our core metric is qualified meetings on your calendar. Traffic, clicks and vanity metrics are secondary.",
    accent: "text-[#38bdf8]",
    glow: "from-[#2563eb]/20 to-transparent",
  },
  {
    icon: Users,
    title: "Full-Stack Team",
    desc: "Growth strategists, engineers and AI specialists work as one unit — from acquisition to closed-loop CRM.",
    accent: "text-[#b9abff]",
    glow: "from-[#8b2df2]/20 to-transparent",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Infrastructure that scales across markets, languages and time zones without rebuilding from scratch.",
    accent: "text-[#38bdf8]",
    glow: "from-[#2563eb]/20 to-transparent",
  },
];

const stats = [
  { value: "30×", label: "more qualified meetings vs. traditional ads" },
  { value: "24/7", label: "AI response across channels" },
  { value: "1", label: "panel for ads, CRM and calendar" },
];

const About = () => (
  <div className="relative min-h-screen overflow-x-hidden bg-[#0a0613] text-white">
    <Helmet>
      <title>About DigiMoria — AI Infrastructure for Customer Acquisition</title>
      <meta
        name="description"
        content="DigiMoria is an AI infrastructure company building automated customer acquisition systems that turn traffic into qualified sales meetings."
      />
      <link rel="canonical" href="https://digimoria.com/about" />
      <meta property="og:title" content="About DigiMoria — AI Infrastructure for Customer Acquisition" />
      <meta
        property="og:description"
        content="DigiMoria is an AI infrastructure company building automated customer acquisition systems that turn traffic into qualified sales meetings."
      />
      <meta property="og:url" content="https://digimoria.com/about" />
    </Helmet>

    <div className="pointer-events-none fixed inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.024)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute left-1/2 top-0 h-[42rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,45,242,0.22),transparent_68%)] blur-2xl" />
      <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_70%)] blur-2xl" />
    </div>

    <Header />

    <section className="relative pb-16 pt-32 md:pb-24 md:pt-40">
      <ParticleField count={12} />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0613] via-[#0a0613]/82 to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex rounded-full border border-[#9b87f5]/25 bg-[#9b87f5]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#b9abff]"
        >
          About DigiMoria
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-5 font-display text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          We Build the Machine,
          <br />
          <span className="bg-gradient-to-r from-[#b9abff] to-[#38bdf8] bg-clip-text text-transparent">
            Not the Marketing
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/62 md:text-lg"
        >
          DigiMoria is not a traditional marketing agency. We are an AI infrastructure company that designs
          automated customer acquisition systems — turning traffic into qualified sales meetings with minimal
          manual work.
        </motion.p>
      </div>
    </section>

    <section className="relative z-10 mx-auto max-w-5xl px-4 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 backdrop-blur-xl md:p-10"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl border border-[#9b87f5]/30 bg-[#9b87f5]/10">
            <Bot className="size-5 text-[#b9abff]" aria-hidden="true" />
          </span>
          <h2 className="font-display text-xl font-semibold text-white md:text-2xl">What we actually do</h2>
        </div>
        <p className="text-sm leading-7 text-white/62 md:text-base">
          Most agencies sell campaigns. We engineer a connected stack: performance ads on Google, Meta and
          LinkedIn; instant AI qualification on every channel; prospect data and CRM automation; landing pages
          and calendar booking — all visible in one growth panel built for your business.
        </p>
      </motion.div>
    </section>

    <section className="relative z-10 mx-auto max-w-5xl px-4 pb-16">
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 text-center backdrop-blur-xl"
          >
            <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
            <div className="mt-2 text-xs leading-relaxed text-white/50">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition-colors hover:border-[#9b87f5]/30"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${v.glow} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <Icon className={`relative size-8 ${v.accent}`} aria-hidden="true" />
              <h3 className="relative mt-4 font-display text-lg font-semibold text-white">{v.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/58">{v.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>

    <section className="relative z-10 mx-auto max-w-3xl px-4 pb-24 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#8b2df2]/15 to-[#2563eb]/10 p-8 text-center backdrop-blur-xl md:p-10"
      >
        <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Ready to see it in action?</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/62 md:text-base">
          Tell us where growth gets stuck. We will map your acquisition, AI response and calendar flow into one
          connected system.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8b2df2] to-[#2563eb] px-8 py-3.5 font-display text-sm font-semibold text-white shadow-[0_0_28px_rgba(139,45,242,0.35)] transition-all hover:shadow-[0_0_36px_rgba(139,45,242,0.48)]"
        >
          Get in Touch <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default About;
