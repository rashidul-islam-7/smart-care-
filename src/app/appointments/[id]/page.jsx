

// import React from 'react';
// import DoctorDetailHeroSection from '@/components/ui/DoctorDetailHero';
// import Image from 'next/image';
// import { FaArrowRight, FaCalendar, FaCalendarCheck, FaLocationDot, FaMoneyCheck, FaStar } from 'react-icons/fa6';
// import Button from '@/components/ui/Button';
// import { getDoctorId } from '@/lib/Data';
// import Link from 'next/link';
// import { Card, FieldError, Input, Label, Modal, RadioGroup, Surface, TextField } from '@heroui/react';
// import { Form, Radio } from 'lucide-react';



// const DoctorDetailPage = async ({ params }) => {

//     const { id } = await params;
//     const doctorDetails = await getDoctorId(id);

//     //    // Form submit handler
//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     const formData = new FormData(e.currentTarget);
//     //     const data = Object.fromEntries(formData.entries());
//     //     console.log(data);
//     //     setIsPending(true);

//     // };


//     const { _id, name, specialist, fee, image, experience, availabilityDays, availabilityTimes, description, hospital, location, rating } = doctorDetails;


//     return (
//         <div>
//             <DoctorDetailHeroSection />

//             <section className="max-w-5xl mx-auto px-5 py-10">

//                 {/* Title */}
//                 <h1 className="text-3xl md:text-4xl font-bold text-gray-800 border-b pb-3 border-gray-200">
//                     Doctor Details
//                 </h1>

//                 {/* Profile Card */}
//                 <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">

//                     {/* Doctor Info */}
//                     <div className="text-center">
//                         <div className="relative w-40 h-40 mx-auto rounded-xl overflow-hidden border-4 border-sky-100 shadow-lg shadow-sky-100">
//                             <Image
//                                 src={image}
//                                 alt="Doctor"
//                                 fill
//                                 className="object-cover"
//                             />
//                         </div>

//                         <h3 className="mt-4 text-2xl font-semibold text-gray-800">
//                             {name}
//                         </h3>

//                         <p className="text-sky-600 font-medium">{specialist}</p>

//                         <p className="text-gray-500 text-sm mt-1">
//                             {hospital}, {location}
//                         </p>
//                     </div>

//                     {/* Stats */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">

//                         <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
//                             <h2 className="text-xl font-bold text-gray-800">{experience}+ Years</h2>
//                             <p className="text-gray-500 text-sm uppercase">Experience</p>
//                         </div>

//                         <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
//                             <h2 className="text-xl flex justify-center items-center gap-1 font-bold text-gray-800">{rating} <span><FaStar className='text-yellow-500 -mt-1' size={18} /> </span></h2>
//                             <p className="text-gray-500 text-sm uppercase">Rating</p>
//                         </div>

//                         <div className="p-4 rounded-xl bg-green-50 border border-green-100">
//                             <h2 className="text-xl font-bold text-gray-800">18</h2>
//                             <p className="text-gray-500 text-sm uppercase">Current Booking patient </p>
//                         </div>
//                     </div>

//                     {/* Info Section */}
//                     <div className="mt-8 space-y-4 max-w-2xl mx-auto">

//                         <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
//                             <FaLocationDot className="text-green-600 mt-1" />
//                             <div>
//                                 <p className="font-semibold text-gray-700">Location</p>
//                                 <p className="text-gray-500"> {hospital}, {location}</p>
//                             </div>
//                         </div>

//                         <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
//                             <FaCalendarCheck className="text-green-600 mt-1" />
//                             <div>
//                                 <p className="font-semibold text-gray-700">Availability</p>
//                                 <p className="text-gray-500">Every {availabilityDays.map((day) => day.slice()).join(" ,")} - {availabilityTimes}</p>
//                             </div>
//                         </div>

//                         <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
//                             <FaMoneyCheck className="text-green-600 mt-1" />
//                             <div>
//                                 <p className="font-semibold text-gray-700">Consultation Fee</p>
//                                 <p className="text-gray-500">{fee} BDT</p>
//                             </div>
//                         </div>

//                     </div>

//                     {/* Description */}
//                     <div className="mt-8 max-w-2xl mx-auto text-center">
//                         <h4 className="text-lg font-semibold text-gray-700 mb-2">
//                             About Doctor
//                         </h4>
//                         <p className="text-gray-500 leading-relaxed">
//                             {description}
//                         </p>
//                     </div>

//                     {/* CTA */}
//                     {/* <Link href={"/appointmentForm"} className="mt-10 flex justify-center">
//                         <Button className="px-8 text-lg" icon={<FaArrowRight />} >
//                             Book Appointment
//                         </Button>
//                     </Link> */}


//                     <Modal>
//                         <Button variant="secondary">Open Contact Form</Button>
//                         <Modal.Backdrop>
//                             <Modal.Container placement="auto">
//                                 <Modal.Dialog className="sm:max-w-md">
//                                     <Modal.CloseTrigger />
//                                     <Modal.Header>
//                                         <Modal.Heading>Contact Us</Modal.Heading>
//                                         <p className="mt-1.5 text-sm leading-5 text-muted">
//                                             Fill out the form below and we'll get back to you. The modal adapts automatically
//                                             when the keyboard appears on mobile.
//                                         </p>
//                                     </Modal.Header>
//                                     <Modal.Body className="p-6">
//                                         <Surface variant="default">


//                                             <Card className="w-full max-w-2xl p-2 shadow-sm" variant="default">
//                                                 <Card.Header className="flex flex-col items-start px-6 pt-6 pb-2">
//                                                     <Card.Title className="text-2xl font-bold text-gray-800">Doctor Appointment Form</Card.Title>
//                                                     <Card.Description className="text-sm text-gray-500">Please fill out the form below with correct patient details.</Card.Description>
//                                                 </Card.Header>

//                                                 <Card.Content className="p-6">
//                                                     <Form className="flex flex-col gap-6">
//                                                         <TextField className="w-full flex flex-col gap-1.5" name="patientName">
//                                                             <Label className="text-sm font-medium text-gray-700">Doctor Name</Label>
//                                                             <Input

//                                                             />
//                                                         </TextField>

//                                                         {/* Row 1: Name & Phone */}
//                                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
//                                                             <TextField isRequired className="w-full flex flex-col gap-1.5" name="patientName">
//                                                                 <Label className="text-sm font-medium text-gray-700">Patient Name</Label>
//                                                                 <Input
//                                                                     placeholder="Enter full name"
//                                                                 />
//                                                                 <FieldError className="text-xs text-danger" />
//                                                             </TextField>

//                                                             <TextField isRequired className="w-full flex flex-col gap-1.5" name="phone" type="tel">
//                                                                 <Label className="text-sm font-medium text-gray-700">Phone Number</Label>
//                                                                 <Input
//                                                                     placeholder="e.g. +123456789"
//                                                                 />
//                                                                 <FieldError className="text-xs text-danger" />
//                                                             </TextField>
//                                                         </div>

//                                                         {/* Row 2: Date & Time */}
//                                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
//                                                             <TextField isRequired className="w-full flex flex-col gap-1.5" name="date" type="date">
//                                                                 <Label className="text-sm font-medium text-gray-700">Date</Label>
//                                                                 <Input
//                                                                 />
//                                                                 <FieldError className="text-xs text-danger" />
//                                                             </TextField>

//                                                             <TextField isRequired className="w-full flex flex-col gap-1.5" name="time" type="time">
//                                                                 <Label className="text-sm font-medium text-gray-700">Time</Label>
//                                                                 <Input type="time"
//                                                                 />
//                                                                 <FieldError className="text-xs text-danger" />
//                                                             </TextField>
//                                                         </div>

