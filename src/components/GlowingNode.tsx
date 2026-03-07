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
      className="flex flex-col items-center cursor-pointer gap-[6px]">
      
      <motion.div
        animate={{
          boxShadow: hovered ?
          `0 0 24px hsla(270, 80%, 55%, 0.25), 0 6px 20px hsla(270, 80%, 55%, 0.12)` :
          `0 1px 4px hsla(260, 20%, 50%, 0.06)`,
          scale: hovered ? 1.1 : 1
        }}
        transition={{ duration: 0.2 }}
        className="glass-strong w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center">
        
        <div className="scale-110">{icon}</div>
      </motion.div>
      <span className="text-[10px] md:text-xs text-muted-foreground font-medium text-center leading-tight max-w-[80px]">
        {label}
      </span>
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: delay * 0.5 }}
        className="text-primary/30">
        
        <ArrowDown className="w-3 h-3" />
      </motion.div>
    </motion.div>);

};

export default GlowingNode;