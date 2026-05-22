"use client";

import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Bot,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Gauge,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  MoreVertical,
  Phone,
  Search,
  Settings,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

const sidebarItems = [
  { label: "Launchpad", icon: Gauge },
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Conversations", icon: MessageCircle },
  { label: "Calendars", icon: CalendarDays },
  { label: "Contacts", icon: ClipboardList },
  { label: "Opportunities", icon: Star },
  { label: "AI Agents", icon: Sparkles },
  { label: "Marketing", icon: Megaphone },
  { label: "Automation", icon: Zap },
];

const metricCards = [
  { label: "Qualified Meetings", value: 128, prefix: "", suffix: "", accent: "from-[#8b2df2] to-[#c084fc]" },
  { label: "Lead Match Rate", value: 89, prefix: "", suffix: "%", accent: "from-[#2563eb] to-[#38bdf8]" },
  { label: "Pipeline Value", value: 428, prefix: "$", suffix: "K", accent: "from-[#7c3aed] to-[#2563eb]" },
  { label: "AI Response", value: 12, prefix: "", suffix: "s", accent: "from-[#14b8a6] to-[#8b2df2]" },
];

const pipelineRows = [
  { label: "New Lead", percent: 84, value: "$0" },
  { label: "Pre Consult Nurture", percent: 62, value: "$18K" },
  { label: "Consultation Scheduled", percent: 38, value: "$76K" },
  { label: "Proposal Sent", percent: 24, value: "$184K" },
  { label: "Won", percent: 12, value: "$150K" },
];

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  delay = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame = 0;
    const timer = window.setTimeout(() => {
      const start = performance.now();
      const duration = 1250;

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));

        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        }
      };

      frame = window.requestAnimationFrame(tick);
    }, delay * 1000);

    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
    };
  }, [delay, value]);

  return (
    <>
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </>
  );
}

