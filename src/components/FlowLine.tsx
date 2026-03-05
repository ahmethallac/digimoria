import { motion } from "framer-motion";

const FlowLine = ({ className = "" }: { className?: string }) => (
  <div className={`flex justify-center py-4 ${className}`}>
    <svg width="4" height="80" viewBox="0 0 4 80" className="overflow-visible">
      <motion.line
        x1="2" y1="0" x2="2" y2="80"
        stroke="url(#flowGrad)"
        strokeWidth="2"
        strokeDasharray="8 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="animate-dash-flow"
      />
      <defs>
        <linearGradient id="flowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(270, 100%, 65%)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default FlowLine;
