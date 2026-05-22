import SectionWithMockup from "@/components/ui/section-with-mockup";

const WhatIsSection = () => (
  <SectionWithMockup
    title={
      <>
        AI Meeting Engine,
        <br />
        built for qualified sales calls.
      </>
    }
    description={
      <>
        DigiMoria manages advertising, responds instantly to incoming inquiries, pre-qualifies real prospects,
        and adds only suitable leads to your calendar. The result is a connected acquisition system instead of
        disconnected campaigns.
      </>
    }
    primaryImageSrc="https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&w=1100&q=80"
    secondaryImageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1100&q=80"
  />
);

export default WhatIsSection;
