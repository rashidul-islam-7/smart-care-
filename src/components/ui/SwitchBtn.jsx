"use client";
import React, { useState } from "react";

const SwitchBtnDashboardProfile = ({ switchBtn, setSwitchBtn }) => {
  return (
    <div className="max-w-7xl px-5 md:px-20 mt-5">
      <div className="flex bg-white border border-gray-100 shadow-sm p-1 w-fit rounded-full">
        {/* dashboard btn */}
        <button
          onClick={() => setSwitchBtn("dashboard")}
          className={`cursor-pointer text-sm font-medium py-1.5 px-4 rounded-full transition-all duration-300 ${
            switchBtn === "dashboard"
              ? "text-white bg-linear-to-r from-blue-600 to-cyan-500 shadow-sm shadow-blue-200"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          Dashboard
        </button>

        {/* profile btn */}
        <button
          onClick={() => setSwitchBtn("profile")}
          className={`cursor-pointer text-sm font-medium py-1.5 px-4 rounded-full transition-all duration-300 ${
            switchBtn === "profile"
              ? "text-white bg-linear-to-r from-blue-600 to-cyan-500 shadow-sm shadow-blue-200"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default SwitchBtnDashboardProfile;
