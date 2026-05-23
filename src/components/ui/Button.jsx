import Link from "next/link";
import React from "react";

const Button = ({ className = "", children, icon = "" }) => {
  return (
    <div
      className={`group inline-block px-8 py-3 text-md font-semibold transition-all duration-300 rounded-sm bg-linear-to-r from-blue-600 to-cyan-500 text-white  ${className}`}
    >
      <div className="group flex justify-center items-center gap-2 ">
        {children}
        <span className="group-hover:translate-x-2 duration-300 transition-all">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default Button;
