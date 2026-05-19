"use client";

import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const doctorsData = [
    {
        id: "dr-sarah-wilson",
        name: "Dr. Sarah Wilson",
        specialist: "Cardiologist",
        rating: 4.9,
        reviews: 124,
        experience: "12 years experience",
        img: "https://i.pravatar.cc/300?img=32",
    },
    {
        id: "dr-emily-watson",
        name: "Dr. Emily Watson",
        specialist: "Neurologist",
        rating: 4.8,
        reviews: 98,
        experience: "10 years experience",
        img: "https://i.pravatar.cc/300?img=47",
    },
    {
        id: "dr-james-carter",
        name: "Dr. James Carter",
        specialist: "Orthopedic Surgeon",
        rating: 4.9,
        reviews: 156,
        experience: "15 years experience",
        img: "https://i.pravatar.cc/300?img=68",
    }
];

const TopDoctors = () => {
    return (
        <section className="bg-linear-to-bl from-green-500/30 via-sky-100 to-blue-300/40 py-16 px-5 md:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Clean Header */}
                <div className="mb-12 border-b border-slate-100 pb-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-700 sm:text-3xl">
                        Top Rated Specialists
                    </h2>
                    <p className="text-slate-500 mt-2 text-sm sm:text-base max-w-xl">
                        Consult with our highly qualified and verified medical professionals.
                    </p>
                </div>

                {/* Minimal Grid Layout */}
                <div className="flex justify-evenly items-center">
                    {doctorsData.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="group "
                        >
                            <div className="text-center w-fit">
                                {/* Minimalist Image Container */}
                                <div className="relative aspect-square h-44 w-44 rounded-full overflow-hidden bg-slate-50 mb-4">
                                    <img
                                        src={doctor.img}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                                        priority
                                    />
                                </div>
                                <div className="flex justify-center items-center flex-col">
                                    <p className="font-semibold text-lg -mt-1">{doctor.name}</p>
                                    <p className="text-xs text-gray-400 mb-3"><span></span> {doctor.specialist}</p>
                                    <button className="flex justify-center items-center gap-1 bg-blue-800/40 w-full py-1 rounded-full text-white text-sm">View Details <span ><IoIosArrowForward /> </span></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TopDoctors;