export const getDoctors = async () => {
  "use server";
  const res = await fetch("http://localhost:8000/appointments");
  const data = await res.json();
  return data;
};

export const getDoctorId = async (id) => {
  const res = await fetch(`http://localhost:8000/appointments/${id}`, {
    cache: "no-store",
  });
  return res.json();
};
