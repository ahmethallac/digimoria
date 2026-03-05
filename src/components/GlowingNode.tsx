import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface GlowingNodeProps {
  label: string;
  icon?: React.ReactNode;
  delay?: number;
  color?: "purple" | "blue";
}

const GlowingNode = ({ label, icon, delay = 0 }: GlowingNodeProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-1.5 cursor-pointer"
    >
      <motion.div
        animate={{
          boxShadow: hovered
            ? `0 0 20px hsla(270, 80%, 55%, 0.2), 0 4px 20px hsla(270, 80%, 55%, 0.1)`
            : `0 1px 3px hsla(260, 20%, 50%, 0.06)`,
          scale: hovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.25 }}
        className="glass-strong w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center"
      >
        {icon}
      </motion.div>
      <span className="text-[10px] text-muted-foreground font-medium text-center leading-tight max-w-[70px]">
        {label}
      </span>
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: delay * 0.5 }}
        className="text-primary/30"
      >
        <ArrowDown className="w-2.5 h-2.5" />
      </motion.div>
    </motion.div>
  );
};

export default GlowingNode;
