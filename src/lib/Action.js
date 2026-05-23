// import { redirect } from "next/navigation";
// import { toast } from "react-toastify";


// export const postAppointmentData = async (formData, tokenData) => {
//   const res = await fetch("http://localhost:8000/appointments", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//        authorization: `Bearer ${tokenData?.token}`
//     },
//     body: JSON.stringify(formData),
//   });

//   const data = await res.json();
//   return data;
// };

// export const deleteAppointment = async (id, tokenData) => {
//   const res = await fetch(`http://localhost:8000/appointments/${id}`, {
//     method: "DELETE",
//     headers: {
//       authorization: `Bearer ${tokenData?.token}`
//     }
//   });
//   const data = await res.json();
// toast.error("Delete Appointment!");
//   return data;
// };

// export const editAppointment = async (updateData, id, tokenData) => {
//   const res = await fetch(`http://localhost:8000/appointments/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${tokenData?.token}`
//     },
//     body: JSON.stringify(updateData),
//   });

//   const data = await res.json();

//   return data;
// };




const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";


const getHeaders = (token, hasBody = true) => {
  const headers = {};
  if (hasBody) {
    headers["Content-Type"] = "application/json";
  }
  if (token) {
    headers["authorization"] = `Bearer ${token}`;
  }
  return headers;
};


export const postAppointmentData = async (formData, tokenData) => {
  try {
    const res = await fetch(`${API_URL}/appointments`, {
      method: "POST",
      headers: getHeaders(tokenData?.token),
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed to post appointment data");
    return await res.json();
  } catch (error) {
    console.error("Error posting appointment:", error);
    return { success: false, error: error.message };
  }
};

export const deleteAppointment = async (id, tokenData) => {
  try {
    const res = await fetch(`${API_URL}/appointments/${id}`, {
      method: "DELETE",
      headers: getHeaders(tokenData?.token, false),
    });

    if (!res.ok) throw new Error("Failed to delete appointment");
    
    return await res.json(); 
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return { success: false, error: error.message };
  }
};

export const editAppointment = async (updateData, id, tokenData) => {
  try {
    const res = await fetch(`${API_URL}/appointments/${id}`, {
      method: "PATCH",
      headers: getHeaders(tokenData?.token),
      body: JSON.stringify(updateData),
    });

    if (!res.ok) throw new Error("Failed to edit appointment");
    return await res.json();
  } catch (error) {
    console.error("Error editing appointment:", error);
    return { success: false, error: error.message };
  }
};