import { motion } from "framer-motion";

const FlowLine = ({ className = "" }: { className?: string }) => (
  <div className={`flex justify-center py-2 ${className}`}>
    <svg width="4" height="60" viewBox="0 0 4 60" className="overflow-visible">
      <motion.line
        x1="2" y1="0" x2="2" y2="60"
        stroke="url(#flowGradLight)"
        strokeWidth="2"
        strokeDasharray="8 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="animate-dash-flow"
      />
      <defs>
        <linearGradient id="flowGradLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(270, 80%, 55%)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(270, 80%, 55%)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default FlowLine;
