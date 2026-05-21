import AppointmentPageHero from "@/components/ui/AppointmentHero";
import SearchDoctor from "@/components/ui/SearchDoctor";
import { getDoctors } from "@/lib/Data";
import { Suspense } from "react";

const AllAppointmentsPage = async () => {
  const doctorsData = await getDoctors();

  return (
    <div className="bg-linear-to-r from-sky-50 via-white to-green-50">
      <AppointmentPageHero />

      <div className="px-5 md:px-10 max-w-6xl mx-auto mb-20">
        <Suspense
          fallback={
            <h2 className=" flex justify-center items-center flex-col h-[100vh]  font-semibold text-slate-700">
              <span className="loading loading-spinner loading-md"></span>
              Loading Doctors <span className="loading-dots">...</span>
            </h2>
          }
        >
          <SearchDoctor doctorsData={doctorsData} />
        </Suspense>
      </div>
    </div>
  );
};

export default AllAppointmentsPage;
