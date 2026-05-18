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
            className={`group inline-block px-5 py-2 rounded-sm bg-linear-to-r from-[#0a81e3] to-sky-400 text-white font-semibold hover:shadow-xl transition-all duration-300 ${className}`}
        >
            <div className="group flex justify-center items-center gap-2 ">
                {children}
                <span className="group-hover:translate-x-2 duration-300 transition-all">{icon}</span>
            </div>
        </Link>
    );
};

export default Button;