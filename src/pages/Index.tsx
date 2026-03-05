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

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* Pipeline Flow */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Row 1: Lead Sources → Contacts Pool */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <LeadSourcesSection />
          <ContactsPoolSection />
        </div>

        <FlowConnector direction="right-to-left" />

        {/* Row 2: Prospect Data ← AI Communication */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <ProspectDataSection />
          <AICommunicationSection />
        </div>

        <FlowConnector direction="left-to-right" />

        {/* Row 3: Qualified Leads (full width) */}
        <QualifiedLeadsSection />

        <FlowConnector direction="right-to-left" />

        {/* Row 4: Landing Pages → Calendar Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <LandingPagesSection />
          <CalendarBookingSection />
        </div>

        <FlowConnector direction="left-to-right" />

        {/* Row 5: CRM Pipeline (full width) */}
        <CRMPipelineSection />
      </div>

      {/* Final Result */}
      <SalesCalendarSection />
      <Footer />
    </div>
  );
};

export default Index;
