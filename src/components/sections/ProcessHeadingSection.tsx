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
    <div ref={containerRef} className="relative py-6 md:py-8 overflow-hidden">
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          Our Process
        </motion.div>

        {/* Main heading */}
        <motion.h2
          style={{ y: y1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-display leading-[1.1] tracking-tight mb-4"
        >
          <span className="text-foreground">How Does the </span>
          <span className="bg-gradient-to-r from-primary to-neon-blue bg-clip-text text-transparent">
            Setup Process
          </span>
          <span className="text-foreground"> Work?</span>
          <br />
          <span className="text-muted-foreground/70 text-[0.65em] font-semibold">
            Step by Step.
          </span>
        </motion.h2>

        {/* Subtle divider line */}
        <motion.div
          style={{ y: y2 }}
          className="w-16 h-[2px] mx-auto mt-6 mb-8 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />

        {/* Animated arrow */}
        <motion.div
          style={{ y: y2 }}
          className="flex flex-col items-center gap-1"
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
                className="text-primary"
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
