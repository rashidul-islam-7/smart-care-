import DoctorCard from '@/components/share/DoctorsCard';
import AppointmentPageHero from '@/components/ui/AppointmentHero';
import { getDoctors } from '@/lib/Data';
import React from 'react';

const AllAppointmentsPage = async () => {
    const doctorsData = await getDoctors();
    console.log(doctorsData)

    return (
        <div className='bg-linear-to-r from-sky-50 via-white to-green-50'>
            <AppointmentPageHero />

            <div className='px-5 md:px-10 max-w-7xl mx-auto'>
                <h1 className="border-b border-b-gray-300/50 text-3xl md:text-4xl my-15 font-semibold text-gray-700  ">Explore Doctors</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-15 ">
                    {
                        doctorsData.map(doctor => <DoctorCard key={doctor._id} doctor={doctor} />)
                    }
                </div>
            </div>


        </div>
    );
};

export default AllAppointmentsPage;