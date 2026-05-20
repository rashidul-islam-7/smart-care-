export const getDoctors = async () => {
  "use server";
  const res = await fetch("http://localhost:8000/appointments");
  const data = res.json();
  return data;
};
