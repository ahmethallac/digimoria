"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  stagger?: number;
}

const container = (delay: number, stagger: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const word: Variants = {
  hidden: { y: "0.6em", opacity: 0, filter: "blur(6px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * AnimatedText — word-by-word reveal with subtle blur-in.
 * Respects prefers-reduced-motion.
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  wordClassName,
  as = "span",
  delay = 0,
  stagger = 0.08,
}) => {
  const prefersReduced = useReducedMotion();
  const Tag = motion[as as "span"] as any;
  const words = text.split(" ");

  if (prefersReduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag
      variants={container(delay, stagger)}
      initial="hidden"
      animate="show"
      className={cn("inline-block", className)}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={word} className={cn("inline-block will-change-transform", wordClassName)}>
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedText;