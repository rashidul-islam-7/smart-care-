"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import slider_1 from "@/assets/hero_slider/care.jpg";
import slider_2 from "@/assets/hero_slider/ajaj_2.jpg";
import slider_3 from "@/assets/hero_slider/lab.jpg";
import slider_4 from "@/assets/hero_slider/kamrul.jpg";
import slider_5 from "@/assets/hero_slider/Operation.png";
import slider_6 from "@/assets/hero_slider/Laboratory.jpg";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

const images = [
    slider_1, slider_2, slider_3, slider_4, slider_5, slider_6,
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto Change Background
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[90vh]  overflow-hidden bg-black">

            {/* Background Images  */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${currentSlide === index
                        ? "opacity-100 scale-100 z-0"
                        : "opacity-0 scale-105 pointer-events-none z-0"
                        }`}
                >
                    <Image
                        src={img}
                        alt={`Healthcare Slide ${index + 1}`}
                        fill
                        priority={index === 0}
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/70 z-10"></div>

            {/* Content */}
            <div className="relative z-20 flex items-center justify-center h-full px-5">
                <div className="max-w-3xl text-center text-white">
                    <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                        {/* Tag / Badge */}
                        {/* <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-white  text-blue-800 shadow-sm shadow-cyan-100">
                            💖 Best Digital Healthcare Platform
                        </span> */}

                        {/* Main Headline */}
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                            Smart Healthcare
                            <br />

                            <span className="bg-linear-to-r from-sky-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">
                                Starts With Trusted Doctors
                            </span>
                        </h1>


                        {/* Sub-headline */}
                        <p className="text-md text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Easily book appointments with experienced specialists, manage your healthcare journey,
                            and access quality medical services anytime, anywhere.
                        </p>

                        {/* CTA Buttons */}
                        <div className="">
                            <Button href={'/appointments'} icon={<FaArrowRight />} >Book Appointment</Button>

                        </div>

                        {/* Trust Badges */}
                        <div className="py-8 border-t border-gray-50/30 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">

                            <div className="text-center flex justify-center items-center flex-col
                             bg-amber-500/[0.03] backdrop-blur-sm border border-amber-500/20 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                                <h4 className="flex justify-center items-center text-center gap-1 text-2xl font-black text-amber-400">
                                    4.9
                                    <span className="text-amber-400 -mt-1 filter 
                                    drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                                        <FaStar size={16} />
                                    </span>
                                </h4>
                                <p className="text-[11px] font-medium text-slate-300 mt-1">Happy Patients</p>
                            </div>

                            <div className="text-center py-3 px-3 bg-emerald-500/[0.03] backdrop-blur-sm border border-emerald-500/20 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                                <h4 className="flex justify-center items-center gap-0.5 text-2xl font-black text-emerald-400">
                                    500<span className="text-emerald-500 font-bold">+</span>
                                </h4>
                                <p className="text-[11px] font-medium text-slate-300 mt-1">Medical Experts</p>
                            </div>

                            <div className="text-center py-3 px-3 bg-sky-500/[0.03] backdrop-blur-sm border border-sky-500/20 rounded-xl shadow-[0_0_15px_rgba(14,165,233,0.05)]">
                                <h4 className="flex justify-center items-center gap-0.5 text-2xl font-black text-sky-400">
                                    100<span className="text-sky-500 font-bold">%</span>
                                </h4>
                                <p className="text-[11px] font-medium text-slate-300 mt-1">Secure & Private</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Dots */}
            {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-30 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-500 rounded-full h-2 ${currentSlide === index
                                ? "w-7 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                                : "w-2 bg-white/30 hover:bg-white/60"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div> */}
        </section>
    );
};

export default HeroSlider;







