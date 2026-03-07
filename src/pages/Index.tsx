import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LeadSourcesSection from "@/components/sections/LeadSourcesSection";
import ContactsPoolSection from "@/components/sections/ContactsCRMSection";
import ProspectDataSection from "@/components/sections/ProspectDataSection";
import AICommunicationSection from "@/components/sections/AICommunicationSection";
import QualifiedLeadsSection from "@/components/sections/QualifiedLeadsSection";
import LandingPagesSection from "@/components/sections/LandingPagesSection";
import CalendarBookingSection from "@/components/sections/CalendarBookingSection";
import CRMPipelineSection from "@/components/sections/CRMPipelineSection";
import SalesCalendarSection from "@/components/sections/SalesCalendarSection";
import FlowConnector from "@/components/FlowConnector";
import ProcessHeadingSection from "@/components/sections/ProcessHeadingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Layered background infrastructure */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-[50vh] bg-[radial-gradient(ellipse_at_top,_hsla(270,80%,55%,0.04)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-[radial-gradient(ellipse_at_bottom,_hsla(220,90%,56%,0.03)_0%,_transparent_60%)]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProcessHeadingSection />

        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Row 1: Stage 1 Lead Sources → Stage 2 Prospect Data */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <LeadSourcesSection />
            <ProspectDataSection />
          </div>

          <FlowConnector direction="right-to-left" />

          {/* Row 2: Stage 3 Contacts Pool ← Stage 4 AI Communication */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <ContactsPoolSection />
            <AICommunicationSection />
          </div>

          <FlowConnector direction="left-to-right" />

          {/* Row 3: Stage 5 Landing Pages → Stage 6 Calendar Booking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <LandingPagesSection />
            <CalendarBookingSection />
          </div>

          <FlowConnector direction="right-to-left" />

          {/* Row 4: Stage 7 CRM Pipeline */}
          <CRMPipelineSection />
        </div>

        {/* Final Result */}
        <SalesCalendarSection />

        {/* Comparison / Proof of Performance */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <QualifiedLeadsSection />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
