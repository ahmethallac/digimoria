"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
}

/**
 * SpotlightCard — radial cursor-follow highlight on top of any card.
 * Uses CSS variables for performance (no React state per mousemove).
 */
export const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ children, className, spotlightColor = "hsla(270, 80%, 55%, 0.10)", onMouseMove, ...props }, ref) => {
    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
      onMouseMove?.(e);
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
    };

    return (
      <div
        ref={ref}
        onMouseMove={handleMove}
        className={cn("group/spot relative isolate", className)}
        {...props}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
          style={{
            background: `radial-gradient(320px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), ${spotlightColor}, transparent 65%)`,
          }}
        />
        {children}
      </div>
    );
  }
);
SpotlightCard.displayName = "SpotlightCard";

export default SpotlightCard;