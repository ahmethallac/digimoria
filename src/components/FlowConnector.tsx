import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FlowConnectorProps {
  direction?: "left-to-right" | "right-to-left" | "straight";
}

const FlowConnector = ({ direction = "straight" }: FlowConnectorProps) => {
  const { ref, revealed } = useScrollReveal(0.1);

  if (direction === "straight") {
    return (
      <div ref={ref} className="flex justify-center py-3 md:py-4">
        <svg width="6" height="60" viewBox="0 0 6 60" className="overflow-visible">
          <line x1="3" y1="0" x2="3" y2="52" stroke="hsl(270, 80%, 55%)" strokeWidth="2" strokeOpacity="0.15" />
          {/* Arrowhead */}
          <polygon points="0,50 3,58 6,50" fill="hsl(270, 80%, 55%)" fillOpacity="0.2" />
          {/* Flowing particle */}
          {revealed && (
            <motion.circle
              cx="3" r="2.5"
              fill="hsl(270, 80%, 55%)"
              animate={{ cy: [0, 55], opacity: [0, 0.6, 0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          )}
        </svg>
      </div>
    );
  }

  const isLeftToRight = direction === "left-to-right";
  const pathD = isLeftToRight
    ? "M 60 10 C 60 50, 440 50, 440 90"
    : "M 440 10 C 440 50, 60 50, 60 90";

  return (
    <div ref={ref} className="relative">
      {/* Mobile: simple vertical arrow */}
      <div className="flex justify-center py-3 lg:hidden">
        <svg width="6" height="50" viewBox="0 0 6 50">
          <line x1="3" y1="0" x2="3" y2="42" stroke="hsl(270, 80%, 55%)" strokeWidth="2" strokeOpacity="0.15" />
          <polygon points="0,40 3,48 6,40" fill="hsl(270, 80%, 55%)" fillOpacity="0.2" />
          {revealed && (
            <motion.circle
              cx="3" r="2"
              fill="hsl(270, 80%, 55%)"
              animate={{ cy: [0, 45], opacity: [0, 0.6, 0.6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
          )}
        </svg>
      </div>

      {/* Desktop: curved SVG path with arrowhead */}
      <div className="hidden lg:flex justify-center py-2">
        <svg width="500" height="100" viewBox="0 0 500 100" fill="none" className="overflow-visible">
          {/* Static path */}
          <path
            d={pathD}
            stroke="hsl(270, 80%, 55%)"
            strokeWidth="2"
            strokeOpacity="0.12"
            fill="none"
          />
          {/* Glow path */}
          <path
            d={pathD}
            stroke="hsl(270, 80%, 55%)"
            strokeWidth="6"
            strokeOpacity="0.03"
            fill="none"
          />
          {/* Arrowhead at end */}
          <motion.circle
            cx={isLeftToRight ? 440 : 60}
            cy="90"
            r="4"
            fill="hsl(270, 80%, 55%)"
            fillOpacity="0.15"
          />
          {/* Flowing particles */}
          {revealed && [0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              r="3"
              fill="hsl(270, 80%, 55%)"
              animate={{
                offsetDistance: ["0%", "100%"],
                opacity: [0, 0.5, 0.5, 0],
              }}
              transition={{ duration: 3, delay: i * 1, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: `path('${pathD}')` } as any}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default FlowConnector;
