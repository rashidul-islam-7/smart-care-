export const metadata = {
  title: "Profile | smartCare+",
};

import { Avatar } from "@heroui/react";
import ProfileUpdateModal from "./ProfileUpdateModal";

const UserProfile = ({ userInfo }) => {
  const user = userInfo?.user;
  const { name, image, email } = user;
  console.log(userInfo);

  return (
    <div className="pb-20">
      <div className="border-l-4 border-l-blue-800 max-w-lg mx-auto shadow rounded-2xl p-5 bg-linear-to-tl from-blue-200/20  to-transparent">
        <div className="flex items-center gap-4">
          <Avatar className="size-20 rounded-full">
            <Avatar.Image alt={name || "User"} src={image || "/user-img.png"} />
            <Avatar.Fallback>{name ? name.charAt(0) : "U"}</Avatar.Fallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold uppercase">{name}</h3>
            <p>{email}</p>
          </div>
        </div>
        {/* buttons */}
        <div className="text-right">
          <ProfileUpdateModal userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
