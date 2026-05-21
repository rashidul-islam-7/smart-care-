// import Image from "next/image";
// import {
//   CalendarDays,
//   Clock3,
//   MapPin,
//   Phone,
//   Pencil,
//   Trash2,
//   Stethoscope,
//   ShieldCheck,
//   ChevronRight,
//   BadgeCheck,
// } from "lucide-react";
// import { FaUser } from "react-icons/fa6";
// import {
//   AlertDialog,
//   Button,
//   Input,
//   Label,
//   Modal,
//   Surface,
//   TextField,
// } from "@heroui/react";
// import { getAppointmentPatientData } from "@/lib/Data";

// const AppointmentBookingCard = async () => {
//   const appointmentData = await getAppointmentPatientData();

//   return (
//     <div>
//       {/* Booking Cards */}
//       {appointmentData.length > 0 ? (
//         <div className="space-y-5 max-w-4xl mx-auto">
//           {appointmentData.map((booking) => (
//             <div
//               key={booking._id}
//               className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_8px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-all duration-500"
//             >
//               <div className="px-5 py-6 md:p-7">
//                 {/* Top Content */}
//                 <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">
//                   <div className="flex flex-wrap justify-between items-start gap-2">
//                     {/* doctor info  */}
//                     <div className="flex justify-center items-center gap-4">
//                       {/* doctor img  */}
//                       <div className="relative h-24 w-24 rounded-2xl overflow-hidden ring-4 ring-slate-100 shadow-md">
//                         <Image
//                           src={booking?.doctor?.image}
//                           alt={booking?.doctor?.name}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                       {/* doctor info  */}
//                       <div>
//                         <div className="flex flex-wrap items-center gap-3 mb-3">
//                           <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold border border-blue-100">
//                             <Stethoscope size={13} />
//                             {booking.specialist}
//                           </span>

//                           <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold border border-emerald-100">
//                             <BadgeCheck size={13} />
//                             {booking.status}
//                           </span>
//                         </div>
//                         {/* doctor name */}
//                         <div>
//                           <h2 className="text-2xl font-bold text-slate-900">
//                             {booking?.doctor?.name}
//                           </h2>

//                           <p className="text-slate-500 text-sm mt-1">
//                             Specialist Consultant
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Date & Time & serial */}
//                     <div className="flex flex-wrap gap-2 md:gap-3 mt-5">
//                       {/* appointment Date  */}
//                       <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-2.5 md:px-3 py-2">
//                         <CalendarDays size={16} className="text-blue-600" />

//                         <div>
//                           <p className="text-[11px] uppercase text-slate-400 font-medium">
//                             Date
//                           </p>

//                           <p className="text-sm font-semibold text-slate-800">
//                             {booking.date}
//                           </p>
//                         </div>
//                       </div>
//                       {/* appointment Time  */}
//                       <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-2.5 md:px-3 py-2">
//                         <Clock3 size={16} className="text-emerald-600" />

//                         <div>
//                           <p className="text-[11px] uppercase text-slate-400 font-medium">
//                             Time
//                           </p>

//                           <p className="text-sm font-semibold text-slate-800">
//                             {booking.time}
//                           </p>
//                         </div>
//                       </div>

//                       {/* Serial no  */}
//                       <div className="flex items-center gap-2 rounded-xl bg-amber-50 border border-amber-100 px-2.5 md:px-3 py-2">
//                         <ShieldCheck size={16} className="text-amber-600" />

//                         <div>
//                           <p className="text-[11px] uppercase text-amber-500 font-medium">
//                             Serial
//                           </p>

//                           <p className="text-sm font-bold text-amber-700">
//                             {booking.serial || "N/A"}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Patient Info */}
//                   <div
//                     className="xl:w-[320px] rounded-2xl border border-slate-200
//                                      bg-slate-50/80 p-5"
//                   >
//                     <div className="flex items-center gap-2 mb-4">
//                       <FaUser
//                         size={30}
//                         className="text-slate-500 border rounded p-1"
//                       />

//                       <h3 className="font-semibold text-slate-800">
//                         Patient Information
//                       </h3>
//                     </div>

//                     <div className="space-y-1 text-sm">
//                       <div className="flex items-center justify-between">
//                         <span className="text-slate-400">Full Name</span>

