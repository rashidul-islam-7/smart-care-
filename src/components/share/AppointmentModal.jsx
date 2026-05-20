"use client";

import React, { useState } from "react";
import {
  Modal,
  Form,
  TextField,
  Input,
  Label,
  FieldError,
  Radio,
  RadioGroup,
  Card,
  Button,
} from "@heroui/react";

import { FaArrowRight } from "react-icons/fa6";
import { postAppointmentData } from "@/lib/Action";
import { TiArrowSync } from "react-icons/ti";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AppointmentModal = ({ doctorName, specialist, hospital, location }) => {
  // 2. Added state variables for error tracking and loading state
  const [formErrors, setFormErrors] = useState({});
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const patientData = Object.fromEntries(formData.entries());

    const { patientName, phone, date, age } = patientData;

    let errors = {};

    // NAME: empty + space check
    if (!patientName || patientName.trim().length === 0) {
      errors.patientName = "Name cannot be empty";
    }

    // PHONE: exactly 11 digits
    const phoneRegex = /^[0-9]{11}$/;
    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Phone must be exactly 11 digits";
    }

    // DATE: no past dates allowed
    if (!date) {
      errors.date = "Appointment date is required";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (new Date(date) < today) {
        errors.date = "Past date not allowed";
      }
    }

    // AGE: maximum 120 and valid number
    if (!age) {
      errors.age = "Age is required";
    } else if (Number(age) > 120 || Number(age) <= 0) {
      errors.age = "Age must be between 1 and 120";
    }

    // Stop execution if there are errors
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsPending(true);

    const appointmentData = {
      ...patientData,
      doctor: {
        name: doctorName,
        specialist,
        hospital,
        location,
      },
    };

    await postAppointmentData(appointmentData);
    e.target.reset();
    toast.success("Your Appointment was successful!");
    router.push("/dashboard");
    router.refresh();
  };

  return (
    <Modal>
      {/* OPEN BUTTON */}
      <Modal.Trigger>
        <button className="cursor-pointer rounded-full px-8 py-3 text-white bg-linear-to-r from-[#012a4b] to-sky-500 w-full flex justify-center items-center gap-2">
          Book Appointment <FaArrowRight />
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Doctor Appointment</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <Card className="w-full max-w-2xl p-2 shadow-sm" variant="default">
                <Card.Header className="flex flex-col items-start px-6 pt-6 pb-2">
                  <Card.Title className="text-2xl font-bold text-gray-800">
                    Doctor Appointment Form
                  </Card.Title>
                  <Card.Description className="text-sm text-gray-500">
                    Please fill out the form below with correct patient details.
                  </Card.Description>
                </Card.Header>

                <Card.Content className="p-6">
                  <Form onSubmit={handleSubmit} className="flex flex-col gap-6">

                    {/*  doctorName */}
                    <TextField className="w-full flex flex-col gap-1.5" name="doctorName">
                      <Label className="text-sm font-medium text-gray-700">Doctor Name</Label>
                      <Input value={doctorName} readOnly className="bg-gray-100 cursor-not-allowed" />
                    </TextField>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      <TextField isRequired className="w-full flex flex-col gap-1.5" name="patientName">
                        <Label className="text-sm font-medium text-gray-700">Patient Name</Label>
                        <Input placeholder="Enter full name" />
                        {/* Custom error display */}
                        {formErrors.patientName && (
                          <span className="text-xs text-danger">{formErrors.patientName}</span>
                        )}
                      </TextField>

                      <TextField isRequired className="w-full flex flex-col gap-1.5" name="phone" type="tel">
                        <Label className="text-sm font-medium text-gray-700">Phone Number</Label>
                        <Input placeholder="e.g. 01834452312" />
                        {/* error */}
                        {formErrors.phone && (
                          <span className="text-xs text-danger">{formErrors.phone}</span>
                        )}
                      </TextField>
                    </div>

                    {/*  Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      <TextField isRequired className="w-full flex flex-col gap-1.5" name="date" type="date">
                        <Label className="text-sm font-medium text-gray-700">Date</Label>
                        <Input />
                        {formErrors.date && (
                          <span className="text-xs text-danger">{formErrors.date}</span>
                        )}
                      </TextField>

                      <TextField isRequired className="w-full flex flex-col gap-1.5" name="time" type="time">
                        <Label className="text-sm font-medium text-gray-700">Time</Label>
                        <Input type="time" />
                      </TextField>
                    </div>

                    {/*  Age & Gender */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full">
                      <TextField isRequired className="w-full flex flex-col gap-1.5" name="age" type="number">
                        <Label className="text-sm font-medium text-gray-700">Age</Label>
                        <Input placeholder="e.g. 25" />
                        {formErrors.age && (
                          <span className="text-xs text-danger">{formErrors.age}</span>
                        )}
                      </TextField>

                      <div className="flex flex-col gap-1.5">
                        <RadioGroup orientation="horizontal" name="gender" defaultValue="male">
                          <Label className="text-sm font-medium text-gray-700">Gender</Label>

                          {/* Male Option */}
                          <Radio value="male">
                            <Radio.Control>
                              <Radio.Indicator />
                            </Radio.Control>
                            <Radio.Content>
                              <Label>Male</Label>
                            </Radio.Content>
                          </Radio>

                          {/* Female Option */}
                          <Radio value="female">
                            <Radio.Control>
                              <Radio.Indicator />
                            </Radio.Control>
                            <Radio.Content>
                              <Label>Female</Label>
                            </Radio.Content>
                          </Radio>
                        </RadioGroup>
                      </div>
                    </div>

                    {/* Submit Button  */}
                    <div>
                      <Button
                        className="rounded-full px-8 py-6 text-md font-semibold bg-gradient-to-r from-[#012a4b] to-sky-500 text-white w-full flex justify-center items-center gap-2 transition-all duration-300"
                        variant="primary"
                        type="submit"
                        isPending={isPending}
                      >
                        {isPending ? (
                          <>
                            <TiArrowSync className="animate-spin text-xl" /> Booking...
                          </>
                        ) : (
                          "Confirm Appointment"
                        )}
                      </Button>
                    </div>
                  </Form>
                </Card.Content>
              </Card>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AppointmentModal;
