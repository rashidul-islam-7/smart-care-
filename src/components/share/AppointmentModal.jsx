"use client";

import React, { useState } from "react";

import {
  Modal,
  Form,
  TextField,
  Input,
  Label,
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
import { authClient } from "@/lib/auth-client";

const AppointmentModal = ({ doctorDetails }) => {
  const [formErrors, setFormErrors] = useState({});
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  // session
  const { data: session, isPending: sessionLoading } = authClient.useSession();

  const { name, specialist, fee, image, hospital, location, rating } =
    doctorDetails;

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const patientData = Object.fromEntries(formData.entries());

    const { patientName, phone, date, age } = patientData;
    let errors = {};

    // name validation
    if (!patientName || patientName.trim().length === 0) {
      errors.patientName = "Name cannot be empty";
    }

    // phone validation
    const phoneRegex = /^[0-9]{11}$/;

    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Phone must be exactly 11 digits";
    }

    // date validation
    if (!date) {
      errors.date = "Appointment date is required";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (new Date(date) < today) {
        errors.date = "Past date not allowed";
      }
    }

    // age validation
    if (!age) {
      errors.age = "Age is required";
    } else if (Number(age) > 120 || Number(age) <= 0) {
      errors.age = "Age must be between 1 and 120";
    }

    // stop if errors
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsPending(true);

    try {
      // final appointment data
      const appointmentData = {
        ...patientData,
        specialist,
        hospital,
        location,
        fee,
        rating,
        doctor: {
          name,
          image,
        },
        user: {
          userId: session.user?.id,
          name: session.user?.name,
          email: session.user?.email,
          image: session.user?.image,
        },
      };

      const { data: tokenData } = await authClient.token();
      
      const result = await postAppointmentData(appointmentData, tokenData);

      if (result.insertedId) {
        toast.success("Your Appointment is successful!");
        e.target.reset();
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      console.log(error);

      toast.error("Failed to book appointment");
    } finally {
      setIsPending(false);
    }
  };

  // loading screen while checking session
  if (sessionLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <TiArrowSync className="animate-spin text-4xl text-sky-500" />
      </div>
    );
  }

  return (
    <Modal>
      {/* open button */}
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
              <Card
                className="w-full max-w-2xl p-2 shadow-sm"
                variant="default"
              >
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
                    {/* doctor name */}
                    <TextField
                      className="w-full flex flex-col gap-1.5"
                      name="doctorName"
                    >
                      <Label className="text-sm font-medium text-gray-700">
                        Doctor Name
                      </Label>

                      <Input
                        value={name}
                        readOnly
                        className="bg-gray-100 cursor-not-allowed"
                      />
                    </TextField>

                    {/* patient name + phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      <TextField
                        isRequired
                        className="w-full flex flex-col gap-1.5"
                        name="patientName"
                      >
                        <Label className="text-sm font-medium text-gray-700">
                          Patient Name
                        </Label>

                        <Input
                          name="patientName"
                          placeholder="Enter full name"
                        />

                        {formErrors.patientName && (
                          <span className="text-xs text-danger">
                            {formErrors.patientName}
                          </span>
                        )}
                      </TextField>

                      <TextField
                        isRequired
                        className="w-full flex flex-col gap-1.5"
                        name="phone"
                        type="tel"
                      >
                        <Label className="text-sm font-medium text-gray-700">
                          Phone Number
                        </Label>

                        <Input name="phone" placeholder="e.g. 01834452312" />

                        {formErrors.phone && (
                          <span className="text-xs text-danger">
                            {formErrors.phone}
                          </span>
                        )}
                      </TextField>
                    </div>

                    {/* date + time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      <TextField
                        isRequired
                        className="w-full flex flex-col gap-1.5"
                        name="date"
                        type="date"
                      >
                        <Label className="text-sm font-medium text-gray-700">
                          Date
                        </Label>

                        <Input name="date" type="date" />

                        {formErrors.date && (
                          <span className="text-xs text-danger">
                            {formErrors.date}
                          </span>
                        )}
                      </TextField>

                      <TextField
                        isRequired
                        className="w-full flex flex-col gap-1.5"
                        name="time"
                        type="time"
                      >
                        <Label className="text-sm font-medium text-gray-700">
                          Time
                        </Label>

                        <Input name="time" type="time" />
                      </TextField>
                    </div>

                    {/* age + gender */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full">
                      <TextField
                        isRequired
                        className="w-full flex flex-col gap-1.5"
                        name="age"
                        type="number"
                      >
                        <Label className="text-sm font-medium text-gray-700">
                          Age
                        </Label>

                        <Input name="age" placeholder="e.g. 25" />

                        {formErrors.age && (
                          <span className="text-xs text-danger">
                            {formErrors.age}
                          </span>
                        )}
                      </TextField>

                      <div className="flex flex-col gap-1.5">
                        <RadioGroup
                          orientation="horizontal"
                          name="gender"
                          defaultValue="male"
                        >
                          <Label className="text-sm font-medium text-gray-700">
                            Gender
                          </Label>

                          <Radio value="male">
                            <Radio.Control>
                              <Radio.Indicator />
                            </Radio.Control>

                            <Radio.Content>
                              <Label>Male</Label>
                            </Radio.Content>
                          </Radio>

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

                    {/* submit button */}
                    <div>
                      <Button
                        className="rounded-full px-8 py-6 text-md font-semibold bg-linear-to-r from-[#012a4b] to-sky-500 text-white w-full flex justify-center items-center gap-2 transition-all duration-300"
                        variant="primary"
                        type="submit"
                        isPending={isPending}
                        disabled={!session}
                      >
                        {isPending ? (
                          <>
                            <TiArrowSync className="animate-spin text-xl" />
                            Booking...
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
