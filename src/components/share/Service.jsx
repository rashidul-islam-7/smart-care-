"use client";

import Image from "next/image";
import {
    ArrowRight,
    PhoneCall,
    MessageCircleMore,
} from "lucide-react";

import ambulance from "@/assets/features/ambulance.png";
import care from "@/assets/features/care.jpg";
import Laboratory from "@/assets/features/Laboratory.jpg";
import patient_ward from "@/assets/features/patient_ward.png";
import medical from "@/assets/features/medical.jpg";
import { BsHeartPulseFill } from "react-icons/bs";

const HealthcareServiceSection = () => {

    const services = [
        {
            id: 1,
            img: Laboratory,
            title: "Laboratory",
            desc: "Advanced diagnostic and laboratory services for accurate healthcare solutions.",
        },
        {
            id: 2,
            img: medical,
            title: "Medical Care",
            desc: "Professional healthcare support with trusted medical specialists.",
        },
        {
            id: 3,
            img: patient_ward,
            title: "Patient Ward",
            desc: "Comfortable patient care facilities with modern treatment support.",
        },
        {
            id: 4,
            img: care,
            title: "Patient Care",
            desc: "Complete healthcare assistance focused on patient wellbeing.",
        },
        {
            id: 5,
            img: ambulance,
            title: "Ambulance",
            desc: "24/7 emergency ambulance services with rapid response support.",
        },
    ];

    return (
        <section className=" py-10 md:py-20 px-5 md:px-10 lg:px-20 overflow-hidden max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                 bg-sky-100 text-sky-700 text-sm font-semibold">
                    <span><BsHeartPulseFill className="text-red-600" size={18} /> </span> SmartCare+ Healthcare Services

                </span>

                <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
                    Complete Healthcare
                    <span className="bg-linear-to-r from-sky-500 to-green-500 bg-clip-text text-transparent">
                        {" "}Solutions
                    </span>
                </h2>

                <p className="mt-5 text-md text-gray-500 leading-relaxed">
                    SmartCare+ provides trusted doctor consultations,
                    medical services, laboratory support, and seamless
                    appointment booking for better healthcare experiences.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {services.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                    >
                        {/* Image */}
                        <div className="relative h-38 overflow-hidden">

                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
                        </div>

                        {/* Content */}
                        <div className="p-5">

                            <h3 className="text-xl font-bold text-gray-700">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-gray-400 text-sm md:line-clamp-2 line-clamp-none leading-relaxed">
                                {item.desc}
                            </p>

                            <button className="cursor-pointer mt-3 inline-flex items-center gap-2 text-sky-600 font-semibold hover:gap-3 transition-all duration-300">
                                Read More
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HealthcareServiceSection;