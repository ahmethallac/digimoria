import { useRef, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export const SpotlightCard = ({ children, className }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur-xl transition-all duration-300",
        "hover:border-primary/40 hover:shadow-[0_10px_40px_-15px_hsla(270,80%,55%,0.35)]",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), hsla(270,80%,55%,0.10), transparent 60%)",
      }}
    >
      {/* gradient border on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), hsla(270,80%,55%,0.18), transparent 40%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};