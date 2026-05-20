
import React from 'react';
import DoctorDetailHeroSection from '@/components/ui/DoctorDetailHero';
import Image from 'next/image';
import { FaArrowRight, FaCalendar, FaCalendarCheck, FaLocationDot, FaMoneyCheck, FaStar } from 'react-icons/fa6';
import Button from '@/components/ui/Button';
import { getDoctorId } from '@/lib/Data';

const DoctorDetailPage = async ({ params }) => {
    const { id } = await params;
    const doctorDetails = await getDoctorId(id);

    const { _id, name, specialist, fee, image, experience, availabilityDays, availabilityTimes, description, hospital, location, rating } = doctorDetails;


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
                                src={image}
                                alt="Doctor"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                            {name}
                        </h3>

                        <p className="text-sky-600 font-medium">{specialist}</p>

                        <p className="text-gray-500 text-sm mt-1">
                            {hospital}, {location}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">

                        <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
                            <h2 className="text-xl font-bold text-gray-800">{experience}+ Years</h2>
                            <p className="text-gray-500 text-sm uppercase">Experience</p>
                        </div>

                        <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                            <h2 className="text-xl flex justify-center items-center gap-1 font-bold text-gray-800">{rating} <span><FaStar className='text-yellow-500 -mt-1' size={18} /> </span></h2>
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
                                <p className="text-gray-500"> {hospital}, {location}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                            <FaCalendarCheck className="text-green-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">Availability</p>
                                <p className="text-gray-500">Every {availabilityDays.map((day) => day.slice()).join(" ,")} - {availabilityTimes}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                            <FaMoneyCheck className="text-green-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">Consultation Fee</p>
                                <p className="text-gray-500">{fee} BDT</p>
                            </div>
                        </div>

                    </div>

                    {/* Description */}
                    <div className="mt-8 max-w-2xl mx-auto text-center">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">
                            About Doctor
                        </h4>
                        <p className="text-gray-500 leading-relaxed">
                            {description}
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