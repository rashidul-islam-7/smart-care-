/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from "react";
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
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { TiArrowSync } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { editAppointment } from "@/lib/Action";

const AppointmentEditModal = ({ booking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const [formDataState, setFormDataState] = useState({
    patientName: "",
    phone: "",
    date: "",
    time: "",
    age: "",
    gender: "male",
  });

  useEffect(() => {
    if (booking) {
      setFormDataState({
        patientName: booking.patientName || "",
        phone: booking.phone || "",
        date: booking.date || "",
        time: booking.time || "",
        age: booking.age || "",
        gender: booking.gender || "male",
      });
    }
  }, [booking]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { patientName, phone, date, age } = formDataState;
    let errors = {};

    // validation
    if (!patientName || patientName.trim().length === 0) {
      errors.patientName = "Name cannot be empty";
    }

    const phoneRegex = /^[0-9]{11}$/;
    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Phone must be exactly 11 digits";
    }

    if (!date) {
      errors.date = "Appointment date is required";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (new Date(date) < today) {
        errors.date = "Past date not allowed";
      }
    }

    if (!age) {
      errors.age = "Age is required";
    } else if (Number(age) > 120 || Number(age) <= 0) {
      errors.age = "Age must be between 1 and 120";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsPending(true);

    try {
      const result = await editAppointment(formDataState, booking._id);

      if (result.modifiedCount > 0) {
        toast.success("Appointment Updated Successfully!");
        setIsOpen(false);

        router.refresh();
      } else {
        toast.error("No changes made");
        setIsOpen(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update appointment");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Modal.Trigger>
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer rounded-xl px-8 py-3 text-gray-700 bg-gray-100 hover:bg-gray-300 duration-300 transition-all flex justify-center items-center gap-2"
        >
          <FaEdit />
          Edit Info
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger onClick={() => setIsOpen(false)} />

            <Modal.Header>
              <Modal.Heading>Edit Appointment</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <Card
                className="w-full max-w-2xl p-2 shadow-sm"
                variant="default"
              >
                <Card.Header className="flex flex-col items-start px-6 pt-6 pb-2">
                  <Card.Title className="text-2xl font-bold text-gray-800">
                    Doctor Appointment Edit Form
                  </Card.Title>
                  <Card.Description className="text-sm text-gray-500">
                    Update your appointment information.
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
                        value={booking?.doctor?.name || ""}
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
                          value={formDataState.patientName}
                          onChange={handleChange}
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
                        <Input
                          name="phone"
                          value={formDataState.phone}
                          onChange={handleChange}
                        />
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
                        <Input
                          name="date"
                          type="date"
                          value={formDataState.date}
                          onChange={handleChange}
                        />
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
                        <Input
                          name="time"
                          type="time"
                          value={formDataState.time}
                          onChange={handleChange}
                        />
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
                        <Input
                          name="age"
                          type="number"
                          value={formDataState.age}
                          onChange={handleChange}
                        />
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
                          value={formDataState.gender}
                          onChange={(e) =>
                            setFormDataState((prev) => ({
                              ...prev,
                              gender: e.target.value,
                            }))
                          }
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
                    <div className="w-full">
                      <Button
                        className="rounded-full px-8 py-6 text-md font-semibold bg-linear-to-r from-[#012a4b] to-sky-500 text-white w-full flex justify-center items-center gap-2 transition-all duration-300"
                        variant="primary"
                        type="submit"
                        isPending={isPending}
                      >
                        {isPending ? (
                          <>
                            <TiArrowSync className="animate-spin text-xl" />
                            Updating...
                          </>
                        ) : (
                          "Save Changes"
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

export default AppointmentEditModal;