function LogoParticle({
  children,
  className,
  left,
  top,
  mx,
  my,
  mouseX,
  mouseY,
  delay = 0,
}: {
  children: ReactNode;
  className: string;
  left: string;
  top: string;
  mx: number;
  my: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  delay?: number;
}) {
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-mx, mx]), { stiffness: 120, damping: 20 });
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-my, my]), { stiffness: 120, damping: 20 });

  return (
    <motion.div
      className={`absolute flex items-center justify-center rounded-full border backdrop-blur-md ${className}`}
      style={{ left, top, x, y }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0.42, 0.92, 0.55], scale: [1, 1.18, 1] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Globe3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const globeX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), { stiffness: 120, damping: 24 });
  const globeY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 24 });
  const globeRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 24 });
  const globeRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 24 });
  const cityAX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 24]), { stiffness: 150, damping: 20 });
  const cityAY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 12]), { stiffness: 150, damping: 20 });
  const cityBX = useSpring(useTransform(mouseX, [-0.5, 0.5], [18, -18]), { stiffness: 150, damping: 20 });
  const cityBY = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -8]), { stiffness: 150, damping: 20 });
  const cityCX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-26, 18]), { stiffness: 150, damping: 20 });
  const cityCY = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -14]), { stiffness: 150, damping: 20 });
  const satelliteX = useSpring(useTransform(mouseX, [-0.5, 0.5], [26, -30]), { stiffness: 130, damping: 18 });
  const satelliteY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-18, 22]), { stiffness: 130, damping: 18 });

  return (
    <section
      className="relative -mt-16 w-full overflow-hidden bg-[#0a0613] pb-4 pt-32 text-white antialiased md:pb-8 md:pt-32"
      style={{ background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)" }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(ellipse_at_top,rgba(155,135,245,0.27)_0%,rgba(21,13,39,0.58)_38%,rgba(10,6,19,0)_72%)]" />
      <div className="pointer-events-none absolute inset-0 z-[4] overflow-hidden">
        <LogoParticle
          left="8%"
          top="23%"
          mx={28}
          my={18}
          mouseX={mouseX}
          mouseY={mouseY}
          className="size-9 border-white/15 bg-white/88 text-base font-black text-[#4285f4] shadow-[0_0_28px_rgba(66,133,244,0.32)]"
        >
          G
        </LogoParticle>
        <LogoParticle
          left="18%"
          top="54%"
          mx={18}
          my={24}
          delay={0.4}
          mouseX={mouseX}
          mouseY={mouseY}
          className="hidden size-7 border-[#7db4ff]/35 bg-[#0866ff]/18 text-sm font-black text-[#8cc2ff] shadow-[0_0_22px_rgba(8,102,255,0.32)] md:flex"
        >
          M
        </LogoParticle>
        <LogoParticle
          left="82%"
          top="20%"
          mx={34}
          my={20}
          delay={0.8}
          mouseX={mouseX}
          mouseY={mouseY}
          className="size-8 border-[#7db4ff]/30 bg-[#0a66c2]/20 text-xs font-black text-[#93c5fd] shadow-[0_0_24px_rgba(10,102,194,0.34)]"
        >
          in
        </LogoParticle>
        <LogoParticle
          left="91%"
          top="45%"
          mx={22}
          my={30}
          delay={1.1}
          mouseX={mouseX}
          mouseY={mouseY}
          className="hidden size-8 border-pink-300/25 bg-pink-400/12 text-sm font-black text-pink-100 shadow-[0_0_24px_rgba(244,114,182,0.24)] lg:flex"
        >
          T
        </LogoParticle>
        <LogoParticle
          left="13%"
          top="74%"
          mx={26}
          my={18}
          delay={1.4}
          mouseX={mouseX}
          mouseY={mouseY}
          className="hidden size-8 border-primary/30 bg-primary/16 text-[#d9ccff] shadow-[0_0_28px_rgba(139,92,246,0.32)] md:flex"
        >
          <Sparkles className="size-4" aria-hidden="true" />
        </LogoParticle>
        <LogoParticle
          left="76%"
          top="69%"
          mx={20}
          my={28}
          delay={1.7}
          mouseX={mouseX}
          mouseY={mouseY}
          className="hidden size-7 border-orange-300/28 bg-orange-400/12 text-sm font-black text-orange-100 shadow-[0_0_22px_rgba(251,146,60,0.24)] md:flex"
        >
          H
        </LogoParticle>
        <LogoParticle
          left="68%"
          top="34%"
          mx={30}
          my={15}
          delay={2}
          mouseX={mouseX}
          mouseY={mouseY}
          className="hidden size-6 border-amber-200/25 bg-amber-200/12 text-xs font-black text-amber-100 shadow-[0_0_18px_rgba(253,230,138,0.22)] lg:flex"
        >
          Z
        </LogoParticle>
        <LogoParticle
          left="30%"
          top="30%"
          mx={16}
          my={22}
          delay={2.2}
          mouseX={mouseX}
          mouseY={mouseY}
          className="hidden size-6 border-emerald-200/25 bg-emerald-300/12 text-[10px] font-black text-emerald-100 shadow-[0_0_18px_rgba(110,231,183,0.22)] lg:flex"
        >
          S
        </LogoParticle>
        <LogoParticle
          left="87%"
          top="78%"
          mx={18}
          my={16}
          delay={2.6}
          mouseX={mouseX}
          mouseY={mouseY}
          className="hidden size-5 border-sky-200/25 bg-sky-300/16 text-[9px] font-black text-sky-100 shadow-[0_0_16px_rgba(125,211,252,0.28)] md:flex"
        >
          AI
        </LogoParticle>
        <LogoParticle
          left="5%"
          top="43%"
          mx={12}
          my={18}
          delay={2.9}
          mouseX={mouseX}
          mouseY={mouseY}
          className="hidden size-3 border-white/20 bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.55)] sm:flex"
        >
          <span />
        </LogoParticle>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#9b87f5]/30 bg-[#9b87f5]/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b9abff]">
            AI-Powered Digital Performance Agency
          </span>
          <h1 className="mx-auto mb-4 max-w-5xl text-4xl font-light leading-tight text-white text-balance md:text-5xl lg:text-6xl">
            Build Scalable Growth with{" "}
            <span className="font-normal text-[#b9abff]">AI-Powered</span> Acquisition Systems
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
            DigiMoria combines performance marketing, AI, data and automation to turn traffic into qualified
            sales meetings without the limits of a traditional advertising agency.
          </p>

          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="neumorphic-button relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-4 text-center text-sm font-medium text-white shadow-lg transition-all duration-300 hover:border-[#9b87f5]/40 hover:shadow-[0_0_22px_rgba(155,135,245,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0613] sm:w-auto"
            >
              Get Started
            </Link>
            <a
              href="#ai-meeting-engine"
              className="flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm text-white/74 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0613] sm:w-auto"
            >
              <span>Learn how it works</span>
              <ChevronDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto h-[455px] w-full max-w-7xl overflow-hidden md:h-[520px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="pointer-events-none absolute left-1/2 top-[32px] h-[320px] w-[900px] -translate-x-1/2 md:top-[46px] md:h-[390px] md:w-[1120px]">
            <motion.div
              className="absolute inset-x-0 bottom-0 h-[250px] rounded-[50%_50%_0_0/100%_100%_0_0] border-t border-[#b9abff]/18 bg-[radial-gradient(ellipse_at_50%_20%,rgba(194,141,255,0.72)_0%,rgba(84,65,173,0.48)_25%,rgba(24,58,88,0.55)_48%,rgba(7,13,28,0.92)_76%),linear-gradient(120deg,rgba(56,189,248,0.22),transparent_38%,rgba(139,92,246,0.22)_72%,transparent)] shadow-[0_-28px_90px_rgba(155,135,245,0.2)] will-change-transform [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_76%,transparent_100%)] md:h-[330px]"
              style={{ x: globeX, y: globeY, rotateX: globeRotateX, rotateY: globeRotateY }}
            >
              <div className="absolute inset-x-[8%] top-[22%] h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />
              <div className="absolute inset-x-[14%] top-[38%] h-px bg-gradient-to-r from-transparent via-sky-200/18 to-transparent" />
              <motion.div
                className="absolute left-[18%] top-[30%] h-1.5 w-24 rounded-full bg-amber-200/45 blur-[2px]"
                style={{ x: cityAX, y: cityAY }}
              />
              <motion.div
                className="absolute left-[34%] top-[46%] h-1 w-16 rounded-full bg-amber-200/35 blur-[2px]"
                style={{ x: cityBX, y: cityBY }}
              />
              <motion.div
                className="absolute right-[22%] top-[35%] h-1.5 w-28 rounded-full bg-amber-100/30 blur-[2px]"
                style={{ x: cityCX, y: cityCY }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.16)_42%,transparent_54%)]" />
            </motion.div>
            <div className="hidden">
              <motion.div
                className="absolute left-2 top-12 flex size-8 items-center justify-center rounded-full border border-white/15 bg-white/90 text-sm font-black text-[#4285f4] shadow-[0_0_26px_rgba(66,133,244,0.36)]"
                style={{ x: satelliteX, y: satelliteY }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.72, 1, 0.72] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              >
                G
              </motion.div>
              <motion.div
                className="absolute right-8 top-2 flex size-7 items-center justify-center rounded-full border border-[#7db4ff]/30 bg-[#0866ff]/18 text-base font-black text-[#8cc2ff] shadow-[0_0_24px_rgba(8,102,255,0.32)]"
                style={{ x: cityAX, y: cityBY }}
                animate={{ scale: [1, 1.18, 1], opacity: [0.62, 1, 0.62] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
              >
                ∞
              </motion.div>
              <motion.div
                className="absolute bottom-2 left-20 flex size-9 items-center justify-center rounded-full border border-primary/30 bg-primary/18 text-[#d9ccff] shadow-[0_0_30px_rgba(139,92,246,0.36)]"
                style={{ x: cityBX, y: satelliteY }}
                animate={{ scale: [1, 1.14, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="size-4" aria-hidden="true" />
              </motion.div>
              <motion.div
                className="absolute right-0 top-16 flex size-5 items-center justify-center rounded-full bg-sky-300/70 text-[9px] font-black text-[#07111f] shadow-[0_0_20px_rgba(125,211,252,0.45)]"
                style={{ x: cityCX, y: cityAY }}
                animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.95, 0.5] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                AI
              </motion.div>
              <motion.div
                className="absolute left-28 top-9 h-1.5 w-1.5 rounded-full bg-white/85 shadow-[0_0_16px_rgba(255,255,255,0.8)]"
                style={{ x: satelliteX, y: cityCY }}
                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>

          <motion.div
            className="absolute left-1/2 top-[188px] z-10 h-[380px] w-[calc(100%-1.5rem)] max-w-[1180px] overflow-hidden rounded-xl border border-white/10 bg-[#0c0a16] text-white shadow-[0_34px_120px_rgba(0,0,0,0.56)] md:top-[225px] md:w-[92%]"
            initial={{ x: "-50%", y: 32, opacity: 0, rotateX: 10, scale: 0.985 }}
            animate={{ x: "-50%", y: 0, opacity: 1, rotateX: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
          >
            <motion.div
              className="pointer-events-none absolute inset-y-0 z-20 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-140%", opacity: 0 }}
              animate={{ x: "330%", opacity: [0, 1, 0] }}
              transition={{ duration: 1.65, ease: "easeInOut", delay: 1.08 }}
            />
            <div className="grid min-h-[380px] grid-cols-[176px_1fr] md:grid-cols-[218px_1fr]">
              <aside className="hidden border-r border-white/10 bg-[#151b2a] md:flex md:flex-col">
                <div className="flex h-16 items-center justify-center border-b border-white/5">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.22em] text-white">
                    DigiMoria
                  </span>
                </div>
                <div className="p-3">
                  <div className="mb-3 rounded-lg bg-white/10 p-2">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="truncate font-semibold text-white">Client Growth Hub</span>
                      <ChevronDown className="size-4 text-slate-300" aria-hidden="true" />
                    </div>
                    <div className="text-xs text-slate-400">AI acquisition workspace</div>
                  </div>
                  <div className="mb-4 flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-2 py-2 text-xs text-slate-400">
                    <Search className="size-4" aria-hidden="true" />
                    Search
                    <span className="ml-auto rounded bg-white/15 px-1.5 text-[10px] text-slate-300">ctrl K</span>
                  </div>
                  <nav className="space-y-1">
                    {sidebarItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className={`flex items-center gap-3 rounded-md px-2.5 py-2 text-sm ${
                            item.active ? "bg-[#0b1020] text-white" : "text-slate-300"
                          }`}
                        >
                          <Icon className="size-4" aria-hidden="true" />
                          {item.label}
                        </div>
                      );
                    })}
                  </nav>
                </div>
                <div className="mt-auto p-4">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Settings className="size-4" aria-hidden="true" />
                    Settings
                  </div>
                </div>
              </aside>

              <div className="min-w-0 bg-[#101523]">
                <div className="flex h-14 items-center justify-end gap-3 border-b border-white/10 bg-[#0f1422] px-4">
                  <span className="flex size-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#8b2df2] px-3 py-1.5 text-sm font-medium text-white">
                    <Sparkles className="size-4" aria-hidden="true" />
                    Ask AI
                  </span>
                  <span className="hidden size-8 items-center justify-center rounded-full bg-[#8b2df2]/20 text-[#d9ccff] sm:flex">
                    <Bot className="size-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="p-4 md:p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.08]">
                        <LayoutDashboard className="size-5" aria-hidden="true" />
                      </button>
                      <div>
                        <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">Dashboard</h2>
                        <div className="mt-1 text-sm font-medium text-[#9b87f5]">+ Quick Filters</div>
                      </div>
                    </div>
                    <button className="hidden items-center gap-2 rounded-md bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white shadow-sm md:inline-flex">
                      Edit Dashboard
                    </button>
                    <button className="flex size-10 items-center justify-center rounded-md text-slate-400 md:hidden">
                      <MoreVertical className="size-5" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="grid gap-3 md:grid-cols-4">
                    {metricCards.map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        className="rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.72 + index * 0.1 }}
                      >
                        <div className="text-[10px] uppercase tracking-[0.18em] text-white/42">{metric.label}</div>
                        <div className="mt-3 font-display text-2xl font-semibold text-white">
                          <AnimatedNumber
                            value={metric.value}
                            prefix={metric.prefix}
                            suffix={metric.suffix}
                            delay={0.9 + index * 0.12}
                          />
                        </div>
                        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${metric.accent}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.1, ease: "easeOut", delay: 0.95 + index * 0.14 }}
                            style={{ transformOrigin: "left" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-3 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-white">Marketing Pipeline</h3>
                        <span className="text-xs text-white/45">Last 30 Days</span>
                      </div>
                      <div className="space-y-2">
                        {pipelineRows.map((row, index) => (
                          <motion.div
                            key={row.label}
                            className="grid grid-cols-[1fr_4rem_4rem] items-center gap-3 text-xs"
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35, delay: 1.03 + index * 0.09 }}
                          >
                            <div>
                              <div className="mb-1 flex items-center justify-between text-white/70">
                                <span>{row.label}</span>
                                <span className="md:hidden">{row.value}</span>
                              </div>
                              <div className="h-2 rounded-full bg-white/[0.08]">
                                <motion.div
                                  className="h-full rounded-full bg-gradient-to-r from-[#8b2df2] to-[#38bdf8]"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${row.percent}%` }}
                                  transition={{ duration: 1, ease: "easeOut", delay: 1.08 + index * 0.1 }}
                                />
                              </div>
                            </div>
                            <div className="hidden text-right text-white/55 md:block">{row.percent}%</div>
                            <div className="hidden text-right font-medium text-white md:block">{row.value}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-white">AI Qualification</h3>
                        <CheckCircle2 className="size-4 text-emerald-400" aria-hidden="true" />
                      </div>
                      <div className="grid gap-3">
                        {["Intent detected", "Budget verified", "Calendar booked"].map((item, index) => (
                          <motion.div
                            key={item}
                            className="flex items-center gap-3 rounded-lg bg-black/18 p-3 text-sm text-white/75"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 1.32 + index * 0.12 }}
                          >
                            <span className="flex size-7 items-center justify-center rounded-full bg-[#8b2df2]/20 text-xs text-[#d8d0ff]">
                              {index + 1}
                            </span>
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0613] via-[#0a0613]/80 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-[#0a0613]/82 to-[#0a0613]" />
    </section>
  );
}
