"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Code2,
  Database,
  Globe2,
  LucideIcon,
  Settings2,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Feature = {
  id: string;
  label: string;
  icon: LucideIcon;
  image: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    id: "performance",
    label: "AI-Powered Digital Performance",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&w=1200&q=80",
    description: "Google, Meta and LinkedIn campaigns managed with AI optimization for measurable ROI.",
  },
  {
    id: "automation",
    label: "Custom AI Automation Solutions",
    icon: Settings2,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    description: "Lead capture, CRM updates and follow-up workflows running hands-free around the clock.",
  },
  {
    id: "web",
    label: "Website Development",
    icon: Globe2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description: "Fast, conversion-focused websites and landing pages built for SEO and lead generation.",
  },
  {
    id: "content",
    label: "AI Content Production",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    description: "Scalable content systems for blogs, ads, social media and scripts in your brand voice.",
  },
  {
    id: "agents",
    label: "AI Agent Development",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    description: "Sales, support and outreach agents for WhatsApp, website chat and social DMs.",
  },
  {
    id: "infrastructure",
    label: "Full AI System Infrastructure",
    icon: Database,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    description: "A complete operating layer across data, automation, CRM and AI communication.",
  },
  {
    id: "software",
    label: "Vibe Coding Software Solutions",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    description: "Rapid MVPs, internal tools and custom SaaS products built with AI-assisted workflows.",
  },
];

const AUTO_PLAY_INTERVAL = 3200;
const ITEM_HEIGHT = 76;

const wrap = (min: number, max: number, value: number) => {
  const rangeSize = max - min;
  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((current) => current + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => window.clearInterval(interval);
  }, [isPaused, nextStep]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="relative flex min-h-[620px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0613] shadow-[0_28px_90px_rgba(0,0,0,0.28)] lg:aspect-video lg:flex-row">
        <div className="relative z-30 flex min-h-[360px] w-full flex-col items-start justify-center overflow-hidden bg-[#130920] px-5 md:min-h-[430px] md:px-12 lg:h-full lg:w-[42%] lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,45,242,0.34)_0%,transparent_46%)]" />
          <div className="absolute inset-x-0 top-0 z-40 h-16 bg-gradient-to-b from-[#130920] via-[#130920]/82 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-40 h-16 bg-gradient-to-t from-[#130920] via-[#130920]/82 to-transparent" />

          <div className="relative z-20 flex h-full w-full items-center justify-center lg:justify-start">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === currentIndex;
              const wrappedDistance = wrap(-(FEATURES.length / 2), FEATURES.length / 2, index - currentIndex);

              return (
                <motion.div
                  key={feature.id}
                  style={{ height: ITEM_HEIGHT, width: "100%" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: Math.max(0.2, 1 - Math.abs(wrappedDistance) * 0.24),
                  }}
                  transition={{ type: "spring", stiffness: 90, damping: 22, mass: 1 }}
                  className="absolute flex w-full items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "group relative flex w-full max-w-[360px] items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-all duration-500 md:rounded-[1.15rem] md:px-5 md:py-4",
                      isActive
                        ? "bg-[#8b2df2] text-white border-[#b9abff]/40 shadow-[0_18px_40px_rgba(139,45,242,0.26)]"
                        : "bg-white/[0.035] text-white/65 border-white/10 hover:border-[#b9abff]/40 hover:bg-white/10 hover:text-white",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-10 items-center justify-center rounded-xl border transition-colors duration-500",
                        isActive
                          ? "border-white/25 bg-white/20 text-white"
                          : "border-white/20 bg-white/10 text-white/60 group-hover:text-white",
                      )}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold uppercase leading-5 tracking-tight">
                          {feature.label}
                        </span>
                      </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative flex min-h-[520px] flex-1 items-center justify-center overflow-hidden border-t border-white/10 bg-[#10091e] px-6 py-12 md:min-h-[600px] md:px-12 md:py-16 lg:h-full lg:border-l lg:border-t-0 lg:px-10">
          <div className="relative min-h-[480px] w-full max-w-[420px] md:min-h-[540px]">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                  className={cn(
                    "absolute inset-x-0 top-0 flex origin-center flex-col overflow-hidden rounded-[2rem] border-4 border-[#0a0613] bg-[#0a0613] shadow-2xl md:rounded-[2.8rem] md:border-8",
                    isActive ? "bottom-0" : "bottom-auto h-[88%]",
                  )}
                >
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.label}
                      className={cn(
                        "h-full w-full transition-all duration-700 object-cover object-center",
                        isActive ? "grayscale-0 blur-0" : "grayscale blur-[2px] brightness-75",
                      )}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src = "/service-performance.svg";
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0613]/80 via-transparent to-[#0a0613]/30" />
                    <div
                      className={cn(
                        "absolute left-6 top-6 flex items-center gap-3 transition-opacity duration-300 md:left-8 md:top-8",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    >
                      <div className="size-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                      <span className="font-mono text-[10px] font-normal uppercase tracking-[0.3em] text-white/80">
                        Live System
                      </span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="flex shrink-0 flex-col gap-3 border-t border-white/10 bg-[#0a0613] p-6 md:p-8"
                      >
                        <div className="w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-normal uppercase tracking-[0.2em] text-white/90">
                          {index + 1} / {FEATURES.length}
                        </div>
                        <p className="text-lg font-normal leading-snug tracking-tight text-white/92 md:text-xl">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
