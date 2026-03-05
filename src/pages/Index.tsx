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

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <LeadSourcesSection />
      <ContactsPoolSection />
      <ProspectDataSection />
      <AICommunicationSection />
      <QualifiedLeadsSection />
      <LandingPagesSection />
      <CalendarBookingSection />
      <CRMPipelineSection />
      <SalesCalendarSection />
      <Footer />
    </div>
  );
};

export default Index;
