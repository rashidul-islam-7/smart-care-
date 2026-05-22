import React from "react";
import HeroSlider from "@/components/share/HeroSlider";
import HealthcareServiceSection from "@/components/share/Service";
import BloodBankSection from "@/components/share/BloodBank";
import FeedBacks from "@/components/share/FeedBack";
import TopRatedDoctors from "@/components/share/TopRatedDoctors";
// import OurPartner from "@/components/ui/OurPartners";

function HomePage() {
  return (
    <div className="bg-[#f7f8fc]">
      <HeroSlider />
      {/* <OurPartner /> */}
      <TopRatedDoctors />
      <HealthcareServiceSection />
      <BloodBankSection />
      <FeedBacks />
    </div>
  );
}

export default HomePage;


// /app/api/auth/[...all]/route.ts