"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

import GoogleBtn from "@/components/ui/GoogleBtn";
import AuthImg from "@/components/ui/AuthImg";

const SignUpPage = () => {
    const onSubmit = () => {
        e.preventDefault()
    }
    return (

        <section className="min-h-auto  bg-slate-100">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
                {/* left side */}
                <div className="flex items-center justify-center px-6 py-12">
                    <div className="max-w-md mx-auto">
                        {/* Card Wrapper */}
                        <div className="bg-white rounded-2xl shadow-xl p-8  border border-slate-100">

                            <div className="mb-8">
                                {/* logo */}
                                <Logo />
                                {/* header */}
                                <h1 className="mt-3 text-3xl font-black text-gray-700">
                                    Join SmartCare+
                                </h1>
                                <p className="text-gray-500 text-sm mt-2">
                                    Start managing your healthcare in one place
                                </p>
                            </div>

                            {/* form */}
                            <form className="flex w-96 flex-col gap-4">
                                {/* name*/}
                                <TextField
                                    isRequired
                                    name="name"
                                    type="text"
                                >
                                    <Label>Username</Label>
                                    <Input className="w-full" aria-label="Name" placeholder="Enter your username" />
                                </TextField>

                                {/* email  */}
                                <TextField
                                    isRequired
                                    name="email"
                                    type="email"
                                    validate={(value) => {
                                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                            return "Please enter a valid email address";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label>Email</Label>
                                    <Input className="w-full" placeholder="john@example.com" />
                                    <FieldError />
                                </TextField>

                                {/* password  */}
                                <TextField
                                    isRequired
                                    minLength={8}
                                    name="password"
                                    type="password"
                                    validate={(value) => {
                                        if (value.length < 8) {
                                            return "Password must be at least 8 characters";
                                        }
                                        if (!/[A-Z]/.test(value)) {
                                            return "Password must contain at least one uppercase letter";
                                        }
                                        if (!/[0-9]/.test(value)) {
                                            return "Password must contain at least one number";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label>Password</Label>
                                    <Input className="w-full" placeholder="Enter your password" />
                                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                    <FieldError />
                                </TextField>

                                {/*  terms */}
                                <label className="flex items-start gap-2 text-sm text-gray-600">
                                    I agree to the Terms & Privacy Policy
                                </label>

                                {/* btn */}
                                <button
                                    type="submit"
                                    className="w-full h-12 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] transition"
                                >
                                    Create Account
                                </button>

                                {/* divider */}
                                <div className="flex items-center gap-3">
                                    <div className="h-px bg-slate-200 flex-1"></div>
                                    <span className="text-xs text-gray-400">OR</span>
                                    <div className="h-px bg-slate-200 flex-1"></div>
                                </div>
                                {/* Google */}
                                <GoogleBtn />

                                {/* Footer */}
                                <p className="text-center text-sm text-gray-500">
                                    Already have an account?{" "}
                                    <Link href="/login" className="text-blue-600 font-semibold">
                                        Login
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* right side img */}
                <div className="relative hidden lg:block">
                    <AuthImg />

                    {/* Text */}
                    <div className="absolute bottom-0 p-14 text-white max-w-lg">
                        <h2 className="text-4xl font-black leading-tight">
                            Start your health journey today
                        </h2>
                        <p className="mt-4 text-white/80">
                            Book doctors, manage prescriptions, and track your health—all in one smart platform.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpPage;