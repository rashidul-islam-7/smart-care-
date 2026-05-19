"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

import GoogleBtn from "@/components/ui/GoogleBtn";
import AuthImg from "@/components/ui/AuthImg";

const SignInPage = () => {
    const onSubmit = () => {
        e.preventDefault()
    }
    return (

        <section className="min-h-auto  bg-slate-100">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
                {/* left side */}
                <div className="flex items-center justify-center px-6 py-12">
                    <div className="max-w-md mx-auto ">
                        {/* Card Wrapper */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">

                            <div className="mb-8">
                                {/* Logo */}
                                <Logo />

                                {/* Heading */}
                                <h1 className="mt-3 text-3xl font-black text-gray-700">
                                    Welcome back
                                </h1>
                                <p className="text-gray-500 mt-2 text-sm">
                                    Sign in to continue your health dashboard
                                </p>
                            </div>

                            {/* form */}
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
                                    <Input className="w-full" placeholder="john@example.com" />
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
                                    <Input className="w-full" placeholder="Enter your password" />
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
                                    className="w-full h-12 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] transition"
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
                                <GoogleBtn />

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
                    <AuthImg />

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