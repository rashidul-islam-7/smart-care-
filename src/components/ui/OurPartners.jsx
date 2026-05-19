"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { PlusCircle } from "lucide-react";

const topHospitals = [
    {
        id: 1,
        name: "Square Hospital",
        logoUrl: "/hospitals/square.png",
    },
    {
        id: 2,
        name: "Evercare Hospital",
        logoUrl: "/hospitals/evercare.png",
    },
    {
        id: 3,
        name: "United Hospital",
        logoUrl: "/hospitals/united.png",
    },
    {
        id: 4,
        name: "Labaid Hospital",
        logoUrl: "/hospitals/labaid.png",
    },
    {
        id: 5,
        name: "Popular Diagnostic Center",
        logoUrl: "/hospitals/popular.png",
    },
    {
        id: 6,
        name: "Ibn Sina Hospital",
        logoUrl: "/hospitals/ibnsina.png",
    },
    {
        id: 7,
        name: "Asgar Ali Hospital",
        logoUrl: "/hospitals/asgarali.png",
    },
    {
        id: 8,
        name: "Anwer Khan Modern Hospital",
        logoUrl: "/hospitals/anwerkhan.png",
    },
    {
        id: 9,
        name: "Green Life Hospital",
        logoUrl: "/hospitals/greenlife.png",
    },
    {
        id: 10,
        name: "BRB Hospital",
        logoUrl: "/hospitals/brb.png",
    },
];

const OurPartners = () => {
    return (
        <section className="overflow-hidden border-y border-slate-100 bg-white py-16">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-12 px-4 text-center">

                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                        <PlusCircle size={15} />
                        Trusted Medical Network
                    </div>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                        Top Hospitals in Bangladesh
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
                        Connect with leading hospitals and healthcare institutions
                        across Bangladesh for trusted medical services.
                    </p>
                </div>

                {/* Marquee Section */}
                <div className="relative">

                    {/* Left Gradient */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white via-white/90 to-transparent" />

                    {/* Right Gradient */}
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white via-white/90 to-transparent" />

                    {/* Marquee */}
                    <Marquee
                        speed={40}
                        pauseOnHover={true}
                        gradient={false}
                    >

                        {topHospitals.map((hospital) => (
                            <div
                                key={hospital.id}
                                className="group mx-5 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >

                                {/* Logo */}
                                <div className="relative flex h-14 w-24 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-slate-50">

                                    <img
                                        src={hospital.logoUrl}
                                        alt={hospital.name}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="whitespace-nowrap text-sm font-semibold text-slate-900">
                                        {hospital.name}
                                    </h3>

                                    <p className="mt-1 text-xs text-slate-500">
                                        Healthcare Partner
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default OurPartners;