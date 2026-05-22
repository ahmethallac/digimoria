import { motion } from "framer-motion";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contacts = [
  {
    initials: "AL",
    name: "Aster Lead",
    phone: "+90 5XX XXX 12 04",
    email: "aster.lead@example.com",
    business: "Northline Studio",
    created: "May 19, 2026 09:09 AM",
    activity: "Today",
    tag: "Warm",
    color: "bg-amber-400/20 text-amber-100",
  },
  {
    initials: "DM",
    name: "Demo Manager",
    phone: "(0212) XXX 74 10",
    email: "demo.manager@example.com",
    business: "Sample Interiors",
    created: "May 19, 2026 09:08 AM",
    activity: "3 days ago",
    tag: "AI scored",
    color: "bg-violet-400/20 text-violet-100",
  },
  {
    initials: "CS",
    name: "Cloud Studio",
    phone: "+90 5XX XXX 44 18",
    email: "hello.cloud@example.com",
    business: "Cloud Studio LLC",
    created: "May 14, 2026 04:52 PM",
    activity: "No activity",
    tag: "Website",
    color: "bg-sky-400/20 text-sky-100",
  },
  {
    initials: "RP",
    name: "Retail Prospect",
    phone: "+90 5XX XXX 80 31",
    email: "retail.prospect@example.com",
    business: "Mock Retail Group",
    created: "May 14, 2026 04:52 PM",
    activity: "1 week ago",
    tag: "Ads",
    color: "bg-emerald-400/20 text-emerald-100",
  },
  {
    initials: "MF",
    name: "Market Form",
    phone: "-",
    email: "market.form@example.com",
    business: "Pilot Ventures",
    created: "May 14, 2026 04:42 PM",
    activity: "Queued",
    tag: "Form",
    color: "bg-pink-400/20 text-pink-100",
  },
  {
    initials: "SE",
    name: "Signal Entry",
    phone: "+90 5XX XXX 63 22",
    email: "signal.entry@example.com",
    business: "-",
    created: "May 13, 2026 10:03 AM",
    activity: "Synced",
    tag: "CRM",
    color: "bg-cyan-400/20 text-cyan-100",
  },
];

const columns = ["Contact name", "Phone", "Email", "Business name", "Created (+03)", "Last activity (+03)", "Tags"];

const ContactsPoolSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative w-full py-8 md:py-10">
      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} relative z-10 mx-auto grid w-full max-w-5xl items-center gap-8 px-6 md:grid-cols-[0.88fr_1.12fr] md:px-10`}
      >
        <div className="text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Stage 02</span>
          <h2 className="mb-4 mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Contacts Pool
          </h2>
          <p className="stage-desc mx-auto max-w-xl text-sm leading-7 md:mx-0 md:text-[15px]">
            All hot, warm, and cold audiences <b>are managed</b> entirely by an <b>AI system</b>. Messages,
            comments, and all <b>potential</b> interactions are instantly analyzed by AI and{" "}
            <b>converted into customer leads</b>. In addition, through our custom <b>automation</b> systems,
            more than <b>10,000</b> additional <b>warm</b> prospects are generated and their contact
            information is <b>automatically</b> transferred to your <b>CRM</b>.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotateX: 8 }}
          animate={revealed ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-strong mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#101522]/90 shadow-[0_28px_80px_rgba(0,0,0,0.42)] md:mx-0"
        >
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div>
              <div className="font-display text-sm font-semibold text-white">DigiMoria Contact Pool</div>
              <div className="text-[11px] text-white/45">Mock CRM records, AI-qualified and synced</div>
            </div>
            <div className="ml-auto rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
              Live sync
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left text-xs">
              <thead className="bg-white/[0.035] text-[11px] text-white/70">
                <tr>
                  <th className="w-10 border-r border-white/10 px-3 py-3">
                    <span className="block h-3.5 w-3.5 rounded border border-white/25" />
                  </th>
                  {columns.map((column) => (
                    <th key={column} className="border-r border-white/10 px-3 py-3 font-semibold">
                      <span className="flex items-center justify-between gap-2 whitespace-nowrap">
                        {column}
                        <ChevronDown className="h-3 w-3 text-white/35" />
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <motion.tr
                    key={contact.email}
                    initial={{ opacity: 0, x: 18 }}
                    animate={revealed ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.12 + index * 0.05 }}
                    className="border-t border-white/10 text-white/82 hover:bg-primary/8"
                  >
                    <td className="border-r border-white/10 px-3 py-3">
                      <span className="block h-3.5 w-3.5 rounded border border-white/25" />
                    </td>
                    <td className="border-r border-white/10 px-3 py-3">
                      <div className="flex items-center gap-2.5">
                        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${contact.color}`}>
                          {contact.initials}
                        </span>
                        <span className="whitespace-nowrap font-medium text-white">{contact.name}</span>
                      </div>
                    </td>
                    <td className="border-r border-white/10 px-3 py-3">
                      <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <Phone className="h-3.5 w-3.5 text-white/45" />
                        {contact.phone}
                      </span>
                    </td>
                    <td className="border-r border-white/10 px-3 py-3">
                      <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <Mail className="h-3.5 w-3.5 text-white/45" />
                        {contact.email}
                      </span>
                    </td>
                    <td className="border-r border-white/10 px-3 py-3 whitespace-nowrap">{contact.business}</td>
                    <td className="border-r border-white/10 px-3 py-3 whitespace-nowrap text-white/70">{contact.created}</td>
                    <td className="border-r border-white/10 px-3 py-3 whitespace-nowrap text-white/70">{contact.activity}</td>
                    <td className="px-3 py-3">
                      <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary">
                        {contact.tag}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-3 border-t border-white/10 px-4 py-3 text-xs text-white/55">
            <span>Page 1 of 1</span>
            <div className="ml-auto flex items-center gap-2">
              <button className="rounded-md border border-white/10 px-3 py-1.5 text-white/70">20</button>
              <button className="rounded-md border border-white/10 px-3 py-1.5 text-white/35">Prev</button>
              <button className="rounded-md border border-primary/40 bg-primary/15 px-3 py-1.5 text-primary">1</button>
              <button className="rounded-md border border-white/10 px-3 py-1.5 text-white/35">Next</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactsPoolSection;
