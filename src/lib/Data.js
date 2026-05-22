export const getDoctors = async () => {
  try {
    const res = await fetch("http://localhost:8000/doctors");
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

export const getDoctorId = async (id) => {
  const res = await fetch(`http://localhost:8000/doctors/${id}`, {
    cache: "no-store",
  });
  return res.json();
};

export const getAppointmentPatientData = async () => {
  try{
 const res = await fetch("http://localhost:8000/appointments");
  const data = await res.json();
  return Array.isArray(data) ? data : [];
  }
  catch(error){
    console.log("Error Fetching Appointment:", error)
    return[];
  }
 
};




// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// export const getDoctors = async () => {
//   try {
//     const res = await fetch(`${BASE_URL}/doctors`);

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

// export const getDoctorId = async (id) => {
//   try {
//     const res = await fetch(`${BASE_URL}/doctors/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch doctor");
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching doctor:", error);
//     return null;
//   }
// };

// export const getAppointmentPatientData = async () => {
//   try {
//     const res = await fetch(`${BASE_URL}/appointments`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch appointments");
//     }

//     const data = await res.json();

//     return Array.isArray(data) ? data : [];
//   } catch (error) {
//     console.error("Error fetching appointments:", error);
//     return [];
//   }
// };