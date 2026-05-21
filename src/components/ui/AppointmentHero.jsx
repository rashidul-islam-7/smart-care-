
import React from 'react';
import SearchDoctor from './SearchDoctor';
import { ShieldCheck } from 'lucide-react';

const AppointmentPageHero = () => {
    return (
        <section className=" px-5 md:px-10  pt-10 pb-15 md:py-15 relative overflow-hidden  bg-linear-to-r from-sky-50 via-white to-green-50  
         ">

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200/30 blur-3xl rounded-full"></div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto text-center">

                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-100 bg-white/80 backdrop-blur-xl shadow-lg shadow-sky-100/50 text-sky-700 text-sm font-semibold tracking-wide">

                    {/* badge  */}
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-linear-to-r from-sky-500 to-green-500 text-white">
                        <ShieldCheck size={14} />
                    </span>

                    Trusted Healthcare Platform
                </span>

                {/* Heading */}
                <h1 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-gray-800">
                    Meet Our
                    <span className="bg-linear-to-r from-blue-600
                         to-green-500 bg-clip-text text-transparent">
                        {" "}Specialist Doctors
                    </span>
                </h1>

                {/* Sub Text */}
                <p className="mt-3 text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                    Discover qualified doctors across multiple specialties,
                    compare schedules, and book your consultation quickly
                    and securely.
                </p>
               
                {/* <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <SearchDoctor />
                </div> */}
            </div>
        </section>

    );
};

export default AppointmentPageHero;