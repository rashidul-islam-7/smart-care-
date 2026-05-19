
"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import Logo from "../ui/Logo";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#070f1e] text-white border-t border-slate-800/50">

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-sky-500/[0.04] blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/[0.04] blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12">

                    {/* Column 1: Brand Profile (Spans 5 cols on large screens) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center">
                            {/* Sophisticated Logo Wrapper */}
                            <div className="p-2.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl inline-block shadow-inner">
                                <Logo />
                            </div>
                        </div>

                        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-sm">
                            SmartCare+ helps patients connect with trusted doctors, manage appointments seamlessly, and access emergency healthcare support instantly.
                        </p>

                        {/* Social Links with Premium Glow Effect */}
                        <div className="flex items-center gap-3.5 pt-2">
                            {[
                                { icon: <FaFacebook size={18} />, href: "#", hoverBg: "hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]" },
                                { icon: <FaInstagram size={18} />, href: "#", hoverBg: "hover:bg-pink-600 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(219,39,119,0.4)]" },
                                { icon: <FaTwitter size={18} />, href: "#", hoverBg: "hover:bg-sky-500 hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]" },
                                { icon: <FaLinkedinIn size={18} />, href: "#", hoverBg: "hover:bg-blue-700 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(29,78,216,0.4)]" },
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.href}
                                    className={`w-10 h-10 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 ${social.hoverBg}`}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links / Services (Spans 3 cols) */}
                    <div className="lg:col-span-3 lg:pl-4">
                        <h3 className="text-base font-bold text-slate-100 tracking-wide uppercase mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-emerald-500">
                            Our Services
                        </h3>

                        <ul className="space-y-3.5 text-sm text-slate-400">
                            {[
                                "Online Appointment",
                                "Emergency Support",
                                "Laboratory Service",
                                "Patient Care"
                            ].map((service, index) => (
                                <li key={index} className="group flex items-center gap-1 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                                    <span className="w-0 group-hover:w-1.5 h-[1.5px] bg-emerald-400 transition-all duration-300 rounded-full"></span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Details (Spans 4 cols) */}
                    <div className="lg:col-span-4">
                        <h3 className="text-base font-bold text-slate-100 tracking-wide uppercase mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-sky-500">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-sm text-slate-400">
                            <div className="flex items-start gap-3.5 group cursor-pointer">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                                    <MapPin size={15} />
                                </div>
                                <p className="leading-relaxed pt-0.5 group-hover:text-slate-200 transition-colors">
                                    SmartCare+ Medical Center,<br />
                                    Dhaka, Bangladesh
                                </p>
                            </div>

                            <div className="flex items-center gap-3.5 group cursor-pointer">
                                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all duration-300">
                                    <Phone size={15} />
                                </div>
                                <p className="group-hover:text-slate-200 transition-colors font-medium">+88 1234-567890</p>
                            </div>

                            <div className="flex items-center gap-3.5 group cursor-pointer">
                                <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 text-pink-400 group-hover:bg-pink-500 group-hover:text-slate-950 transition-all duration-300">
                                    <Mail size={15} />
                                </div>
                                <p className="group-hover:text-slate-200 transition-colors font-medium">support@smartcare.com</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar (Copyright & Legal) */}
                <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
                    <p className="text-center sm:text-left tracking-wide">
                        &copy; 2026 <span className="text-slate-400 font-medium">SmartCare+</span>. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-sky-400 hover:underline transition-all duration-300 flex items-center gap-0.5 group">
                            Privacy Policy <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link href="#" className="hover:text-sky-400 hover:underline transition-all duration-300 flex items-center gap-0.5 group">
                            Terms & Conditions <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;