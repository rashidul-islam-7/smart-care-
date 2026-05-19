
import React from 'react';
import Image from 'next/image';
import careImg from "@/assets/auth/loginPageImg.jpg"

const AuthImg = () => {
    return (
        <div>
            <Image
                src={careImg}
                alt="Healthcare"
                fill
                className="object-cover"
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/60 via-cyan-800/30 to-teal-600/20" />
        </div>
    );
};

export default AuthImg;