import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FlowConnectorProps {
  direction?: "left-to-right" | "right-to-left" | "straight";
}

const FlowConnector = ({ direction = "straight" }: FlowConnectorProps) => {
  const { ref, revealed } = useScrollReveal(0.3);

  if (direction === "straight") {
    return (
      <div ref={ref} className="flex justify-center py-2 md:py-3">
        <div className="flex flex-col items-center gap-0.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={revealed ? { opacity: [0.2, 0.6, 0.2], scale: 1 } : {}}
              transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary/40"
            />
          ))}
          <motion.div
            initial={{ height: 0 }}
            animate={revealed ? { height: 20 } : {}}
            transition={{ duration: 0.5 }}
            className="w-px bg-gradient-to-b from-primary/30 to-transparent"
          />
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`b-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={revealed ? { opacity: [0.2, 0.6, 0.2], scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.4 + i * 0.15, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary/40"
            />
          ))}
        </div>
      </div>
    );
  }

  // Curved connector for desktop zig-zag
  const isLeftToRight = direction === "left-to-right";
  const pathD = isLeftToRight
    ? "M 50 0 C 50 40, 350 40, 350 80"
    : "M 350 0 C 350 40, 50 40, 50 80";

  return (
    <div ref={ref} className="relative">
      {/* Mobile: simple vertical dots */}
      <div className="flex justify-center py-2 lg:hidden">
        <div className="flex flex-col items-center gap-0.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={revealed ? { opacity: [0.2, 0.6, 0.2], scale: 1 } : {}}
              transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary/40"
            />
          ))}
        </div>
      </div>

      {/* Desktop: curved SVG path */}
      <div className="hidden lg:flex justify-center py-1">
        <svg width="400" height="80" viewBox="0 0 400 80" fill="none" className="overflow-visible">
          <motion.path
            d={pathD}
            stroke="url(#curveGrad)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={revealed ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="animate-dash-flow"
          />
          {/* Flowing particle */}
          {revealed && (
            <motion.circle
              r="3"
              fill="hsl(270, 80%, 55%)"
              opacity="0.6"
              animate={{
                offsetDistance: ["0%", "100%"],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: `path('${pathD}')` }}
            />
          )}
          <defs>
            <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(270, 80%, 55%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(220, 90%, 56%)" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default FlowConnector;
