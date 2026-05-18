"use client"

import React from "react";
import Link from "next/link";
import { Menu, Stethoscope } from "lucide-react";
import Logo from "../ui/Logo";
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()

    const navLinks = (
        <ul className="menu menu-horizontal gap-2 px-1">
            <li>
                <Link
                    href="/"
                    className={`bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent text-gray-700 hover:text-green-600 rounded-none px-2 ${pathname === "/" && "text-green-500"}`}
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    href="/appointments"
                    className={`bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent text-gray-700 hover:text-green-600 rounded-none px-2 ${pathname === "/appointments" && "text-green-500"}`}
                >
                    Appointments
                </Link>
            </li>

            <li>
                <Link
                    href="/dashboard"
                    className={`bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent text-gray-700 hover:text-green-600 rounded-none px-2 ${pathname === "/dashboard" && "text-green-500"}`}
                >
                    Dashboard
                </Link>
            </li>

        </ul>
    );

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md
         bg-white/80 border-b border-gray-100">
            <div className="navbar max-w-7xl mx-auto px-4 md:px-10 py-2">

                {/* Left Side */}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost rounded-full"
                        >
                            <Menu className="w-6 h-6" />
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl
                             bg-white rounded-2xl w-56 border border-gray-100 space-y-2"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Logo />
                    </div>
                </div>

                {/* Center Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 text-[15px] font-medium text-gray-700">
                        {navLinks}
                    </ul>
                </div>

                {/* Right Side */}
                <div className="navbar-end">
                    <div className="flex items-center gap-3">

                        {/* Login */}
                        <Link
                            href="/login"
                            className="px-5 py-1 rounded-sm border border-green-500 text-green-700 font-medium hover:bg-green-50  hover:shadow-lg transition-all duration-300"
                        >
                            Log In
                        </Link>

                        {/* Signup */}
                        <Link
                            href="/signup"
                            className="hidden md:flex px-5 py-1 rounded-sm bg-linear-to-r from-[#0a81e3] to-sky-400 text-white font-semibold  hover:shadow-lg transition-all duration-300"
                        >
                            Sign Up
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;