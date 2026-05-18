import DoctorCard from '@/components/share/DoctorsCard';
import AppointmentPageHero from '@/components/ui/AppointmentHero';
import React from 'react';

const AllAppointmentsPage = () => {
    return (
        <div className='bg-linear-to-r from-sky-50 via-white to-green-50'>
            <AppointmentPageHero />
            <DoctorCard />
        </div>
    );
};

export default AllAppointmentsPage;