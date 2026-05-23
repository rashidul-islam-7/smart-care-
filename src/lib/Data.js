// export const getDoctors = async () => {
//   try {
//     const res = await fetch("http://localhost:8000/doctors");
//     if (!res.ok) {
//       throw new Error("Failed to fetch doctors data");
//     }
//     const data = await res.json();

//     return Array.isArray(data) ? data : [];
//   } catch (error) {
//     console.error("Error fetching doctors:", error);
//     return [];
//   }
// };

// export const getDoctorId = async (id, token) => {
//   const res = await fetch(`http://localhost:8000/doctors/${id}`,{
//     headers: {
//       authorization: `Bearer ${token}`
//     }
//   });
//   return res.json();
// };

// export const getAppointmentPatientData = async (userId) => {
//   try {
//     const res = await fetch(`http://localhost:8000/appointments/${userId}`);

//     if (!res.ok) {
//       throw new Error("Failed to fetch appointments");
//     }

//     const data = await res.json();

//     return Array.isArray(data) ? data : [];
//   } catch (error) {
//     console.log("Error Fetching Appointment:", error);

//     return [];
//   }
// };

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getDoctors = async () => {
  try {
    const res = await fetch(`${API_URL}/doctors`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch doctors data");
    }
    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return [];
  }
};

export const getDoctorId = async (id, token) => {
  try {
    const res = await fetch(`${API_URL}/doctors/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch doctor details");
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching doctor id ${id}:`, error);
    return null;
  }
};

export const getAppointmentPatientData = async (userId) => {
  try {
    const res = await fetch(`${API_URL}/appointments/${userId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch appointments");
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error Fetching Appointment:", error);
    return [];
  }
};
