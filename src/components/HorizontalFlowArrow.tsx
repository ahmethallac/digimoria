import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HorizontalFlowArrow = () => {
  const { ref, revealed } = useScrollReveal(0.3);

  return (
    <div ref={ref} className="hidden lg:flex items-center justify-center">
      <svg width="48" height="24" viewBox="0 0 48 24" className="overflow-visible">
        {/* Static line */}
        <line
          x1="0" y1="12" x2="38" y2="12"
          stroke="hsl(270, 80%, 55%)"
          strokeWidth="2"
          strokeOpacity="0.15"
        />
        {/* Glow line */}
        <line
          x1="0" y1="12" x2="38" y2="12"
          stroke="hsl(270, 80%, 55%)"
          strokeWidth="6"
          strokeOpacity="0.04"
        />
        {/* Arrowhead */}
        <polygon
          points="36,6 46,12 36,18"
          fill="hsl(270, 80%, 55%)"
          fillOpacity="0.25"
        />
        {/* Flowing particles */}
        {revealed && [0, 1].map((i) => (
          <motion.circle
            key={i}
            cy="12"
            r="3"
            fill="hsl(270, 80%, 55%)"
            animate={{
              cx: [0, 44],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default HorizontalFlowArrow;
