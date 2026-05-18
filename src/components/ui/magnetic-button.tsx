"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  strength?: number;
}

/**
 * MagneticButton — cursor-attracted button with subtle pull and
 * a soft glow that follows the pointer. Falls back to a regular
 * button when the user prefers reduced motion.
 */
export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, className, strength = 0.25, onMouseMove, onMouseLeave, ...props }, forwardedRef) => {
    const localRef = React.useRef<HTMLButtonElement | null>(null);
    const setRefs = (el: HTMLButtonElement | null) => {
      localRef.current = el;
      if (typeof forwardedRef === "function") forwardedRef(el);
      else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = el;
    };

    const prefersReduced = useReducedMotion();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const gx = useMotionValue(50);
    const gy = useMotionValue(50);
    const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.3 });
    const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.3 });

    const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      onMouseMove?.(e);
      if (prefersReduced || !localRef.current) return;
      const rect = localRef.current.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      x.set(relX * strength);
      y.set(relY * strength);
      gx.set(((e.clientX - rect.left) / rect.width) * 100);
      gy.set(((e.clientY - rect.top) / rect.height) * 100);
    };

    const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      onMouseLeave?.(e);
      x.set(0);
      y.set(0);
    };

    return (
      <motion.button
        ref={setRefs}
        style={{ x: sx, y: sy }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn("relative inline-flex items-center justify-center", className)}
        {...(props as any)}
      >
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: "radial-gradient(120px circle at var(--mx, 50%) var(--my, 50%), hsla(0,0%,100%,0.25), transparent 60%)",
          }}
        />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

export default MagneticButton;