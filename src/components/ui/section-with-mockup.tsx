"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWithMockupProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  primaryImageSrc: string;
  secondaryImageSrc?: string;
  reverseLayout?: boolean;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

const stageRows = [
  ["Ad click", "Captured", "92%"],
  ["Form fill", "Scored", "76%"],
  ["Sales fit", "Approved", "68%"],
  ["Calendar", "Booked", "42%"],
];

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
  title,
  description,
  primaryImageSrc,
  secondaryImageSrc,
  reverseLayout = false,
}) => {
  const layoutClasses = reverseLayout ? "md:grid-cols-2 md:grid-flow-col-dense" : "md:grid-cols-2";
  const textOrderClass = reverseLayout ? "md:col-start-2" : "";
  const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

  return (
    <section id="ai-meeting-engine" className="relative overflow-hidden bg-[#030106] pb-28 pt-20 md:pb-36 md:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0613] via-[#07030d] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-[#07030d] to-[#0a0613]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,45,242,0.13),transparent_68%)] blur-2xl" />

      <div className="container relative z-10 mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-14">
        <motion.div
          className={`grid w-full grid-cols-1 items-center gap-20 md:gap-16 lg:gap-24 ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className={`mx-auto mt-10 flex max-w-[560px] flex-col items-start gap-4 md:mx-0 md:mt-0 ${textOrderClass}`}
            variants={itemVariants}
          >
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#b9abff]">
              AI Meeting Engine
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-[42px] md:leading-[54px]">
              {title}
            </h2>
            <p className="text-sm leading-6 text-[#b1bac4] md:text-[15px]">{description}</p>
            <div className="mt-5 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["10K+", "warm prospects"],
                ["89%", "match rate"],
                ["24/7", "AI response"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                  <div className="font-display text-2xl font-semibold text-white">{value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/45">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={`relative mx-auto mt-10 w-full max-w-[330px] md:mt-0 md:max-w-[500px] ${imageOrderClass}`}
            variants={itemVariants}
          >
            {secondaryImageSrc && (
              <motion.div
                className="absolute z-0 h-[360px] w-[320px] rounded-[32px] bg-[#090909] md:h-[540px] md:w-[520px]"
                style={{
                  top: reverseLayout ? "auto" : "10%",
                  bottom: reverseLayout ? "10%" : "auto",
                  left: reverseLayout ? "auto" : "-4%",
                  right: reverseLayout ? "-4%" : "auto",
                  transform: reverseLayout ? "translate(0, 0)" : "translateY(10%)",
                  filter: "blur(2px)",
                }}
                whileInView={{ y: reverseLayout ? -20 : -30 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div
                  className="relative h-full w-full rounded-[32px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${secondaryImageSrc})` }}
                />
              </motion.div>
            )}

            <motion.div
              className="relative z-10 min-h-[520px] overflow-hidden rounded-[32px] border border-white/10 bg-[#ffffff0a] shadow-[0_34px_90px_rgba(0,0,0,0.5)] backdrop-blur-[15px] md:min-h-[660px]"
              whileInView={{ y: reverseLayout ? 20 : 30 }}
              transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${primaryImageSrc})` }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/88 via-black/48 to-black/20" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_58%,rgba(56,189,248,0.18),transparent_36%),radial-gradient(circle_at_74%_24%,rgba(139,45,242,0.14),transparent_34%)]" />

              <div className="relative z-10 flex flex-col gap-4 p-5 md:gap-5 md:p-6">
                <div className="rounded-2xl border border-white/10 bg-black/55 p-5 text-white">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-[#b9abff]">Pipeline Health</div>
                      <div className="mt-1 text-xl font-semibold">128 qualified meetings</div>
                    </div>
                    <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">Live</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      ["Traffic captured", "84%"],
                      ["AI qualified", "68%"],
                      ["Calendar booked", "42%"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <div className="mb-1 flex justify-between text-xs text-white/62">
                          <span>{label}</span>
                          <span>{value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#8b2df2] to-[#38bdf8]"
                            style={{ width: value }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/55 p-4 text-white md:p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-[#b9abff]">Stage Flow</div>
                      <div className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">Auto</div>
                    </div>
                    <div className="space-y-3">
                      {stageRows.map(([stage, status, value]) => (
                        <div
                          key={stage}
                          className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl bg-white/[0.055] px-3 py-2.5"
                        >
                          <div>
                            <div className="text-xs font-medium text-white">{stage}</div>
                            <div className="text-[10px] uppercase tracking-[0.14em] text-white/38">{status}</div>
                          </div>
                          <div className="text-xs font-semibold text-[#7dd3fc]">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/55 p-4 text-white md:p-5">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[#b9abff]">Next Actions</div>
                    <div className="mt-4 space-y-3">
                      {["Send recap", "Book consult", "Sync CRM"].map((item, index) => (
                        <div key={item} className="flex items-center gap-2.5 text-xs text-white/70">
                          <span className="size-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#8b2df2] to-[#38bdf8]" />
                          <span>{item}</span>
                          <span className="ml-auto text-white/30">0{index + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-full border border-emerald-300/15 bg-emerald-400/10 px-4 py-2.5 text-center text-xs text-emerald-200">
                  AI agent active — 14 replies queued
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/62 p-5 text-white">
                  <div className="mb-2 text-xs uppercase tracking-[0.22em] text-[#b9abff]">Live Qualification</div>
                  <div className="text-xl font-semibold md:text-2xl">Traffic to meetings, automatically.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 z-0 h-px w-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
    </section>
  );
};

export default SectionWithMockup;
