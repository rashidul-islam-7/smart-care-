"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

import careImg from "@/assets/auth/loginPageImg.jpg"

const SignInPage = () => {
    const onSubmit = () => {
        e.preventDefault()
    }
    return (

        <section className="min-h-screen  bg-slate-100">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
                {/* left side */}
                <div className="flex items-center justify-center px-6 py-12">
                    <div className="w-full max-w-md">
                        {/* Card Wrapper */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-slate-100">

                            <div className="mb-8">
                                {/* Logo */}
                                <Logo />

                                {/* Heading */}
                                <h1 className="text-3xl font-black text-gray-900">
                                    Welcome back
                                </h1>
                                <p className="text-gray-500 mt-2 text-sm">
                                    Sign in to continue your health dashboard
                                </p>
                            </div>

                            {/* FORM */}
                            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
                                    <Input placeholder="john@example.com" />
                                    <FieldError />
                                </TextField>
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
                                    <Input placeholder="Enter your password" />
                                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                    <FieldError />
                                </TextField>
                                {/* Remember */}
                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center gap-2 text-gray-600">
                                        <input type="checkbox" className="accent-blue-600" />
                                        Remember me
                                    </label>
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] transition"
                                >
                                    Sign In
                                </button>

                                {/* Divider */}
                                <div className="flex items-center gap-3">
                                    <div className="h-px bg-slate-200 flex-1"></div>
                                    <span className="text-xs text-gray-400">OR</span>
                                    <div className="h-px bg-slate-200 flex-1"></div>
                                </div>

                                {/* Google */}
                                <button
                                    type="button"
                                    className="cursor-pointer w-full h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 font-medium transition flex items-center justify-center gap-3"
                                >
                                    {/* Google Icon */}
                                    <svg width="18" height="18" viewBox="0 0 48 48">
                                        <path
                                            fill="#EA4335"
                                            d="M24 9.5c3.54 0 6.72 1.22 9.21 3.61l6.85-6.85C35.9 2.38 30.46 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.2C12.43 13.09 17.74 9.5 24 9.5z"
                                        />
                                        <path
                                            fill="#4285F4"
                                            d="M46.98 24.55c0-1.57-.14-3.09-.4-4.55H24v9.02h12.94c-.56 2.99-2.24 5.52-4.77 7.22l7.73 6c4.51-4.18 7.08-10.36 7.08-17.69z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M10.54 28.42a14.5 14.5 0 0 1 0-9.24l-7.98-6.2A23.9 23.9 0 0 0 0 24c0 3.77.9 7.34 2.56 10.22l7.98-5.8z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M24 48c6.48 0 11.93-2.13 15.91-5.81l-7.73-6c-2.16 1.45-4.92 2.31-8.18 2.31-6.26 0-11.57-3.59-13.46-8.92l-7.98 5.8C6.51 42.62 14.62 48 24 48z"
                                        />
                                    </svg>

                                    Continue with Google
                                </button>

                                {/* Footer */}
                                <p className="text-center text-sm text-gray-500">
                                    Don’t have an account?{" "}
                                    <Link href="/signup" className="text-blue-600 font-semibold">
                                        Create account
                                    </Link>
                                </p>
                            </Form>
                        </div>
                    </div>
                </div>

                {/* right side img */}
                <div className="relative hidden lg:block">
                    <Image
                        src={careImg}
                        alt="Healthcare"
                        fill
                        className="object-cover"
                    />

                    {/* Soft overlay (better UX than dark heavy overlay) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-cyan-800/30 to-teal-600/20" />

                    {/* Text */}
                    <div className="absolute bottom-0 p-14 text-white max-w-lg">
                        <h2 className="text-4xl font-black leading-tight">
                            Healthcare made simple
                        </h2>
                        <p className="mt-4 text-white/80">
                            Manage appointments, prescriptions and reports in one secure platform.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignInPage;