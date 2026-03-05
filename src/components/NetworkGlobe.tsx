import { motion } from "framer-motion";
import { useMemo } from "react";

const NetworkGlobe = () => {
  // Generate nodes on a circle to simulate globe network
  const nodes = useMemo(() => {
    const pts: { x: number; y: number; size: number; delay: number }[] = [];
    for (let i = 0; i < 40; i++) {
      const angle = (Math.PI * 2 * i) / 40 + Math.random() * 0.3;
      const radius = 120 + Math.random() * 100;
      pts.push({
        x: 200 + Math.cos(angle) * radius * (0.7 + Math.random() * 0.3),
        y: 200 + Math.sin(angle) * radius * (0.5 + Math.random() * 0.5),
        size: 1.5 + Math.random() * 2,
        delay: Math.random() * 3,
      });
    }
    // Inner nodes
    for (let i = 0; i < 20; i++) {
      const angle = (Math.PI * 2 * i) / 20;
      const radius = 40 + Math.random() * 80;
      pts.push({
        x: 200 + Math.cos(angle) * radius,
        y: 200 + Math.sin(angle) * radius * 0.6,
        size: 1 + Math.random() * 1.5,
        delay: Math.random() * 5,
      });
    }
    return pts;
  }, []);

  const connections = useMemo(() => {
    const conns: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
    for (let i = 0; i < 25; i++) {
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      const b = nodes[Math.floor(Math.random() * nodes.length)];
      if (a !== b) {
        conns.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, delay: Math.random() * 8 });
      }
    }
    return conns;
  }, [nodes]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="relative" style={{ width: 400, height: 400 }}>
        {/* Globe outline circles */}
        <svg width="400" height="400" viewBox="0 0 400 400" className="absolute inset-0 opacity-[0.06]">
          <circle cx="200" cy="200" r="150" stroke="hsl(270, 80%, 55%)" strokeWidth="0.8" fill="none" />
          <circle cx="200" cy="200" r="100" stroke="hsl(270, 80%, 55%)" strokeWidth="0.5" fill="none" />
          <ellipse cx="200" cy="200" rx="150" ry="60" stroke="hsl(270, 80%, 55%)" strokeWidth="0.5" fill="none" />
          <ellipse cx="200" cy="200" rx="60" ry="150" stroke="hsl(270, 80%, 55%)" strokeWidth="0.5" fill="none" />
          <ellipse cx="200" cy="200" rx="110" ry="150" stroke="hsl(270, 80%, 55%)" strokeWidth="0.4" fill="none" />
        </svg>

        {/* Connection lines */}
        <svg width="400" height="400" viewBox="0 0 400 400" className="absolute inset-0">
          {connections.map((c, i) => (
            <motion.line
              key={i}
              x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
              stroke="hsl(270, 80%, 55%)"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.12, 0.12, 0] }}
              transition={{ duration: 4, delay: c.delay, repeat: Infinity }}
            />
          ))}
        </svg>

        {/* Nodes */}
        <svg width="400" height="400" viewBox="0 0 400 400" className="absolute inset-0">
          {nodes.map((n, i) => (
            <motion.circle
              key={i}
              cx={n.x} cy={n.y} r={n.size}
              fill="hsl(270, 80%, 55%)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.05, 0.25, 0.05] }}
              transition={{ duration: 3, delay: n.delay, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default NetworkGlobe;
