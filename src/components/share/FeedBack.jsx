"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { BsStars } from "react-icons/bs";

// Data
const reviews = [
    // {
    //     id: 1,
    //     name: "Sarah Anastasia",
    //     initials: "SA",
    //     role: "Cardiology Patient",
    //     rating: 5,
    //     bgColor: "bg-blue-500/10 text-blue-600 border-blue-200/50",
    //     comment:
    //         "Booking an appointment on SmartCare+ was incredibly seamless. I connected with a top cardiologist within minutes.",
    // },
    {
        id: 2,
        name: "Rahat Chowdhury",
        initials: "RC",
        role: "Emergency Blood Seeker",
        rating: 5,
        bgColor: "bg-rose-500/10 text-rose-600 border-rose-200/50",
        comment:
            "I found an O+ blood donor within 15 minutes using SmartCare+. Their emergency support truly saved us.",
    },
    {
        id: 3,
        name: "Amelie Laurent",
        initials: "AL",
        role: "Pediatric Patient's Mother",
        rating: 5,
        bgColor: "bg-teal-500/10 text-teal-600 border-teal-200/50",
        comment:
            "The digital prescription and laboratory services are extremely convenient and secure for busy parents.",
    },
    {
        id: 4,
        name: "David Miller",
        initials: "DM",
        role: "Orthopedic Patient",
        rating: 5,
        bgColor: "bg-indigo-500/10 text-indigo-600 border-indigo-200/50",
        comment:
            "The doctor consultation process was smooth and professional. I received treatment guidance instantly.",
    },
    {
        id: 5,
        name: "Nusrat Jahan",
        initials: "NJ",
        role: "Dermatology Patient",
        rating: 5,
        bgColor: "bg-pink-500/10 text-pink-600 border-pink-200/50",
        comment:
            "SmartCare+ made it very easy to schedule appointments and access prescriptions from my phone anytime.",
    },
    {
        id: 6,
        name: "Michael Brown",
        initials: "MB",
        role: "Neurology Patient",
        rating: 5,
        bgColor: "bg-cyan-500/10 text-cyan-600 border-cyan-200/50",
        comment:
            "The specialist recommendations were accurate and helpful. The platform feels modern and reliable.",
    },
    {
        id: 7,
        name: "Fatema Akter",
        initials: "FA",
        role: "General Checkup Patient",
        rating: 5,
        bgColor: "bg-emerald-500/10 text-emerald-600 border-emerald-200/50",
        comment:
            "Everything from appointment booking to test reports was managed perfectly through SmartCare+.",
    },
    {
        id: 8,
        name: "James Wilson",
        initials: "JW",
        role: "Heart Surgery Patient",
        rating: 5,
        bgColor: "bg-orange-500/10 text-orange-600 border-orange-200/50",
        comment:
            "I was impressed by the quick response from doctors and the excellent patient support team.",
    },
    {
        id: 9,
        name: "Ayesha Rahman",
        initials: "AR",
        role: "Diabetes Patient",
        rating: 5,
        bgColor: "bg-violet-500/10 text-violet-600 border-violet-200/50",
        comment:
            "The medicine reminders and health tracking features are extremely useful for daily healthcare management.",
    },
    {
        id: 10,
        name: "Daniel Carter",
        initials: "DC",
        role: "Dental Patient",
        rating: 5,
        bgColor: "bg-yellow-500/10 text-yellow-700 border-yellow-200/50",
        comment:
            "One of the best healthcare platforms I’ve used. Clean design, fast booking, and trusted doctors.",
    },
];

const FeedBacks = () => {
    return (
        <section className="py-16 lg:py-24 px-5 md:px-10 lg:px-20 bg-slate-50 text-gray-800 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
                    <div className="space-y-3 max-w-xl text-center md:text-left">
                        <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-blue-100 text-blue-600 tracking-wide uppercase">
                            <span><BsStars size={14} /></span> Patient Stories
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight !leading-tight">
                            Trusted by{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                                Thousands
                            </span>{" "}
                            of Happy Patients
                        </h2>
                    </div>

                    <div className="text-center md:text-right shrink-0">
                        <p className="text-2xl font-bold text-gray-900">4.9 / 5.0</p>

                        <div className="flex justify-center md:justify-end gap-1 text-amber-500 my-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" />
                            ))}
                        </div>

                        <p className="text-xs text-gray-500 font-medium">
                            Based on 2,500+ verified ratings
                        </p>
                    </div>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}

                    speed={4000}
                    autoplay={{
                        delay: 0,
                        reverseDirection: false,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    grabCursor={true}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="!pb-14"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="relative h-full flex flex-col justify-between bg-white border border-slate-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300 group">

                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 text-slate-100 group-hover:text-blue-50 transition-colors duration-300 pointer-events-none">
                                    <Quote size={36} fill="currentColor" />
                                </div>

                                {/* Content */}
                                <div className="space-y-4 relative z-10">
                                    {/* Stars */}
                                    <div className="flex gap-0.5 text-amber-400">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} size={15} fill="currentColor" />
                                        ))}
                                    </div>

                                    {/* Comment */}
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                                        &quot;
                                        {review.comment.length > 150
                                            ? `${review.comment.slice(0, 150)}...`
                                            : review.comment}
                                        &quot;
                                    </p>
                                </div>

                                {/* Profile */}
                                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3.5">
                                    <div
                                        className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm border tracking-wider shrink-0 shadow-sm ${review.bgColor}`}
                                    >
                                        {review.initials}
                                    </div>

                                    <div className="min-w-0">
                                        <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">
                                            {review.name}
                                        </h4>

                                        <p className="text-xs text-slate-400 font-medium truncate">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FeedBacks;