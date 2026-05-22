import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ProcessHeadingSection from "@/components/sections/ProcessHeadingSection";
import LeadSourcesSection from "@/components/sections/LeadSourcesSection";
import ContactsPoolSection from "@/components/sections/ContactsCRMSection";
import ProspectDataSection from "@/components/sections/ProspectDataSection";
import AICommunicationSection from "@/components/sections/AICommunicationSection";
import LandingPagesSection from "@/components/sections/LandingPagesSection";
import CalendarBookingSection from "@/components/sections/CalendarBookingSection";
import CRMPipelineSection from "@/components/sections/CRMPipelineSection";
import SalesCalendarSection from "@/components/sections/SalesCalendarSection";
import QualifiedLeadsSection from "@/components/sections/QualifiedLeadsSection";
import TestimonialVideosSection from "@/components/sections/TestimonialVideosSection";
import StageStep from "@/components/StageStep";

const STAGES = [
  { step: 1, Component: LeadSourcesSection },
  { step: 2, Component: ContactsPoolSection },
  { step: 3, Component: ProspectDataSection },
  { step: 4, Component: AICommunicationSection },
  { step: 5, Component: LandingPagesSection },
  { step: 6, Component: CalendarBookingSection },
  { step: 7, Component: CRMPipelineSection },
] as const;

const StagePipeline = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 10%", "end 85%"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });

  return (
    <section className="stage-system stage-pipeline relative overflow-hidden bg-[#08040f] py-10 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#030106] via-[#0a0613]/86 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[#0a0613]/88 to-[#0a0613]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[54rem] w-[54rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,45,242,0.08),transparent_67%)] blur-2xl" />

      <div className="relative z-10">
        <ProcessHeadingSection />

        <div ref={trackRef} className="stage-pipeline-track relative mx-auto max-w-7xl px-4 lg:px-8">
          {/* Scroll-driven progress line */}
          <div className="stage-pipeline-rail pointer-events-none hidden lg:block" aria-hidden="true">
            <div className="stage-pipeline-rail-track" />
            <motion.div className="stage-pipeline-rail-fill" style={{ scaleY: smoothProgress }} />
          </div>

          <div className="stage-pipeline-steps relative lg:pl-14">
            {STAGES.map(({ step, Component }) => (
              <div key={step}>
                <StageStep step={step}>
                  <Component />
                </StageStep>
              </div>
            ))}
          </div>

          <div className="stage-pipeline-final">
            <SalesCalendarSection />
            <div className="mx-auto max-w-7xl px-0 lg:px-0">
              <QualifiedLeadsSection />
              <TestimonialVideosSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StagePipeline;
