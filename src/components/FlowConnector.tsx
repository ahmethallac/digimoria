import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FlowConnectorProps {
  direction?: "left-to-right" | "right-to-left" | "straight";
}

const FlowConnector = ({ direction: _direction = "straight" }: FlowConnectorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.6, once: false });

  return (
    <div ref={ref} className="stage-flow-connector flex justify-center py-2 md:py-3">
      <svg width="8" height="56" viewBox="0 0 8 56" className="overflow-visible" aria-hidden="true">
        <line x1="4" y1="0" x2="4" y2="48" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
        <motion.path
          d="M 4 0 L 4 48"
          fill="none"
          stroke="url(#stage-flow-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: isInView ? 1 : 0.15, opacity: isInView ? 1 : 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.polygon
          points="1,44 4,54 7,44"
          fill="#9b87f5"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: isInView ? 0.85 : 0.2, y: isInView ? 0 : -4 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        />
        {isInView && (
          <motion.circle
            cx="4"
            r="2.5"
            fill="#b9abff"
            animate={{ cy: [2, 50], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />
        )}
        <defs>
          <linearGradient id="stage-flow-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b2df2" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FlowConnector;
