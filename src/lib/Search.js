export const findDoctors = (doctorsData, searchDoc) => {
  if (!doctorsData) return doctorsData;

  const text = searchDoc.toLowerCase();

  return doctorsData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(text) ||
      doctor.specialist.toLowerCase().includes(text) ||
      doctor.description.toLowerCase().includes(text) ||
      doctor.hospital.toLowerCase().includes(text) ||
      doctor.location.toLowerCase().includes(text),
  );
};