//                                                         {/* Row 3: Age & Gender */}
//                                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full">
//                                                             <TextField isRequired className="w-full flex flex-col gap-1.5" name="age" type="number">
//                                                                 <Label className="text-sm font-medium text-gray-700">Age</Label>
//                                                                 <Input
//                                                                     placeholder="e.g. 25"

//                                                                 />
//                                                                 <FieldError className="text-xs text-danger" />
//                                                             </TextField>

//                                                             <div className="flex flex-col gap-1.5">
//                                                                 <RadioGroup
//                                                                     orientation="horizontal"
//                                                                     name="gender"
//                                                                 >
//                                                                     <Label className="text-sm font-medium text-gray-700">Gender</Label>

//                                                                     {/* Male Option */}
//                                                                     <Radio value="male">
//                                                                         <Radio.Control>
//                                                                             <Radio.Indicator />
//                                                                         </Radio.Control>
//                                                                         <Radio.Content>
//                                                                             <Label>Male</Label>
//                                                                         </Radio.Content>
//                                                                     </Radio>

//                                                                     {/* Female Option */}
//                                                                     <Radio value="female">
//                                                                         <Radio.Control>
//                                                                             <Radio.Indicator />
//                                                                         </Radio.Control>
//                                                                         <Radio.Content>
//                                                                             <Label>Female</Label>
//                                                                         </Radio.Content>
//                                                                     </Radio>
//                                                                 </RadioGroup>
//                                                             </div>
//                                                         </div>

//                                                         {/* Submit Button */}
//                                                         <div className="">


//                                                             <button
//                                                                 className=" cursor-pointer rounded-full px-8 py-3 text-md font-semibold  hover:to-[#012a4b] bg-linear-to-r from-[#012a4b] to-sky-500 text-whit  text-white w-full flex justify-center items-center gap-2 transition-all duration-300 "
//                                                                 variant="primary"
//                                                                 size="lg"
//                                                                 type="submit"
//                                                             >
//                                                                 Confirm Appointment
//                                                             </button>

//                                                         </div>
//                                                     </Form>
//                                                 </Card.Content>
//                                             </Card>


//                                         </Surface>
//                                     </Modal.Body>
//                                     <Modal.Footer>
//                                         <Button slot="close" variant="secondary">
//                                             Cancel
//                                         </Button>
//                                         <Button slot="close">Send Message</Button>
//                                     </Modal.Footer>
//                                 </Modal.Dialog>
//                             </Modal.Container>
//                         </Modal.Backdrop>
//                     </Modal>

//                 </div>
//             </section>
//         </div>
//     );
// };

// export default DoctorDetailPage;




import React from 'react';
import DoctorDetailHeroSection from '@/components/ui/DoctorDetailHero';
import Image from 'next/image';
import {
    FaArrowRight,
    FaCalendarCheck,
    FaLocationDot,
    FaMoneyCheck,
    FaStar
} from 'react-icons/fa6';

import {
    Card,
    FieldError,
    Input,
    Label,
    Modal,
    Radio,
    RadioGroup,
    Surface,
    TextField,
    Form,
} from '@heroui/react';

import { getDoctorId } from '@/lib/Data';
import AppointmentModal from '@/components/share/AppointmentModal';

