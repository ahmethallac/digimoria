import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Database, TrendingUp, Search, Plus, Mail, MessageCircle, Building2, MapPin, Briefcase, ChevronDown, Users } from "lucide-react";
import { useState } from "react";

const filters = [
{ icon: <Building2 className="w-3.5 h-3.5" />, label: "Industry", value: "Manufacturing" },
{ icon: <Users className="w-3.5 h-3.5" />, label: "Company Size", value: "50-500" },
{ icon: <MapPin className="w-3.5 h-3.5" />, label: "Location", value: "Europe" },
{ icon: <Briefcase className="w-3.5 h-3.5" />, label: "Job Title", value: "CEO, Founder" }];


const leads = [
{ name: "Thomas Weber", title: "CEO", company: "Weber Möbel GmbH", match: 97 },
{ name: "Marie Dupont", title: "Founder", company: "Dupont Design", match: 94 },
{ name: "James Carter", title: "Marketing Dir.", company: "Carter & Co", match: 91 },
{ name: "Elena Rossi", title: "CEO", company: "Rossi Interiors", match: 89 },
{ name: "Hans Müller", title: "Founder", company: "Müller Holz AG", match: 86 }];


const ProspectDataSection = () => {
  const { ref, revealed } = useScrollReveal();
  const [addedLeads, setAddedLeads] = useState<number[]>([]);

  return (
    <section className="relative py-8 md:py-12">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Stage 03</span>
          <h2 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-2.5 text-foreground">
            Global Prospect Data Engine
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            With the custom <b>automation</b> we build specifically for you, we reach more than <b>10,000</b> warm <b>potential</b> customer leads per month using <b>Google Maps</b> and LinkedIn data that match your target criteria, and their contact information is automatically added to your <b>CRM</b> system — without advertising and <b>without additional cost</b>.
          </p>
        </div>

        <div className="glass-strong rounded-2xl overflow-hidden max-w-xl mx-auto">
          {/* Search bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Search decision makers...</span>
            <div className="ml-auto flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                <Database className="w-3 h-3" /> 60M+
              </div>
            </div>
          </div>

          <div className="flex">
            {/* Filters */}
            <div className="w-40 border-r border-border p-3 space-y-2 hidden sm:block">
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Filters</div>
              {filters.map((f, i) => <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -8 }}
                animate={revealed ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-secondary text-xs cursor-pointer hover:bg-primary/5 transition-colors">
                
                  {f.icon}
                  <div className="flex-1 min-w-0">
                    <div className="text-muted-foreground truncate">{f.label}</div>
                    <div className="text-foreground font-medium truncate">{f.value}</div>
                  </div>
                  <ChevronDown className="w-2.5 h-2.5 text-muted-foreground flex-shrink-0" />
                </motion.div>
              )}
              <div className="pt-2.5 border-t border-border mt-2.5">
                <div className="text-xs text-muted-foreground mb-2">Integrations</div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-red-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex-1 p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">5 of 12,847 results</span>
              </div>
              <div className="space-y-1.5">
                {revealed && leads.map((lead, i) =>
                <motion.div
                  key={lead.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-secondary/80 transition-colors group">
                  
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                      {lead.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">{lead.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{lead.title} · {lead.company}</div>
                    </div>
                    <div className="text-xs text-primary font-medium">{lead.match}%</div>
                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAddedLeads((prev) => [...prev, i])}
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                    addedLeads.includes(i) ?
                    "bg-primary text-primary-foreground" :
                    "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"}`
                    }>
                    
                      <Plus className="w-3.5 h-3.5" />
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-secondary/30">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <TrendingUp className="w-3.5 h-3.5 text-primary" />
              <span><strong className="text-foreground">10,000+</strong> new leads monthly</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium shadow-sm">
              
              Add to Contact Pool
            </motion.button>
          </div>
        </div>
      </div>
    </section>);

};

export default ProspectDataSection;
