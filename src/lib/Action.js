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
