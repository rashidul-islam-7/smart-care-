import Image from "next/image";
import React from "react";
import { CalendarDays, MapPin, Star, Stethoscope } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const DoctorCard = ({ doctor }) => {

    const { _id, name, specialist, image, experience, availabilityDays, hospital, location, rating } = doctor;

    return (
        <div className="relative overflow-hidden rounded-xl bg-white shadow-sm ">
            {/* Doctor Image */}
            <div className="relative group ">

                {/* Rating */}
                <div className="bg-green-300/40 px-2 rounded-full z-10 absolute top-4 right-4 flex items-center gap-1 text-yellow-500">
                    <span className="font-semibold text-gray-600 text-sm">
                        {rating}
                    </span>
                    <Star size={14} fill="currentColor" />
                </div>

                <div className="relative h-52 overflow-hidden">
                    <Image
                        src={image || "/doctor-avatar.png"}
                        alt="Doctor"
                        fill
                        className="object-center group-hover:scale-105 flex justify-center items-center transition-transform duration-500"
                    />

                    {/* Experience Overlay */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="text-center text-gray-300">
                            <h2 className="text-2xl font-bold">{experience}+ Years</h2>
                            <p className="text-sm text-gray-200">
                                Professional Experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-5 space-y-3  ">

                {/* Doctor Info */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-700">
                        {name}
                    </h2>
                    <p className="flex items-center gap-1 w-fit px-3 py-1 mt-2 text-xs rounded-full bg-sky-100 text-sky-600 font-medium line-clamp-1">
                        <Stethoscope size={14} />
                        {specialist}
                    </p>
                </div>

                {/* Date & Time */}
                <div className="space-y-1 text-sm text-gray-500 line-clamp-1">

                    <div className="flex items-center gap-2">
                        <CalendarDays size={18} className="text-green-600" />Every
                        <span className="text-blue-500" > {availabilityDays.map((day, i) => day.slice()).join(" ,")} </span>
                    </div>

                    {/* <div className="flex items-center gap-2">
                            <Clock3 size={18} className="text-green-600" />
                            <span>10:00 AM - 01:00 PM</span>
                        </div> */}

                    <div className="flex items-center gap-2 ">
                        <MapPin size={18} className="text-green-600" />
                        <span className="line-clamp-1">{hospital}, {location} </span>
                    </div>
                </div>

                {/* CTA Button */}
                <Link href={`/appointments/${_id}`}>
                    <Button icon={<FaArrowRight />}
                        className="w-full inline-flex text-center
                         justify-center mt-2"
                    >
                        View Details
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default DoctorCard;