import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface GlowingNodeProps {
  label: string;
  icon?: React.ReactNode;
  delay?: number;
  color?: "purple" | "blue";
}

const GlowingNode = ({ label, icon, delay = 0, color = "purple" }: GlowingNodeProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-2 cursor-pointer"
    >
      <motion.div
        animate={{
          boxShadow: hovered
            ? `0 0 24px hsla(270, 80%, 55%, 0.25), 0 8px 32px hsla(270, 80%, 55%, 0.12)`
            : `0 1px 3px hsla(260, 20%, 50%, 0.08)`,
          scale: hovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="glass-strong w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl"
      >
        {icon}
      </motion.div>
      <span className="text-xs md:text-sm text-muted-foreground font-medium text-center max-w-[80px]">
        {label}
      </span>
      {/* Animated arrow pointing down */}
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: delay * 0.5 }}
        className="text-primary/40"
      >
        <ArrowDown className="w-3 h-3" />
      </motion.div>
    </motion.div>
  );
};

export default GlowingNode;
