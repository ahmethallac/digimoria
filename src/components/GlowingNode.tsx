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
      className="flex min-h-[132px] cursor-pointer flex-col items-center gap-2.5">
      
      <motion.div
        animate={{
          boxShadow: hovered ?
          `0 0 24px hsla(270, 80%, 55%, 0.25), 0 6px 20px hsla(270, 80%, 55%, 0.12)` :
          `0 1px 4px hsla(260, 20%, 50%, 0.06)`,
          scale: hovered ? 1.1 : 1
        }}
        transition={{ duration: 0.2 }}
        className="glass-strong flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl md:h-20 md:w-20">
        
        <div className="scale-125 md:scale-110">{icon}</div>
      </motion.div>
      <span className="min-h-[2.25rem] max-w-[92px] text-center text-[11px] font-semibold leading-[1.18] text-muted-foreground md:text-xs">
        {label}
      </span>
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: delay * 0.5 }}
        className="mt-0.5 text-primary/30">
        
        <ArrowDown className="w-3 h-3" />
      </motion.div>
    </motion.div>);

};

export default GlowingNode;
