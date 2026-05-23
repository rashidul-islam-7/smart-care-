"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "../ui/Logo";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { Router } from "next/router";
import { Avatar } from "@heroui/react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { data, isPending } = useSession();
  const user = data?.user;

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  const navLinks = (
    <ul className="menu menu-horizontal gap-2 px-1">
      <li>
        <Link
          href="/"
          className={`text-base bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent text-gray-700 hover:text-green-600 rounded-none px-2 ${pathname === "/" && "text-green-500"}`}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/appointments"
          className={`text-base  bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent text-gray-700 hover:text-green-600 rounded-none px-2 ${pathname === "/appointments" && "text-green-500"}`}
        >
          Appointments
        </Link>
      </li>

      <li>
        <Link
          href="/dashboard"
          className={`text-base bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent text-gray-700 hover:text-green-600 rounded-none px-2 ${pathname === "/dashboard" && "text-green-500"}`}
        >
          Dashboard
        </Link>
      </li>
    </ul>
  );

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md
         bg-white/80 border-b border-gray-100"
    >
      <div className="navbar max-w-7xl mx-auto px-2 md:px-20 py-1">
        {/* Left Side */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden -ml-3">
            <label tabIndex={0} className="btn btn-ghost rounded-full">
              <Menu className="w-6 h-6 mr-2" />
            </label>

            <nav
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl
                             bg-white rounded-2xl w-56 border border-gray-100 space-y-2"
            >
              {navLinks}
            </nav>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo />
          </div>
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex">
          <nav className="menu menu-horizontal gap-3 text-[15px] font-medium text-gray-700">
            {navLinks}
          </nav>
        </div>

        {/* Right Side */}
        <div className="navbar-end">
          {isPending ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : user ? (
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <Link
                href={"/dashboard"}
                className="flex justify-center items-center gap-2 "
              >
                <p className=" hidden md:inline-block uppercase text-sm">{user.name}</p>
                <div className="border border-green-300 rounded-full">
                  <Avatar>
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user.name || user}
                      src={user.image}
                    />
                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </div>
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="text-[16px] cursor-pointer hover:text-blue-500  border py-1 px-2 rounded-sm border-blue-600 "
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-end">
              <div className="flex items-center gap-3">
                {/* Login */}
                <Link
                  href="/login"
                  className="px-5 py-1 rounded-sm border border-green-500 text-green-700 font-medium hover:bg-green-50 text-base hover:shadow-lg transition-all duration-300"
                >
                  Log In
                </Link>

                {/* Signup */}
                <Link
                  href="/signup"
                  className="hidden md:flex px-5 py-1 rounded-sm bg-linear-to-r from-[#032744] to-sky-400 text-white font-semibold text-base  hover:shadow-lg transition-all duration-300"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
