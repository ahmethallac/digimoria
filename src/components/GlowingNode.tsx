import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface GlowingNodeProps {
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}

const GlowingNode = ({ label, icon, delay = 0 }: GlowingNodeProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-1 cursor-pointer"
    >
      <motion.div
        animate={{
          boxShadow: hovered
            ? `0 0 18px hsla(270, 80%, 55%, 0.2), 0 4px 16px hsla(270, 80%, 55%, 0.1)`
            : `0 1px 3px hsla(260, 20%, 50%, 0.05)`,
          scale: hovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="glass-strong w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center"
      >
        {icon}
      </motion.div>
      <span className="text-[8px] text-muted-foreground font-medium text-center leading-tight max-w-[60px]">
        {label}
      </span>
      <motion.div
        animate={{ y: [0, 2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: delay * 0.5 }}
        className="text-primary/25"
      >
        <ArrowDown className="w-2 h-2" />
      </motion.div>
    </motion.div>
  );
};

export default GlowingNode;