//                         <span className="font-medium text-slate-800">
//                           {booking.patientName}
//                         </span>
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <span className="text-slate-400">Gender</span>

//                         <span className="font-medium text-slate-800">
//                           {booking.gender}
//                         </span>
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <span className="text-slate-400">Age</span>

//                         <span className="font-medium text-slate-800">
//                           {booking.age} yrs
//                         </span>
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <span className="text-slate-400">Phone</span>

//                         <span className="font-medium text-slate-800">
//                           {booking.phone}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Location */}
//                 <div className="mt-5 rounded-2xl border border-slate-200 bg-linear-to-r from-slate-50 to-white p-3 md:p-5">
//                   <div className="flex items-start gap-4">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shadow-sm animate-pulse">
//                       <MapPin size={20} />
//                     </div>

//                     <div className="flex-1">
//                       <div className="flex items-center justify-between flex-wrap gap-3">
//                         <div>
//                           <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
//                             Hospital Location
//                           </p>

//                           <h4 className="text-base font-semibold text-slate-700 ">
//                             {booking.location}
//                           </h4>
//                         </div>

//                         <button className="cursor-pointer inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition">
//                           View Directions
//                           <ChevronRight size={16} />
//                         </button>
//                       </div>

//                       <div className="flex flex-wrap gap-3 mt-2">
//                         <span className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600">
//                           Floor: {booking.floorNo}
//                         </span>

//                         <span className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600">
//                           Room: {booking.roomNo}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-5">
//                   <div className="hidden md:flex items-center gap-2 text-sm text-slate-500">
//                     <Phone size={15} />
//                     {booking.phone}
//                   </div>

//                   <div className="flex items-center gap-3">
//                     {/* edit info modal  */}
//                     <Modal>
//                       <Button className="h-11 px-5 rounded-xl cursor-pointer border border-slate-200 bg-white text-slate-700 text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 hover:shadow-sm transition-all active:scale-95">
//                         <Pencil size={16} />
//                         Edit Patient Info
//                       </Button>

//                       <Modal.Backdrop>
//                         <Modal.Container placement="auto">
//                           <Modal.Dialog className="sm:max-w-md">
//                             <Modal.CloseTrigger />
//                             <Modal.Header>
//                               <Modal.Icon className="bg-accent-soft text-accent-soft-foreground"></Modal.Icon>
//                               <Modal.Heading>Contact Us</Modal.Heading>
//                               <p className="mt-1.5 text-sm leading-5 text-muted">
//                                 Fill out the form below and we'll get back to
//                                 you. The modal adapts automatically when the
//                                 keyboard appears on mobile.
//                               </p>
//                             </Modal.Header>
//                             <Modal.Body className="p-6">
//                               <Surface variant="default">
//                                 <form className="flex flex-col gap-4">
//                                   <TextField
//                                     className="w-full"
//                                     name="name"
//                                     type="text"
//                                   >
//                                     <Label>Name</Label>
//                                     <Input placeholder="Enter your name" />
//                                   </TextField>
//                                   <TextField
//                                     className="w-full"
//                                     name="email"
//                                     type="email"
//                                   >
//                                     <Label>Email</Label>
//                                     <Input placeholder="Enter your email" />
//                                   </TextField>
//                                   <TextField
//                                     className="w-full"
//                                     name="phone"
//                                     type="tel"
//                                   >
//                                     <Label>Phone</Label>
//                                     <Input placeholder="Enter your phone number" />
//                                   </TextField>
//                                   <TextField className="w-full" name="company">
//                                     <Label>Company</Label>
//                                     <Input placeholder="Enter your company name" />
//                                   </TextField>
//                                   <TextField className="w-full" name="message">
//                                     <Label>Message</Label>
//                                     <Input placeholder="Enter your message" />
//                                   </TextField>
//                                 </form>
//                               </Surface>
//                             </Modal.Body>
//                             <Modal.Footer>
//                               <Button slot="close" variant="secondary">
//                                 Cancel
//                               </Button>
//                               <Button slot="close">Edit Save</Button>
//                             </Modal.Footer>
//                           </Modal.Dialog>
//                         </Modal.Container>
//                       </Modal.Backdrop>
//                     </Modal>

