import React from "react";

import user from "@/assets/Doctors/dr_tanvir.jpg";
import Image from "next/image";
import { useSession } from "@/lib/auth-client";

const UserProfile = () => {
  const { data, isPending } = useSession();
  const user =data?.user;

  return (
    <div className="pb-20">
      <div className="border-l-4 border-l-blue-800 max-w-lg mx-auto shadow rounded-2xl p-5 bg-linear-to-tl from-blue-200/20  to-transparent">
        <div className="flex items-center gap-3 ">
          <div className="h-24 w-24 flex justify-center items-center border-2 border-gray-400 rounded-full drop-shadow ">
            <img src={user?.image || "/user-img.png"} alt={user?.name} fill className="rounded-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold uppercase">{user.name }</h3>
            <p>{user?.email}</p>
          </div>
        </div>
        {/* buttons  */}
        <div className="text-right">
          <button
            className="cursor-pointer py-1 px-3 rounded-xl bg-white 
          border border-gray-300 hover:border-blue-400 hover:text-blue-600 duration-300 transition-all text-gray-500"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
