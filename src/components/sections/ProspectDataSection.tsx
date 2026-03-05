import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, Database, Users, TrendingUp, Search, Plus, Mail, MessageCircle, Building2, MapPin, Briefcase, ChevronDown } from "lucide-react";
import { useState } from "react";

const filters = [
  { icon: <Building2 className="w-3.5 h-3.5" />, label: "Industry", value: "Manufacturing" },
  { icon: <Users className="w-3.5 h-3.5" />, label: "Company Size", value: "50-500" },
  { icon: <MapPin className="w-3.5 h-3.5" />, label: "Location", value: "Europe" },
  { icon: <Briefcase className="w-3.5 h-3.5" />, label: "Job Title", value: "CEO, Founder" },
];

const leads = [
  { name: "Thomas Weber", title: "CEO", company: "Weber Möbel GmbH", location: "Berlin, DE", match: 97 },
  { name: "Marie Dupont", title: "Founder", company: "Dupont Design", location: "Paris, FR", match: 94 },
  { name: "James Carter", title: "Marketing Dir.", company: "Carter & Co", location: "London, UK", match: 91 },
  { name: "Elena Rossi", title: "CEO", company: "Rossi Interiors", location: "Milan, IT", match: 89 },
  { name: "Hans Müller", title: "Founder", company: "Müller Holz AG", location: "Zurich, CH", match: 86 },
];

const ProspectDataSection = () => {
  const { ref, revealed } = useScrollReveal();
  const [addedLeads, setAddedLeads] = useState<number[]>([]);

  return (
    <section className="relative py-10 md:py-16">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 03</span>
          <h2 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-3 text-foreground">
            Global Prospect Data Engine
          </h2>
          <p className="text-xs text-muted-foreground max-w-lg mx-auto">
            Access 60M+ decision makers. Our systems extract contacts matching your ideal customer profile.
          </p>
        </div>

        <div className="glass-strong rounded-2xl overflow-hidden max-w-xl mx-auto">
          {/* Search bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Search decision makers...</span>
            <div className="ml-auto flex items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-medium">
                <Database className="w-3 h-3" /> 60M+
              </div>
            </div>
          </div>

          <div className="flex">
            {/* Filters panel */}
            <div className="w-36 border-r border-border p-3 space-y-2 hidden sm:block">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">Filters</div>
              {filters.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={revealed ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-secondary text-[10px] cursor-pointer hover:bg-primary/5 transition-colors"
                >
                  {f.icon}
                  <div className="flex-1">
                    <div className="text-muted-foreground">{f.label}</div>
                    <div className="text-foreground font-medium">{f.value}</div>
                  </div>
                  <ChevronDown className="w-2.5 h-2.5 text-muted-foreground" />
                </motion.div>
              ))}

              {/* Integration icons */}
              <div className="pt-3 border-t border-border mt-3">
                <div className="text-[10px] text-muted-foreground mb-2">Integrations</div>
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5 text-red-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Lead results */}
            <div className="flex-1 p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-muted-foreground">Showing 5 of 12,847 results</span>
              </div>
              <div className="space-y-1.5">
                {revealed && leads.map((lead, i) => (
                  <motion.div
                    key={lead.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-[9px] font-bold text-primary flex-shrink-0">
                      {lead.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-medium text-foreground truncate">{lead.name}</div>
                      <div className="text-[9px] text-muted-foreground truncate">{lead.title} · {lead.company}</div>
                    </div>
                    <div className="text-[9px] text-primary font-medium">{lead.match}%</div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setAddedLeads(prev => [...prev, i])}
                      className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors flex-shrink-0 ${
                        addedLeads.includes(i)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      <Plus className="w-3 h-3" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="flex items-center justify-between px-4 py-2.5 border-t border-border bg-secondary/30">
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <TrendingUp className="w-3 h-3 text-primary" />
              <span><strong className="text-foreground">10,000+</strong> new leads added monthly</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-[10px] font-medium shadow-sm"
            >
              Add to Contact Pool
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProspectDataSection;
