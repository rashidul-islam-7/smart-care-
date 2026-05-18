import Image from "next/image";
import React from "react";
import { CalendarDays, MapPin, Star, Clock3 } from "lucide-react";
import Button from "../ui/Button";

import doctor from "@/assets/Doctors/doctor_1.webp"
import Link from "next/link";

const DoctorCard = () => {
    return (
       <div className="px-5 md:px-10 max-w-7xl mx-auto">

        <h1 className="border-b border-b-gray-300/50 text-3xl md:text-4xl my-15 font-semibold text-gray-700  ">Explore Doctors</h1>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-15 ">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:border-gray-400 hover:-translate-y-1 transition-all duration-500  ">
                {/* Doctor Image */}
                <div className="relative group ">

                    {/* Rating */}
                    <div className="bg-green-300/20 px-2 rounded-full z-10 absolute top-4 right-4 flex items-center gap-1 text-yellow-500">
                        <span className="font-semibold text-gray-200 text-sm">
                            4.9
                        </span>
                        <Star size={14} fill="currentColor" />
                    </div>

                    <div className="relative h-56 overflow-hidden">
                        <Image
                            src={doctor}
                            alt="Doctor"
                            fill
                            className="object-cover group-hover:brightness-75 transition-transform duration-500"
                        />

                        {/* Experience Overlay */}
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="text-center text-gray-300">
                                <h2 className="text-2xl font-bold">8+ Years</h2>
                                <p className="text-sm text-gray-200">
                                    Professional Experience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3  ">

                    {/* Doctor Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-700">
                            Dr. Sarah Ahmed
                        </h2>
                        <p className="inline-block px-3 py-1 mt-2 text-xs rounded-full bg-sky-100 text-sky-600 font-medium">
                            Cardiologist Specialist
                        </p>
                    </div>

                    {/* Date & Time */}
                    <div className="space-y-1 text-sm text-gray-500">

                        <div className="flex items-center gap-2">
                            <CalendarDays size={18} className="text-green-600" />
                            <span>Every Friday & Sunday</span>
                        </div>

                        {/* <div className="flex items-center gap-2">
                            <Clock3 size={18} className="text-green-600" />
                            <span>10:00 AM - 01:00 PM</span>
                        </div> */}

                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-green-600" />
                            <span>Dhaka Medical Center</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link href={`/appointments/20`}>
                        <Button
                            className="w-full inline-flex text-center justify-center mt-2"
                        >
                            View Detail
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
       </div>
    );
};

export default DoctorCard;