import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Database, TrendingUp, Search, Plus, Mail, MessageCircle, Building2, MapPin, Briefcase, ChevronDown, Users } from "lucide-react";
import { useState } from "react";

const filters = [
  { icon: <Building2 className="w-3.5 h-3.5" />, label: "Industry", value: "Manufacturing" },
  { icon: <Users className="w-3.5 h-3.5" />, label: "Company Size", value: "50-500" },
  { icon: <MapPin className="w-3.5 h-3.5" />, label: "Location", value: "Europe" },
  { icon: <Briefcase className="w-3.5 h-3.5" />, label: "Job Title", value: "CEO, Founder" },
];

const leads = [
  { name: "Thomas Weber", title: "CEO", company: "Weber Mobel GmbH", match: 97 },
  { name: "Marie Dupont", title: "Founder", company: "Dupont Design", match: 94 },
  { name: "James Carter", title: "Marketing Dir.", company: "Carter & Co", match: 91 },
  { name: "Elena Rossi", title: "CEO", company: "Rossi Interiors", match: 89 },
  { name: "Hans Muller", title: "Founder", company: "Muller Holz AG", match: 86 },
];

const ProspectDataSection = () => {
  const { ref, revealed } = useScrollReveal();
  const [addedLeads, setAddedLeads] = useState<number[]>([]);

  return (
    <section id="prospect-data" className="relative w-full py-8 md:py-10">
      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} relative z-10 mx-auto grid w-full max-w-5xl items-center gap-8 px-6 md:grid-cols-[0.92fr_1.08fr] md:px-10`}
      >
        <div className="text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Stage 03</span>
          <h2 className="mt-3 mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Global Prospect Data Engine
          </h2>
          <p className="stage-desc mx-auto max-w-xl text-sm leading-7 md:mx-0 md:text-[15px]">
            With the custom <b>automation</b> we build specifically for you, we reach more than <b>10,000</b> warm{" "}
            <b>potential</b> customer leads per month using <b>Google Maps</b> and LinkedIn data that match your target
            criteria, and their contact information is automatically added to your <b>CRM</b> system - without
            advertising and <b>without additional cost</b>.
          </p>
        </div>

        <div className="glass-strong mx-auto w-full max-w-xl overflow-hidden rounded-2xl md:mx-0">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Search decision makers...</span>
            <div className="ml-auto flex items-center gap-1.5 rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              <Database className="h-3 w-3" /> 60M+
            </div>
          </div>

          <div className="flex">
            <div className="hidden w-40 space-y-2 border-r border-border p-3 sm:block">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Filters</div>
              {filters.map((filter, index) => (
                <motion.div
                  key={filter.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={revealed ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-secondary px-2 py-1.5 text-xs transition-colors hover:bg-primary/5"
                >
                  {filter.icon}
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-muted-foreground">{filter.label}</div>
                    <div className="truncate font-medium text-foreground">{filter.value}</div>
                  </div>
                  <ChevronDown className="h-2.5 w-2.5 flex-shrink-0 text-muted-foreground" />
                </motion.div>
              ))}
              <div className="mt-2.5 border-t border-border pt-2.5">
                <div className="mb-2 text-xs text-muted-foreground">Integrations</div>
                <div className="flex gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15">
                    <MessageCircle className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/15">
                    <Mail className="h-4 w-4 text-rose-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0 flex-1 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">5 of 12,847 results</span>
              </div>
              <div className="space-y-1.5">
                {revealed &&
                  leads.map((lead, index) => (
                    <motion.div
                      key={lead.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="group flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-secondary/80"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {lead.name.split(" ").map((part) => part[0]).join("")}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium text-foreground">{lead.name}</div>
                        <div className="truncate text-xs text-muted-foreground">{lead.title} - {lead.company}</div>
                      </div>
                      <div className="text-xs font-medium text-primary">{lead.match}%</div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setAddedLeads((prev) => [...prev, index])}
                        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
                          addedLeads.includes(index)
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </motion.button>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border bg-secondary/30 px-4 py-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <TrendingUp className="h-3.5 w-3.5 text-primary" />
              <span>
                <strong className="text-foreground">10,000+</strong> new leads monthly
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="rounded-lg bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-sm"
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
