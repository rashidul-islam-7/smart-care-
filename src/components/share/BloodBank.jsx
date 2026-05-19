"use client";

import Image from "next/image";
import { HeartPulse, PhoneCall, ShieldCheck, Clock3 } from "lucide-react";
import { BiDonateBlood } from "react-icons/bi";
import { MdBloodtype } from "react-icons/md";

const BloodBankSection = () => {
    return (
        <section className="py-16 lg:py-20 px-5 md:px-10 lg:px-20 bg-linear-to-b from-red-50 via-white to-red-50/60 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">

                {/* Left Content */}
                <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">

                    {/* Badge */}
                    <div className="flex">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 text-xs sm:text-sm font-semibold tracking-wide">
                            <MdBloodtype size={18} className="animate-pulse" /> SmartCare+ Blood Bank
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 tracking-tight !leading-tight">
                        Donate Blood, <br />
                        <span className="bg-linear-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                            Save Precious Lives
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl">
                        A completely open platform for everyone. Whether you want to give blood or need an emergency request, our network connects donors and seekers instantly—100% free, anytime.
                    </p>

                    {/* Features Grid */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {/* Feature 1: Free Donation */}
                        <div className="flex gap-4 bg-white rounded-2xl p-5 border border-red-100/70 shadow-xs hover:border-red-300 transition-all duration-300">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-red-50 flex items-center justify-center border border-red-100">
                                <HeartPulse className="text-red-500" size={22} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-base">100% Free Network</h4>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                                    No costs involved. Anyone can give and anyone can receive blood freely.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: 24/7 Available */}
                        <div className="flex gap-4 bg-white rounded-2xl p-5 border border-red-100/70 shadow-xs hover:border-red-300 transition-all duration-300">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-red-50 flex items-center justify-center border border-red-100">
                                <Clock3 className="text-red-500" size={22} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-base">Open Anytime</h4>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                                    Emergency support is operational 24/7 to counter urgent medical requests.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3: Safe & Trusted */}
                        <div className="flex gap-4 bg-white rounded-2xl p-5 border border-red-100/70 shadow-xs hover:border-red-300 transition-all duration-300">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-red-50 flex items-center justify-center border border-red-100">
                                <ShieldCheck className="text-red-500" size={22} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-base">Universal Solution</h4>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                                    A trusted registry bridging the gap between direct donors and patient families.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4: Emergency Contact */}
                        <div className="flex gap-4 bg-white rounded-2xl p-5 border border-red-100/70 shadow-xs hover:border-red-300 transition-all duration-300">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-red-50 flex items-center justify-center border border-red-100">
                                <PhoneCall className="text-red-500" size={22} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-base">Instant Connection</h4>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                                    Quickly locate and contact active, verified nearby blood donors in minutes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-linear-to-r from-red-500 to-pink-500 text-white font-semibold shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer">
                            <BiDonateBlood size={20} /> Donate Blood
                        </button>
                        <button className="px-8 py-3.5 rounded-xl border border-red-200 text-red-500 font-semibold bg-white hover:bg-red-50/50 hover:border-red-300 transition-all duration-300 cursor-pointer text-center">
                            Request Blood Support
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center w-full">
                    {/* Glow Effect */}
                    <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:w-[350px] bg-red-200/50 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <div className="relative w-full max-w-[480px] h-[450px] sm:h-[550px] rounded-3xl overflow-hidden shadow-xl border border-red-100/40">
                        <Image
                            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200&auto=format&fit=crop"
                            alt="Blood Donation Campaign"
                            fill
                            unoptimized
                            className="object-cover"
                        />

                        {/* Overlay Card */}
                        {/* <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/40">
                            <h4 className="text-lg font-bold text-green-400">
                                Immediate Response Team
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-200 mt-1.5 leading-relaxed">
                                Need a specific blood group instantly? Connect with live coordinators ready to help round the clock.
                            </p>
                            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-blue-500 font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1 inline-block animate-ping">
                                        </span> 
                                        
                                        Available 24/7
                                </span>
                                <button className="px-4 py-2 rounded-xl bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                                    Contact Now
                                </button>
                            </div>
                        </div> */}


                        {/* Overlay Card */}
                        <div className="absolute bottom-5 left-5 right-5 bg-black/30 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/10">

                            {/* Title */}
                            <h4 className="text-md md:text-lg font-bold text-red-400 tracking-wide">
                                Immediate Response Team
                            </h4>

                            {/* Description */}
                            <p className="text-sm text-gray-200 mt-2 leading-relaxed">
                                Need a specific blood group instantly? Connect with live coordinators
                                ready to help you anytime, anywhere.
                            </p>

                            {/* Bottom */}
                            <div className="mt-3 pt-4 border-t border-white/10 flex items-center justify-between">

                                {/* Status */}
                                <span className="text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">

                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex m-auto rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>

                                    Available 24/7
                                </span>

                                {/* Button */}
                                <button className="px-5 py-2 rounded-xl bg-linear-to-r from-red-500
                                 to-pink-500 text-white text-sm font-semibold shadow-lg  hover:shadow-red-500/30 transition-all duration-300 cursor-pointer">
                                    Contact Now
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BloodBankSection;