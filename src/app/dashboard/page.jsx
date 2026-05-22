import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import DashboardClient from "@/components/DashboardClient";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  return <DashboardClient user={user} />;
};

export default DashboardPage;
