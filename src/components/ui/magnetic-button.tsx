import { useRef, MouseEvent, ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  strength?: number;
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, className, strength = 0.35, onMouseMove, onMouseLeave, ...props }, ref) => {
    const innerRef = useRef<HTMLSpanElement>(null);

    const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${x * strength * 0.6}px, ${y * strength * 0.6}px)`;
      }
      onMouseMove?.(e);
    };

    const handleLeave = (e: MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.transform = "translate(0,0)";
      if (innerRef.current) innerRef.current.style.transform = "translate(0,0)";
      onMouseLeave?.(e);
    };

    return (
      <button
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn(
          "relative overflow-hidden transition-transform duration-300 ease-out will-change-transform",
          "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full",
          className
        )}
        {...props}
      >
        <span ref={innerRef} className="relative z-10 inline-flex items-center gap-2 transition-transform duration-300 ease-out">
          {children}
        </span>
      </button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";