import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FlowConnector = () => {
  const { ref, revealed } = useScrollReveal(0.5);

  return (
    <div ref={ref} className="flex justify-center py-4">
      <div className="flex flex-col items-center gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={revealed ? { opacity: [0.3, 0.7, 0.3], scale: 1 } : {}}
            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary/40"
          />
        ))}
        <motion.div
          initial={{ height: 0 }}
          animate={revealed ? { height: 32 } : {}}
          transition={{ duration: 0.6 }}
          className="w-px bg-gradient-to-b from-primary/30 to-transparent"
        />
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`b-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={revealed ? { opacity: [0.3, 0.7, 0.3], scale: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.6 + i * 0.2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary/40"
          />
        ))}
      </div>
    </div>
  );
};

export default FlowConnector;
