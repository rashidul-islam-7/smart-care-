"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import DoctorCard from "../share/DoctorsCard";
import { findDoctors } from "@/lib/Search";

const SearchDoctor = ({ doctorsData }) => {
  const [searchDoc, setSearchDoc] = useState("");

  const searchedDoctors = findDoctors(doctorsData, searchDoc);
  console.log(searchedDoctors);

  return (
    <div>
      <div className="flex justify-center mb-15 lg:mb-20">
        <div className=" shadow-xl flex items-center gap-2 border border-green-100 rounded-xl px-3 w-full md:w-[500px] bg-white">
          {/* Search Icon */}
          <Search size={22} className="text-gray-400 flex-shrink-0" />

          {/* Input */}
          <input
            type="text"
            value={searchDoc}
            onChange={(e) => setSearchDoc(e.target.value)}
            name="search"
            placeholder="Search doctor, specialist or hospital..."
            className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 py-3"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-15">
        {searchedDoctors?.length > 0 ? (
          searchedDoctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <h2 className="text-2xl font-bold text-gray-700">
              No Doctors Found
            </h2>

            <p className="text-gray-500 mt-2">
              Doctors are currently unavailable.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDoctor;
