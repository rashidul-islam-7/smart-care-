export const metadata = {
  title: "Dashboard | SmartCare+",
};

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import DashboardClient from "@/components/DashboardClient";
import { getAppointmentPatientData } from "@/lib/Data";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });


  const appointmentList = await getAppointmentPatientData(session.user.id);

  return <DashboardClient user={session} appointmentList={appointmentList} />;
};

export default DashboardPage;
