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

      {/* Pipeline Flow - Paired Rows on Desktop */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Row 1: Lead Sources + Contacts Pool */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <LeadSourcesSection />
          <ContactsPoolSection />
        </div>

        <FlowConnector />

        {/* Row 2: Prospect Data + AI Communication */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <ProspectDataSection />
          <AICommunicationSection />
        </div>

        <FlowConnector />

        {/* Row 3: Qualified Leads Comparison (full width) */}
        <QualifiedLeadsSection />

        <FlowConnector />

        {/* Row 4: Landing Pages + Calendar Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <LandingPagesSection />
          <CalendarBookingSection />
        </div>

        <FlowConnector />

        {/* Row 5: CRM Pipeline (full width) */}
        <CRMPipelineSection />
      </div>

      {/* Final Result - full bleed */}
      <SalesCalendarSection />
      <Footer />
    </div>
  );
};

export default Index;
