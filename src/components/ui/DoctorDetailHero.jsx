
import Link from 'next/link';
import React from 'react';

const DoctorDetailHeroSection = () => {
    return (
         <section className="relative overflow-hidden border px-5 md:px-10 py-16 md:py-20">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center "
                style={{
                    backgroundImage: "url('/bd.jpg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-3xl mx-auto text-center">

                {/* Badge */}
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-sky-100 shadow-md text-sky-700 text-sm font-semibold">
                    💖 Trusted Medical Care For You
                </span>

                {/* Heading */}
                <h1 className="mt-3 text-2xl md:text-3xl font-bold text-white leading-tight">
                    Take care of your health and
                    <span className="bg-linear-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                        {" "}live a healthy life
                    </span>
                </h1>

                {/* Sub Text */}
                <p className="mt-3 text-gray-300 text-base leading-relaxed">
                    View detailed doctor information, consultation schedules, patient ratings,
                    and clinic details to make informed healthcare decisions.
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href={"/appointments"} >
                        <button className="cursor-pointer px-3 py-2 rounded-sm border border-gray-200 bg-white text-gray-700 font-semibold hover:border-sky-400 hover:text-sky-600 transition-all duration-300">
                            Back to Doctors
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default DoctorDetailHeroSection;