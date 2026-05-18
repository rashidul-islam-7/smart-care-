import Image from 'next/image';
import React from 'react';
import heroDoc from '@/assets/Doctors/doctor-2.webp'

const HeroSection = () => {
    return (
        <section className="relative bg-linear-to-br from-blue-50 via-white to-teal-50 overflow-hidden py-20 lg:py-32">
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                        {/* Tag / Badge */}
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 shadow-sm">
                            ✨ Best Digital Healthcare Platform
                        </span>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Your Health, Our Priority. <br />
                            <span className="bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                                Book Top Doctors
                            </span> Instantly.
                        </h1>

                        {/* Sub-headline */}
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Connect with certified medical experts, manage your appointments seamlessly, and take control of your health—all in one place. Secure, fast, and reliable.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                            <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-teal-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-200 flex items-center justify-center gap-2 group">
                                Find a Doctor
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                            <button className="px-8 py-4 bg-white text-slate-700 font-medium rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-all duration-200">
                                How It Works
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900">4.9<span className="text-blue-500">★</span></h4>
                                <p className="text-xs text-slate-500 mt-1">10k+ Happy Patients</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900">500+</h4>
                                <p className="text-xs text-slate-500 mt-1">Expert Doctors</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900">100%</h4>
                                <p className="text-xs text-slate-500 mt-1">Secure & Private</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Element / Mockup */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <div className="relative mx-auto w-full max-w-md">
                            {/* Background card accent */}
                            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-teal-400 rounded-3xl transform rotate-6 scale-105 opacity-10 shadow-2xl"></div>

                            {/* Main Medical Image / Vector */}
                            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
                                <Image width={500} height={500} src={heroDoc} alt='Doctors'></Image>

                                {/* Floating Interactive Card */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                                    <div className="p-3 bg-teal-100 text-teal-600 rounded-xl">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Appointment</p>
                                        <p className="text-sm font-bold text-slate-800">Successfully Booked!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;