//                     {/* cancel Booking alert dialog  */}
//                     <AlertDialog>
//                       <Button className="h-11 px-5 rounded-xl cursor-pointer bg-red-50 text-red-600 text-sm font-semibold flex items-center gap-2 hover:bg-red-100 transition-all active:scale-95">
//                         <Trash2 size={16} />
//                         Cancel Booking
//                       </Button>
//                       <AlertDialog.Backdrop>
//                         <AlertDialog.Container>
//                           <AlertDialog.Dialog className="sm:max-w-[400px]">
//                             <AlertDialog.CloseTrigger />
//                             <AlertDialog.Header>
//                               <AlertDialog.Icon status="danger" />
//                               <AlertDialog.Heading>
//                                 Delete project permanently?
//                               </AlertDialog.Heading>
//                             </AlertDialog.Header>
//                             <AlertDialog.Body>
//                               <p>
//                                 This will permanently delete{" "}
//                                 <strong>My Awesome Project</strong> and all of
//                                 its data. This action cannot be undone.
//                               </p>
//                             </AlertDialog.Body>
//                             <AlertDialog.Footer>
//                               <Button slot="close" variant="tertiary">
//                                 Cancel
//                               </Button>
//                               <Button slot="close" variant="danger">
//                                 You Sure Cancel Booking?
//                               </Button>
//                             </AlertDialog.Footer>
//                           </AlertDialog.Dialog>
//                         </AlertDialog.Container>
//                       </AlertDialog.Backdrop>
//                     </AlertDialog>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-20">
//           <h2 className="text-2xl font-bold text-slate-700">
//             No Appointments Found
//           </h2>

//           <p className="text-slate-500 mt-2">
//             You don’t have any bookings yet.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AppointmentBookingCard;

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  Pencil,
  Trash2,
  Stethoscope,
  ShieldCheck,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";

import { FaUser } from "react-icons/fa6";

