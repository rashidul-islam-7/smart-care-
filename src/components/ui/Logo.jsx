
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href={"/"}>
                <div className='flex justify-center items-center gap-1 drop-shadow drop-shadow-green-200'>
                    {/* <Image width={200} height={200} src={'/smartCart_logo_1.png'} alt='Smart Care + logo' ></Image> */}
                    <Image width={50} height={50} src={'/logo.png'} alt='Smart Care + logo' ></Image>
                    <h1 className='text-xl md:text-2xl font-semibold text-blue-800'>smart<span className='text-green-500'>Care<span className='text-2xl md:text-3xl bg-linear-to-r
                                     from-red-500 to-green-400 bg-clip-text text-transparent'>+</span></span></h1>
                </div>
            </Link>
        </div>
    );
};

export default Logo;