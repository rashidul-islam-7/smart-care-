import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export const postAppointmentData = async (formData) => {
  const res = await fetch("http://localhost:8000/appointments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  return data;
};

export const deleteAppointment = async (id) => {
  const res = await fetch(`http://localhost:8000/appointments/${id}`, {
    method: "DELETE",
  });
  const data = res.json();
  if (data) {
    toast("Successfully Delete Appointment.");
    redirect("/appointments");
  }
  return data;
};

export const editAppointment = async (updateData, id) => {
  const res = await fetch(`http://localhost:8000/appointments/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });

  const data = await res.json();

  return data;
};
