import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleBtn = ({clink = ""}) => {
  return (
    <div>
      <button
        onClick={clink}
        type="button"
        className="cursor-pointer w-full h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 font-medium transition flex items-center justify-center gap-3"
      >
        <FcGoogle /> Continue with Google
      </button>
    </div>
  );
};

export default GoogleBtn;
