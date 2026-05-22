import { useRef, type ReactNode } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

interface StageStepProps {
  step: number;
  children: ReactNode;
}

const StageStep = ({ step, children }: StageStepProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const paddedStep = String(step).padStart(2, "0");
  const isInView = useInView(ref, { amount: 0.38, margin: "0px 0px -18% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 82%", "end 18%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 });
  const y = useTransform(smooth, [0, 0.28, 0.72, 1], [92, 0, 0, -72]);
  const scale = useTransform(smooth, [0, 0.3, 0.76, 1], [0.86, 1, 1, 0.91]);
  const rotateX = useTransform(smooth, [0, 0.3, 0.76, 1], [18, 0, 0, -12]);
  const rotateY = useTransform(smooth, [0, 0.3, 0.76, 1], [step % 2 === 0 ? -10 : 10, 0, 0, step % 2 === 0 ? 7 : -7]);
  const opacity = useTransform(smooth, [0, 0.18, 0.84, 1], [0.12, 1, 1, 0.32]);
  const blur = useTransform(smooth, [0, 0.24, 0.8, 1], ["blur(8px)", "blur(0px)", "blur(0px)", "blur(4px)"]);
  const numberY = useTransform(smooth, [0, 1], [48, -52]);
  const numberOpacity = useTransform(smooth, [0, 0.28, 0.72, 1], [0.05, 0.18, 0.18, 0.06]);

  return (
    <div ref={ref} className="stage-step relative" data-stage={step} data-active={isInView ? "true" : "false"}>
      <motion.div className="stage-step-giant-number" style={{ y: numberY, opacity: numberOpacity }} aria-hidden="true">
        {paddedStep}
      </motion.div>
      <div className="stage-step-node" aria-hidden="true">
        <motion.div
          className="stage-step-node-inner"
          animate={{
            scale: isInView ? 1.08 : 1,
            boxShadow: isInView
              ? "0 0 28px rgba(139, 45, 242, 0.55), 0 0 0 1px rgba(185, 171, 255, 0.5)"
              : "0 0 0 1px rgba(255, 255, 255, 0.12)",
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-[11px] font-bold tracking-wider text-white">
            {paddedStep}
          </span>
        </motion.div>
      </div>

      <motion.div
        className="stage-step-content"
        initial={false}
        style={{ y, scale, rotateX, rotateY, opacity, filter: blur }}
        animate={{
          boxShadow: isInView
            ? "0 38px 120px rgba(0,0,0,0.34), 0 0 0 1px rgba(185,171,255,0.1)"
            : "0 20px 70px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="stage-step-shine" aria-hidden="true" />
        <div className="stage-step-caption" aria-hidden="true">
          <span>Stage</span>
          <strong>{paddedStep}</strong>
        </div>
        {children}
      </motion.div>
    </div>
  );
};

export default StageStep;
