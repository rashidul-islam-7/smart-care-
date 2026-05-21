
import AppointmentPageHero from "@/components/ui/AppointmentHero";
import SearchDoctor from "@/components/ui/SearchDoctor";
import { getDoctors } from "@/lib/Data";
import React from "react";

const AllAppointmentsPage = async () => {
  let doctorsData = [];

  try {
    doctorsData = await getDoctors();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="bg-linear-to-r from-sky-50 via-white to-green-50">
      <AppointmentPageHero />

      <div className="px-5 md:px-10 max-w-6xl mx-auto mb-20">
        <SearchDoctor doctorsData={doctorsData} />
      </div>
    </div>
  );
};

export default AllAppointmentsPage;
