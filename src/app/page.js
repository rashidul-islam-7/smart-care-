
import React from "react";
import HeroSlider from "@/components/share/HeroSlider";
import HealthcareServiceSection from "@/components/share/Service";
import BloodBankSection from "@/components/share/BloodBank";

function HomePage() {
  return (
    <div className="bg-[#f7f8fc]">
      <HeroSlider />
      <HealthcareServiceSection />
      <BloodBankSection />
    </div>
  );
}

export default HomePage;
