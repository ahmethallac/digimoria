import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const ProcessHeadingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: revealRef, revealed } = useScrollReveal(0.2);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0.3]);

  return (
    <div ref={containerRef} className="relative overflow-hidden py-2 md:py-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_hsla(270,80%,55%,0.06)_0%,_transparent_70%)]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-primary/[0.06] animate-spin-slow"
        />
      </div>

      <motion.div
        ref={revealRef}
        style={{ opacity }}
        className={`relative z-10 text-center px-4 max-w-3xl mx-auto reveal ${revealed ? "revealed" : ""}`}
      >
        {/* Pill badge */}
        <motion.div
          style={{ y: y2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#9b87f5]/25 bg-[#9b87f5]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#b9abff]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          Our Process
        </motion.div>

        {/* Main heading */}
        <motion.h2
          style={{ y: y1 }}
          className="mb-2 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.7rem]"
        >
          How Does the{" "}
          <span className="font-normal text-[#b9abff]">Setup Process</span> Work?
          <br />
          <span className="text-[0.62em] font-semibold text-white/78">
            Step by Step.
          </span>
        </motion.h2>

        {/* Subtle divider line */}
        <motion.div
          style={{ y: y2 }}
          className="mx-auto mb-3 mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#9b87f5]/45 to-transparent"
        />

        {/* Animated arrow */}
        <motion.div
          style={{ y: y2 }}
          className="hidden flex-col items-center gap-1 md:flex"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.15, 0.6, 0.15], y: [0, 4, 0] }}
              transition={{
                duration: 1.8,
                delay: i * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown
                className="text-[#9b87f5]"
                size={i === 1 ? 22 : 18}
                strokeWidth={i === 1 ? 2.5 : 1.5}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProcessHeadingSection;
