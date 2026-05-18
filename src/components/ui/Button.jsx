import Link from "next/link";
import React from "react";

const Button = ({
    href = "#",
    className = "",
    children,
    icon = ""
}) => {
    return (
        <Link
            href={href}
            className={` inline-block px-5 py-1.5 rounded-sm bg-linear-to-r from-[#0a81e3] to-sky-400 text-white font-semibold hover:shadow-xl transition-all duration-300 ${className}`}
        >
            <div className="flex justify-center items-center gap-1">
                {icon}
                {children}
            </div>
        </Link>
    );
};

export default Button;