const DoctorDetailPage = async ({ params }) => {

    const { id } = await params;

    const doctorDetails = await getDoctorId(id);

    const {
        name,
        specialist,
        fee,
        image,
        experience,
        availabilityDays,
        availabilityTimes,
        description,
        hospital,
        location,
        rating
    } = doctorDetails;


    return (
        <div>

            <DoctorDetailHeroSection />

            <section className="max-w-5xl mx-auto px-5 py-10">

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 border-b pb-3 border-gray-200">
                    Doctor Details
                </h1>

                {/* Main Card */}
                <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">

                    {/* Doctor Info */}
                    <div className="text-center">

                        <div className="relative w-40 h-40 mx-auto rounded-xl overflow-hidden border-4 border-sky-100 shadow-lg shadow-sky-100">

                            <Image
                                src={image}
                                alt={name}
                                fill
                                className="object-cover"
                            />

                        </div>

                        <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                            {name}
                        </h3>

                        <p className="text-sky-600 font-medium">
                            {specialist}
                        </p>

                        <p className="text-gray-500 text-sm mt-1">
                            {hospital}, {location}
                        </p>

                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">

                        <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
                            <h2 className="text-xl font-bold text-gray-800">
                                {experience}+ Years
                            </h2>

                            <p className="text-gray-500 text-sm uppercase">
                                Experience
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">

                            <h2 className="text-xl flex justify-center items-center gap-1 font-bold text-gray-800">
                                {rating}

                                <FaStar
                                    className="text-yellow-500"
                                    size={18}
                                />
                            </h2>

                            <p className="text-gray-500 text-sm uppercase">
                                Rating
                            </p>

                        </div>

                        <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                            <h2 className="text-xl font-bold text-gray-800">
                                18
                            </h2>
                            <p className="text-gray-500 text-sm uppercase">
                                Current Booking Patient
                            </p>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="mt-8 space-y-4 max-w-2xl mx-auto">
                        {/* Location */}
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                            <FaLocationDot className="text-green-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">
                                    Location
                                </p>
                                <p className="text-gray-500">
                                    {hospital}, {location}
                                </p>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                            <FaCalendarCheck className="text-green-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">
                                    Availability
                                </p>
                                <p className="text-gray-500">
                                    Every {availabilityDays.join(' , ')} - {availabilityTimes}
                                </p>
                            </div>
                        </div>

                        {/* Fee */}
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                            <FaMoneyCheck className="text-green-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">
                                    Consultation Fee
                                </p>
                                <p className="text-gray-500">
                                    {fee} BDT
                                </p>
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

                    {/* Appointment Modal */}
                  <div className='flex justify-center mt-5'>

                      <AppointmentModal doctorDetails ={doctorDetails} />
                  </div>

                </div>
            </section>
        </div>
    );
};

export default DoctorDetailPage;

//    <div className="mt-10">

//                         <Modal>

//                             {/* Open Button */}
//                             <Modal.Trigger>

//                                 <button
//                                     className="cursor-pointer rounded-full px-8 py-3 text-md font-semibold hover:to-[#012a4b] bg-linear-to-r from-[#012a4b] to-sky-500 text-white w-full flex justify-center items-center gap-2 transition-all duration-300"
//                                 >
//                                     Book Appointment

//                                     <FaArrowRight />
//                                 </button>

//                             </Modal.Trigger>

//                             {/* Modal Content */}
//                             <Modal.Backdrop>

//                                 <Modal.Container placement="auto">

//                                     <Modal.Dialog className="sm:max-w-2xl">

//                                         <Modal.CloseTrigger />

//                                         {/* Header */}
//                                         <Modal.Header>

//                                             <Modal.Heading>
//                                                 Doctor Appointment Form
//                                             </Modal.Heading>

//                                             <p className="mt-1 text-sm text-gray-500">
//                                                 Fill out the form correctly to confirm your appointment.
//                                             </p>

//                                         </Modal.Header>

//                                         {/* Body */}
//                                         <Modal.Body className="p-6">

//                                             <Surface variant="default">

//                                                 <Card
//                                                     className="w-full p-2 shadow-sm"
//                                                     variant="default"
//                                                 >

//                                                     <Card.Content className="p-6">

//                                                         <Form
//                                                             className="flex flex-col gap-6"
//                                                             onSubmit={(e) => {
//                                                                 e.preventDefault();

//                                                                 const formData = new FormData(
//                                                                     e.currentTarget
//                                                                 );

//                                                                 const data = Object.fromEntries(
//                                                                     formData.entries()
//                                                                 );

//                                                                 console.log(data);
//                                                             }}
//                                                         >

//                                                             {/* Doctor Name */}
//                                                             <TextField
//                                                                 className="w-full flex flex-col gap-1.5"
//                                                                 name="doctorName"
//                                                             >