import {
  AlertDialog,
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

import { getAppointmentPatientData } from "@/lib/Data";

const AppointmentBookingCard = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        const data = await getAppointmentPatientData();
        setAppointmentData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointmentData();
  }, []);

  // loading state
  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-medium text-slate-500">
        Loading Appointments...
      </div>
    );
  }

  return (
    <div>
      {/* Booking Cards */}
      {appointmentData.length > 0 ? (
        <div className="space-y-5 max-w-4xl mx-auto">
          {appointmentData.map((booking) => (
            <div
              key={booking._id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_8px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-all duration-500"
            >
              <div className="px-5 py-6 md:p-7">
                {/* Top Content */}
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    {/* doctor info */}
                    <div className="flex justify-center items-center gap-4">
                      {/* doctor image */}
                      <div className="relative h-24 w-24 rounded-2xl overflow-hidden ring-4 ring-slate-100 shadow-md">
                        <Image
                          src={booking?.doctor?.image || "/default-doctor.png"}
                          alt={booking?.doctor?.name || "Doctor"}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* doctor details */}
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold border border-blue-100">
                            <Stethoscope size={13} />
                            {booking.specialist}
                          </span>

                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold border border-emerald-100">
                            <BadgeCheck size={13} />
                            {booking.status}
                          </span>
                        </div>

                        <div>
                          <h2 className="text-2xl font-bold text-slate-900">
                            {booking?.doctor?.name}
                          </h2>

                          <p className="text-slate-500 text-sm mt-1">
                            Specialist Consultant
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Date Time Serial */}
                    <div className="flex flex-wrap gap-2 md:gap-3 mt-5">
                      {/* date */}
                      <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-2.5 md:px-3 py-2">
                        <CalendarDays size={16} className="text-blue-600" />

                        <div>
                          <p className="text-[11px] uppercase text-slate-400 font-medium">
                            Date
                          </p>

                          <p className="text-sm font-semibold text-slate-800">
                            {booking.date}
                          </p>
                        </div>
                      </div>

                      {/* time */}
                      <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-2.5 md:px-3 py-2">
                        <Clock3 size={16} className="text-emerald-600" />

                        <div>
                          <p className="text-[11px] uppercase text-slate-400 font-medium">
                            Time
                          </p>

                          <p className="text-sm font-semibold text-slate-800">
                            {booking.time}
                          </p>
                        </div>
                      </div>

                      {/* serial */}
                      <div className="flex items-center gap-2 rounded-xl bg-amber-50 border border-amber-100 px-2.5 md:px-3 py-2">
                        <ShieldCheck size={16} className="text-amber-600" />

                        <div>
                          <p className="text-[11px] uppercase text-amber-500 font-medium">
                            Serial
                          </p>

                          <p className="text-sm font-bold text-amber-700">
                            {booking.serial || "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="xl:w-[320px] rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <FaUser
                        size={30}
                        className="text-slate-500 border rounded p-1"
                      />

                      <h3 className="font-semibold text-slate-800">
                        Patient Information
                      </h3>
                    </div>

                    <div className="space-y-1 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Full Name</span>

                        <span className="font-medium text-slate-800">
                          {booking.patientName}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Gender</span>

                        <span className="font-medium text-slate-800">
                          {booking.gender}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Age</span>

                        <span className="font-medium text-slate-800">
                          {booking.age} yrs
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Phone</span>

                        <span className="font-medium text-slate-800">
                          {booking.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-5 rounded-2xl border border-slate-200 bg-linear-to-r from-slate-50 to-white p-3 md:p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shadow-sm animate-pulse">
                      <MapPin size={20} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                            Hospital Location
                          </p>

                          <h4 className="text-base font-semibold text-slate-700">
                            {booking.location}
                          </h4>
                        </div>

                        <button className="cursor-pointer inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition">
                          View Directions
                          <ChevronRight size={16} />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600">
                          Floor: {booking.floorNo}
                        </span>

                        <span className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600">
                          Room: {booking.roomNo}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-5">
                  <div className="hidden md:flex items-center gap-2 text-sm text-slate-500">
                    <Phone size={15} />

                    {booking.phone}
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Edit Modal */}
                    <Modal>
                      <Button className="h-11 px-5 rounded-xl cursor-pointer border border-slate-200 bg-white text-slate-700 text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 hover:shadow-sm transition-all active:scale-95">
                        <Pencil size={16} />
                        Edit Patient Info
                      </Button>

                      <Modal.Backdrop>
                        <Modal.Container placement="auto">
                          <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />

                            <Modal.Header>
                              <Modal.Heading>
                                Edit Patient Information
                              </Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="p-6">
                              <Surface variant="default">
                                <form className="flex flex-col gap-4">
                                  <TextField
                                    className="w-full"
                                    name="name"
                                    type="text"
                                  >
                                    <Label>Name</Label>

                                    <Input defaultValue={booking.patientName} />
                                  </TextField>

                                  <TextField
                                    className="w-full"
                                    name="phone"
                                    type="tel"
                                  >
                                    <Label>Phone</Label>

                                    <Input defaultValue={booking.phone} />
                                  </TextField>
                                </form>
                              </Surface>
                            </Modal.Body>

                            <Modal.Footer>
                              <Button slot="close" variant="secondary">
                                Cancel
                              </Button>

                              <Button slot="close">Save Changes</Button>
                            </Modal.Footer>
                          </Modal.Dialog>
                        </Modal.Container>
                      </Modal.Backdrop>
                    </Modal>

                    {/* Cancel Booking */}
                    <AlertDialog>
                      <Button className="h-11 px-5 rounded-xl cursor-pointer bg-red-50 text-red-600 text-sm font-semibold flex items-center gap-2 hover:bg-red-100 transition-all active:scale-95">
                        <Trash2 size={16} />
                        Cancel Booking
                      </Button>

                      <AlertDialog.Backdrop>
                        <AlertDialog.Container>
                          <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />

                            <AlertDialog.Header>
                              <AlertDialog.Icon status="danger" />

                              <AlertDialog.Heading>
                                Cancel Appointment?
                              </AlertDialog.Heading>
                            </AlertDialog.Header>

                            <AlertDialog.Body>
                              <p>
                                Are you sure you want to cancel this
                                appointment?
                              </p>
                            </AlertDialog.Body>

                            <AlertDialog.Footer>
                              <Button slot="close" variant="tertiary">
                                No
                              </Button>

                              <Button slot="close" variant="danger">
                                Yes Cancel
                              </Button>
                            </AlertDialog.Footer>
                          </AlertDialog.Dialog>
                        </AlertDialog.Container>
                      </AlertDialog.Backdrop>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-slate-700">
            No Appointments Found
          </h2>

          <p className="text-slate-500 mt-2">
            You don’t have any bookings yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default AppointmentBookingCard;
