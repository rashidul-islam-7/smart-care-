"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

import SwitchBtnDashboardProfile from "@/components/ui/SwitchBtn";
import AppointmentBookingCard from "@/components/AppointmentBookingCard";
import UserProfile from "@/components/UserProfile";

const DashboardClient = ({ user }) => {
  const [switchBtn, setSwitchBtn] = useState("dashboard");

  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto mb-15">
        {/* Header */}
        <div className=" flex flex-col justify-center items-center relative overflow-hidden py-15 px-5 md:px-10">
          <div className="absolute top-0 right-0 h-52 w-52 bg-blue-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 left-0 h-40 w-40 bg-cyan-100 rounded-full blur-3xl opacity-30" />

          <div className="text-center relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-4 py-1 text-sm font-medium border border-blue-100 mb-4">
                <Sparkles size={16} />
                Premium Healthcare Dashboard
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                {switchBtn === "dashboard" ? "My Appointments" : "My Profile"}
              </h1>

              <p className="text-slate-500 mt-3 max-w-2xl leading-relaxed">
                {switchBtn === "dashboard"
                  ? "Easily manage your upcoming consultations and appointments."
                  : "Manage your personal profile information and account settings."}
              </p>
            </div>
          </div>
        </div>

        {/* switch btn */}
        <div className="flex justify-center -mt-5 border-y pb-5 border-y-gray-200 bg-gray-50 shadow">
          <SwitchBtnDashboardProfile
            switchBtn={switchBtn}
            setSwitchBtn={setSwitchBtn}
          />
        </div>

        <div className="mt-15 transition-all duration-300">
          {switchBtn === "dashboard" && <AppointmentBookingCard />}

          {switchBtn === "profile" && <UserProfile />}
        </div>
      </div>
    </section>
  );
};

export default DashboardClient;
