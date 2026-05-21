// "use client";

// import React from "react";
// import {
//     Form,
//     TextField,
//     Label,
//     Input,
//     Card,
//     RadioGroup,
//     Radio,
//     FieldError
// } from "@heroui/react";
// import { postAppointmentData } from "@/lib/Action";

// const AppointmentForm = ({ doctorName, specialist, hospital, location }) => {

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.currentTarget);
//         const patientData = Object.fromEntries(formData.entries());

//         const appointmentData = {
//             ...patientData,
//             doctor: {
//                 name: doctorName,
//                 specialist,
//                 hospital,
//                 location,
//             },
//         };
//         await postAppointmentData(appointmentData)
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">

//             <Card className="w-full max-w-2xl p-2 shadow-sm">

//                 <Card.Header className="flex flex-col items-start px-6 pt-6 pb-2">

//                     <Card.Title className="text-2xl font-bold text-gray-800">
//                         Doctor Appointment Form
//                     </Card.Title>

//                     <Card.Description className="text-sm text-gray-500">
//                         Please fill out the form below with correct patient details.
//                     </Card.Description>

//                 </Card.Header>

//                 <Card.Content className="p-6">

//                     <Form onSubmit={handleSubmit} className="flex flex-col gap-6">

//                         {/* Doctor Name */}
//                         <TextField className="w-full flex flex-col gap-1.5">

//                             <Label>Doctor Name</Label>

//                             <Input value={doctorName} readOnly />

//                         </TextField>

//                         {/* Patient Name & Phone */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

//                             <TextField isRequired name="patientName">

//                                 <Label>Patient Name</Label>

//                                 <Input placeholder="Enter full name" />

//                                 <FieldError />

//                             </TextField>

//                             <TextField isRequired name="phone">

//                                 <Label>Phone Number</Label>

//                                 <Input placeholder="e.g. +123456789" />

//                                 <FieldError />

//                             </TextField>

//                         </div>

//                         {/* Date & Time */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

//                             <TextField isRequired name="date">

//                                 <Label>Date</Label>

//                                 <Input type="date" />

//                             </TextField>

//                             <TextField isRequired name="time">

//                                 <Label>Time</Label>

//                                 <Input type="time" />

//                             </TextField>

//                         </div>

//                         {/* Age & Gender */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                             <TextField isRequired name="age">

//                                 <Label>Age</Label>

//                                 <Input placeholder="e.g. 25" type="number" />

//                             </TextField>

//                             <div className="flex flex-col gap-2">

//                                 <Label>Gender</Label>

//                                 <RadioGroup name="gender" orientation="horizontal">

//                                     <Radio value="male">Male</Radio>
//                                     <Radio value="female">Female</Radio>

//                                 </RadioGroup>

//                             </div>

//                         </div>

//                         {/* Submit */}
//                         <button
//                             type="submit"
//                             className="cursor-pointer rounded-full px-8 py-3 font-semibold bg-gradient-to-r from-[#012a4b] to-sky-500 text-white"
//                         >
//                             Confirm Appointment
//                         </button>

//                     </Form>

//                 </Card.Content>

//             </Card>

//         </div>
//     );
// };

// export default AppointmentForm;