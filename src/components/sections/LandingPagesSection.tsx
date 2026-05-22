import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, MousePointer2, Globe } from "lucide-react";

const pages = [
{
  title: "Custom Furniture Solutions",
  subtitle: "Premium B2B manufacturing for retailers",
  cta: "Book a Demo",
  gradient: "from-[#271047] via-[#13091f] to-[#0d172a]",
  accent: "bg-violet-500"
},
{
  title: "Enterprise SaaS Platform",
  subtitle: "Scale your business with AI automation",
  cta: "Get Started",
  gradient: "from-[#0f2250] via-[#0b1020] to-[#111827]",
  accent: "bg-blue-500"
},
{
  title: "Manufacturing Services",
  subtitle: "Industrial-grade production solutions",
  cta: "Request Quote",
  gradient: "from-[#06352e] via-[#0b1020] to-[#121826]",
  accent: "bg-emerald-500"
},
{
  title: "Consulting & Advisory",
  subtitle: "Expert strategy for growth companies",
  cta: "Schedule Call",
  gradient: "from-[#3a2508] via-[#12091f] to-[#0b1020]",
  accent: "bg-amber-500"
}];


const LandingPagesSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative w-full py-8 md:py-10">
      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} relative z-10 mx-auto grid w-full max-w-5xl items-center gap-8 px-6 md:grid-cols-[0.92fr_1.08fr] md:px-10`}
      >
        <div className="text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 05</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4 text-foreground">
            Custom Landing Pages
          </h2>
          <p className="stage-desc mx-auto max-w-xl text-sm leading-7 md:mx-0 md:text-[15px]">
            After potential customers are informed in <b>detail</b> by the <b>chatbot</b>, they are directed to <b>landing pages we create specifically for you</b>. Through a multi-step <b>form</b>, they are then guided to schedule a meeting directly through the <b>calendar</b>
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl md:min-w-0">
          <motion.div className="flex gap-4"
          animate={revealed ? { x: [0, -300, 0] } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            
            {[...pages, ...pages].map((page, i) =>
            <div key={i} className="glass-strong rounded-xl overflow-hidden min-w-[250px] flex-shrink-0">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-secondary/30">
                  <div className="w-2 h-2 rounded-full bg-red-300" />
                  <div className="w-2 h-2 rounded-full bg-amber-300" />
                  <div className="w-2 h-2 rounded-full bg-emerald-300" />
                  <div className="flex-1 mx-3 h-5 rounded bg-secondary flex items-center px-2">
                    <Globe className="w-2.5 h-2.5 text-muted-foreground/40" />
                  </div>
                </div>
                <div className={`h-24 bg-gradient-to-br ${page.gradient} flex items-center justify-center relative`}>
                  <div className={`w-12 h-1.5 ${page.accent} rounded opacity-30`} />
                  {i === 1 &&
                <motion.div
                  animate={revealed ? { x: [20, 0], y: [15, 0], opacity: [0, 1] } : {}}
                  transition={{ delay: 2.5, duration: 0.6 }}
                  className="absolute bottom-2 right-2">
                  
                      <MousePointer2 className="w-4 h-4 text-foreground/30" />
                    </motion.div>
                }
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold text-foreground mb-1 leading-snug">{page.title}</div>
                  <div className="text-xs text-muted-foreground mb-2">{page.subtitle}</div>
                  <div className="h-1.5 bg-muted rounded w-3/4 mb-1.5" />
                  <div className="h-1.5 bg-muted/50 rounded w-1/2 mb-3" />
                  <div className="flex items-center gap-1 text-xs text-primary font-medium">
                    {page.cta} <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

};

export default LandingPagesSection;
