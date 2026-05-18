import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

/**
 * SectionDivider — soft animated gradient line that visually
 * bridges two sections without adding heavy vertical space.
 */
export const SectionDivider: React.FC<SectionDividerProps> = ({ className }) => (
  <div className={cn("relative h-px w-full overflow-hidden", className)} aria-hidden>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-[shimmer_3.5s_ease-in-out_infinite]" />
    <style>{`@keyframes shimmer { 0% { transform: translateX(0); } 100% { transform: translateX(400%); } }`}</style>
  </div>
);

export default SectionDivider;