//                                                                 <Label className="text-sm font-medium text-gray-700">
//                                                                     Doctor Name
//                                                                 </Label>

//                                                                 <Input
//                                                                     value={name}
//                                                                     readOnly
//                                                                     className="bg-gray-100 cursor-not-allowed"
//                                                                 />

//                                                             </TextField>

//                                                             {/* Name & Phone */}
//                                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

//                                                                 <TextField
//                                                                     isRequired
//                                                                     className="w-full flex flex-col gap-1.5"
//                                                                     name="patientName"
//                                                                 >

//                                                                     <Label>
//                                                                         Patient Name
//                                                                     </Label>

//                                                                     <Input
//                                                                         placeholder="Enter full name"
//                                                                     />

//                                                                     <FieldError />

//                                                                 </TextField>

//                                                                 <TextField
//                                                                     isRequired
//                                                                     className="w-full flex flex-col gap-1.5"
//                                                                     name="phone"
//                                                                     type="tel"
//                                                                 >

//                                                                     <Label>
//                                                                         Phone Number
//                                                                     </Label>

//                                                                     <Input
//                                                                         placeholder="+8801XXXXXXXXX"
//                                                                     />

//                                                                     <FieldError />

//                                                                 </TextField>

//                                                             </div>

//                                                             {/* Date & Time */}
//                                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

//                                                                 <TextField
//                                                                     isRequired
//                                                                     className="w-full flex flex-col gap-1.5"
//                                                                     name="date"
//                                                                     type="date"
//                                                                 >

//                                                                     <Label>
//                                                                         Appointment Date
//                                                                     </Label>

//                                                                     <Input />

//                                                                     <FieldError />

//                                                                 </TextField>

//                                                                 <TextField
//                                                                     isRequired
//                                                                     className="w-full flex flex-col gap-1.5"
//                                                                     name="time"
//                                                                     type="time"
//                                                                 >

//                                                                     <Label>
//                                                                         Appointment Time
//                                                                     </Label>

//                                                                     <Input type="time" />

//                                                                     <FieldError />

//                                                                 </TextField>

//                                                             </div>

//                                                             {/* Age & Gender */}
//                                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full">

//                                                                 <TextField
//                                                                     isRequired
//                                                                     className="w-full flex flex-col gap-1.5"
//                                                                     name="age"
//                                                                     type="number"
//                                                                 >

//                                                                     <Label>
//                                                                         Age
//                                                                     </Label>

//                                                                     <Input
//                                                                         placeholder="e.g. 25"
//                                                                     />

//                                                                     <FieldError />

//                                                                 </TextField>

//                                                                 {/* Gender */}
//                                                                 <div className="flex flex-col gap-2">

//                                                                     <Label className="text-sm font-medium text-gray-700">
//                                                                         Gender
//                                                                     </Label>

//                                                                     <RadioGroup
//                                                                         orientation="horizontal"
//                                                                         name="gender"
//                                                                         defaultValue="male"
//                                                                     >

//                                                                         <Radio value="male">
//                                                                             Male
//                                                                         </Radio>

//                                                                         <Radio value="female">
//                                                                             Female
//                                                                         </Radio>

//                                                                     </RadioGroup>

//                                                                 </div>

//                                                             </div>

//                                                             {/* Submit Button */}
//                                                             <button
//                                                                 className="cursor-pointer rounded-full px-8 py-3 text-md font-semibold hover:to-[#012a4b] bg-linear-to-r from-[#012a4b] to-sky-500 text-white w-full flex justify-center items-center gap-2 transition-all duration-300"
//                                                                 type="submit"
//                                                             >
//                                                                 Confirm Appointment
//                                                             </button>

//                                                         </Form>

//                                                     </Card.Content>

//                                                 </Card>

//                                             </Surface>

//                                         </Modal.Body>

//                                     </Modal.Dialog>

//                                 </Modal.Container>

//                             </Modal.Backdrop>

//                         </Modal>

//                     </div>
