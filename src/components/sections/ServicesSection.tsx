import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  BarChart3,
  Settings2,
  Globe,
  Sparkles,
  Bot,
  Database,
  Terminal,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "AI-Powered Digital Performance",
    description:
      "Data-driven advertising across Google, Meta and LinkedIn — managed by our team with AI optimization layered on top for maximum ROI.",
    iconBg: "from-violet-500 to-purple-600",
    accent: "from-violet-500 to-purple-600",
    badge: { label: "Core Service", className: "text-violet-600 bg-violet-50 border-violet-100" },
  },
  {
    icon: Settings2,
    title: "Custom AI Automation Solutions",
    description:
      "End-to-end automation pipelines tailored to your workflows. From lead capture to CRM updates — fully hands-free and running 24/7.",
    iconBg: "from-pink-500 to-rose-500",
    accent: "from-pink-500 to-rose-500",
    badge: { label: "Popular", className: "text-pink-600 bg-pink-50 border-pink-100" },
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-converting, beautifully designed websites and landing pages built for speed, SEO and lead generation — not just looks.",
    iconBg: "from-sky-500 to-blue-600",
    accent: "from-sky-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "AI Content Production",
    description:
      "Scalable content pipelines powered by AI — blog posts, ads, social media and video scripts that match your brand voice perfectly.",
    iconBg: "from-emerald-500 to-teal-600",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Custom-trained AI agents for sales, support and outreach. Integrated into WhatsApp, website chat, Instagram DMs and more.",
    iconBg: "from-orange-500 to-amber-500",
    accent: "from-orange-500 to-amber-500",
    badge: { label: "Trending", className: "text-violet-600 bg-violet-50 border-violet-100" },
  },
  {
    icon: Database,
    title: "Full AI System Infrastructure",
    description:
      "We design and deploy your complete AI stack — from data pipelines to model integrations — so your business runs on intelligent automation.",
    iconBg: "from-indigo-500 to-violet-600",
    accent: "from-indigo-500 to-violet-600",
  },
  {
    icon: Terminal,
    title: "Vibe Coding Software Solutions",
    description:
      "Rapid software development using the latest AI-assisted coding techniques. MVPs, internal tools and custom SaaS — built fast.",
    iconBg: "from-fuchsia-500 to-pink-600",
    accent: "from-fuchsia-500 to-pink-600",
    badge: { label: "New", className: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100" },
  },
];

const ServicesSection = () => {
  const { ref, revealed } = useScrollReveal(0.1);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,_hsla(270,80%,55%,0.05)_0%,_transparent_70%)]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-6">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-[1.1] tracking-tight mb-4">
            <span className="text-foreground">Everything Your Business </span>
            <span className="bg-gradient-to-r from-primary to-neon-blue bg-clip-text text-transparent">
              Needs to Scale
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are not just a tool — we are a full-service <b>digital agency</b> powered by <b>AI</b>. From strategy to execution, we cover every layer of growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative overflow-hidden bg-card rounded-2xl p-6 md:p-7 h-full border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Badge */}
                  {service.badge && (
                    <span
                      className={`absolute top-4 right-4 text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border ${service.badge.className}`}
                    >
                      {service.badge.label}
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-5 shadow-md shadow-black/5`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base md:text-lg font-semibold font-display text-foreground mb-2 leading-tight pr-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
