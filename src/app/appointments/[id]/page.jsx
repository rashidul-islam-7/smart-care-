import React from 'react';
import DoctorDetailHeroSection from '@/components/ui/DoctorDetailHero';
import Image from 'next/image';

import doctor from "@/assets/Doctors/doctor_1.webp"
import { FaArrowDown, FaArrowRight, FaCalendar, FaCalendarCheck, FaLocationDot, FaMoneyBill, FaMoneyCheck, FaStar } from 'react-icons/fa6';
import Button from '@/components/ui/Button';

const DoctorDetailPage = () => {
    return (
        <div>
            <DoctorDetailHeroSection />

            <section className="max-w-5xl mx-auto px-5 py-10">

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 border-b pb-3 border-gray-200">
                    Doctor Details
                </h1>

                {/* Profile Card */}
                <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">

                    {/* Doctor Info */}
                    <div className="text-center">
                        <div className="relative w-40 h-40 mx-auto rounded-xl overflow-hidden border-4 border-sky-100 shadow-lg shadow-sky-100">
                            <Image
                                src={doctor}
                                alt="Doctor"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                            Dr. Rakib Hassan
                        </h3>

                        <p className="text-sky-600 font-medium">Cardiology Specialist</p>

                        <p className="text-gray-500 text-sm mt-1">
                            Smart Care Hospital, Bonani, Bogura
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">

                        <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
                            <h2 className="text-xl font-bold text-gray-800">10+ Years</h2>
                            <p className="text-gray-500 text-sm uppercase">Experience</p>
                        </div>

                        <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                            <h2 className="text-xl flex justify-center items-center gap-1 font-bold text-gray-800">4.9 <span><FaStar className='text-yellow-500 -mt-1' size={18} /> </span></h2>
                            <p className="text-gray-500 text-sm uppercase">Rating</p>
                        </div>

                        <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                            <h2 className="text-xl font-bold text-gray-800">18</h2>
                            <p className="text-gray-500 text-sm uppercase">Current Booking patient </p>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="mt-8 space-y-4 max-w-2xl mx-auto">

                        <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                            <FaLocationDot className="text-green-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">Location</p>
                                <p className="text-gray-500">Smart Care Hospital, Bonani, Bogura</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                            <FaCalendarCheck className="text-green-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">Availability</p>
                                <p className="text-gray-500">Every Friday & Sunday (10:00 AM - 1:00 PM)</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                            <FaMoneyCheck className="text-green-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">Consultation Fee</p>
                                <p className="text-gray-500">1000 BDT</p>
                            </div>
                        </div>

                    </div>

                    {/* Description */}
                    <div className="mt-8 max-w-2xl mx-auto text-center">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">
                            About Doctor
                        </h4>
                        <p className="text-gray-500 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugit, provident nam. Fuga itaque amet quas consequatur hic
                            optio eius veritatis.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 flex justify-center">
                        <Button className="px-8 text-lg" icon={<FaArrowRight />} >
                            Book Appointment
                        </Button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default DoctorDetailPage;