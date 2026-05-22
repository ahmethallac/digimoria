import { motion } from "framer-motion";
import FeatureCarousel from "@/components/ui/feature-carousel";

const ServicesSection = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-[#10091e] py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0613] via-[#0a0613]/88 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent via-[#07030d] to-[#030106]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[620px] w-[1120px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_hsla(270,80%,55%,0.18)_0%,_transparent_68%)]" />
        <div className="absolute right-0 top-1/3 h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.1)_0%,_transparent_70%)] blur-xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Our Services
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything Your Business{" "}
            <span className="bg-gradient-to-r from-primary to-neon-blue bg-clip-text text-transparent">
              Needs to Scale
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
            We are not just a tool. DigiMoria is a full-service digital agency powered by AI, covering every
            layer from acquisition strategy to execution and automation.
          </p>
        </motion.div>

        <FeatureCarousel />
      </div>
    </section>
  );
};

export default ServicesSection;
