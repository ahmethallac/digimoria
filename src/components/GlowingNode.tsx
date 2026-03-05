import { useState } from "react";
import { motion } from "framer-motion";

interface GlowingNodeProps {
  label: string;
  icon?: React.ReactNode;
  delay?: number;
  color?: "purple" | "blue";
}

const GlowingNode = ({ label, icon, delay = 0, color = "purple" }: GlowingNodeProps) => {
  const [hovered, setHovered] = useState(false);

  const glowColor = color === "blue" 
    ? "hsla(190, 100%, 50%, 0.4)" 
    : "hsla(270, 100%, 65%, 0.4)";
  const glowColorStrong = color === "blue"
    ? "hsla(190, 100%, 50%, 0.7)"
    : "hsla(270, 100%, 65%, 0.7)";

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
            ? `0 0 30px ${glowColorStrong}, 0 0 80px ${glowColor}`
            : `0 0 15px ${glowColor}, 0 0 40px hsla(270, 100%, 65%, 0.1)`,
        }}
        transition={{ duration: 0.3 }}
        className="glass w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl"
      >
        {icon}
      </motion.div>
      <span className="text-xs md:text-sm text-muted-foreground font-medium text-center max-w-[80px]">
        {label}
      </span>
    </motion.div>
  );
};

export default GlowingNode;
